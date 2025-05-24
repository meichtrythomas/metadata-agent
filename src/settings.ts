import { defineSettings } from '@frontify/platform-app';

export const settings = defineSettings({
    credentials: [
        {
            id: 'openaiApiKey',
            type: 'input',
            label: 'OpenAI API Key',
            defaultValue: 'Enter your OpenAI Key to enable metadata generation',
        },
    ],
});
