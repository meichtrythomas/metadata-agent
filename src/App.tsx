import { appContext, appSettings } from "@frontify/app-bridge-app";
import { useState } from "react";
import {
    Button,
    TextInput,
    FormControl,
    HelperText,
    Box,
    Heading,
    Flex,
    ButtonType,
    FlexAlignItems,
} from '@frontify/fondue';
import { Checkbox, Table } from '@frontify/fondue-components';

// Add type for context
type AppContext = {
    appBridge: {
        api: (params: { name: string; payload: unknown }) => Promise<unknown>;
    };
    parentId?: string;
};

// Add OpenAI response types
interface OpenAIChoice {
    message: {
        content: string;
    };
}

interface OpenAIResponse {
    choices?: OpenAIChoice[];
    error?: {
        message: string;
    };
}

// Add Frontify API response types
interface RawMetadataField {
    fieldName?: string;
    name?: string;
    fieldType?: string;
    type?: string;
    options?: Array<{ value: string } | string>;
}

// 1. Define a TypeScript type for your app settings
type AppSettings = {
    openaiApiKey: string; // Must match "id" from settings.ts
};

// Add this interface near the top of your file
interface MetadataField {
    fieldName: string;
    fieldType: string;
    options?: string[];
}

// Add new interfaces for selected and required states
interface SelectedMetadataFields {
    [key: string]: boolean;
}

interface RequiredMetadataFields {
    [key: string]: boolean;
}

// Add this interface for the GraphQL response
interface GraphQLResponse {
    errors?: Array<{ message: string }>;
    data?: any;
}

export const App = () => {
    // 2. Access the context (optional) and app settings
    const context = appContext() as unknown as AppContext;
    const [settings] = appSettings<AppSettings>();
    const openAiApiKey = settings.openaiApiKey || "";

    // 3. Form data for your company's metadata usage
    const [formData, setFormData] = useState({
        companyName: "",
        industry: "",
        assetTypes: "",
        searchGoals: "",
        multiBrand: "",
        stakeholders: "",
        sophistication: "simple"
    });

    // 4. State for error handling and response data
    const [error, setError] = useState<string | null>(null);
    const [responseData, setResponseData] = useState<MetadataField[] | null>(null);

    // Add new state for loading and success state
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Handle user input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { name: string; value: string } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 5. Handle the OpenAI request on submit
    const handleSubmit = async () => {
        setError(null);
        setResponseData(null);
        setIsLoading(true);
        setIsSuccess(false);

        if (!openAiApiKey) {
            setError("OpenAI key not set in App Settings.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${openAiApiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini-2024-07-18",
                    messages: [
                        { 
                            role: "system", 
                            content: `Role and Goal
You are an expert in Digital Asset Management (DAM) with extensive experience in designing metadata schemas for businesses. Your objective is to propose a robust metadata structure for a company that needs to manage a large volume of digital assets (images, videos, and documents) within the Frontify DAM platform. 

--

Metadata Requirements

Here is an overview of the custom metadata options in Frontify: 

PropertyType | Expected Input | Output Type
-------------|---------------|------------
Number       | number: 12    | number: 12
Text         | string (65): "This is a string" | string: "This is a string"
LongText     | string: "This is a string" | string: "This is a string"
Select       | optionId: "ey[...]" | option: {optionId: "ey[...]", value: string}
Multiselect  | Array<optionId>: ["ey[...]", "ey[...]"] | [ {optionId: "ey[...]", value: string}, {optionId: "ey[...]", value: string} ]
Date         | string: YYYY-MM-DD Ex: "2022-10-29" | string: YYYY-MM-DD Ex: "2022-10-29"
Url          | string: https://example.com | string: "https://example.com"

Sophistication Level: ${
    formData.sophistication === 'simple' 
        ? 'Create a simple metadata structure with only essential fields (5-7 fields maximum). Focus on the most important categorization needs.' 
        : 'Create a comprehensive metadata structure (10-15 fields) with detailed categorization options. Include advanced classification fields and multiple selection options where appropriate.'
}`
                        },
                        { 
                            role: "user", 
                            content: `Business Inputs:

1. Company Name: ${formData.companyName}
2. Industry: ${formData.industry}
3. Asset Types: ${formData.assetTypes}
4. Search and Retrieval Goals: ${formData.searchGoals}
5. Do you have multiple brands and products: ${formData.multiBrand}
6. Main DAM users: ${formData.stakeholders}
7. Metadata Sophistication: ${formData.sophistication}

Metadata exclusion (Important): 
When creating the metadata schema, ignore standard fields like Description, Brand Guidelines Reference, File Type/Format, Usage Rights/Licensing, Creator/Owner, Approval Status, and Expiration or Start Date Fields as these are already standard metadata with Frontify. Only propose custom metadata fields. 

Task:
Propose a Metadata Schema: Recommend a set of custom metadata fields, including data types and examples of controlled vocabularies. Only focus on the field name, the type & if it is multi-select the options.

Output Format:
Provide an array of objects for the custom metadata fields. Return ONLY the JSON array with no additional text or explanation.`
                        }
                    ],
                    temperature: 0.7,
                }),
            });

            const data = await response.json() as OpenAIResponse;
            console.log('OpenAI Response:', data);

            if (response.ok && data.choices) {
                try {
                    let content = data.choices[0].message.content;
                    
                    // Clean up the content by removing markdown code block syntax
                    content = content.replace(/```json\n?/, '').replace(/```$/, '').trim();
                    
                    console.log('Cleaned Content:', content);
                    const jsonContent = JSON.parse(content) as RawMetadataField[];
                    
                    // Validate and transform the response to match our expected format
                    const transformedContent = jsonContent.map((field: RawMetadataField) => ({
                        fieldName: field.fieldName || field.name || '',
                        fieldType: field.fieldType || field.type || '',
                        options: Array.isArray(field.options) 
                            ? field.options.map((opt) => 
                                typeof opt === 'string' ? opt : opt.value
                            )
                            : undefined
                    }));
                    
                    console.log('Transformed Content:', transformedContent);
                    setResponseData(transformedContent);
                } catch (parseError) {
                    console.error('Parse Error:', parseError);
                    setError("Failed to parse OpenAI response as JSON");
                }
            } else {
                console.error('API Error:', data?.error);
                setError(data?.error?.message || "OpenAI returned an unknown error.");
            }
        } catch (err: unknown) {
            console.error('Request Error:', err);
            setError(err instanceof Error ? err.message : "Something went wrong calling OpenAI.");
        } finally {
            setIsLoading(false);
        }
    };

    // Update the ResultsTable component
    const ResultsTable = ({ data }: { data: MetadataField[] }) => {
        const [selectedFields, setSelectedFields] = useState<SelectedMetadataFields>(() => {
            // Initialize all fields as selected
            return data.reduce((acc, field) => ({
                ...acc,
                [field.fieldName]: true
            }), {});
        });

        const [requiredFields, setRequiredFields] = useState<RequiredMetadataFields>(() => {
            // Initialize all fields as not required
            return data.reduce((acc, field) => ({
                ...acc,
                [field.fieldName]: false
            }), {});
        });

        const [isCreating, setIsCreating] = useState(false);
        const [creationError, setCreationError] = useState<string | null>(null);

        const createMetadataFields = async () => {
            setIsCreating(true);
            setCreationError(null);

            const libraryId = context.parentId;

            if (!libraryId) {
                setCreationError("Could not determine the library ID. Please make sure you're running this app from within a library.");
                setIsCreating(false);
                return;
            }

            try {
                // Now create metadata fields for each selected field
                const fieldsToCreate = data.filter(field => selectedFields[field.fieldName]);

                for (const field of fieldsToCreate) {
                    const CREATE_METADATA_PROPERTY = `
                        mutation CreateMetadataProperty($input: CreateCustomMetadataPropertyInput!) {
                            createCustomMetadataProperty(input: $input) {
                                property {
                                    id
                                }
                            }
                        }
                    `;

                    const variables = {
                        input: {
                            parentId: libraryId,
                            name: field.fieldName,
                            type: {
                                name: field.fieldType.toUpperCase(),
                                options: field.options ? field.options.map(option => ({
                                    value: option
                                })) : undefined
                            },
                            isRequired: requiredFields[field.fieldName]
                        }
                    };

                    const response = await context.appBridge.api({
                        name: 'executeGraphQl',
                        payload: { 
                            query: CREATE_METADATA_PROPERTY, 
                            variables 
                        },
                    }) as GraphQLResponse;

                    if (response.errors) {
                        throw new Error(`Failed to create field ${field.fieldName}: ${response.errors[0].message}`);
                    }
                }

                setIsSuccess(true);
            } catch (err) {
                console.error('Creation error:', err);
                setCreationError(err instanceof Error ? err.message : "Failed to create metadata fields");
            } finally {
                setIsCreating(false);
            }
        };

        return (
            <div className="mt-8">
                <Table.Root aria-label="Metadata Suggestions">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Checkbox
                                    value={Object.values(selectedFields).every((v) => v)}
                                    onChange={(e) => {
                                        const newValue = (e.target as HTMLInputElement).checked;
                                        const updated = Object.keys(selectedFields).reduce(
                                            (acc, key) => ({ ...acc, [key]: newValue }),
                                            {},
                                        );
                                        setSelectedFields(updated);
                                    }}
                                    aria-label="Include field"
                                />
                            </Table.HeaderCell>
                            <Table.HeaderCell>Custom Metadata Field Name</Table.HeaderCell>
                            <Table.HeaderCell>Field Type</Table.HeaderCell>
                            <Table.HeaderCell>Options</Table.HeaderCell>
                            <Table.HeaderCell>
                                <Checkbox
                                    value={Object.values(requiredFields).every((v) => v)}
                                    onChange={(e) => {
                                        const newValue = (e.target as HTMLInputElement).checked;
                                        const updated = Object.keys(requiredFields).reduce(
                                            (acc, key) => ({ ...acc, [key]: newValue }),
                                            {},
                                        );
                                        setRequiredFields(updated);
                                    }}
                                    aria-label="Required field"
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map((field, index) => (
                            <Table.Row key={index}>
                                <Table.RowCell>
                                    <Checkbox
                                        value={selectedFields[field.fieldName]}
                                        onChange={(e) =>
                                            setSelectedFields({
                                                ...selectedFields,
                                                [field.fieldName]: (e.target as HTMLInputElement).checked,
                                            })
                                        }
                                        aria-label="Include field"
                                    />
                                </Table.RowCell>
                                <Table.RowCell>{field.fieldName}</Table.RowCell>
                                <Table.RowCell>{field.fieldType}</Table.RowCell>
                                <Table.RowCell>
                                    {field.options ? (
                                        <ul className="list-disc list-inside">
                                            {field.options.map((option: string, idx: number) => (
                                                <li key={idx}>{option}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        '-'
                                    )}
                                </Table.RowCell>
                                <Table.RowCell>
                                    <Checkbox
                                        value={requiredFields[field.fieldName]}
                                        onChange={(e) =>
                                            setRequiredFields({
                                                ...requiredFields,
                                                [field.fieldName]: (e.target as HTMLInputElement).checked,
                                            })
                                        }
                                        aria-label="Required"
                                    />
                                </Table.RowCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>

                {/* Add creation button */}
                <div className="mt-6">
                    {creationError && (
                        <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
                            <strong>Error:</strong> {creationError}
                        </div>
                    )}
                    <Button
                        onClick={createMetadataFields}
                        disabled={isCreating}
                    >
                        {isCreating ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Creating metadata fields...
                            </div>
                        ) : (
                            'Create metadata fields in library'
                        )}
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Fixed header section */}
            <Box className="sticky top-0 z-50 bg-white border-b">
                    <div className="text-center">
                        <Heading size="large" weight="strong">
                            Metadata Generator
                        </Heading>
                    </div>
            </Box>
            {/* Scrollable content section */}
            <Box className="flex-1 bg-mauve-50">
                <Flex direction="row" padding={24}>
                    <div style={{ marginRight: '16px', maxWidth: '32rem', width: '100%' }}>
                        {/* Settings Validation */}
                        {(!settings.openaiApiKey || settings.openaiApiKey === 'Enter your OpenAI Key to enable metadata generation') && (
                            <Box className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                OpenAI API Key is not set. Please configure it in the app settings.
                            </Box>
                        )}
                            {!context.parentId && (
                                <Box className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    Could not determine the library ID. Please make sure you're running this app from within a library.
                                </Box>
                            )}

                            {/* Form content */}
                            <Box className={`bg-white p-8 rounded-lg shadow ${
                                (!settings.openaiApiKey || settings.openaiApiKey === 'Enter your OpenAI Key to enable metadata generation' ||
                                 !context.parentId) ? 'opacity-50 pointer-events-none' : ''
                            }`}>
                                <div className="space-y-6">
                                    <FormControl>
                                        <div className="font-medium mb-1">Company Name</div>
                                        <HelperText text="What's the name of your organization?" />
                                        <TextInput
                                            value={formData.companyName}
                                            onChange={(value) => handleChange({ target: { name: 'companyName', value } })}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <div className="font-medium mb-1">Industry</div>
                                        <HelperText text="Which sector does your company operate in? (e.g., Tech, Healthcare, Retail)" />
                                        <TextInput
                                            value={formData.industry}
                                            onChange={(value) => handleChange({ target: { name: 'industry', value } })}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <div className="font-medium mb-1">Asset Types</div>
                                        <HelperText text="What types of assets will be managed (images, videos, documents, etc.) in this library?" />
                                        <TextInput
                                            value={formData.assetTypes}
                                            onChange={(value) => handleChange({ target: { name: 'assetTypes', value } })}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <div className="font-medium mb-1">Search and Retrieval Goals</div>
                                        <HelperText text="How do users typically search for assets (by campaign, theme, file format, product line, etc.)?" />
                                        <TextInput
                                            value={formData.searchGoals}
                                            onChange={(value) => handleChange({ target: { name: 'searchGoals', value } })}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <div className="font-medium mb-1">Multi-Brand</div>
                                        <HelperText text="Do you have more than one brand? If so, which ones?" />
                                        <TextInput
                                            value={formData.multiBrand}
                                            onChange={(value) => handleChange({ target: { name: 'multiBrand', value } })}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <div className="font-medium mb-1">Key Stakeholders</div>
                                        <HelperText text="Who are the main users of your asset management system?" />
                                        <TextInput
                                            value={formData.stakeholders}
                                            onChange={(value) => handleChange({ target: { name: 'stakeholders', value } })}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <div className="font-medium mb-1">Metadata Sophistication</div>
                                        <HelperText text="Choose the complexity level of your metadata structure" />
                                        <select
                                            value={formData.sophistication}
                                            onChange={(e) => handleChange({ target: { name: 'sophistication', value: e.target.value } })}
                                            className="w-full p-2 border rounded"
                                        >
                                            <option value="simple">Simple (Basic metadata structure)</option>
                                            <option value="advanced">Advanced (Complex metadata with detailed categorization)</option>
                                        </select>
                                    </FormControl>
                                </div>
                            </Box>

                            {/* Submit Button */}
                            <div className="mt-8 mb-6 flex justify-center">
                                <Button
                                    onClick={handleSubmit}
                                    disabled={
                                        !settings.openaiApiKey || settings.openaiApiKey === 'Enter your OpenAI Key to enable metadata generation' ||
                                        !context.parentId
                                    }
                                >
                                    {(!settings.openaiApiKey || settings.openaiApiKey === 'Enter your OpenAI Key to enable metadata generation' ||
                                      !context.parentId) 
                                        ? 'Please configure settings first'
                                        : 'Generate Metadata Fields'
                                    }
                                </Button>
                            </div>

                        </div>
                    {/* Results column */}
                    <Box className="flex-1">
                        <Box className="bg-white shadow-lg rounded-lg p-8">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-12">
                                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                                    <p className="mt-4 text-gray-600 text-lg">Generating metadata fields...</p>
                                </div>
                            ) : isSuccess ? (
                                <div className="text-center">
                                    <div className="mb-6">
                                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">Success!</h2>
                                    <p className="text-gray-600">
                                        Your metadata structure has been successfully implemented in your Frontify library. You can now start using your new metadata fields in your library.
                                    </p>
                                </div>
                            ) : error ? (
                                <div className="p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
                                    <strong>Error:</strong> {error}
                                </div>
                            ) : responseData ? (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Recommended Metadata Fields</h2>
                                    <ResultsTable data={responseData} />
                                </div>
                            ) : null}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </div>
    );
};