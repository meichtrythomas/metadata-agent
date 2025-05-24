```
Project Structure:
├── Box.stories.tsx
├── Button.stories.tsx
├── Checkbox.stories.tsx
├── ColorPicker.stories.tsx
├── ColorPickerInput.stories.tsx
├── Dialog.stories.tsx
├── Divider.stories.tsx
├── Dropdown.stories.tsx
├── Flex.stories.tsx
├── Flyout.stories.tsx
├── Grid.stories.tsx
├── Label.stories.tsx
├── LoadingBar.stories.tsx
├── ScrollArea.stories.tsx
├── Section.stories.tsx
├── SegmentedControl.stories.tsx
├── Select.stories.tsx
├── Slider.stories.tsx
├── Switch.stories.tsx
├── Table.stories.tsx
├── Tabs.stories.tsx
├── TextInput.stories.tsx
├── Tooltip.stories.tsx
├── TooltipContent.stories.tsx
└── codefetch
```

Box.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { DecorativeContent } from '#storybook/components/DecorativeContent';
6 | 
7 | import { Box } from './Box';
8 | 
9 | type Story = StoryObj<typeof Box>;
10 | const meta: Meta<typeof Box> = {
11 |     title: 'Layout/Box',
12 |     component: Box,
13 |     tags: ['autodocs'],
14 |     parameters: {
15 |         status: {
16 |             type: 'released',
17 |         },
18 |     },
19 |     args: {
20 |         width: '100px',
21 |         height: '100px',
22 |     },
23 | };
24 | export default meta;
25 | 
26 | export const Default: Story = {
27 |     render: (args) => {
28 |         return (
29 |             <Box {...args}>
30 |                 <DecorativeContent />
31 |             </Box>
32 |         );
33 |     },
34 | };
35 | 
36 | export const WithSizeToken: Story = {
37 |     args: {
38 |         width: 25,
39 |         height: 25,
40 |     },
41 |     render: (args) => {
42 |         return (
43 |             <Box {...args}>
44 |                 <DecorativeContent />
45 |             </Box>
46 |         );
47 |     },
48 | };
```

Button.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconColorFan, IconIcon } from '@frontify/fondue-icons';
4 | import { action } from '@storybook/addon-actions';
5 | import { type Meta, type StoryObj } from '@storybook/react';
6 | 
7 | import { Button } from './Button';
8 | 
9 | type Story = StoryObj<typeof Button>;
10 | const meta: Meta<typeof Button> = {
11 |     title: 'Components/Button',
12 |     component: Button,
13 |     tags: ['autodocs'],
14 |     parameters: {
15 |         status: {
16 |             type: 'released',
17 |         },
18 |     },
19 |     args: {
20 |         type: 'button',
21 |         variant: 'default',
22 |         emphasis: 'default',
23 |         size: 'medium',
24 |         rounding: 'medium',
25 |         disabled: false,
26 |         hugWidth: true,
27 |         children: 'Button Text',
28 |         aspect: 'default',
29 |         onPress: action('onPress'),
30 |     },
31 | };
32 | export default meta;
33 | 
34 | export const Default: Story = {
35 |     name: 'Icon and Text Label',
36 |     render: (args) => (
37 |         <Button {...args}>
38 |             <IconColorFan size={16} />
39 |             Button Text
40 |         </Button>
41 |     ),
42 | };
43 | 
44 | export const TextLabelOnly: Story = {};
45 | 
46 | export const WithIcon: Story = {
47 |     name: 'Icon Only',
48 |     args: {
49 |         aspect: 'square',
50 |         children: <IconIcon size={20} />,
51 |     },
52 | };
53 | 
54 | export const WithRoundedIcon: Story = {
55 |     name: 'Icon Only Rounded',
56 |     args: {
57 |         rounding: 'full',
58 |         title: 'Icon Only Rounded',
59 |         children: <IconIcon size={20} />,
60 |         aspect: 'square',
61 |     },
62 | };
63 | 
64 | export const WithIconAndLabel: Story = {
65 |     name: 'Icon and Text Label',
66 |     render: (args) => (
67 |         <Button {...args}>
68 |             <IconColorFan size={16} />
69 |             Button Text
70 |         </Button>
71 |     ),
72 | };
```

Checkbox.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { action } from '@storybook/addon-actions';
4 | import { type Meta, type StoryObj } from '@storybook/react';
5 | import { type FormEvent, useState } from 'react';
6 | 
7 | import { Flex } from '../Flex/Flex';
8 | import { Label } from '../Label/Label';
9 | 
10 | import { Checkbox, CheckboxComponent } from './Checkbox';
11 | 
12 | type Story = StoryObj<typeof CheckboxComponent>;
13 | const meta: Meta<typeof CheckboxComponent> = {
14 |     title: 'Components/Checkbox',
15 |     component: CheckboxComponent,
16 |     tags: ['autodocs'],
17 |     parameters: {
18 |         status: {
19 |             type: 'released',
20 |         },
21 |     },
22 |     args: {
23 |         onChange: action('onChange'),
24 |         onBlur: action('onBlur'),
25 |         onFocus: action('onFocus'),
26 |     },
27 |     render: (args) => {
28 |         const [value, setValue] = useState(args.value);
29 | 
30 |         const handleToggle = (event: FormEvent) => {
31 |             action('onChange')(event);
32 |             setValue((prevIsChecked) => (prevIsChecked === 'indeterminate' ? true : !prevIsChecked));
33 |         };
34 | 
35 |         return (
36 |             <div className="tw-flex tw-gap-1.5 tw-items-center">
37 |                 <Checkbox {...args} id="checkbox" aria-labelledby="label" value={value} onChange={handleToggle} />
38 |                 <Label id="label" htmlFor="checkbox">
39 |                     Checkbox
40 |                 </Label>
41 |             </div>
42 |         );
43 |     },
44 | };
45 | export default meta;
46 | 
47 | export const Default: Story = {};
48 | 
49 | export const Indeterminate: Story = {
50 |     args: {
51 |         value: 'indeterminate',
52 |     },
53 | };
54 | 
55 | export const Disabled: Story = {
56 |     args: {
57 |         disabled: true,
58 |     },
59 | };
60 | 
61 | export const Checklist: Story = {
62 |     render: (args) => {
63 |         return (
64 |             <Flex gap="1rem" direction="column">
65 |                 <Flex gap="4px" direction="row">
66 |                     <Checkbox {...args} id="checkbox" aria-labelledby="label" value={true} onChange={() => {}} />
67 |                     <Label id="label" htmlFor="checkbox">
68 |                         Checkbox 1
69 |                     </Label>
70 |                 </Flex>
71 |                 <Flex gap="4px" direction="row">
72 |                     <Checkbox {...args} id="checkbox" aria-labelledby="label" value={false} onChange={() => {}} />
73 |                     <Label id="label" htmlFor="checkbox">
74 |                         Checkbox 2
75 |                     </Label>
76 |                 </Flex>
77 |                 <Flex gap="4px" direction="row">
78 |                     <Checkbox
79 |                         {...args}
80 |                         id="checkbox"
81 |                         aria-labelledby="label"
82 |                         value="indeterminate"
83 |                         onChange={() => {}}
84 |                     />
85 |                     <Label id="label" htmlFor="checkbox">
86 |                         Checkbox 3
87 |                     </Label>
88 |                 </Flex>
89 |             </Flex>
90 |         );
91 |     },
92 | };
```

ColorPicker.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | import { useState } from 'react';
5 | 
6 | import { Button } from '../Button/Button';
7 | import { Flyout } from '../Flyout/Flyout';
8 | 
9 | import { ColorGradientInput } from './ColorGradientInput';
10 | import { ColorPicker, ColorPickerRoot } from './ColorPicker';
11 | import { ColorValueInput } from './ColorValueInput';
12 | 
13 | type Story = StoryObj<typeof meta>;
14 | const meta: Meta<typeof ColorPickerRoot> = {
15 |     component: ColorPickerRoot,
16 |     subcomponents: {
17 |         // @ts-expect-error Storybook has the wrong type for subcomponents
18 |         'ColorPicker.Values': ColorValueInput,
19 |         // @ts-expect-error Storybook has the wrong type for subcomponents
20 |         'ColorPicker.Gradient': ColorGradientInput,
21 |     },
22 |     tags: ['autodocs'],
23 |     parameters: {
24 |         status: {
25 |             type: 'released',
26 |         },
27 |     },
28 |     args: {},
29 | };
30 | export default meta;
31 | 
32 | export const Default: Story = {
33 |     args: {
34 |         currentColor: { red: 230, green: 100, blue: 50, alpha: 0.8 },
35 |     },
36 |     render: (args) => {
37 |         const [currentColor, setCurrentColor] = useState(args.currentColor);
38 |         return (
39 |             <ColorPicker.Root defaultFormat="HEX" currentColor={currentColor} onColorChange={setCurrentColor}>
40 |                 <ColorPicker.Values />
41 |                 <ColorPicker.Gradient />
42 |             </ColorPicker.Root>
43 |         );
44 |     },
45 | };
46 | 
47 | export const WithRgbaDefaultFormat: Story = {
48 |     args: {
49 |         currentColor: { red: 230, green: 100, blue: 50, alpha: 0.8 },
50 |     },
51 |     render: (args) => {
52 |         const [currentColor, setCurrentColor] = useState(args.currentColor);
53 |         return (
54 |             <ColorPicker.Root currentColor={currentColor} onColorChange={setCurrentColor} defaultFormat="RGBA">
55 |                 <ColorPicker.Values />
56 |                 <ColorPicker.Gradient />
57 |             </ColorPicker.Root>
58 |         );
59 |     },
60 | };
61 | 
62 | export const OnlyPicker: Story = {
63 |     args: {
64 |         currentColor: { red: 230, green: 100, blue: 50, alpha: 0.8 },
65 |     },
66 |     render: (args) => {
67 |         const [currentColor, setCurrentColor] = useState(args.currentColor);
68 |         return (
69 |             <ColorPicker.Root currentColor={currentColor} onColorChange={setCurrentColor}>
70 |                 <ColorPicker.Gradient />
71 |             </ColorPicker.Root>
72 |         );
73 |     },
74 | };
75 | 
76 | export const OnlyValues: Story = {
77 |     args: {
78 |         currentColor: { red: 230, green: 100, blue: 50, alpha: 0.8 },
79 |     },
80 |     render: (args) => {
81 |         const [currentColor, setCurrentColor] = useState(args.currentColor);
82 |         return (
83 |             <ColorPicker.Root currentColor={currentColor} onColorChange={setCurrentColor}>
84 |                 <ColorPicker.Values />
85 |             </ColorPicker.Root>
86 |         );
87 |     },
88 | };
89 | 
90 | export const InFlyout: Story = {
91 |     args: {},
92 |     render: (args) => {
93 |         const [savedColor, setSavedColor] = useState(args.currentColor);
94 |         const [currentColor, setCurrentColor] = useState(args.currentColor);
95 |         const [isOpen, setIsOpen] = useState(true);
96 |         return (
97 |             <Flyout.Root open={isOpen} onOpenChange={setIsOpen}>
98 |                 <Flyout.Trigger>
99 |                     <ColorPicker.Input
100 |                         aria-label="Color Picker"
101 |                         currentColor={currentColor}
102 |                         onClear={() => {
103 |                             setCurrentColor(undefined);
104 |                         }}
105 |                     />
106 |                 </Flyout.Trigger>
107 |                 <Flyout.Content maxWidth="600px">
108 |                     <Flyout.Body>
109 |                         <div className="tw-p-2 md:tw-w-[450px]">
110 |                             <ColorPicker.Root
111 |                                 defaultFormat="RGBA"
112 |                                 currentColor={currentColor}
113 |                                 onColorChange={setCurrentColor}
114 |                             >
115 |                                 <ColorPicker.Values />
116 |                                 <ColorPicker.Gradient />
117 |                             </ColorPicker.Root>
118 |                         </div>
119 |                     </Flyout.Body>
120 |                     <Flyout.Footer>
121 |                         <Button
122 |                             emphasis="default"
123 |                             onPress={() => {
124 |                                 setIsOpen(false);
125 |                                 setCurrentColor(savedColor);
126 |                             }}
127 |                         >
128 |                             Cancel
129 |                         </Button>
130 |                         <Button
131 |                             onPress={() => {
132 |                                 setIsOpen(false);
133 |                                 setSavedColor(currentColor);
134 |                             }}
135 |                         >
136 |                             Save
137 |                         </Button>
138 |                     </Flyout.Footer>
139 |                 </Flyout.Content>
140 |             </Flyout.Root>
141 |         );
142 |     },
143 | };
```

ColorPickerInput.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { ColorPicker } from './ColorPicker';
6 | import { ColorPickerInput } from './ColorPickerInput';
7 | 
8 | type Story = StoryObj<typeof meta>;
9 | const meta: Meta<typeof ColorPickerInput> = {
10 |     title: 'Components/ColorPicker/Input',
11 |     component: ColorPickerInput,
12 |     tags: ['autodocs'],
13 |     parameters: {
14 |         status: {
15 |             type: 'released',
16 |         },
17 |     },
18 |     args: {},
19 | };
20 | export default meta;
21 | 
22 | export const Default: Story = {
23 |     args: {
24 |         currentColor: { red: 230, green: 100, blue: 50, alpha: 0.8, name: 'custom-color' },
25 |     },
26 |     render: (args) => {
27 |         return <ColorPicker.Input {...args} onClear={() => {}} />;
28 |     },
29 | };
30 | 
31 | export const Empty: Story = {
32 |     args: {},
33 |     render: (args) => {
34 |         return <ColorPicker.Input {...args} onClear={() => {}} />;
35 |     },
36 | };
```

Dialog.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | import { forwardRef, useState } from 'react';
5 | 
6 | import { Button } from '../Button/Button';
7 | import { Flex } from '../Flex/Flex';
8 | import { Flyout } from '../Flyout/Flyout';
9 | import { TextInput } from '../TextInput/TextInput';
10 | import { Tooltip } from '../Tooltip/Tooltip';
11 | 
12 | import {
13 |     Dialog,
14 |     DialogBody,
15 |     DialogClose,
16 |     DialogContent,
17 |     DialogDescription,
18 |     DialogHeader,
19 |     DialogRoot,
20 |     DialogSideContent,
21 |     DialogTitle,
22 |     DialogTrigger,
23 | } from './Dialog';
24 | 
25 | type Story = StoryObj<typeof meta>;
26 | const meta: Meta<typeof DialogContent> = {
27 |     component: DialogContent,
28 |     subcomponents: {
29 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
30 |         'Dialog.Root': DialogRoot,
31 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
32 |         'Dialog.Trigger': DialogTrigger,
33 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
34 |         'Dialog.SideContent': DialogSideContent,
35 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
36 |         'Dialog.Header': DialogHeader,
37 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
38 |         'Dialog.Body': DialogBody,
39 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
40 |         'Dialog.Title': DialogTitle,
41 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
42 |         'Dialog.Description': DialogDescription,
43 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
44 |         'Dialog.Close': DialogClose,
45 |     },
46 |     tags: ['autodocs'],
47 |     parameters: {
48 |         status: {
49 |             type: 'released',
50 |         },
51 |     },
52 |     args: {},
53 |     render: (args) => {
54 |         return (
55 |             <Dialog.Root>
56 |                 <Dialog.Trigger>
57 |                     <Button>Open dialog</Button>
58 |                 </Dialog.Trigger>
59 |                 <Dialog.Content {...args}>
60 |                     <Dialog.SideContent>
61 |                         <div className="tw-bg-box-positive-strong tw-h-full tw-w-full"></div>
62 |                     </Dialog.SideContent>
63 |                     <Dialog.Header>
64 |                         <Dialog.Title>Header</Dialog.Title>
65 |                     </Dialog.Header>
66 |                     <Dialog.Body {...args} />
67 |                     <Dialog.Footer>
68 |                         <Button emphasis="default">Cancel</Button>
69 |                         <Button>Submit</Button>
70 |                     </Dialog.Footer>
71 |                 </Dialog.Content>
72 |             </Dialog.Root>
73 |         );
74 |     },
75 | };
76 | export default meta;
77 | 
78 | export const WithFullLayout: Story = {
79 |     args: {
80 |         children: 'I am a dialog content',
81 |     },
82 | };
83 | 
84 | export const WithHeader: Story = {
85 |     args: {
86 |         children: 'I am a dialog content',
87 |     },
88 |     render: (args) => {
89 |         return (
90 |             <Dialog.Root>
91 |                 <Dialog.Trigger>
92 |                     <Button>Open dialog</Button>
93 |                 </Dialog.Trigger>
94 |                 <Dialog.Content {...args}>
95 |                     <Dialog.Header>
96 |                         <Dialog.Title>Header</Dialog.Title>
97 |                     </Dialog.Header>
98 |                     <Dialog.Body {...args} />
99 |                 </Dialog.Content>
100 |             </Dialog.Root>
101 |         );
102 |     },
103 | };
104 | 
105 | export const WithCloseButton: Story = {
106 |     args: {
107 |         children: 'I am a dialog content',
108 |     },
109 |     render: (args) => {
110 |         return (
111 |             <Dialog.Root>
112 |                 <Dialog.Trigger>
113 |                     <Button>Open dialog</Button>
114 |                 </Dialog.Trigger>
115 |                 <Dialog.Content {...args}>
116 |                     <Dialog.Header showCloseButton>
117 |                         <Dialog.Title>Header</Dialog.Title>
118 |                     </Dialog.Header>
119 |                     <Dialog.Body {...args} />
120 |                 </Dialog.Content>
121 |             </Dialog.Root>
122 |         );
123 |     },
124 | };
125 | 
126 | export const WithFooter: Story = {
127 |     args: {
128 |         children: 'I am a dialog content',
129 |     },
130 |     render: (args) => {
131 |         return (
132 |             <Dialog.Root>
133 |                 <Dialog.Trigger>
134 |                     <Button>Open dialog</Button>
135 |                 </Dialog.Trigger>
136 |                 <Dialog.Content {...args}>
137 |                     <Dialog.Body {...args} />
138 |                     <Dialog.Footer>
139 |                         <Button emphasis="default">Cancel</Button>
140 |                         <Button>Submit</Button>
141 |                     </Dialog.Footer>
142 |                 </Dialog.Content>
143 |             </Dialog.Root>
144 |         );
145 |     },
146 | };
147 | 
148 | export const WithSideContent: Story = {
149 |     args: {
150 |         children: 'I am a dialog content',
151 |     },
152 |     render: (args) => {
153 |         return (
154 |             <Dialog.Root>
155 |                 <Dialog.Trigger>
156 |                     <Button>Open dialog</Button>
157 |                 </Dialog.Trigger>
158 |                 <Dialog.Content {...args}>
159 |                     <Dialog.SideContent>
160 |                         <div className="tw-bg-box-positive-strong tw-h-full tw-min-w-40"></div>
161 |                     </Dialog.SideContent>
162 |                     <Dialog.Body {...args} />
163 |                 </Dialog.Content>
164 |             </Dialog.Root>
165 |         );
166 |     },
167 | };
168 | 
169 | export const WithUnderlay: Story = {
170 |     args: {
171 |         children: 'I am a dialog content',
172 |         showUnderlay: true,
173 |     },
174 |     render: (args) => {
175 |         return (
176 |             <Dialog.Root>
177 |                 <Dialog.Trigger>
178 |                     <Button>Open dialog</Button>
179 |                 </Dialog.Trigger>
180 |                 <Dialog.Content {...args}>
181 |                     <Dialog.Header>
182 |                         <Dialog.Title>Header</Dialog.Title>
183 |                     </Dialog.Header>
184 |                     <Dialog.Body {...args} />
185 |                 </Dialog.Content>
186 |             </Dialog.Root>
187 |         );
188 |     },
189 | };
190 | 
191 | export const WithLongText: Story = {
192 |     args: {
193 |         children:
194 |             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Eu lobortis elementum nibh tellus molestie nunc non blandit. Massa tincidunt nunc pulvinar sapien et ligula. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Facilisis gravida neque convallis a cras semper auctor neque vitae. Urna porttitor rhoncus dolor purus non enim. A iaculis at erat pellentesque adipiscing commodo. Tristique magna sit amet purus gravida quis. Magna ac placerat vestibulum lectus mauris ultrices eros. Libero volutpat sed cras ornare arcu dui. Imperdiet sed euismod nisi porta lorem mollis aliquam. Odio pellentesque diam volutpat commodo. Varius vel pharetra vel turpis nunc. Justo nec ultrices dui sapien eget mi proin sed. Consectetur adipiscing elit ut aliquam. Arcu dictum varius duis at consectetur lorem. Pharetra diam sit amet nisl. Odio ut sem nulla pharetra diam sit. Nam aliquam sem et tortor consequat id. Egestas maecenas pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur. Sagittis purus sit amet volutpat consequat mauris nunc. Eu nisl nunc mi ipsum faucibus. Pretium viverra suspendisse potenti nullam ac. Enim neque volutpat ac tincidunt vitae semper. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Maecenas accumsan lacus vel facilisis volutpat est. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Facilisis sed odio morbi quis commodo. Aliquam sem et tortor consequat id porta nibh venenatis cras. Adipiscing at in tellus integer feugiat scelerisque. Netus et malesuada fames ac turpis egestas sed tempus. Eget mauris pharetra et ultrices.',
195 |     },
196 |     render: (args) => {
197 |         return (
198 |             <Dialog.Root>
199 |                 <Dialog.Trigger>
200 |                     <Button>Open dialog</Button>
201 |                 </Dialog.Trigger>
202 |                 <Dialog.Content {...args}>
203 |                     <Dialog.SideContent>
204 |                         <div className="tw-bg-box-positive-strong tw-h-full tw-min-w-40"></div>
205 |                     </Dialog.SideContent>
206 |                     <Dialog.Header>
207 |                         <Dialog.Title>Header</Dialog.Title>
208 |                     </Dialog.Header>
209 |                     <Dialog.Body {...args} />
210 |                     <Dialog.Footer>
211 |                         <Button emphasis="default">Cancel</Button>
212 |                         <Button>Submit</Button>
213 |                     </Dialog.Footer>
214 |                 </Dialog.Content>
215 |             </Dialog.Root>
216 |         );
217 |     },
218 | };
219 | 
220 | export const WithCustomElementForClose: Story = {
221 |     args: {
222 |         children: 'I am a dialog content',
223 |     },
224 |     render: (args) => {
225 |         return (
226 |             <Dialog.Root>
227 |                 <Dialog.Trigger>
228 |                     <Button>Open dialog</Button>
229 |                 </Dialog.Trigger>
230 |                 <Dialog.Content {...args}>
231 |                     <Dialog.SideContent>
232 |                         <div className="tw-bg-box-positive-strong tw-h-full tw-min-w-40"></div>
233 |                     </Dialog.SideContent>
234 |                     <Dialog.Header>
235 |                         <Dialog.Title asChild>
236 |                             <h2>Dialog Header</h2>
237 |                         </Dialog.Title>
238 |                     </Dialog.Header>
239 |                     <Dialog.Body {...args} />
240 |                     <Dialog.Footer>
241 |                         <Dialog.Close>
242 |                             <Button emphasis="default">Cancel</Button>
243 |                         </Dialog.Close>
244 |                         <Button>Submit</Button>
245 |                     </Dialog.Footer>
246 |                 </Dialog.Content>
247 |             </Dialog.Root>
248 |         );
249 |     },
250 | };
251 | 
252 | export const WithAnnouncedDescription: Story = {
253 |     args: {
254 |         children: 'I am a dialog content',
255 |     },
256 |     render: (args) => {
257 |         return (
258 |             <Dialog.Root>
259 |                 <Dialog.Trigger>
260 |                     <Button>Open dialog</Button>
261 |                 </Dialog.Trigger>
262 |                 <Dialog.Content {...args}>
263 |                     <Dialog.SideContent>
264 |                         <div className="tw-bg-box-positive-strong tw-h-full tw-min-w-40"></div>
265 |                     </Dialog.SideContent>
266 |                     <Dialog.Header>
267 |                         <Dialog.Title>Dialog Header</Dialog.Title>
268 |                     </Dialog.Header>
269 |                     <Dialog.Body>
270 |                         <Dialog.Description>{args.children}</Dialog.Description>
271 |                     </Dialog.Body>
272 |                     <Dialog.Footer>
273 |                         <Button emphasis="default">Cancel</Button>
274 |                         <Button>Submit</Button>
275 |                     </Dialog.Footer>
276 |                 </Dialog.Content>
277 |             </Dialog.Root>
278 |         );
279 |     },
280 | };
281 | 
282 | export const WithCustomElementAnnouncements: Story = {
283 |     args: {
284 |         children:
285 |             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Eu lobortis elementum nibh tellus molestie nunc non blandit. Massa tincidunt nunc pulvinar sapien et ligula. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Facilisis gravida neque convallis a cras semper auctor neque vitae. Urna porttitor rhoncus dolor purus non enim. A iaculis at erat pellentesque adipiscing commodo. Tristique magna sit amet purus gravida quis. Magna ac placerat vestibulum lectus mauris ultrices eros. Libero volutpat sed cras ornare arcu dui. Imperdiet sed euismod nisi porta lorem mollis aliquam. Odio pellentesque diam volutpat commodo. Varius vel pharetra vel turpis nunc. Justo nec ultrices dui sapien eget mi proin sed. Consectetur adipiscing elit ut aliquam. Arcu dictum varius duis at consectetur lorem. Pharetra diam sit amet nisl. Odio ut sem nulla pharetra diam sit. Nam aliquam sem et tortor consequat id. Egestas maecenas pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur. Sagittis purus sit amet volutpat consequat mauris nunc. Eu nisl nunc mi ipsum faucibus. Pretium viverra suspendisse potenti nullam ac. Enim neque volutpat ac tincidunt vitae semper. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Maecenas accumsan lacus vel facilisis volutpat est. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Facilisis sed odio morbi quis commodo. Aliquam sem et tortor consequat id porta nibh venenatis cras. Adipiscing at in tellus integer feugiat scelerisque. Netus et malesuada fames ac turpis egestas sed tempus. Eget mauris pharetra et ultrices.',
286 |     },
287 |     render: (args) => {
288 |         return (
289 |             <Dialog.Root>
290 |                 <Dialog.Trigger>
291 |                     <Button>Open dialog</Button>
292 |                 </Dialog.Trigger>
293 |                 <Dialog.Content {...args}>
294 |                     <Dialog.SideContent>
295 |                         <div className="tw-bg-box-positive-strong tw-h-full tw-min-w-40"></div>
296 |                     </Dialog.SideContent>
297 |                     <Dialog.Header>
298 |                         <Dialog.Title asChild>
299 |                             <h2>Dialog Header</h2>
300 |                         </Dialog.Title>
301 |                     </Dialog.Header>
302 |                     <Dialog.Body>
303 |                         <Dialog.Description asChild>
304 |                             <p>{args.children}</p>
305 |                         </Dialog.Description>
306 |                     </Dialog.Body>
307 |                     <Dialog.Footer>
308 |                         <Button emphasis="default">Cancel</Button>
309 |                         <Button>Submit</Button>
310 |                     </Dialog.Footer>
311 |                 </Dialog.Content>
312 |             </Dialog.Root>
313 |         );
314 |     },
315 | };
316 | 
317 | export const WithFocusableContent: Story = {
318 |     args: {
319 |         children: 'Hello World',
320 |     },
321 |     render: (args) => {
322 |         return (
323 |             <Dialog.Root>
324 |                 <Dialog.Trigger>
325 |                     <Button>Open flyout</Button>
326 |                 </Dialog.Trigger>
327 |                 <Dialog.Content {...args}>
328 |                     <Dialog.Header>Header</Dialog.Header>
329 |                     <Dialog.Body {...args}>
330 |                         <TextInput />
331 |                         <TextInput />
332 |                         <TextInput />
333 |                     </Dialog.Body>
334 |                 </Dialog.Content>
335 |             </Dialog.Root>
336 |         );
337 |     },
338 | };
339 | 
340 | export const WithNoPadding: Story = {
341 |     render: (args) => {
342 |         return (
343 |             <Dialog.Root>
344 |                 <Dialog.Trigger>
345 |                     <Button>Open dialog</Button>
346 |                 </Dialog.Trigger>
347 |                 <Dialog.Content {...args}>
348 |                     <Dialog.Header padding="none">
349 |                         <Flex justify="space-between" align="center" width="100%" pr="1rem">
350 |                             <Dialog.Title>Header</Dialog.Title>
351 |                             <Button
352 |                                 emphasis="default"
353 |                                 onPress={() => {
354 |                                     alert('Button in the header clicked');
355 |                                 }}
356 |                             >
357 |                                 Button in the header
358 |                             </Button>
359 |                         </Flex>
360 |                     </Dialog.Header>
361 |                     <Dialog.Body padding="none">None</Dialog.Body>
362 |                     <Dialog.Footer padding="none">
363 |                         <Button emphasis="default">Cancel</Button>
364 |                         <Button>Submit</Button>
365 |                     </Dialog.Footer>
366 |                 </Dialog.Content>
367 |             </Dialog.Root>
368 |         );
369 |     },
370 | };
371 | 
372 | export const WithTightPadding: Story = {
373 |     render: (args) => {
374 |         return (
375 |             <Dialog.Root>
376 |                 <Dialog.Trigger>
377 |                     <Button>Open dialog</Button>
378 |                 </Dialog.Trigger>
379 |                 <Dialog.Content {...args}>
380 |                     <Dialog.Header padding="tight">
381 |                         <Flex justify="space-between" align="center" width="100%" pr="1rem">
382 |                             <Dialog.Title>Header</Dialog.Title>
383 |                             <Button
384 |                                 emphasis="default"
385 |                                 onPress={() => {
386 |                                     alert('Button in the header clicked');
387 |                                 }}
388 |                             >
389 |                                 Button in the header
390 |                             </Button>
391 |                         </Flex>
392 |                     </Dialog.Header>
393 |                     <Dialog.Body padding="tight">Tight</Dialog.Body>
394 |                     <Dialog.Footer padding="tight">
395 |                         <Button emphasis="default">Cancel</Button>
396 |                         <Button>Submit</Button>
397 |                     </Dialog.Footer>
398 |                 </Dialog.Content>
399 |             </Dialog.Root>
400 |         );
401 |     },
402 | };
403 | 
404 | export const WithCompactPadding: Story = {
405 |     render: (args) => {
406 |         return (
407 |             <Dialog.Root>
408 |                 <Dialog.Trigger>
409 |                     <Button>Open dialog</Button>
410 |                 </Dialog.Trigger>
411 |                 <Dialog.Content {...args}>
412 |                     <Dialog.Header padding="compact">
413 |                         <Flex justify="space-between" align="center" width="100%" pr="1rem">
414 |                             <Dialog.Title>Header</Dialog.Title>
415 |                             <Button
416 |                                 emphasis="default"
417 |                                 onPress={() => {
418 |                                     alert('Button in the header clicked');
419 |                                 }}
420 |                             >
421 |                                 Button in the header
422 |                             </Button>
423 |                         </Flex>
424 |                     </Dialog.Header>
425 |                     <Dialog.Body padding="compact">Compact</Dialog.Body>
426 |                     <Dialog.Footer padding="compact">
427 |                         <Button emphasis="default">Cancel</Button>
428 |                         <Button>Submit</Button>
429 |                     </Dialog.Footer>
430 |                 </Dialog.Content>
431 |             </Dialog.Root>
432 |         );
433 |     },
434 | };
435 | 
436 | export const WithComfortablePadding: Story = {
437 |     render: (args) => {
438 |         return (
439 |             <Dialog.Root>
440 |                 <Dialog.Trigger>
441 |                     <Button>Open dialog</Button>
442 |                 </Dialog.Trigger>
443 |                 <Dialog.Content {...args}>
444 |                     <Dialog.Header padding="comfortable">
445 |                         <Flex justify="space-between" align="center" width="100%" pr="1rem">
446 |                             <Dialog.Title>Header</Dialog.Title>
447 |                             <Button
448 |                                 emphasis="default"
449 |                                 onPress={() => {
450 |                                     alert('Button in the header clicked');
451 |                                 }}
452 |                             >
453 |                                 Button in the header
454 |                             </Button>
455 |                         </Flex>
456 |                     </Dialog.Header>
457 |                     <Dialog.Body padding="comfortable">Confortable</Dialog.Body>
458 |                     <Dialog.Footer padding="comfortable">
459 |                         <Button emphasis="default">Cancel</Button>
460 |                         <Button>Submit</Button>
461 |                     </Dialog.Footer>
462 |                 </Dialog.Content>
463 |             </Dialog.Root>
464 |         );
465 |     },
466 | };
467 | 
468 | export const WithSpaciousPadding: Story = {
469 |     render: (args) => {
470 |         return (
471 |             <Dialog.Root>
472 |                 <Dialog.Trigger>
473 |                     <Button>Open dialog</Button>
474 |                 </Dialog.Trigger>
475 |                 <Dialog.Content {...args}>
476 |                     <Dialog.Header padding="spacious">
477 |                         <Flex justify="space-between" align="center" width="100%" pr="1rem">
478 |                             <Dialog.Title>Header</Dialog.Title>
479 |                             <Button
480 |                                 emphasis="default"
481 |                                 onPress={() => {
482 |                                     alert('Button in the header clicked');
483 |                                 }}
484 |                             >
485 |                                 Button in the header
486 |                             </Button>
487 |                         </Flex>
488 |                     </Dialog.Header>
489 |                     <Dialog.Body padding="spacious">Spacious</Dialog.Body>
490 |                     <Dialog.Footer padding="spacious">
491 |                         <Button emphasis="default">Cancel</Button>
492 |                         <Button>Submit</Button>
493 |                     </Dialog.Footer>
494 |                 </Dialog.Content>
495 |             </Dialog.Root>
496 |         );
497 |     },
498 | };
499 | 
500 | export const TopAligned: Story = {
501 |     args: {
502 |         verticalAlign: 'top',
503 |     },
504 | };
505 | 
506 | export const MobileView: Story = {
507 |     parameters: {
508 |         viewport: {
509 |             viewports: {
510 |                 mobile: {
511 |                     name: 'Mobile',
512 |                     styles: {
513 |                         width: '375px',
514 |                         height: '667px',
515 |                     },
516 |                 },
517 |             },
518 |             defaultViewport: 'mobile',
519 |         },
520 |     },
521 |     args: {
522 |         children: 'Hello World',
523 |     },
524 | };
525 | 
526 | export const WithoutBorders: Story = {
527 |     args: {
528 |         children: 'I am a dialog content',
529 |     },
530 |     render: (args) => {
531 |         return (
532 |             <Dialog.Root>
533 |                 <Dialog.Trigger>
534 |                     <Button>Open dialog</Button>
535 |                 </Dialog.Trigger>
536 |                 <Dialog.Content {...args}>
537 |                     <Dialog.Header showBorder={false}>
538 |                         <Dialog.Title>Header</Dialog.Title>
539 |                     </Dialog.Header>
540 |                     <Dialog.Body {...args} />
541 |                     <Dialog.Footer showBorder={false}>
542 |                         <Button emphasis="default">Cancel</Button>
543 |                         <Button>Submit</Button>
544 |                     </Dialog.Footer>
545 |                 </Dialog.Content>
546 |             </Dialog.Root>
547 |         );
548 |     },
549 | };
550 | 
551 | export const ControlledComponent: Story = {
552 |     args: {
553 |         children: 'I am a dialog content',
554 |     },
555 |     render: (args) => {
556 |         const [isDialogOpen, setIsDialogOpen] = useState(false);
557 |         return (
558 |             <Dialog.Root
559 |                 open={isDialogOpen}
560 |                 onOpenChange={(state) => {
561 |                     setIsDialogOpen(state);
562 |                 }}
563 |             >
564 |                 <Dialog.Trigger>
565 |                     <Button>Open dialog</Button>
566 |                 </Dialog.Trigger>
567 |                 <Dialog.Content {...args}>
568 |                     <Dialog.Header>
569 |                         <Dialog.Title>Header</Dialog.Title>
570 |                     </Dialog.Header>
571 |                     <Dialog.Body {...args} />
572 |                 </Dialog.Content>
573 |             </Dialog.Root>
574 |         );
575 |     },
576 | };
577 | 
578 | export const WithFlyoutAndTooltip: Story = {
579 |     render: (args) => {
580 |         const ButtonWithTooltip = forwardRef<HTMLButtonElement | null, { text: string; tooltipText: string }>(
581 |             ({ text, tooltipText }, ref) => {
582 |                 return (
583 |                     <Tooltip.Root>
584 |                         <Tooltip.Trigger>
585 |                             <div>
586 |                                 <Flyout.Trigger>
587 |                                     <Button ref={ref}>{text}</Button>
588 |                                 </Flyout.Trigger>
589 |                             </div>
590 |                         </Tooltip.Trigger>
591 |                         <Tooltip.Content side="left">{tooltipText}</Tooltip.Content>
592 |                     </Tooltip.Root>
593 |                 );
594 |             },
595 |         );
596 |         ButtonWithTooltip.displayName = 'ButtonWithTooltip';
597 | 
598 |         return (
599 |             <Dialog.Root>
600 |                 <Dialog.Trigger>
601 |                     <Button>Open dialog</Button>
602 |                 </Dialog.Trigger>
603 |                 <Dialog.Content {...args} showUnderlay>
604 |                     <Dialog.Body>
605 |                         <Flex direction="column" gap="8px" align="flex-start">
606 |                             <Flyout.Root>
607 |                                 <Flyout.Trigger>
608 |                                     <Button>Open flyout</Button>
609 |                                 </Flyout.Trigger>
610 |                                 <Flyout.Content>
611 |                                     <Flyout.Header>Header</Flyout.Header>
612 |                                     <Flyout.Body>I am a flyout</Flyout.Body>
613 |                                 </Flyout.Content>
614 |                             </Flyout.Root>
615 | 
616 |                             <Tooltip.Root>
617 |                                 <Tooltip.Trigger>
618 |                                     <Button>I am a tooltip, hover me</Button>
619 |                                 </Tooltip.Trigger>
620 |                                 <Tooltip.Content side="left">Tooltip content</Tooltip.Content>
621 |                             </Tooltip.Root>
622 | 
623 |                             <Flyout.Root>
624 |                                 <ButtonWithTooltip
625 |                                     text="Open flyout (and I am a tooltip too)"
626 |                                     tooltipText="Tooltip text"
627 |                                 />
628 |                                 <Flyout.Content>
629 |                                     <Flyout.Header>Header</Flyout.Header>
630 |                                     <Flyout.Body>I am a flyout</Flyout.Body>
631 |                                 </Flyout.Content>
632 |                             </Flyout.Root>
633 |                         </Flex>
634 |                     </Dialog.Body>
635 | 
636 |                     <Dialog.Footer>
637 |                         <Button emphasis="default">Cancel</Button>
638 |                         <Button>Submit</Button>
639 |                     </Dialog.Footer>
640 |                 </Dialog.Content>
641 |             </Dialog.Root>
642 |         );
643 |     },
644 | };
645 | 
646 | export const WithButtonInTheHeader: Story = {
647 |     render: (args) => {
648 |         return (
649 |             <Dialog.Root>
650 |                 <Dialog.Trigger>
651 |                     <Button>Open dialog</Button>
652 |                 </Dialog.Trigger>
653 |                 <Dialog.Content>
654 |                     <Dialog.Header>
655 |                         <Flex justify="space-between" align="center" width="100%" pr="1rem">
656 |                             <Dialog.Title>Header</Dialog.Title>
657 |                             <Button
658 |                                 emphasis="default"
659 |                                 onPress={() => {
660 |                                     alert('Button in the header clicked');
661 |                                 }}
662 |                             >
663 |                                 Button in the header
664 |                             </Button>
665 |                         </Flex>
666 |                     </Dialog.Header>
667 |                     <Dialog.Body {...args} />
668 |                     <Dialog.Footer>
669 |                         <Button emphasis="default">Cancel</Button>
670 |                         <Button>Submit</Button>
671 |                     </Dialog.Footer>
672 |                 </Dialog.Content>
673 |             </Dialog.Root>
674 |         );
675 |     },
676 | };
677 | 
678 | export const WithTooltip: Story = {
679 |     args: {
680 |         children: 'I am a dialog content',
681 |     },
682 |     render: (args) => (
683 |         <Dialog.Root>
684 |             <Tooltip.Root>
685 |                 <Tooltip.Trigger asChild>
686 |                     <Dialog.Trigger asChild>
687 |                         <Button>Trigger</Button>
688 |                     </Dialog.Trigger>
689 |                 </Tooltip.Trigger>
690 |                 <Tooltip.Content>Dropdown tooltip</Tooltip.Content>
691 |             </Tooltip.Root>
692 |             <Dialog.Content>
693 |                 <Dialog.Body {...args} />
694 |             </Dialog.Content>
695 |         </Dialog.Root>
696 |     ),
697 | };
```

Divider.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { Divider } from './Divider';
6 | 
7 | type Story = StoryObj<typeof Divider>;
8 | const meta: Meta<typeof Divider> = {
9 |     title: 'Components/Divider',
10 |     component: Divider,
11 |     tags: ['autodocs'],
12 |     args: {
13 |         color: 'default',
14 |         variant: 'solid',
15 |         padding: 'medium',
16 |         direction: 'horizontal',
17 |     },
18 |     parameters: {
19 |         status: {
20 |             type: 'released',
21 |         },
22 |     },
23 | };
24 | export default meta;
25 | 
26 | export const Primary: Story = {
27 |     args: {},
28 | };
29 | 
30 | export const CustomColor: Story = {
31 |     args: {
32 |         color: 'strong',
33 |     },
34 | };
35 | 
36 | export const CustomStyle: Story = {
37 |     args: {
38 |         variant: 'dashed',
39 |     },
40 | };
41 | 
42 | export const CustomHeight: Story = {
43 |     args: {
44 |         padding: 'large',
45 |     },
46 | };
47 | 
48 | export const Vertical: Story = {
49 |     args: {
50 |         direction: 'vertical',
51 |     },
52 |     decorators: [
53 |         (Story) => (
54 |             <div className="tw-h-8">
55 |                 <Story />
56 |             </div>
57 |         ),
58 |     ],
59 | };
```

Dropdown.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconIcon } from '@frontify/fondue-icons';
4 | import { type Meta, type StoryObj } from '@storybook/react';
5 | import { useState } from 'react';
6 | 
7 | import { Button } from '../Button/Button';
8 | import { Tooltip } from '../Tooltip/Tooltip';
9 | 
10 | import {
11 |     Dropdown,
12 |     DropdownContent,
13 |     DropdownGroup,
14 |     DropdownItem,
15 |     DropdownRoot,
16 |     DropdownSubContent,
17 |     DropdownSubMenu,
18 |     DropdownSubTrigger,
19 |     DropdownTrigger,
20 | } from './Dropdown';
21 | 
22 | type Story = StoryObj<typeof meta>;
23 | const meta: Meta<typeof DropdownRoot> = {
24 |     component: DropdownRoot,
25 |     subcomponents: {
26 |         // @ts-expect-error Storybook types are incorrect
27 |         'Dropdown.Trigger': DropdownTrigger,
28 |         // @ts-expect-error Storybook types are incorrect
29 |         'Dropdown.Content': DropdownContent,
30 |         // @ts-expect-error Storybook types are incorrect
31 |         'Dropdown.Item': DropdownItem,
32 |         // @ts-expect-error Storybook types are incorrect
33 |         'Dropdown.Group': DropdownGroup,
34 |         // @ts-expect-error Storybook types are incorrect
35 |         'Dropdown.SubMenu': DropdownSubMenu,
36 |         // @ts-expect-error Storybook types are incorrect
37 |         'Dropdown.SubTrigger': DropdownSubTrigger,
38 |         // @ts-expect-error Storybook types are incorrect
39 |         'Dropdown.SubContent': DropdownSubContent,
40 |     },
41 |     tags: ['autodocs'],
42 |     parameters: {
43 |         status: {
44 |             type: 'released',
45 |         },
46 |     },
47 |     args: {},
48 | };
49 | export default meta;
50 | 
51 | export const Default: Story = {
52 |     render: ({ ...args }) => (
53 |         <Dropdown.Root {...args}>
54 |             <Dropdown.Trigger>
55 |                 <Button>Trigger</Button>
56 |             </Dropdown.Trigger>
57 |             <Dropdown.Content>
58 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
59 |                 <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
60 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
61 |             </Dropdown.Content>
62 |         </Dropdown.Root>
63 |     ),
64 | };
65 | 
66 | export const LinkItems: Story = {
67 |     render: ({ ...args }) => (
68 |         <Dropdown.Root {...args}>
69 |             <Dropdown.Trigger>
70 |                 <Button>Trigger</Button>
71 |             </Dropdown.Trigger>
72 |             <Dropdown.Content>
73 |                 <Dropdown.Item onSelect={() => {}}>
74 |                     <a href="https://frontify.com">
75 |                         Link 1
76 |                         {/* <Dropdown.Slot name="right">
77 |                             <IconIcon size={16} />
78 |                         </Dropdown.Slot> */}
79 |                     </a>
80 |                 </Dropdown.Item>
81 |                 <Dropdown.Item onSelect={() => {}}>
82 |                     <a href="https://frontify.com">
83 |                         Link 2
84 |                         <Dropdown.Slot name="left">
85 |                             <IconIcon size={16} />
86 |                         </Dropdown.Slot>
87 |                     </a>
88 |                 </Dropdown.Item>
89 |                 <Dropdown.Item onSelect={() => {}}>
90 |                     <span>Item 3</span>
91 |                 </Dropdown.Item>
92 |             </Dropdown.Content>
93 |         </Dropdown.Root>
94 |     ),
95 | };
96 | 
97 | export const DisabledItems: Story = {
98 |     render: ({ ...args }) => (
99 |         <Dropdown.Root {...args}>
100 |             <Dropdown.Trigger>
101 |                 <Button>Trigger</Button>
102 |             </Dropdown.Trigger>
103 |             <Dropdown.Content>
104 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
105 |                 <Dropdown.Item onSelect={() => {}} disabled>
106 |                     Item 2
107 |                 </Dropdown.Item>
108 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
109 |             </Dropdown.Content>
110 |         </Dropdown.Root>
111 |     ),
112 | };
113 | 
114 | export const DangerItems: Story = {
115 |     render: ({ ...args }) => (
116 |         <Dropdown.Root {...args}>
117 |             <Dropdown.Trigger>
118 |                 <Button>Trigger</Button>
119 |             </Dropdown.Trigger>
120 |             <Dropdown.Content>
121 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
122 |                 <Dropdown.Item onSelect={() => {}} emphasis="danger">
123 |                     Item 2
124 |                     <Dropdown.Slot name="right">
125 |                         <IconIcon size={16} />
126 |                     </Dropdown.Slot>
127 |                 </Dropdown.Item>
128 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
129 |             </Dropdown.Content>
130 |         </Dropdown.Root>
131 |     ),
132 | };
133 | 
134 | export const ItemGroups: Story = {
135 |     render: ({ ...args }) => (
136 |         <Dropdown.Root {...args}>
137 |             <Dropdown.Trigger>
138 |                 <Button>Trigger</Button>
139 |             </Dropdown.Trigger>
140 |             <Dropdown.Content>
141 |                 <Dropdown.Group>
142 |                     <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
143 |                     <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
144 |                     <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
145 |                 </Dropdown.Group>
146 |                 <Dropdown.Group>
147 |                     <Dropdown.Item onSelect={() => {}}>Item 4</Dropdown.Item>
148 |                 </Dropdown.Group>
149 |                 <Dropdown.Group>
150 |                     <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
151 |                 </Dropdown.Group>
152 |                 <Dropdown.Group>
153 |                     <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
154 |                     <Dropdown.Item onSelect={() => {}}>Item 7</Dropdown.Item>
155 |                     <Dropdown.Item onSelect={() => {}}>Item 8</Dropdown.Item>
156 |                 </Dropdown.Group>
157 |             </Dropdown.Content>
158 |         </Dropdown.Root>
159 |     ),
160 | };
161 | 
162 | export const SubMenus: Story = {
163 |     render: ({ ...args }) => (
164 |         <Dropdown.Root {...args}>
165 |             <Dropdown.Trigger>
166 |                 <Button>Trigger</Button>
167 |             </Dropdown.Trigger>
168 |             <Dropdown.Content>
169 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
170 |                 <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
171 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
172 |                 <Dropdown.SubMenu>
173 |                     <Dropdown.SubTrigger>Item 4</Dropdown.SubTrigger>
174 |                     <Dropdown.SubContent>
175 |                         <Dropdown.Item onSelect={() => {}}>Item 4.1</Dropdown.Item>
176 |                         <Dropdown.Item onSelect={() => {}}>Item 4.2</Dropdown.Item>
177 |                         <Dropdown.Item onSelect={() => {}}>Item 4.3</Dropdown.Item>
178 |                     </Dropdown.SubContent>
179 |                 </Dropdown.SubMenu>
180 |                 <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
181 |                 <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
182 |             </Dropdown.Content>
183 |         </Dropdown.Root>
184 |     ),
185 | };
186 | 
187 | export const OverflowingText: Story = {
188 |     render: ({ ...args }) => (
189 |         <Dropdown.Root {...args}>
190 |             <Dropdown.Trigger>
191 |                 <Button>Trigger</Button>
192 |             </Dropdown.Trigger>
193 |             <Dropdown.Content>
194 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
195 |                 <Dropdown.Item onSelect={() => {}}>
196 |                     <a href="https://frontify.com">
197 |                         Link 2 - This is a very long text that overflows the element it is contained in
198 |                         <Dropdown.Slot name="right">
199 |                             <IconIcon size={16} />
200 |                         </Dropdown.Slot>
201 |                     </a>
202 |                 </Dropdown.Item>
203 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
204 |                 <Dropdown.SubMenu>
205 |                     <Dropdown.SubTrigger>
206 |                         Item 4 - This is a very long text that overflows the element it is contained in
207 |                     </Dropdown.SubTrigger>
208 |                     <Dropdown.SubContent>
209 |                         <Dropdown.Item onSelect={() => {}}>Item 4.1</Dropdown.Item>
210 |                         <Dropdown.Item onSelect={() => {}}>
211 |                             Item 4.2 - This is a very long text that overflows the element it is contained in
212 |                         </Dropdown.Item>
213 |                         <Dropdown.Item onSelect={() => {}}>Item 4.3</Dropdown.Item>
214 |                     </Dropdown.SubContent>
215 |                 </Dropdown.SubMenu>
216 |                 <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
217 |                 <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
218 |             </Dropdown.Content>
219 |         </Dropdown.Root>
220 |     ),
221 | };
222 | 
223 | export const Decorator: Story = {
224 |     render: ({ ...args }) => (
225 |         <Dropdown.Root {...args}>
226 |             <Dropdown.Trigger>
227 |                 <Button>Trigger</Button>
228 |             </Dropdown.Trigger>
229 |             <Dropdown.Content>
230 |                 <Dropdown.Item onSelect={() => {}}>
231 |                     <Dropdown.Slot name="left">
232 |                         <IconIcon size={16} />
233 |                     </Dropdown.Slot>
234 |                     Left decorator
235 |                 </Dropdown.Item>
236 |                 <Dropdown.Item onSelect={() => {}}>
237 |                     <Dropdown.Slot name="right">
238 |                         <IconIcon size={16} />
239 |                     </Dropdown.Slot>
240 |                     Right decorator
241 |                 </Dropdown.Item>
242 |                 <Dropdown.Item onSelect={() => {}}>
243 |                     <Dropdown.Slot>
244 |                         <IconIcon size={16} />
245 |                     </Dropdown.Slot>
246 |                     Implicit placement left
247 |                 </Dropdown.Item>
248 |                 <Dropdown.Item onSelect={() => {}}>
249 |                     <Dropdown.Slot>
250 |                         <IconIcon size={16} />
251 |                     </Dropdown.Slot>
252 |                     <Dropdown.Slot>
253 |                         <IconIcon size={16} />
254 |                     </Dropdown.Slot>
255 |                     Implicit placement both
256 |                 </Dropdown.Item>
257 |                 <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
258 |                 <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
259 |             </Dropdown.Content>
260 |         </Dropdown.Root>
261 |     ),
262 | };
263 | 
264 | export const CustomItem: Story = {
265 |     render: ({ ...args }) => (
266 |         <Dropdown.Root {...args}>
267 |             <Dropdown.Trigger>
268 |                 <Button>Trigger</Button>
269 |             </Dropdown.Trigger>
270 |             <Dropdown.Content>
271 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
272 |                 <Dropdown.Item onSelect={() => {}}>
273 |                     <div className="tw-bg-red-50">test bla</div>
274 |                 </Dropdown.Item>
275 |                 <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
276 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
277 |             </Dropdown.Content>
278 |         </Dropdown.Root>
279 |     ),
280 | };
281 | 
282 | export const ControlledComponent: Story = {
283 |     decorators: [
284 |         (Story) => (
285 |             <div className="tw-flex tw-flex-col tw-gap-2 tw-w-fit">
286 |                 <Story />
287 |             </div>
288 |         ),
289 |     ],
290 |     render: ({ ...args }) => {
291 |         const [isOpen, setIsOpen] = useState(false);
292 |         return (
293 |             <>
294 |                 <Button onPress={() => setIsOpen(!isOpen)}>External Toggle Dropdown</Button>
295 |                 <Dropdown.Root {...args} open={isOpen} onOpenChange={setIsOpen}>
296 |                     <Dropdown.Trigger>
297 |                         <Button variant="loud">Trigger</Button>
298 |                     </Dropdown.Trigger>
299 |                     <Dropdown.Content>
300 |                         <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
301 |                         <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
302 |                         <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
303 |                     </Dropdown.Content>
304 |                 </Dropdown.Root>
305 |             </>
306 |         );
307 |     },
308 | };
309 | 
310 | export const Overflow: Story = {
311 |     decorators: [
312 |         (Story) => (
313 |             <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
314 |                 <Story />
315 |             </div>
316 |         ),
317 |     ],
318 |     parameters: {
319 |         viewport: {
320 |             viewports: {
321 |                 mobile: {
322 |                     name: 'Mobile',
323 |                     styles: {
324 |                         width: '300px',
325 |                         height: '272px',
326 |                     },
327 |                 },
328 |             },
329 |             defaultViewport: 'mobile',
330 |         },
331 |     },
332 |     render: ({ ...args }) => (
333 |         <>
334 |             {Array.from({ length: 4 }).map((_, index) => (
335 |                 <Dropdown.Root {...args} key={index}>
336 |                     <Dropdown.Trigger>
337 |                         <Button variant="loud">Trigger 1</Button>
338 |                     </Dropdown.Trigger>
339 |                     <Dropdown.Content>
340 |                         <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
341 |                         <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
342 |                         <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
343 |                         <Dropdown.Item onSelect={() => {}}>Item 4</Dropdown.Item>
344 |                         <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
345 |                         <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
346 |                         <Dropdown.Item onSelect={() => {}}>Item 7</Dropdown.Item>
347 |                         <Dropdown.Item onSelect={() => {}}>Item 8</Dropdown.Item>
348 |                         <Dropdown.Item onSelect={() => {}}>Item 9</Dropdown.Item>
349 |                         <Dropdown.Item onSelect={() => {}}>Item 10</Dropdown.Item>
350 |                     </Dropdown.Content>
351 |                 </Dropdown.Root>
352 |             ))}
353 |         </>
354 |     ),
355 | };
356 | 
357 | export const RightSide: Story = {
358 |     render: ({ ...args }) => (
359 |         <Dropdown.Root {...args}>
360 |             <Dropdown.Trigger>
361 |                 <Button>Trigger</Button>
362 |             </Dropdown.Trigger>
363 |             <Dropdown.Content side="right">
364 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
365 |                 <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
366 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
367 |             </Dropdown.Content>
368 |         </Dropdown.Root>
369 |     ),
370 | };
371 | 
372 | export const CompactPadding: Story = {
373 |     render: ({ ...args }) => (
374 |         <Dropdown.Root {...args}>
375 |             <Dropdown.Trigger>
376 |                 <Button>Trigger</Button>
377 |             </Dropdown.Trigger>
378 |             <Dropdown.Content padding="compact" side="right">
379 |                 <Dropdown.Item onSelect={() => {}}>
380 |                     <p>Item 1</p>
381 |                     <p>Item 1 description</p>
382 |                 </Dropdown.Item>
383 |                 <Dropdown.Item onSelect={() => {}}>
384 |                     <p>Item 2</p>
385 |                     <p>Item 2 description</p>
386 |                 </Dropdown.Item>
387 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
388 |             </Dropdown.Content>
389 |         </Dropdown.Root>
390 |     ),
391 | };
392 | 
393 | export const WithTooltip: Story = {
394 |     render: ({ ...args }) => (
395 |         <Dropdown.Root {...args}>
396 |             <Tooltip.Root>
397 |                 <Tooltip.Trigger asChild>
398 |                     <Dropdown.Trigger asChild>
399 |                         <Button>Trigger</Button>
400 |                     </Dropdown.Trigger>
401 |                 </Tooltip.Trigger>
402 |                 <Tooltip.Content>Dropdown tooltip</Tooltip.Content>
403 |             </Tooltip.Root>
404 | 
405 |             <Dropdown.Content>
406 |                 <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
407 |                 <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
408 |                 <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
409 |             </Dropdown.Content>
410 |         </Dropdown.Root>
411 |     ),
412 | };
```

Flex.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | import { type ComponentProps } from 'react';
5 | 
6 | import { DecorativeContent } from '#storybook/components/DecorativeContent';
7 | 
8 | import { Box } from '../Box/Box';
9 | 
10 | import { Flex } from './Flex';
11 | 
12 | const DecorativeBox = (props: ComponentProps<typeof Box>) => (
13 |     <Box width="100px" height="100px" {...props}>
14 |         <DecorativeContent />
15 |     </Box>
16 | );
17 | 
18 | type Story = StoryObj<typeof Flex>;
19 | const meta: Meta<typeof Flex> = {
20 |     title: 'Layout/Flex',
21 |     component: Flex,
22 |     tags: ['autodocs'],
23 |     parameters: {
24 |         status: {
25 |             type: 'released',
26 |         },
27 |     },
28 |     args: {
29 |         gap: '20px',
30 |         direction: 'column',
31 |     },
32 | };
33 | export default meta;
34 | 
35 | export const Default: Story = {
36 |     render: (args) => {
37 |         return (
38 |             <Flex {...args}>
39 |                 <Flex gapX="10px">
40 |                     <DecorativeBox />
41 |                     <DecorativeBox />
42 |                     <DecorativeBox />
43 |                     <DecorativeBox />
44 |                     <DecorativeBox />
45 |                 </Flex>
46 |                 <Flex gapX="10px">
47 |                     <DecorativeBox />
48 |                     <DecorativeBox />
49 |                     <DecorativeBox />
50 |                     <DecorativeBox />
51 |                     <DecorativeBox />
52 |                 </Flex>
53 |             </Flex>
54 |         );
55 |     },
56 | };
57 | 
58 | export const Nested: Story = {
59 |     render: (args) => {
60 |         return (
61 |             <Flex {...args}>
62 |                 <Flex gapX="10px">
63 |                     <DecorativeBox />
64 |                     <DecorativeBox />
65 |                     <DecorativeBox />
66 |                     <DecorativeBox />
67 |                     <DecorativeBox />
68 |                     <Flex>
69 |                         <DecorativeBox />
70 |                         <DecorativeBox />
71 |                         <DecorativeBox />
72 |                         <DecorativeBox />
73 |                         <DecorativeBox />
74 |                     </Flex>
75 |                 </Flex>
76 |                 <Flex p="20px">
77 |                     <DecorativeBox />
78 |                     <DecorativeBox />
79 |                     <DecorativeBox />
80 |                     <DecorativeBox />
81 |                     <DecorativeBox />
82 |                     <Flex gapX="10px">
83 |                         <DecorativeBox />
84 |                         <DecorativeBox />
85 |                         <DecorativeBox />
86 |                         <DecorativeBox />
87 |                         <DecorativeBox />
88 |                     </Flex>
89 |                 </Flex>
90 |             </Flex>
91 |         );
92 |     },
93 | };
94 | 
95 | export const Responsive: Story = {
96 |     render: (args) => {
97 |         return (
98 |             <Flex
99 |                 {...args}
100 |                 direction={{
101 |                     base: 'row',
102 |                     sm: 'column',
103 |                 }}
104 |             >
105 |                 <Flex
106 |                     gapX={{ sm: '10px' }}
107 |                     gapY={{ base: '10px', sm: '0px' }}
108 |                     direction={{
109 |                         base: 'column',
110 |                         sm: 'row',
111 |                     }}
112 |                 >
113 |                     <DecorativeBox />
114 |                     <DecorativeBox />
115 |                     <DecorativeBox />
116 |                     <DecorativeBox />
117 |                     <DecorativeBox />
118 |                 </Flex>
119 | 
120 |                 <Flex
121 |                     gapX={{ sm: '10px' }}
122 |                     gapY={{ base: '10px', sm: '0px' }}
123 |                     direction={{
124 |                         base: 'column',
125 |                         sm: 'row',
126 |                     }}
127 |                 >
128 |                     <DecorativeBox />
129 |                     <DecorativeBox />
130 |                     <DecorativeBox />
131 |                     <DecorativeBox />
132 |                     <DecorativeBox />
133 |                 </Flex>
134 |             </Flex>
135 |         );
136 |     },
137 | };
138 | 
139 | export const WithSizeToken: Story = {
140 |     render: (args) => {
141 |         return (
142 |             <Flex {...args}>
143 |                 <Flex px={36} gapX={12}>
144 |                     <DecorativeBox />
145 |                     <DecorativeBox />
146 |                 </Flex>
147 |                 <Flex p={5}>
148 |                     <DecorativeBox />
149 |                     <DecorativeBox />
150 |                     <DecorativeBox />
151 |                     <DecorativeBox />
152 |                     <DecorativeBox />
153 |                 </Flex>
154 |             </Flex>
155 |         );
156 |     },
157 | };
```

Flyout.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { Button } from '../Button/Button';
6 | import { TextInput } from '../TextInput/TextInput';
7 | import { Tooltip } from '../Tooltip/Tooltip';
8 | 
9 | import { Flyout, FlyoutBody, FlyoutContent, FlyoutFooter, FlyoutHeader, FlyoutRoot, FlyoutTrigger } from './Flyout';
10 | 
11 | type Story = StoryObj<typeof meta>;
12 | const meta: Meta<typeof FlyoutContent> = {
13 |     component: FlyoutContent,
14 |     subcomponents: {
15 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
16 |         'Flyout.Root': FlyoutRoot,
17 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
18 |         'Flyout.Trigger': FlyoutTrigger,
19 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
20 |         'Flyout.Header': FlyoutHeader,
21 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
22 |         'Flyout.Body': FlyoutBody,
23 |         // @ts-expect-error - Storybook has the wrong type for subcomponents
24 |         'Flyout.Footer': FlyoutFooter,
25 |     },
26 |     tags: ['autodocs'],
27 |     parameters: {
28 |         status: {
29 |             type: 'released',
30 |         },
31 |     },
32 |     args: {
33 |         children: 'Hello World',
34 |     },
35 |     render: ({ ...args }) => {
36 |         return (
37 |             <Flyout.Root>
38 |                 <Flyout.Trigger>
39 |                     <Button>Open flyout</Button>
40 |                 </Flyout.Trigger>
41 |                 <Flyout.Content {...args}>
42 |                     <Flyout.Header showCloseButton>Header</Flyout.Header>
43 |                     <Flyout.Body {...args} />
44 |                     <Flyout.Footer>
45 |                         <div className="tw-flex tw-justify-end tw-gap-2">
46 |                             <Button emphasis="default">Cancel</Button>
47 |                             <Button>Submit</Button>
48 |                         </div>
49 |                     </Flyout.Footer>
50 |                 </Flyout.Content>
51 |             </Flyout.Root>
52 |         );
53 |     },
54 | };
55 | export default meta;
56 | 
57 | export const BasicContent: Story = {
58 |     args: {
59 |         children: 'Hello World',
60 |     },
61 |     render: ({ ...args }) => {
62 |         return (
63 |             <Flyout.Root>
64 |                 <Flyout.Trigger>
65 |                     <Button>Open flyout</Button>
66 |                 </Flyout.Trigger>
67 |                 <Flyout.Content {...args}>
68 |                     <Flyout.Body {...args} />
69 |                 </Flyout.Content>
70 |             </Flyout.Root>
71 |         );
72 |     },
73 | };
74 | 
75 | export const WithHeader: Story = {
76 |     render: ({ ...args }) => {
77 |         return (
78 |             <Flyout.Root>
79 |                 <Flyout.Trigger>
80 |                     <Button>Open flyout</Button>
81 |                 </Flyout.Trigger>
82 |                 <Flyout.Content {...args}>
83 |                     <Flyout.Header>Header</Flyout.Header>
84 |                     <Flyout.Body>I am a flyout</Flyout.Body>
85 |                 </Flyout.Content>
86 |             </Flyout.Root>
87 |         );
88 |     },
89 | };
90 | 
91 | export const WithFooter: Story = {
92 |     render: ({ ...args }) => {
93 |         return (
94 |             <Flyout.Root>
95 |                 <Flyout.Trigger>
96 |                     <Button>Open flyout</Button>
97 |                 </Flyout.Trigger>
98 |                 <Flyout.Content {...args}>
99 |                     <Flyout.Body>I am a flyout</Flyout.Body>
100 |                     <Flyout.Footer>
101 |                         <Button>Submit</Button>
102 |                     </Flyout.Footer>
103 |                 </Flyout.Content>
104 |             </Flyout.Root>
105 |         );
106 |     },
107 | };
108 | 
109 | export const WithFocusableContent: Story = {
110 |     args: {
111 |         children: 'Hello World',
112 |     },
113 |     render: ({ ...args }) => {
114 |         return (
115 |             <Flyout.Root>
116 |                 <Flyout.Trigger>
117 |                     <Button>Open flyout</Button>
118 |                 </Flyout.Trigger>
119 |                 <Flyout.Content {...args}>
120 |                     <Flyout.Header>Header</Flyout.Header>
121 |                     <Flyout.Body {...args}>
122 |                         <TextInput />
123 |                         <TextInput />
124 |                         <TextInput />
125 |                     </Flyout.Body>
126 |                 </Flyout.Content>
127 |             </Flyout.Root>
128 |         );
129 |     },
130 | };
131 | 
132 | export const WithHeaderAndFooter: Story = {};
133 | 
134 | export const WithCloseButton: Story = {
135 |     render: ({ ...args }) => {
136 |         return (
137 |             <Flyout.Root>
138 |                 <Flyout.Trigger>
139 |                     <Button>Open flyout</Button>
140 |                 </Flyout.Trigger>
141 |                 <Flyout.Content {...args}>
142 |                     <Flyout.Header showCloseButton>Header</Flyout.Header>
143 |                     <Flyout.Body>I am a flyout</Flyout.Body>
144 |                 </Flyout.Content>
145 |             </Flyout.Root>
146 |         );
147 |     },
148 | };
149 | 
150 | export const WithNoPadding: Story = {
151 |     args: {
152 |         padding: 'none',
153 |     },
154 | };
155 | 
156 | export const WithTightPadding: Story = {
157 |     args: {
158 |         padding: 'tight',
159 |     },
160 | };
161 | 
162 | export const WithComfortablePadding: Story = {
163 |     args: {
164 |         padding: 'comfortable',
165 |     },
166 | };
167 | 
168 | export const WithSpaciousPadding: Story = {
169 |     args: {
170 |         padding: 'spacious',
171 |     },
172 | };
173 | 
174 | export const WithCustomContent: Story = {
175 |     render: ({ ...args }) => {
176 |         return (
177 |             <Flyout.Root>
178 |                 <Flyout.Trigger>
179 |                     <Button>Open flyout</Button>
180 |                 </Flyout.Trigger>
181 |                 <Flyout.Content {...args}>
182 |                     <div className="tw-bg-box-neutral tw-p-10">This is FlyoutContent</div>
183 |                 </Flyout.Content>
184 |             </Flyout.Root>
185 |         );
186 |     },
187 | };
188 | 
189 | export const RightSide: Story = {
190 |     args: {
191 |         side: 'right',
192 |     },
193 | };
194 | 
195 | export const AlignCenter: Story = {
196 |     args: {
197 |         side: 'right',
198 |         align: 'center',
199 |     },
200 | };
201 | 
202 | export const AlignEnd: Story = {
203 |     args: {
204 |         side: 'right',
205 |         align: 'end',
206 |     },
207 | };
208 | 
209 | export const LongContent: Story = {
210 |     args: {
211 |         side: 'bottom',
212 |         children:
213 |             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
214 |     },
215 | };
216 | 
217 | export const WithCustomWidth: Story = {
218 |     args: {
219 |         width: '500px',
220 |         side: 'bottom',
221 |         children: 'Lorem ipsum dolor sit amet.',
222 |     },
223 | };
224 | 
225 | export const WithCustomMaxWidth: Story = {
226 |     args: {
227 |         maxWidth: '200px',
228 |         side: 'bottom',
229 |         children:
230 |             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
231 |     },
232 | };
233 | 
234 | export const MobileView: Story = {
235 |     parameters: {
236 |         viewport: {
237 |             viewports: {
238 |                 mobile: {
239 |                     name: 'Mobile',
240 |                     styles: {
241 |                         width: '375px',
242 |                         height: '667px',
243 |                     },
244 |                 },
245 |             },
246 |             defaultViewport: 'mobile',
247 |         },
248 |     },
249 |     render: ({ ...args }) => {
250 |         return (
251 |             <Flyout.Root>
252 |                 <Flyout.Trigger>
253 |                     <Button>Open flyout</Button>
254 |                 </Flyout.Trigger>
255 |                 <Flyout.Content {...args}>
256 |                     <Flyout.Header showCloseButton>Header</Flyout.Header>
257 |                     <Flyout.Body>I am a flyout</Flyout.Body>
258 |                     <Flyout.Footer>
259 |                         <Button>Submit</Button>
260 |                     </Flyout.Footer>
261 |                 </Flyout.Content>
262 |             </Flyout.Root>
263 |         );
264 |     },
265 | };
266 | 
267 | export const MobileViewBottom: Story = {
268 |     parameters: {
269 |         viewport: {
270 |             viewports: {
271 |                 mobile: {
272 |                     name: 'Mobile',
273 |                     styles: {
274 |                         width: '375px',
275 |                         height: '667px',
276 |                     },
277 |                 },
278 |             },
279 |             defaultViewport: 'mobile',
280 |         },
281 |     },
282 |     render: ({ ...args }) => {
283 |         return (
284 |             <Flyout.Root>
285 |                 <Flyout.Trigger>
286 |                     <Button className="tw-mt-[590px] tw-ml-28">Open flyout</Button>
287 |                 </Flyout.Trigger>
288 |                 <Flyout.Content {...args}>
289 |                     <Flyout.Header showCloseButton>Header</Flyout.Header>
290 |                     <Flyout.Body>I am a flyout</Flyout.Body>
291 |                     <Flyout.Footer>
292 |                         <Button>Submit</Button>
293 |                     </Flyout.Footer>
294 |                 </Flyout.Content>
295 |             </Flyout.Root>
296 |         );
297 |     },
298 | };
299 | 
300 | export const Overflow: Story = {
301 |     decorators: [
302 |         (Story) => (
303 |             <div style={{ display: 'flex', flexDirection: 'column', gap: 32, margin: '100px 300px' }}>
304 |                 <Story />
305 |             </div>
306 |         ),
307 |     ],
308 |     parameters: {
309 |         viewport: {
310 |             viewports: {
311 |                 desktop: {
312 |                     name: 'Desktop',
313 |                     styles: {
314 |                         width: '800px',
315 |                         height: '500px',
316 |                     },
317 |                 },
318 |             },
319 |             defaultViewport: 'desktop',
320 |         },
321 |     },
322 |     render: ({ ...args }) => (
323 |         <>
324 |             {Array.from({ length: 4 }).map((_, index) => (
325 |                 <Flyout.Root {...args} key={index}>
326 |                     <Flyout.Trigger>
327 |                         <Button>Trigger {index}</Button>
328 |                     </Flyout.Trigger>
329 |                     <Flyout.Content>
330 |                         <Flyout.Header>Flyout {index}</Flyout.Header>
331 |                         <Flyout.Body>
332 |                             <p>Lorem ipsum dolor sit amet</p>
333 |                             <p>Lorem ipsum dolor sit amet</p>
334 |                             <p>Lorem ipsum dolor sit amet</p>
335 |                             <p>Lorem ipsum dolor sit amet</p>
336 |                             <p>Lorem ipsum dolor sit amet</p>
337 |                             <p>Lorem ipsum dolor sit amet</p>
338 |                         </Flyout.Body>
339 |                     </Flyout.Content>
340 |                 </Flyout.Root>
341 |             ))}
342 |         </>
343 |     ),
344 | };
345 | 
346 | export const WithTooltip: Story = {
347 |     args: {
348 |         children: 'Hello World',
349 |     },
350 |     render: (args) => (
351 |         <Flyout.Root>
352 |             <Tooltip.Root>
353 |                 <Tooltip.Trigger asChild>
354 |                     <Flyout.Trigger asChild>
355 |                         <Button>Trigger</Button>
356 |                     </Flyout.Trigger>
357 |                 </Tooltip.Trigger>
358 |                 <Tooltip.Content>Flyout tooltip</Tooltip.Content>
359 |             </Tooltip.Root>
360 |             <Flyout.Content>
361 |                 <Flyout.Body {...args} />
362 |             </Flyout.Content>
363 |         </Flyout.Root>
364 |     ),
365 | };
```

Grid.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | import { type ComponentProps } from 'react';
5 | 
6 | import { DecorativeContent } from '#storybook/components/DecorativeContent';
7 | 
8 | import { Box } from '../Box/Box';
9 | 
10 | import { Grid } from './Grid';
11 | 
12 | const DecorativeBox = (props: ComponentProps<typeof Box>) => (
13 |     <Box width="100px" height="100px" {...props}>
14 |         <DecorativeContent />
15 |     </Box>
16 | );
17 | 
18 | type Story = StoryObj<typeof Grid>;
19 | const meta: Meta<typeof Grid> = {
20 |     title: 'Layout/Grid',
21 |     component: Grid,
22 |     tags: ['autodocs'],
23 |     parameters: {
24 |         status: {
25 |             type: 'released',
26 |         },
27 |     },
28 |     args: {
29 |         columns: 'repeat(3, 1fr)',
30 |         gap: '16px',
31 |     },
32 | };
33 | export default meta;
34 | 
35 | export const Default: Story = {
36 |     render: (args) => {
37 |         return (
38 |             <Grid {...args}>
39 |                 <DecorativeBox />
40 |                 <DecorativeBox />
41 |                 <DecorativeBox />
42 |                 <DecorativeBox />
43 |                 <DecorativeBox />
44 |                 <DecorativeBox />
45 |             </Grid>
46 |         );
47 |     },
48 | };
49 | 
50 | export const GridWithFixedColumnsAndRows: Story = {
51 |     render: (args) => {
52 |         return (
53 |             <Grid {...args}>
54 |                 <DecorativeBox />
55 |                 <DecorativeBox />
56 |                 <DecorativeBox />
57 |                 <DecorativeBox />
58 |                 <DecorativeBox />
59 |                 <DecorativeBox />
60 |                 <DecorativeBox />
61 |                 <DecorativeBox />
62 |                 <DecorativeBox />
63 |                 <DecorativeBox />
64 |                 <DecorativeBox />
65 |                 <DecorativeBox />
66 |             </Grid>
67 |         );
68 |     },
69 |     args: {
70 |         columns: 3,
71 |     },
72 | };
73 | 
74 | export const ResponsiveGrid: Story = {
75 |     render: (args) => {
76 |         return (
77 |             <Grid {...args}>
78 |                 <DecorativeBox />
79 |                 <DecorativeBox />
80 |                 <DecorativeBox />
81 |                 <DecorativeBox />
82 |                 <DecorativeBox />
83 |                 <DecorativeBox />
84 |                 <DecorativeBox />
85 |                 <DecorativeBox />
86 |                 <DecorativeBox />
87 |                 <DecorativeBox />
88 |                 <DecorativeBox />
89 |                 <DecorativeBox />
90 |             </Grid>
91 |         );
92 |     },
93 |     args: {
94 |         columns: {
95 |             base: 'repeat(1, 1fr)',
96 |             xs: 'repeat(4, 1fr)',
97 |             sm: 'repeat(5, 1fr)',
98 |             md: 'repeat(6, 1fr)',
99 |             '2xl': 'repeat(8, 1fr)',
100 |         },
101 |     },
102 | };
```

Label.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconIcon } from '@frontify/fondue-icons';
4 | import { type Meta, type StoryObj } from '@storybook/react';
5 | import { type ComponentProps } from 'react';
6 | 
7 | import { Checkbox } from '../Checkbox/Checkbox';
8 | import { TextInput } from '../TextInput/TextInput';
9 | import { Tooltip } from '../Tooltip/Tooltip';
10 | 
11 | import { Label, LabelComponent } from './Label';
12 | 
13 | type Story = StoryObj<typeof LabelComponent>;
14 | const meta: Meta<typeof LabelComponent> = {
15 |     title: 'Components/Label',
16 |     component: LabelComponent,
17 |     tags: ['autodocs'],
18 |     parameters: {
19 |         status: {
20 |             type: 'released',
21 |         },
22 |     },
23 |     args: {
24 |         children: 'Label',
25 |     },
26 | };
27 | export default meta;
28 | 
29 | export const Mandatory: Story = {
30 |     args: {
31 |         required: true,
32 |     },
33 |     render: (args) => {
34 |         // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
35 |         const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
36 |         STextInput.displayName = 'TextInput';
37 | 
38 |         return (
39 |             <div className="tw-flex tw-flex-col tw-gap-2">
40 |                 <Label {...args} htmlFor="input" />
41 |                 <STextInput id="input" placeholder="Enter your name" />
42 |             </div>
43 |         );
44 |     },
45 | };
46 | 
47 | export const WithTextInput: Story = {
48 |     args: {
49 |         children: 'Hello World',
50 |     },
51 |     render: (args) => {
52 |         // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
53 |         const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
54 |         STextInput.displayName = 'TextInput';
55 | 
56 |         return (
57 |             <div className="tw-flex tw-flex-col tw-gap-2">
58 |                 <Label {...args} htmlFor="input" />
59 |                 <STextInput id="input" placeholder="Enter your name" />
60 |             </div>
61 |         );
62 |     },
63 | };
64 | 
65 | export const WithDisabledInput: Story = {
66 |     args: {
67 |         children: 'Hello World',
68 |     },
69 |     render: (args) => {
70 |         // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
71 |         const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
72 |         STextInput.displayName = 'TextInput';
73 | 
74 |         return (
75 |             <div className="tw-flex tw-flex-col tw-gap-2">
76 |                 <Label {...args} htmlFor="input" />
77 |                 <STextInput id="input" placeholder="Enter your name" disabled />
78 |             </div>
79 |         );
80 |     },
81 | };
82 | 
83 | export const WithCheckbox: Story = {
84 |     args: {
85 |         children: 'Hello World',
86 |     },
87 |     render: (args) => {
88 |         // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
89 |         const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
90 |         STextInput.displayName = 'TextInput';
91 | 
92 |         return (
93 |             <div className="tw-flex tw-gap-1.5">
94 |                 <Checkbox id="input" aria-labelledby="label" />
95 |                 <Label {...args} id="label" htmlFor="input" />
96 |             </div>
97 |         );
98 |     },
99 | };
100 | 
101 | export const WithTooltip: Story = {
102 |     args: {
103 |         required: true,
104 |     },
105 |     render: (args) => {
106 |         // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
107 |         const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
108 |         STextInput.displayName = 'TextInput';
109 | 
110 |         return (
111 |             <div className="tw-flex tw-flex-col tw-gap-1.5">
112 |                 <Label {...args} htmlFor="input">
113 |                     Hello World
114 |                     <Tooltip.Root>
115 |                         <Tooltip.Trigger>
116 |                             <IconIcon size={16} />
117 |                         </Tooltip.Trigger>
118 |                         <Tooltip.Content>Tooltip</Tooltip.Content>
119 |                     </Tooltip.Root>
120 |                 </Label>
121 |                 <STextInput id="input" placeholder="Enter your name" />
122 |             </div>
123 |         );
124 |     },
125 | };
```

LoadingBar.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { LoadingBar } from './LoadingBar';
6 | 
7 | type Story = StoryObj<typeof LoadingBar>;
8 | const meta: Meta<typeof LoadingBar> = {
9 |     title: 'Components/Loading Bar',
10 |     component: LoadingBar,
11 |     tags: ['autodocs'],
12 |     parameters: {
13 |         status: {
14 |             type: 'released',
15 |         },
16 |     },
17 |     args: {
18 |         value: 42,
19 |         max: 100,
20 |         rounded: true,
21 |         'aria-label': 'Fondue Loading Bar',
22 |     },
23 | };
24 | 
25 | export default meta;
26 | 
27 | export const WithDefinedValue: Story = {};
28 | 
29 | export const Indeterminate: Story = {
30 |     args: {
31 |         value: null,
32 |     },
33 | };
```

ScrollArea.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { ScrollArea } from './ScrollArea';
6 | 
7 | type Story = StoryObj<typeof ScrollArea>;
8 | const meta: Meta<typeof ScrollArea> = {
9 |     title: 'Components/Scroll Area',
10 |     component: ScrollArea,
11 |     tags: ['autodocs'],
12 |     parameters: {
13 |         status: {
14 |             type: 'released',
15 |         },
16 |     },
17 |     args: {},
18 | };
19 | export default meta;
20 | 
21 | export const Default: Story = {
22 |     render: () => {
23 |         return (
24 |             <ScrollArea maxHeight={200} maxWidth={600}>
25 |                 <p style={{ width: 500 }}>
26 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies ornare.
27 |                     Quisque auctor, nunc nec aliquam fermentum, odio turpis ultricies elit, in ultricies nunc justo
28 |                     vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies
29 |                     nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo,
30 |                     vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero
31 |                     posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt,
32 |                     odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies
33 |                     tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero
34 |                     in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer
35 |                     auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae
36 |                     purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc
37 |                     justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel
38 |                     ultricies nunc justo vitae purus.
39 |                 </p>
40 |             </ScrollArea>
41 |         );
42 |     },
43 | };
44 | 
45 | export const Horizontal: Story = {
46 |     render: () => {
47 |         return (
48 |             <ScrollArea maxWidth={300}>
49 |                 <p style={{ width: 500 }}>
50 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies ornare.
51 |                     Quisque auctor, nunc nec aliquam fermentum, odio turpis ultricies elit, in ultricies nunc justo
52 |                     vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies
53 |                     nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo,
54 |                     vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero
55 |                     posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt,
56 |                     odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies
57 |                     tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero
58 |                     in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer
59 |                     auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae
60 |                     purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc
61 |                     justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel
62 |                     ultricies nunc justo vitae purus.
63 |                 </p>
64 |             </ScrollArea>
65 |         );
66 |     },
67 | };
68 | 
69 | export const TwoDimensions: Story = {
70 |     render: () => {
71 |         return (
72 |             <ScrollArea maxHeight={200} maxWidth={300}>
73 |                 <p style={{ width: 500 }}>
74 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies ornare.
75 |                     Quisque auctor, nunc nec aliquam fermentum, odio turpis ultricies elit, in ultricies nunc justo
76 |                     vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies
77 |                     nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo,
78 |                     vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero
79 |                     posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt,
80 |                     odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies
81 |                     tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero
82 |                     in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer
83 |                     auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae
84 |                     purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc
85 |                     justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel
86 |                     ultricies nunc justo vitae purus.
87 |                 </p>
88 |             </ScrollArea>
89 |         );
90 |     },
91 | };
92 | 
93 | export const AlwaysVisible: Story = {
94 |     render: () => {
95 |         return (
96 |             <ScrollArea type="always">
97 |                 <p>
98 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies ornare.
99 |                     Quisque auctor, nunc nec aliquam fermentum, odio turpis ultricies elit, in ultricies nunc justo
100 |                     vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies
101 |                     nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo,
102 |                     vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero
103 |                     posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt,
104 |                     odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies
105 |                     tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero
106 |                     in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer
107 |                     auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae
108 |                     purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc
109 |                     justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel
110 |                     ultricies nunc justo vitae purus.
111 |                 </p>
112 |             </ScrollArea>
113 |         );
114 |     },
115 | };
116 | 
117 | export const VisibleWhenOverflowing: Story = {
118 |     render: () => {
119 |         return (
120 |             <ScrollArea type="auto" maxHeight={200} maxWidth={300}>
121 |                 <p>
122 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies ornare.
123 |                     Quisque auctor, nunc nec aliquam fermentum, odio turpis ultricies elit, in ultricies nunc justo
124 |                     vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies
125 |                     nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo,
126 |                     vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero
127 |                     posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt,
128 |                     odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies
129 |                     tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero
130 |                     in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer
131 |                     auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae
132 |                     purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc
133 |                     justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel
134 |                     ultricies nunc justo vitae purus.
135 |                 </p>
136 |             </ScrollArea>
137 |         );
138 |     },
139 | };
140 | 
141 | export const VisibleWhenScrolling: Story = {
142 |     render: () => {
143 |         return (
144 |             <ScrollArea type="scroll" maxHeight={200} maxWidth={300}>
145 |                 <p>
146 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies ornare.
147 |                     Quisque auctor, nunc nec aliquam fermentum, odio turpis ultricies elit, in ultricies nunc justo
148 |                     vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies
149 |                     nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo,
150 |                     vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero
151 |                     posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt,
152 |                     odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies
153 |                     tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero
154 |                     in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer
155 |                     auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae
156 |                     purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc
157 |                     justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel
158 |                     ultricies nunc justo vitae purus.
159 |                 </p>
160 |             </ScrollArea>
161 |         );
162 |     },
163 | };
164 | 
165 | export const WithShadow: Story = {
166 |     render: () => {
167 |         return (
168 |             <ScrollArea type="scroll" maxHeight={200} maxWidth={300} showShadow>
169 |                 <p>
170 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultricies ornare.
171 |                     Quisque auctor, nunc nec aliquam fermentum, odio turpis ultricies elit, in ultricies nunc justo
172 |                     vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies
173 |                     nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo,
174 |                     vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero
175 |                     posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies tincidunt,
176 |                     odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero in ultricies
177 |                     tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer auctor, libero
178 |                     in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae purus. Integer
179 |                     auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc justo vitae
180 |                     purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel ultricies nunc
181 |                     justo vitae purus. Integer auctor, libero in ultricies tincidunt, odio libero posuere justo, vel
182 |                     ultricies nunc justo vitae purus.
183 |                 </p>
184 |             </ScrollArea>
185 |         );
186 |     },
187 | };
```

Section.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { Section } from './Section';
6 | 
7 | type Story = StoryObj<typeof Section>;
8 | const meta: Meta<typeof Section> = {
9 |     title: 'Layout/Section',
10 |     component: Section,
11 |     tags: ['autodocs'],
12 |     parameters: {
13 |         status: {
14 |             type: 'released',
15 |         },
16 |     },
17 |     args: {},
18 | };
19 | export default meta;
20 | 
21 | export const Default: Story = {
22 |     args: {
23 |         children: 'Hello World',
24 |     },
25 | };
```

SegmentedControl.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconIcon } from '@frontify/fondue-icons';
4 | import { action } from '@storybook/addon-actions';
5 | import { type Meta, type StoryObj } from '@storybook/react';
6 | 
7 | import { Label } from '../Label/Label';
8 | 
9 | import { SegmentedControl, SegmentedControlItem, SegmentedControlRoot } from './SegmentedControl';
10 | 
11 | type Story = StoryObj<typeof meta>;
12 | const meta: Meta<typeof SegmentedControlRoot> = {
13 |     title: 'Components/Segmented Control',
14 |     component: SegmentedControlRoot,
15 |     subcomponents: {
16 |         // @ts-expect-error Storybook types are incorrect
17 |         'SegmentedControl.Item': SegmentedControlItem,
18 |     },
19 |     tags: ['autodocs'],
20 |     parameters: {
21 |         status: {
22 |             type: 'released',
23 |         },
24 |     },
25 |     args: {
26 |         defaultValue: 'first',
27 |         disabled: false,
28 |         onValueChange: action('onValueChange'),
29 |     },
30 |     decorators: (Story) => (
31 |         <div className="tw-w-64">
32 |             <Story />
33 |         </div>
34 |     ),
35 | };
36 | export default meta;
37 | 
38 | export const TextOnly: Story = {
39 |     render: (args) => (
40 |         <SegmentedControl.Root {...args}>
41 |             <SegmentedControl.Item value="first">First</SegmentedControl.Item>
42 |             <SegmentedControl.Item value="second">Second</SegmentedControl.Item>
43 |             <SegmentedControl.Item value="third">Third</SegmentedControl.Item>
44 |         </SegmentedControl.Root>
45 |     ),
46 | };
47 | 
48 | export const IconOnly: Story = {
49 |     render: (args) => (
50 |         <SegmentedControl.Root {...args}>
51 |             <SegmentedControl.Item value="first">
52 |                 <IconIcon size={20} />
53 |             </SegmentedControl.Item>
54 |             <SegmentedControl.Item value="second">
55 |                 <IconIcon size={20} />
56 |             </SegmentedControl.Item>
57 |             <SegmentedControl.Item value="third">
58 |                 <IconIcon size={20} />
59 |             </SegmentedControl.Item>
60 |         </SegmentedControl.Root>
61 |     ),
62 | };
63 | 
64 | export const IconAndText: Story = {
65 |     render: (args) => (
66 |         <SegmentedControl.Root {...args}>
67 |             <SegmentedControl.Item value="first">
68 |                 <IconIcon size={20} />
69 |                 First
70 |             </SegmentedControl.Item>
71 |             <SegmentedControl.Item value="second">
72 |                 <IconIcon size={20} />
73 |                 Second
74 |             </SegmentedControl.Item>
75 |             <SegmentedControl.Item value="third">
76 |                 <IconIcon size={20} />
77 |                 Third
78 |             </SegmentedControl.Item>
79 |         </SegmentedControl.Root>
80 |     ),
81 | };
82 | 
83 | export const Disabled: Story = {
84 |     render: (args) => (
85 |         <SegmentedControl.Root {...args} disabled>
86 |             <SegmentedControl.Item value="first">
87 |                 <IconIcon size={20} />
88 |                 First
89 |             </SegmentedControl.Item>
90 |             <SegmentedControl.Item value="second">
91 |                 <IconIcon size={20} />
92 |                 Second
93 |             </SegmentedControl.Item>
94 |             <SegmentedControl.Item value="third">
95 |                 <IconIcon size={20} />
96 |                 Third
97 |             </SegmentedControl.Item>
98 |         </SegmentedControl.Root>
99 |     ),
100 | };
101 | 
102 | export const WithLabel: Story = {
103 |     render: (args) => {
104 |         return (
105 |             <div className="tw-flex tw-flex-col tw-gap-2">
106 |                 <Label htmlFor="segmented-control">Segmented Control</Label>
107 | 
108 |                 <SegmentedControl.Root {...args} id="segmented-control">
109 |                     <SegmentedControl.Item value="first">First</SegmentedControl.Item>
110 |                     <SegmentedControl.Item value="second">Second</SegmentedControl.Item>
111 |                     <SegmentedControl.Item value="third">Third</SegmentedControl.Item>
112 |                 </SegmentedControl.Root>
113 |             </div>
114 |         );
115 |     },
116 | };
```

Select.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconIcon } from '@frontify/fondue-icons';
4 | import { type Meta, type StoryObj } from '@storybook/react';
5 | import { useState } from 'react';
6 | 
7 | import { Button } from '../Button/Button';
8 | 
9 | import { SelectCombobox } from './Combobox';
10 | import { Select, SelectInput } from './Select';
11 | import { SelectItem, SelectItemGroup } from './SelectItem';
12 | import { SelectSlot } from './SelectSlot';
13 | 
14 | type Story = StoryObj<typeof meta>;
15 | const meta: Meta<typeof SelectInput> = {
16 |     component: SelectInput,
17 |     subcomponents: {
18 |         // @ts-expect-error Storybook types are incorrect
19 |         'Select.Combobox': SelectCombobox,
20 |         // @ts-expect-error Storybook types are incorrect
21 |         'Select.Slot': SelectSlot,
22 |         // @ts-expect-error Storybook types are incorrect
23 |         'Select.Group': SelectItemGroup,
24 |         // @ts-expect-error Storybook types are incorrect
25 |         'Select.Item': SelectItem,
26 |     },
27 |     tags: ['autodocs'],
28 |     parameters: {
29 |         status: {
30 |             type: 'released',
31 |         },
32 |     },
33 |     args: {
34 |         'aria-label': 'Select an item',
35 |         placeholder: 'Select an item',
36 |     },
37 | };
38 | export default meta;
39 | 
40 | export const SimpleSelect: Story = {
41 |     name: 'Select',
42 |     render: (args) => {
43 |         return (
44 |             <Select {...args}>
45 |                 <Select.Item value="test1">Test1</Select.Item>
46 |                 <Select.Item value="test2">Test2</Select.Item>
47 |                 <Select.Item value="test3">Test3</Select.Item>
48 |             </Select>
49 |         );
50 |     },
51 | };
52 | 
53 | export const Combobox: Story = {
54 |     args: {
55 |         placeholder: 'Select an item',
56 |     },
57 |     render: (args) => {
58 |         return (
59 |             <Select.Combobox {...args}>
60 |                 <Select.Item value="test1">Test1</Select.Item>
61 |                 <Select.Item value="test2">Test2</Select.Item>
62 |                 <Select.Item value="test3">Test3</Select.Item>
63 |             </Select.Combobox>
64 |         );
65 |     },
66 | };
67 | 
68 | export const Disabled: Story = {
69 |     args: {
70 |         disabled: true,
71 |     },
72 |     render: (args) => {
73 |         return (
74 |             <Select {...args}>
75 |                 <Select.Slot name="menu">
76 |                     <Select.Item value="test1">Test1</Select.Item>
77 |                     <Select.Item value="test2">Test2</Select.Item>
78 |                     <Select.Item value="test3">Test3</Select.Item>
79 |                 </Select.Slot>
80 |             </Select>
81 |         );
82 |     },
83 | };
84 | 
85 | export const WithPlaceholder: Story = {
86 |     args: {
87 |         placeholder: 'Select an item',
88 |     },
89 |     render: (args) => {
90 |         return (
91 |             <Select {...args}>
92 |                 <Select.Slot name="menu">
93 |                     <Select.Item value="test1">Test1</Select.Item>
94 |                     <Select.Item value="test2">Test2</Select.Item>
95 |                     <Select.Item value="test3">Test3</Select.Item>
96 |                 </Select.Slot>
97 |             </Select>
98 |         );
99 |     },
100 | };
101 | 
102 | export const WithDecorator: Story = {
103 |     args: {
104 |         placeholder: 'Select an item',
105 |     },
106 |     render: (args) => {
107 |         return (
108 |             <Select {...args}>
109 |                 <Select.Slot name="left">
110 |                     <IconIcon size={16} />
111 |                 </Select.Slot>
112 |                 <Select.Slot name="right">
113 |                     <IconIcon size={16} />
114 |                 </Select.Slot>
115 |                 <Select.Slot name="menu">
116 |                     <Select.Item value="test1">Test1</Select.Item>
117 |                     <Select.Item value="test2">Test2</Select.Item>
118 |                     <Select.Item value="test3">Test3</Select.Item>
119 |                 </Select.Slot>
120 |             </Select>
121 |         );
122 |     },
123 | };
124 | 
125 | export const Clearable: Story = {
126 |     args: {
127 |         placeholder: 'Select an item',
128 |     },
129 |     render: (args) => {
130 |         return (
131 |             <Select {...args}>
132 |                 <Select.Slot name="right">
133 |                     <IconIcon size={16} />
134 |                 </Select.Slot>
135 |                 <Select.Slot name="clear" />
136 |                 <Select.Slot name="menu">
137 |                     <Select.Item value="test1">Test1</Select.Item>
138 |                     <Select.Item value="test2">Test2</Select.Item>
139 |                     <Select.Item value="test3">Test3</Select.Item>
140 |                 </Select.Slot>
141 |             </Select>
142 |         );
143 |     },
144 | };
145 | 
146 | export const CustomClearElement: Story = {
147 |     args: {
148 |         placeholder: 'Select an item',
149 |     },
150 |     render: (args) => {
151 |         return (
152 |             <Select {...args}>
153 |                 <Select.Slot name="clear">Clear</Select.Slot>
154 |                 <Select.Slot name="left">
155 |                     <IconIcon size={16} />
156 |                 </Select.Slot>
157 |                 <Select.Slot name="right">
158 |                     <IconIcon size={16} />
159 |                 </Select.Slot>
160 |                 <Select.Slot name="menu">
161 |                     <Select.Item value="test1">Test1</Select.Item>
162 |                     <Select.Item value="test2">Test2</Select.Item>
163 |                     <Select.Item value="test3">Test3</Select.Item>
164 |                 </Select.Slot>
165 |             </Select>
166 |         );
167 |     },
168 | };
169 | 
170 | export const DefaultItem: Story = {
171 |     args: {
172 |         defaultValue: 'test1',
173 |     },
174 |     render: (args) => {
175 |         return (
176 |             <Select {...args}>
177 |                 <Select.Slot name="menu">
178 |                     <Select.Item value="test1">Test1</Select.Item>
179 |                     <Select.Item value="test2">Test2</Select.Item>
180 |                     <Select.Item value="test3">Test3</Select.Item>
181 |                 </Select.Slot>
182 |             </Select>
183 |         );
184 |     },
185 | };
186 | 
187 | export const ItemGroups: Story = {
188 |     render: (args) => {
189 |         return (
190 |             <Select {...args}>
191 |                 <Select.Slot name="menu">
192 |                     <Select.Item value="test1">Test1</Select.Item>
193 |                     <Select.Item value="test2">Test2</Select.Item>
194 |                     <Select.Group groupId="Group 1">
195 |                         <Select.Item value="test3">Test3</Select.Item>
196 |                         <Select.Item value="test4">Test4</Select.Item>
197 |                         <Select.Item value="test5">Test5</Select.Item>
198 |                     </Select.Group>
199 |                     <Select.Item value="test6">Test6</Select.Item>
200 |                 </Select.Slot>
201 |             </Select>
202 |         );
203 |     },
204 | };
205 | 
206 | export const CustomItem: Story = {
207 |     render: (args) => {
208 |         return (
209 |             <Select {...args}>
210 |                 <Select.Slot name="menu">
211 |                     <Select.Item value="ch" label="Switzerland">
212 |                         <div className="tw-flex tw-items-center tw-gap-4">
213 |                             <img src="https://flagsapi.com/CH/flat/16.png" alt="Switzerland" />
214 |                             <p>Switzerland</p>
215 |                         </div>
216 |                     </Select.Item>
217 |                     <Select.Item value="icon" label="Component">
218 |                         <div className="tw-flex tw-items-center tw-gap-4">
219 |                             <p>With a Component</p>
220 |                             <IconIcon size={16} />
221 |                         </div>
222 |                     </Select.Item>
223 |                     <Select.Item value="basic" label="Basic">
224 |                         Basic
225 |                     </Select.Item>
226 |                 </Select.Slot>
227 |             </Select>
228 |         );
229 |     },
230 | };
231 | 
232 | export const ExternallyControlled: Story = {
233 |     decorators: [
234 |         (Story) => {
235 |             return (
236 |                 <div className="tw-flex tw-gap-4">
237 |                     <Story />
238 |                 </div>
239 |             );
240 |         },
241 |     ],
242 |     render: (args) => {
243 |         const [activeItem, setActiveItem] = useState<string>();
244 |         return (
245 |             <>
246 |                 <Select
247 |                     onSelect={(selectedItem) => {
248 |                         setActiveItem(() => selectedItem);
249 |                     }}
250 |                     value={activeItem}
251 |                     {...args}
252 |                 >
253 |                     <Select.Slot name="menu">
254 |                         <Select.Item value="test1">Test1</Select.Item>
255 |                         <Select.Item value="test2">Test2</Select.Item>
256 |                         <Select.Item value="test3">Test3</Select.Item>
257 |                     </Select.Slot>
258 |                 </Select>
259 |                 <Button onPress={() => setActiveItem('test1')}>Set Test1</Button>
260 |             </>
261 |         );
262 |     },
263 | };
264 | 
265 | export const OverflowingText: Story = {
266 |     args: {
267 |         placeholder: 'Select an item',
268 |     },
269 |     render: (args) => {
270 |         return (
271 |             <div style={{ display: 'flex', gap: 8, maxWidth: 600 }}>
272 |                 <Select {...args}>
273 |                     <Select.Item value="test1">
274 |                         Test1 - This is a very long text to see how it overflows This is a very long text to see how it
275 |                         overflows This is a very long text to see how it overflows y long text to see how it overflows
276 |                         This is a very long text to see how it overflows This is a very long text to see how it
277 |                         overflows y long text to see how it overflows This is a very long text to see how it overflows
278 |                         This is a very long text to see how it overflows
279 |                     </Select.Item>
280 |                     <Select.Item value="test2">Test2</Select.Item>
281 |                     <Select.Item value="test3">Test3</Select.Item>
282 |                 </Select>
283 |                 <Select.Combobox {...args}>
284 |                     <Select.Item value="test1">Test1 - This is a very long text to see how it overflows</Select.Item>
285 |                     <Select.Item value="test2">Test2</Select.Item>
286 |                     <Select.Item value="test3">Test3</Select.Item>
287 |                 </Select.Combobox>
288 |                 <Select.Combobox {...args}>
289 |                     <Select.Item value="test1">Test1 - This is a very long text to see how it overflows</Select.Item>
290 |                     <Select.Item value="test2">Test2</Select.Item>
291 |                     <Select.Item value="test3">Test3</Select.Item>
292 |                 </Select.Combobox>
293 |             </div>
294 |         );
295 |     },
296 | };
297 | 
298 | export const ListOverflow: Story = {
299 |     decorators: [
300 |         (Story) => (
301 |             <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
302 |                 <Story />
303 |             </div>
304 |         ),
305 |     ],
306 |     parameters: {
307 |         viewport: {
308 |             viewports: {
309 |                 mobile: {
310 |                     name: 'Mobile',
311 |                     styles: {
312 |                         width: '300px',
313 |                         height: '272px',
314 |                     },
315 |                 },
316 |             },
317 |             defaultViewport: 'mobile',
318 |         },
319 |     },
320 |     render: (args) => {
321 |         return (
322 |             <>
323 |                 <Select {...args}>
324 |                     <Select.Item value="test1">Test1</Select.Item>
325 |                     <Select.Item value="test2">Test2</Select.Item>
326 |                     <Select.Item value="test3">Test3</Select.Item>
327 |                     <Select.Item value="test4">Test4</Select.Item>
328 |                     <Select.Item value="test5">Test5</Select.Item>
329 |                     <Select.Item value="test6">Test6</Select.Item>
330 |                     <Select.Item value="test7">Test7</Select.Item>
331 |                 </Select>
332 |                 <Select {...args}>
333 |                     <Select.Item value="test1">Test1</Select.Item>
334 |                     <Select.Item value="test2">Test2</Select.Item>
335 |                     <Select.Item value="test3">Test3</Select.Item>
336 |                     <Select.Item value="test4">Test4</Select.Item>
337 |                     <Select.Item value="test5">Test5</Select.Item>
338 |                     <Select.Item value="test6">Test6</Select.Item>
339 |                     <Select.Item value="test7">Test7</Select.Item>
340 |                 </Select>
341 |                 <Select {...args}>
342 |                     <Select.Item value="test1">Test1</Select.Item>
343 |                     <Select.Item value="test2">Test2</Select.Item>
344 |                     <Select.Item value="test3">Test3</Select.Item>
345 |                     <Select.Item value="test4">Test4</Select.Item>
346 |                     <Select.Item value="test5">Test5</Select.Item>
347 |                     <Select.Item value="test6">Test6</Select.Item>
348 |                     <Select.Item value="test7">Test7</Select.Item>
349 |                 </Select>
350 |                 <Select {...args}>
351 |                     <Select.Item value="test1">Test1</Select.Item>
352 |                     <Select.Item value="test2">Test2</Select.Item>
353 |                     <Select.Item value="test3">Test3</Select.Item>
354 |                     <Select.Item value="test4">Test4</Select.Item>
355 |                     <Select.Item value="test5">Test5</Select.Item>
356 |                     <Select.Item value="test6">Test6</Select.Item>
357 |                     <Select.Item value="test7">Test7</Select.Item>
358 |                 </Select>
359 |             </>
360 |         );
361 |     },
362 | };
363 | 
364 | export const Success: Story = {
365 |     args: {
366 |         status: 'success',
367 |     },
368 |     render: (args) => {
369 |         return (
370 |             <Select {...args}>
371 |                 <Select.Item value="test1">Test1</Select.Item>
372 |                 <Select.Item value="test2">Test2</Select.Item>
373 |                 <Select.Item value="test3">Test3</Select.Item>
374 |             </Select>
375 |         );
376 |     },
377 | };
378 | 
379 | export const Errored: Story = {
380 |     args: {
381 |         status: 'error',
382 |     },
383 |     render: (args) => {
384 |         return (
385 |             <Select.Combobox {...args}>
386 |                 <Select.Item value="test1">Test1</Select.Item>
387 |                 <Select.Item value="test2">Test2</Select.Item>
388 |                 <Select.Item value="test3">Test3</Select.Item>
389 |             </Select.Combobox>
390 |         );
391 |     },
392 | };
```

Slider.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | import { type ChangeEvent, useRef, useState } from 'react';
5 | 
6 | import { Label } from '../Label/Label';
7 | import { TextInput } from '../TextInput/TextInput';
8 | 
9 | import { Slider } from './Slider';
10 | 
11 | type Story = StoryObj<typeof Slider>;
12 | 
13 | const meta: Meta<typeof Slider> = {
14 |     component: Slider,
15 |     tags: ['autodocs'],
16 |     parameters: {
17 |         status: {
18 |             type: 'released',
19 |         },
20 |     },
21 |     argTypes: {
22 |         defaultValue: {
23 |             control: 'object',
24 |             description: 'The default value of the slider, used for uncontrolled components.',
25 |             defaultValue: [0],
26 |             table: {
27 |                 type: { summary: 'number[]' },
28 |                 defaultValue: { summary: '[0]' },
29 |             },
30 |         },
31 |         value: {
32 |             control: 'object',
33 |             description: 'The controlled value of the slider.',
34 |             defaultValue: [0],
35 |             table: {
36 |                 type: { summary: 'number[]' },
37 |                 defaultValue: { summary: '[0]' },
38 |             },
39 |         },
40 |         min: {
41 |             control: 'number',
42 |             description: 'Minimum value of the slider.',
43 |             defaultValue: 0,
44 |             table: {
45 |                 type: { summary: 'number' },
46 |                 defaultValue: { summary: '0' },
47 |             },
48 |         },
49 |         max: {
50 |             control: 'number',
51 |             description: 'Maximum value of the slider.',
52 |             defaultValue: 100,
53 |             table: {
54 |                 type: { summary: 'number' },
55 |                 defaultValue: { summary: '100' },
56 |             },
57 |         },
58 |         step: {
59 |             control: 'number',
60 |             description: 'The granularity with which the slider can step through values.',
61 |             defaultValue: 1,
62 |             table: {
63 |                 type: { summary: 'number' },
64 |                 defaultValue: { summary: '1' },
65 |             },
66 |         },
67 |         minStepsBetweenThumbs: {
68 |             control: 'number',
69 |             description: 'The minimum steps between thumbs in a range slider.',
70 |             defaultValue: 0,
71 |             table: {
72 |                 type: { summary: 'number' },
73 |                 defaultValue: { summary: '0' },
74 |             },
75 |         },
76 |         disabled: {
77 |             control: 'boolean',
78 |             description: 'Disable the slider.',
79 |             defaultValue: false,
80 |             table: {
81 |                 type: { summary: 'boolean' },
82 |                 defaultValue: { summary: 'false' },
83 |             },
84 |         },
85 |         onChange: {
86 |             action: 'onChange',
87 |             description: 'Function called when the value changes.',
88 |             table: {
89 |                 type: { summary: '(value: number[]) => void' },
90 |             },
91 |         },
92 |         onCommit: {
93 |             action: 'onCommit',
94 |             description: 'Function called when the value change is committed.',
95 |             table: {
96 |                 type: { summary: '(value: number[]) => void' },
97 |             },
98 |         },
99 |     },
100 |     args: {
101 |         min: 0,
102 |         max: 100,
103 |     },
104 | };
105 | 
106 | export default meta;
107 | 
108 | export const SimpleSlider: Story = {
109 |     args: {
110 |         name: 'Simple slider',
111 |     },
112 | };
113 | 
114 | export const Disabled: Story = {
115 |     args: {
116 |         disabled: true,
117 |         defaultValue: [50],
118 |     },
119 | };
120 | 
121 | export const MinimumAndMaximum: Story = {
122 |     args: {
123 |         min: 50,
124 |         max: 1000,
125 |     },
126 | };
127 | 
128 | export const MinimumGap: Story = {
129 |     args: {
130 |         minStepsBetweenThumbs: 25,
131 |     },
132 | };
133 | 
134 | export const StepSize: Story = {
135 |     args: {
136 |         step: 25,
137 |     },
138 | };
139 | 
140 | export const MultipleThumbsUncontrolled: Story = {
141 |     args: {
142 |         defaultValue: [33, 67],
143 |     },
144 | };
145 | 
146 | export const ExternallyControlled: Story = {
147 |     render: (args) => {
148 |         const [sliderRange, setSliderRange] = useState([50]);
149 |         const userIsWarned = useRef(false);
150 |         return (
151 |             <Slider
152 |                 onChange={(value) => {
153 |                     if (!value[0]) {
154 |                         return;
155 |                     }
156 |                     if (value[0] > 80 && !userIsWarned.current) {
157 |                         userIsWarned.current = true;
158 |                         alert("You're going a bit high there");
159 |                     }
160 |                     setSliderRange(value);
161 |                 }}
162 |                 value={sliderRange}
163 |                 {...args}
164 |             />
165 |         );
166 |     },
167 | };
168 | 
169 | export const MultipleThumbsExternallyControlled: Story = {
170 |     render: (args) => {
171 |         const [sliderRange, setSliderRange] = useState([33, 67]);
172 |         return (
173 |             <Slider
174 |                 onChange={(value) => {
175 |                     if (!value[0] || !value[1]) {
176 |                         return;
177 |                     }
178 |                     if (value[1] - value[0] > 80) {
179 |                         alert('The range is too large');
180 |                         return;
181 |                     }
182 |                     setSliderRange(value);
183 |                 }}
184 |                 value={sliderRange}
185 |                 {...args}
186 |             />
187 |         );
188 |     },
189 | };
190 | 
191 | export const WithInputs: Story = {
192 |     decorators: (Story) => {
193 |         return (
194 |             <div style={{ display: 'flex', gap: 16 }}>
195 |                 <Story />
196 |             </div>
197 |         );
198 |     },
199 |     render: () => {
200 |         const [range, setRange] = useState([250, 450]);
201 | 
202 |         const onRangeChange = (value: number[]) => {
203 |             setRange(value);
204 |         };
205 | 
206 |         const onInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
207 |             const newValue = parseInt(event.target.value, 10);
208 |             if (newValue >= 200 && newValue <= 500) {
209 |                 setRange((prev) => {
210 |                     const newRange = [...prev];
211 |                     newRange[index] = newValue;
212 |                     return newRange;
213 |                 });
214 |             }
215 |         };
216 | 
217 |         return (
218 |             <>
219 |                 <Label id="new-slider-label" htmlFor="new-slider">
220 |                     Price range
221 |                 </Label>
222 | 
223 |                 <Slider
224 |                     id="new-slider"
225 |                     aria-labelledby="new-slider-label"
226 |                     value={range}
227 |                     min={200}
228 |                     max={500}
229 |                     onChange={onRangeChange}
230 |                 />
231 | 
232 |                 {range.map((value, index) => (
233 |                     <TextInput
234 |                         key={index}
235 |                         id={`new-slider-input-${index}`}
236 |                         value={value}
237 |                         type="number"
238 |                         aria-label={`Price range ${index === 0 ? 'from' : 'to'}`}
239 |                         onChange={onInputChange(index)}
240 |                     />
241 |                 ))}
242 |             </>
243 |         );
244 |     },
245 | };
```

Switch.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconQuestionMarkCircle } from '@frontify/fondue-icons';
4 | import { type Meta, type StoryObj } from '@storybook/react';
5 | import { useState } from 'react';
6 | 
7 | import { Label } from '../Label/Label';
8 | import { Tooltip } from '../Tooltip/Tooltip';
9 | 
10 | import { Switch } from './Switch';
11 | 
12 | type Story = StoryObj<typeof Switch>;
13 | 
14 | const meta: Meta<typeof Switch> = {
15 |     component: Switch,
16 |     tags: ['autodocs'],
17 |     parameters: {
18 |         status: {
19 |             type: 'released',
20 |         },
21 |     },
22 |     argTypes: {
23 |         size: {
24 |             control: { type: 'select', options: ['small', 'medium', 'large'] },
25 |         },
26 |     },
27 |     args: {
28 |         id: 'airplane-mode',
29 |         'aria-label': 'Toggle airplane mode',
30 |     },
31 |     decorators: [
32 |         (Story) => (
33 |             <div className="tw-flex tw-gap-1.5 tw-items-center">
34 |                 <Story />
35 |             </div>
36 |         ),
37 |     ],
38 | };
39 | 
40 | export default meta;
41 | 
42 | export const Checked: Story = {
43 |     args: {
44 |         defaultValue: true,
45 |     },
46 | };
47 | 
48 | export const Unchecked: Story = {
49 |     args: {
50 |         defaultValue: false,
51 |     },
52 | };
53 | 
54 | export const Disabled: Story = {
55 |     args: {
56 |         defaultValue: false,
57 |         disabled: true,
58 |     },
59 | };
60 | 
61 | export const Required: Story = {
62 |     args: {
63 |         defaultValue: false,
64 |         required: true,
65 |     },
66 | };
67 | 
68 | export const WithLabel: Story = {
69 |     render: (args) => (
70 |         <>
71 |             <Label id="label" htmlFor="switch">
72 |                 Switch
73 |             </Label>
74 |             <Switch {...args} id="switch" aria-labelledby="label" />
75 |         </>
76 |     ),
77 | };
78 | 
79 | export const WithLabelAndTooltip: Story = {
80 |     render: (args) => (
81 |         <>
82 |             <Label id="label" htmlFor="switch">
83 |                 Switch
84 |                 <Tooltip.Root>
85 |                     <Tooltip.Trigger>
86 |                         <IconQuestionMarkCircle size="16" />
87 |                     </Tooltip.Trigger>
88 |                     <Tooltip.Content>Tooltip</Tooltip.Content>
89 |                 </Tooltip.Root>
90 |             </Label>
91 |             <Switch {...args} id="switch" aria-labelledby="label" />
92 |         </>
93 |     ),
94 | };
95 | 
96 | export const ExternallyControlled: Story = {
97 |     render: (args) => {
98 |         const [checked, setChecked] = useState(false);
99 | 
100 |         const onChange = (checked: boolean) => {
101 |             setChecked(checked);
102 |         };
103 | 
104 |         return <Switch value={checked} onChange={onChange} {...args} />;
105 |     },
106 | };
107 | 
108 | export const Size: Story = {
109 |     render: (args) => (
110 |         <>
111 |             <Switch {...args} size="small" />
112 |             <Switch {...args} size="medium" />
113 |             <Switch {...args} size="large" />
114 |         </>
115 |     ),
116 | };
```

Table.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconFunnel, IconMagnifier, IconPen, IconTrashBin } from '@frontify/fondue-icons';
4 | import { type Meta, type StoryObj } from '@storybook/react';
5 | import { useState, useMemo, type FormEvent } from 'react';
6 | 
7 | import { Button } from '../Button/Button';
8 | import { Checkbox } from '../Checkbox/Checkbox';
9 | import { Dropdown } from '../Dropdown/Dropdown';
10 | import { Flex } from '../Flex/Flex';
11 | import { Switch } from '../Switch/Switch';
12 | import { TextInput } from '../TextInput/TextInput';
13 | 
14 | import { Table, TableHeader, TableRoot, TableHeaderCell, TableBody, TableRow, TableRowCell } from './Table';
15 | 
16 | type Story = StoryObj<typeof meta>;
17 | const meta: Meta<typeof TableRoot> = {
18 |     component: TableRoot,
19 |     subcomponents: {
20 |         // @ts-expect-error Storybook types are incorrect
21 |         'Table.Header': TableHeader,
22 |         // @ts-expect-error Storybook types are incorrect
23 |         'Table.HeaderCell': TableHeaderCell,
24 |         // @ts-expect-error Storybook types are incorrect
25 |         'Table.Body': TableBody,
26 |         // @ts-expect-error Storybook types are incorrect
27 |         'Table.Row': TableRow,
28 |         // @ts-expect-error Storybook types are incorrect
29 |         'Table.RowCell': TableRowCell,
30 |     },
31 |     tags: ['autodocs'],
32 |     parameters: {
33 |         status: {
34 |             type: 'released',
35 |         },
36 |     },
37 |     args: {
38 |         'aria-label': 'User Management Table',
39 |     },
40 |     argTypes: {
41 |         layout: {
42 |             control: {
43 |                 type: 'select',
44 |                 options: ['auto', 'fixed'],
45 |             },
46 |             defaultValue: 'auto',
47 |         },
48 |     },
49 | };
50 | 
51 | export default meta;
52 | 
53 | const TABLE_DATA = [
54 |     {
55 |         id: 1,
56 |         firstName: 'Chris',
57 |         lastName: 'Glasser',
58 |         name: 'Chris Glasser',
59 |         age: 32,
60 |         role: 'Senior Developer',
61 |         email: 'c.a.glasser@outlook.com',
62 |         invited: 'Rhonda Rhodes',
63 |         lastSeen: 'Oct 23, 2024',
64 |         initialLogin: 'SSO',
65 |         lastLogin: 'SSO',
66 |         twoFa: true,
67 |     },
68 |     {
69 |         id: 2,
70 |         firstName: 'David',
71 |         lastName: 'Elson',
72 |         name: 'David Elson',
73 |         age: 28,
74 |         role: 'Product Manager',
75 |         email: 'david29@gmail.com',
76 |         invited: 'Rodger Struck',
77 |         lastSeen: 'Oct 21, 2024',
78 |         initialLogin: 'SSO',
79 |         lastLogin: 'SSO',
80 |         twoFa: true,
81 |     },
82 |     {
83 |         id: 3,
84 |         firstName: 'Eddie',
85 |         lastName: 'Lake',
86 |         name: 'Eddie Lake',
87 |         age: 35,
88 |         role: 'UX Designer',
89 |         email: 'eddie_lake@gmail.com',
90 |         invited: 'Frances Swann',
91 |         lastSeen: 'Nov 11, 2024',
92 |         initialLogin: 'SSO',
93 |         lastLogin: 'SSO',
94 |         twoFa: true,
95 |     },
96 |     {
97 |         id: 4,
98 |         firstName: 'James',
99 |         lastName: 'Hall',
100 |         name: 'James Hall',
101 |         age: 41,
102 |         role: 'Technical Lead',
103 |         email: 'james_hall@gmail.com',
104 |         invited: 'Alex Buckmaster',
105 |         lastSeen: 'Nov 12, 2024',
106 |         initialLogin: 'SSO',
107 |         lastLogin: 'SSO',
108 |         twoFa: true,
109 |     },
110 |     {
111 |         id: 5,
112 |         firstName: 'Jerry',
113 |         lastName: 'Helfer',
114 |         name: 'Jerry Helfer',
115 |         age: 39,
116 |         role: 'Frontend Developer',
117 |         email: 'jerry73@aol.com',
118 |         invited: 'Bradley Lawlor',
119 |         lastSeen: 'Nov 1, 2024',
120 |         initialLogin: 'SSO',
121 |         lastLogin: 'SSO',
122 |         twoFa: true,
123 |     },
124 | ];
125 | 
126 | export const Basic: Story = {
127 |     render: ({ ...args }) => (
128 |         <Table.Root {...args}>
129 |             <Table.Header>
130 |                 <Table.Row>
131 |                     <Table.HeaderCell>Name</Table.HeaderCell>
132 |                     <Table.HeaderCell>Admin</Table.HeaderCell>
133 |                     <Table.HeaderCell>Invited by</Table.HeaderCell>
134 |                     <Table.HeaderCell>Last seen</Table.HeaderCell>
135 |                     <Table.HeaderCell>Initial login</Table.HeaderCell>
136 |                     <Table.HeaderCell>Last login</Table.HeaderCell>
137 |                     <Table.HeaderCell>2FA</Table.HeaderCell>
138 |                     <Table.HeaderCell>Analytics access</Table.HeaderCell>
139 |                     <Table.HeaderCell>Actions</Table.HeaderCell>
140 |                 </Table.Row>
141 |             </Table.Header>
142 |             <Table.Body>
143 |                 {TABLE_DATA.map((user) => (
144 |                     <Table.Row key={user.email}>
145 |                         <Table.RowCell>
146 |                             <div className="flex items-center gap-2">
147 |                                 <div>
148 |                                     <div className="font-medium">{user.name}</div>
149 |                                     <div className="text-sm text-gray-500">{user.email}</div>
150 |                                 </div>
151 |                             </div>
152 |                         </Table.RowCell>
153 |                         <Table.RowCell>
154 |                             <Switch size="small" aria-label="Admin" />
155 |                         </Table.RowCell>
156 |                         <Table.RowCell>{user.invited}</Table.RowCell>
157 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
158 |                         <Table.RowCell>{user.initialLogin}</Table.RowCell>
159 |                         <Table.RowCell>{user.lastLogin}</Table.RowCell>
160 |                         <Table.RowCell>{user.twoFa ? 'Yes' : 'No'}</Table.RowCell>
161 |                         <Table.RowCell>
162 |                             <Switch size="small" aria-label="Analytics" />
163 |                         </Table.RowCell>
164 | 
165 |                         <Table.RowCell>
166 |                             <Flex gap="0.25rem">
167 |                                 <Button size="small" aspect="square" emphasis="weak">
168 |                                     <IconPen size={16} />
169 |                                 </Button>
170 |                                 <Button variant="danger" size="small" aspect="square" emphasis="weak">
171 |                                     <IconTrashBin size={16} />
172 |                                 </Button>
173 |                             </Flex>
174 |                         </Table.RowCell>
175 |                     </Table.Row>
176 |                 ))}
177 |             </Table.Body>
178 |         </Table.Root>
179 |     ),
180 | };
181 | 
182 | export const AutoLayout: Story = {
183 |     render: ({ ...args }) => (
184 |         <Table.Root {...args}>
185 |             <Table.Header>
186 |                 <tr>
187 |                     <Table.HeaderCell width="100px">Name</Table.HeaderCell>
188 |                     <Table.HeaderCell>Role</Table.HeaderCell>
189 |                     <Table.HeaderCell>Last Seen</Table.HeaderCell>
190 |                 </tr>
191 |             </Table.Header>
192 |             <Table.Body>
193 |                 {TABLE_DATA.map((user) => (
194 |                     <Table.Row key={user.id}>
195 |                         <Table.RowCell>{user.name}</Table.RowCell>
196 |                         <Table.RowCell>{user.role}</Table.RowCell>
197 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
198 |                     </Table.Row>
199 |                 ))}
200 |             </Table.Body>
201 |         </Table.Root>
202 |     ),
203 | };
204 | 
205 | export const FixedLayout: Story = {
206 |     render: ({ ...args }) => (
207 |         <Table.Root {...args} layout="fixed">
208 |             <Table.Header>
209 |                 <tr>
210 |                     <Table.HeaderCell width="100px">Name</Table.HeaderCell>
211 |                     <Table.HeaderCell>Role</Table.HeaderCell>
212 |                     <Table.HeaderCell>Last Seen</Table.HeaderCell>
213 |                 </tr>
214 |             </Table.Header>
215 |             <Table.Body>
216 |                 {TABLE_DATA.map((user) => (
217 |                     <Table.Row key={user.id}>
218 |                         <Table.RowCell>{user.name}</Table.RowCell>
219 |                         <Table.RowCell>{user.role}</Table.RowCell>
220 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
221 |                     </Table.Row>
222 |                 ))}
223 |             </Table.Body>
224 |         </Table.Root>
225 |     ),
226 | };
227 | 
228 | export const Sortable: Story = {
229 |     render: ({ ...args }) => {
230 |         const [sortField, setSortField] = useState<string | null>(null);
231 |         const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>();
232 | 
233 |         const sortedUsers = [...TABLE_DATA].sort((a, b) => {
234 |             if (!sortField || !sortDirection) {
235 |                 return 0;
236 |             }
237 | 
238 |             const aValue = a[sortField as keyof typeof a];
239 |             const bValue = b[sortField as keyof typeof b];
240 | 
241 |             if (sortDirection === 'ascending') {
242 |                 return aValue > bValue ? 1 : -1;
243 |             } else {
244 |                 return aValue < bValue ? 1 : -1;
245 |             }
246 |         });
247 | 
248 |         return (
249 |             <Table.Root {...args}>
250 |                 <Table.Header>
251 |                     <Table.Row>
252 |                         <Table.HeaderCell
253 |                             sortDirection={sortField === 'name' ? sortDirection : undefined}
254 |                             onSortChange={(direction) => {
255 |                                 setSortField('name');
256 |                                 setSortDirection(direction);
257 |                             }}
258 |                         >
259 |                             Name
260 |                         </Table.HeaderCell>
261 |                         <Table.HeaderCell
262 |                             sortDirection={sortField === 'invited' ? sortDirection : undefined}
263 |                             onSortChange={(direction) => {
264 |                                 setSortField('invited');
265 |                                 setSortDirection(direction);
266 |                             }}
267 |                         >
268 |                             Invited by
269 |                         </Table.HeaderCell>
270 |                         <Table.HeaderCell
271 |                             sortDirection={sortField === 'lastSeen' ? sortDirection : undefined}
272 |                             onSortChange={(direction) => {
273 |                                 setSortField('lastSeen');
274 |                                 setSortDirection(direction);
275 |                             }}
276 |                         >
277 |                             Last seen
278 |                         </Table.HeaderCell>
279 |                         {/* Other columns without sorting */}
280 |                     </Table.Row>
281 |                 </Table.Header>
282 |                 <Table.Body>
283 |                     {sortedUsers.map((user) => (
284 |                         <Table.Row key={user.email}>
285 |                             <Table.RowCell>
286 |                                 <div className="flex items-center gap-2">
287 |                                     <div>
288 |                                         <div className="font-medium">{user.name}</div>
289 |                                         <div className="text-sm text-gray-500">{user.email}</div>
290 |                                     </div>
291 |                                 </div>
292 |                             </Table.RowCell>
293 |                             <Table.RowCell>{user.invited}</Table.RowCell>
294 |                             <Table.RowCell>{user.lastSeen}</Table.RowCell>
295 |                         </Table.Row>
296 |                     ))}
297 |                 </Table.Body>
298 |             </Table.Root>
299 |         );
300 |     },
301 | };
302 | 
303 | export const StickyHead: Story = {
304 |     render: ({ ...args }) => (
305 |         <Table.Root {...args} sticky="head">
306 |             <Table.Header>
307 |                 <Table.Row>
308 |                     <Table.HeaderCell width="250px">Name</Table.HeaderCell>
309 |                     <Table.HeaderCell width="150px">Invited by</Table.HeaderCell>
310 |                     <Table.HeaderCell width="120px">Last seen</Table.HeaderCell>
311 |                     <Table.HeaderCell width="120px">Initial login</Table.HeaderCell>
312 |                     <Table.HeaderCell width="120px">Last login</Table.HeaderCell>
313 |                     <Table.HeaderCell width="80px">2FA</Table.HeaderCell>
314 |                 </Table.Row>
315 |             </Table.Header>
316 |             <Table.Body>
317 |                 {[...TABLE_DATA, ...TABLE_DATA, ...TABLE_DATA, ...TABLE_DATA, ...TABLE_DATA, ...TABLE_DATA].map(
318 |                     (user, index) => (
319 |                         <Table.Row key={`${user.email}-${index}`}>
320 |                             <Table.RowCell>
321 |                                 <div className="flex items-center gap-2">
322 |                                     <div>
323 |                                         <div className="font-medium">{user.name}</div>
324 |                                         <div className="text-sm text-gray-500">{user.email}</div>
325 |                                     </div>
326 |                                 </div>
327 |                             </Table.RowCell>
328 |                             <Table.RowCell>{user.invited}</Table.RowCell>
329 |                             <Table.RowCell>{user.lastSeen}</Table.RowCell>
330 |                             <Table.RowCell>{user.initialLogin}</Table.RowCell>
331 |                             <Table.RowCell>{user.lastLogin}</Table.RowCell>
332 |                             <Table.RowCell>{user.twoFa ? 'Yes' : 'No'}</Table.RowCell>
333 |                         </Table.Row>
334 |                     ),
335 |                 )}
336 |             </Table.Body>
337 |         </Table.Root>
338 |     ),
339 | };
340 | 
341 | export const StickyFirstColumn: Story = {
342 |     parameters: {
343 |         viewport: {
344 |             viewports: {
345 |                 mobile: {
346 |                     name: 'Mobile',
347 |                     styles: {
348 |                         width: '320px',
349 |                         height: '600px',
350 |                     },
351 |                 },
352 |             },
353 |             defaultViewport: 'mobile',
354 |         },
355 |     },
356 |     render: ({ ...args }) => (
357 |         <Table.Root {...args} sticky="col">
358 |             <Table.Header>
359 |                 <Table.Row>
360 |                     <Table.HeaderCell>Name</Table.HeaderCell>
361 |                     <Table.HeaderCell>Invited by</Table.HeaderCell>
362 |                     <Table.HeaderCell>Last seen</Table.HeaderCell>
363 |                     <Table.HeaderCell>Initial login</Table.HeaderCell>
364 |                     <Table.HeaderCell>Last login</Table.HeaderCell>
365 |                     <Table.HeaderCell>2FA</Table.HeaderCell>
366 |                 </Table.Row>
367 |             </Table.Header>
368 |             <Table.Body>
369 |                 {TABLE_DATA.map((user) => (
370 |                     <Table.Row key={user.email}>
371 |                         <Table.RowCell>
372 |                             <div className="flex items-center gap-2">
373 |                                 <div>
374 |                                     <div className="font-medium">{user.name}</div>
375 |                                     <div className="text-sm text-gray-500">{user.email}</div>
376 |                                 </div>
377 |                             </div>
378 |                         </Table.RowCell>
379 |                         <Table.RowCell>{user.invited}</Table.RowCell>
380 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
381 |                         <Table.RowCell>{user.initialLogin}</Table.RowCell>
382 |                         <Table.RowCell>{user.lastLogin}</Table.RowCell>
383 |                         <Table.RowCell>{user.twoFa ? 'Yes' : 'No'}</Table.RowCell>
384 |                     </Table.Row>
385 |                 ))}
386 |             </Table.Body>
387 |         </Table.Root>
388 |     ),
389 | };
390 | 
391 | export const StickyHeadAndCol: Story = {
392 |     parameters: {
393 |         viewport: {
394 |             viewports: {
395 |                 mobile: {
396 |                     name: 'Mobile',
397 |                     styles: {
398 |                         width: '320px',
399 |                         height: '600px',
400 |                     },
401 |                 },
402 |             },
403 |             defaultViewport: 'mobile',
404 |         },
405 |     },
406 |     render: ({ ...args }) => (
407 |         <Table.Root {...args} sticky="both">
408 |             <Table.Header>
409 |                 <Table.Row>
410 |                     <Table.HeaderCell>Name</Table.HeaderCell>
411 |                     <Table.HeaderCell>Invited by</Table.HeaderCell>
412 |                     <Table.HeaderCell>Last seen</Table.HeaderCell>
413 |                     <Table.HeaderCell>Initial login</Table.HeaderCell>
414 |                     <Table.HeaderCell>Last login</Table.HeaderCell>
415 |                     <Table.HeaderCell>2FA</Table.HeaderCell>
416 |                 </Table.Row>
417 |             </Table.Header>
418 |             <Table.Body>
419 |                 {[...TABLE_DATA, ...TABLE_DATA, ...TABLE_DATA].map((user) => (
420 |                     <Table.Row key={user.email}>
421 |                         <Table.RowCell>
422 |                             <div className="flex items-center gap-2">
423 |                                 <div>
424 |                                     <div className="font-medium">{user.name}</div>
425 |                                     <div className="text-sm text-gray-500">{user.email}</div>
426 |                                 </div>
427 |                             </div>
428 |                         </Table.RowCell>
429 |                         <Table.RowCell>{user.invited}</Table.RowCell>
430 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
431 |                         <Table.RowCell>{user.initialLogin}</Table.RowCell>
432 |                         <Table.RowCell>{user.lastLogin}</Table.RowCell>
433 |                         <Table.RowCell>{user.twoFa ? 'Yes' : 'No'}</Table.RowCell>
434 |                     </Table.Row>
435 |                 ))}
436 |             </Table.Body>
437 |         </Table.Root>
438 |     ),
439 | };
440 | 
441 | export const Interactive: Story = {
442 |     render: ({ ...args }) => (
443 |         <Table.Root {...args}>
444 |             <Table.Header>
445 |                 <Table.Row>
446 |                     <Table.HeaderCell>Name</Table.HeaderCell>
447 |                     <Table.HeaderCell>Invited by</Table.HeaderCell>
448 |                     <Table.HeaderCell>Last seen</Table.HeaderCell>
449 |                 </Table.Row>
450 |             </Table.Header>
451 |             <Table.Body>
452 |                 {TABLE_DATA.map((user) => (
453 |                     <Table.Row key={user.email} onClick={() => alert(`Clicked on ${user.name}`)}>
454 |                         <Table.RowCell>
455 |                             <div className="flex items-center gap-2">
456 |                                 <div>
457 |                                     <div className="font-medium">{user.name}</div>
458 |                                     <div className="text-sm text-gray-500">{user.email}</div>
459 |                                 </div>
460 |                             </div>
461 |                         </Table.RowCell>
462 |                         <Table.RowCell>{user.invited}</Table.RowCell>
463 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
464 |                     </Table.Row>
465 |                 ))}
466 |             </Table.Body>
467 |         </Table.Root>
468 |     ),
469 | };
470 | 
471 | export const WithLinks: Story = {
472 |     render: ({ ...args }) => (
473 |         <Table.Root {...args}>
474 |             <Table.Header>
475 |                 <Table.Row>
476 |                     <Table.HeaderCell>Name</Table.HeaderCell>
477 |                     <Table.HeaderCell>Invited by</Table.HeaderCell>
478 |                     <Table.HeaderCell>Last seen</Table.HeaderCell>
479 |                 </Table.Row>
480 |             </Table.Header>
481 |             <Table.Body>
482 |                 {TABLE_DATA.map((user) => (
483 |                     <Table.Row
484 |                         key={user.email}
485 |                         href={`/users/${user.email}`}
486 |                         onNavigate={(href) => alert(`Navigating to ${href}`)}
487 |                     >
488 |                         <Table.RowCell>
489 |                             <div className="flex items-center gap-2">
490 |                                 <div>
491 |                                     <div className="font-medium">{user.name}</div>
492 |                                     <div className="text-sm text-gray-500">{user.email}</div>
493 |                                 </div>
494 |                             </div>
495 |                         </Table.RowCell>
496 |                         <Table.RowCell>{user.invited}</Table.RowCell>
497 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
498 |                     </Table.Row>
499 |                 ))}
500 |             </Table.Body>
501 |         </Table.Root>
502 |     ),
503 | };
504 | 
505 | export const Disabled: Story = {
506 |     render: ({ ...args }) => (
507 |         <Table.Root {...args}>
508 |             <Table.Header>
509 |                 <Table.Row>
510 |                     <Table.HeaderCell>Name</Table.HeaderCell>
511 |                     <Table.HeaderCell>Invited by</Table.HeaderCell>
512 |                     <Table.HeaderCell>Last seen</Table.HeaderCell>
513 |                 </Table.Row>
514 |             </Table.Header>
515 |             <Table.Body>
516 |                 {TABLE_DATA.map((user, index) => (
517 |                     <Table.Row
518 |                         key={user.email}
519 |                         onClick={() => alert(`Clicked on ${user.name}`)}
520 |                         disabled={index % 3 === 0}
521 |                     >
522 |                         <Table.RowCell>
523 |                             <div className="flex items-center gap-2">
524 |                                 <div>
525 |                                     <div className="font-medium">{user.name}</div>
526 |                                     <div className="text-sm text-gray-500">{user.email}</div>
527 |                                 </div>
528 |                             </div>
529 |                         </Table.RowCell>
530 |                         <Table.RowCell>{user.invited}</Table.RowCell>
531 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
532 |                     </Table.Row>
533 |                 ))}
534 |             </Table.Body>
535 |         </Table.Root>
536 |     ),
537 | };
538 | 
539 | export const WithCaption: Story = {
540 |     render: ({ ...args }) => (
541 |         <Table.Root {...args}>
542 |             <Table.Caption>User Management Dashboard</Table.Caption>
543 |             <Table.Header>
544 |                 <Table.Row>
545 |                     <Table.HeaderCell>Name</Table.HeaderCell>
546 |                     <Table.HeaderCell>Invited by</Table.HeaderCell>
547 |                     <Table.HeaderCell>Last seen</Table.HeaderCell>
548 |                 </Table.Row>
549 |             </Table.Header>
550 |             <Table.Body>
551 |                 {TABLE_DATA.slice(0, 5).map((user) => (
552 |                     <Table.Row key={user.email}>
553 |                         <Table.RowCell>
554 |                             <div className="flex items-center gap-2">
555 |                                 <div>
556 |                                     <div className="font-medium">{user.name}</div>
557 |                                     <div className="text-sm text-gray-500">{user.email}</div>
558 |                                 </div>
559 |                             </div>
560 |                         </Table.RowCell>
561 |                         <Table.RowCell>{user.invited}</Table.RowCell>
562 |                         <Table.RowCell>{user.lastSeen}</Table.RowCell>
563 |                     </Table.Row>
564 |                 ))}
565 |             </Table.Body>
566 |         </Table.Root>
567 |     ),
568 | };
569 | 
570 | export const TruncatedContent: Story = {
571 |     render: ({ ...args }) => (
572 |         <div style={{ width: '500px' }}>
573 |             <Table.Root {...args}>
574 |                 <Table.Header>
575 |                     <Table.Row>
576 |                         <Table.HeaderCell truncate>Name</Table.HeaderCell>
577 |                         <Table.HeaderCell>Invited by</Table.HeaderCell>
578 |                         <Table.HeaderCell truncate>Last seen</Table.HeaderCell>
579 |                     </Table.Row>
580 |                 </Table.Header>
581 |                 <Table.Body>
582 |                     {TABLE_DATA.slice(0, 5).map((user) => (
583 |                         <Table.Row key={user.email}>
584 |                             <Table.RowCell truncate>{user.name}</Table.RowCell>
585 |                             <Table.RowCell>{user.invited}</Table.RowCell>
586 |                             <Table.RowCell truncate>{user.lastSeen}</Table.RowCell>
587 |                         </Table.Row>
588 |                     ))}
589 |                 </Table.Body>
590 |             </Table.Root>
591 |         </div>
592 |     ),
593 | };
594 | 
595 | export const WithSearchAndFilters: Story = {
596 |     render: ({ ...args }) => {
597 |         const [searchTerm, setSearchTerm] = useState('');
598 |         const [ageFilter, setAgeFilter] = useState<'all' | 'young' | 'old'>('all');
599 | 
600 |         const filteredAndSortedData = useMemo(() => {
601 |             let result = [...TABLE_DATA];
602 | 
603 |             if (searchTerm) {
604 |                 result = result.filter(
605 |                     (user) =>
606 |                         user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
607 |                         user.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
608 |                 );
609 |             }
610 | 
611 |             if (ageFilter !== 'all') {
612 |                 result = result.filter((user) => (ageFilter === 'young' ? user.age < 30 : user.age >= 30));
613 |             }
614 | 
615 |             return result;
616 |         }, [searchTerm, ageFilter]);
617 | 
618 |         return (
619 |             <Flex direction="column" gap="1rem">
620 |                 <Flex gap="1rem">
621 |                     <TextInput
622 |                         placeholder="Search..."
623 |                         value={searchTerm}
624 |                         onChange={(e) => setSearchTerm(e.target.value)}
625 |                     >
626 |                         <TextInput.Slot>
627 |                             <IconMagnifier size="16" />
628 |                         </TextInput.Slot>
629 |                     </TextInput>
630 |                     <Dropdown.Root>
631 |                         <Dropdown.Trigger>
632 |                             <Button emphasis="default">
633 |                                 <IconFunnel size="16" />
634 |                                 Filter by age
635 |                             </Button>
636 |                         </Dropdown.Trigger>
637 |                         <Dropdown.Content>
638 |                             <Dropdown.Item onSelect={() => setAgeFilter('all')}>All</Dropdown.Item>
639 |                             <Dropdown.Item onSelect={() => setAgeFilter('young')}>Young</Dropdown.Item>
640 |                             <Dropdown.Item onSelect={() => setAgeFilter('old')}>Old</Dropdown.Item>
641 |                         </Dropdown.Content>
642 |                     </Dropdown.Root>
643 |                 </Flex>
644 | 
645 |                 <Table.Root {...args}>
646 |                     <Table.Header>
647 |                         <Table.Row>
648 |                             <Table.HeaderCell>Name</Table.HeaderCell>
649 |                             <Table.HeaderCell>Age</Table.HeaderCell>
650 |                             <Table.HeaderCell>Role</Table.HeaderCell>
651 |                         </Table.Row>
652 |                     </Table.Header>
653 |                     <Table.Body>
654 |                         {filteredAndSortedData.map((user) => (
655 |                             <Table.Row key={user.id} onClick={() => console.log(`View details for ${user.firstName}`)}>
656 |                                 <Table.RowCell>{user.name}</Table.RowCell>
657 |                                 <Table.RowCell>{user.age}</Table.RowCell>
658 |                                 <Table.RowCell>{user.role}</Table.RowCell>
659 |                             </Table.Row>
660 |                         ))}
661 |                     </Table.Body>
662 |                 </Table.Root>
663 |             </Flex>
664 |         );
665 |     },
666 | };
667 | 
668 | export const WithSelection: Story = {
669 |     render: ({ ...args }) => {
670 |         const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
671 | 
672 |         const handleSelectAll = () => {
673 |             if (selectedRows.size === TABLE_DATA.length) {
674 |                 setSelectedRows(new Set());
675 |             } else {
676 |                 setSelectedRows(new Set(TABLE_DATA.map((user) => user.id)));
677 |             }
678 |         };
679 | 
680 |         const handleSelectRow = (event: FormEvent<HTMLButtonElement>, id: number) => {
681 |             event.stopPropagation();
682 |             const newSelection = new Set(selectedRows);
683 |             if (newSelection.has(id)) {
684 |                 newSelection.delete(id);
685 |             } else {
686 |                 newSelection.add(id);
687 |             }
688 |             setSelectedRows(newSelection);
689 |         };
690 | 
691 |         const isAllSelected = selectedRows.size === TABLE_DATA.length;
692 |         const isPartiallySelected = selectedRows.size > 0 && selectedRows.size < TABLE_DATA.length;
693 | 
694 |         return (
695 |             <Table.Root {...args}>
696 |                 <Table.Header>
697 |                     <Table.Row>
698 |                         <Table.HeaderCell>
699 |                             <Checkbox
700 |                                 value={isPartiallySelected ? 'indeterminate' : isAllSelected}
701 |                                 onChange={handleSelectAll}
702 |                             />
703 |                         </Table.HeaderCell>
704 |                         <Table.HeaderCell>Name</Table.HeaderCell>
705 |                         <Table.HeaderCell>Age</Table.HeaderCell>
706 |                     </Table.Row>
707 |                 </Table.Header>
708 |                 <Table.Body>
709 |                     {TABLE_DATA.map((user) => (
710 |                         <Table.Row
711 |                             key={user.id}
712 |                             selected={selectedRows.has(user.id)}
713 |                             onClick={() => console.log(`View details for ${user.firstName}`)}
714 |                         >
715 |                             <Table.RowCell>
716 |                                 <Checkbox
717 |                                     value={selectedRows.has(user.id)}
718 |                                     onChange={(event) => handleSelectRow(event, user.id)}
719 |                                 />
720 |                             </Table.RowCell>
721 |                             <Table.RowCell>{user.name}</Table.RowCell>
722 |                             <Table.RowCell>{user.age}</Table.RowCell>
723 |                         </Table.Row>
724 |                     ))}
725 |                 </Table.Body>
726 |             </Table.Root>
727 |         );
728 |     },
729 | };
730 | 
731 | export const CellAlignments: Story = {
732 |     name: 'Cell Alignment Options',
733 |     render: ({ ...args }) => (
734 |         <Table.Root {...args}>
735 |             <Table.Header>
736 |                 <Table.Row>
737 |                     <Table.HeaderCell align="left">Left Header</Table.HeaderCell>
738 |                     <Table.HeaderCell align="center">Centered Header</Table.HeaderCell>
739 |                     <Table.HeaderCell align="right">Right Header</Table.HeaderCell>
740 |                     <Table.HeaderCell align="left">Mixed Alignment</Table.HeaderCell>
741 |                 </Table.Row>
742 |             </Table.Header>
743 |             <Table.Body>
744 |                 {TABLE_DATA.map((user) => (
745 |                     <Table.Row key={user.id}>
746 |                         <Table.RowCell align="left">{user.firstName}</Table.RowCell>
747 |                         <Table.RowCell align="center">{user.role}</Table.RowCell>
748 |                         <Table.RowCell align="right">{user.age}</Table.RowCell>
749 |                         <Table.RowCell>
750 |                             <Flex justify="space-between" align="center">
751 |                                 <span>{user.invited}</span>
752 |                                 <span>{user.lastLogin}</span>
753 |                             </Flex>
754 |                         </Table.RowCell>
755 |                     </Table.Row>
756 |                 ))}
757 |             </Table.Body>
758 |         </Table.Root>
759 |     ),
760 | };
761 | 
762 | export const WidthControl: Story = {
763 |     render: ({ ...args }) => (
764 |         <div style={{ width: '800px' }}>
765 |             <Table.Root {...args} layout="fixed">
766 |                 <Table.Header>
767 |                     <Table.Row>
768 |                         <Table.HeaderCell width="100px">Fixed Width & No Shrink</Table.HeaderCell>
769 |                         <Table.HeaderCell width="100px" truncate>
770 |                             Truncated Very Long Header Title That Should Be Cut Off
771 |                         </Table.HeaderCell>
772 |                         <Table.HeaderCell width="50%">Percentage Width</Table.HeaderCell>
773 |                         <Table.HeaderCell>Auto Width</Table.HeaderCell>
774 |                     </Table.Row>
775 |                 </Table.Header>
776 |                 <Table.Body>
777 |                     {TABLE_DATA.map((user) => (
778 |                         <Table.Row key={user.id}>
779 |                             <Table.RowCell>Fixed Width Content</Table.RowCell>
780 |                             <Table.RowCell truncate>
781 |                                 {`${user.firstName} ${user.lastName} - ${user.role} - ${user.lastLogin}`}
782 |                             </Table.RowCell>
783 |                             <Table.RowCell>Normal Cell</Table.RowCell>
784 |                             <Table.RowCell>Auto Width Content</Table.RowCell>
785 |                         </Table.Row>
786 |                     ))}
787 |                 </Table.Body>
788 |             </Table.Root>
789 |         </div>
790 |     ),
791 | };
```

Tabs.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconIcon } from '@frontify/fondue-icons';
4 | import { action } from '@storybook/addon-actions';
5 | import { type Meta, type StoryObj } from '@storybook/react';
6 | import { useState } from 'react';
7 | 
8 | import { Tabs, TabsContent, TabsRoot, TabsTab, TabsTrigger } from './Tabs';
9 | 
10 | type Story = StoryObj<typeof meta>;
11 | 
12 | const meta: Meta<typeof TabsRoot> = {
13 |     title: 'Components/Tabs',
14 |     component: TabsRoot,
15 |     subcomponents: {
16 |         // @ts-expect-error Storybook types are incorrect
17 |         'Tabs.Tab': TabsTab,
18 |         // @ts-expect-error Storybook types are incorrect
19 |         'Tabs.Trigger': TabsTrigger,
20 |         // @ts-expect-error Storybook types are incorrect
21 |         'Tabs.Content': TabsContent,
22 |     },
23 |     tags: ['autodocs'],
24 |     parameters: {
25 |         status: {
26 |             type: 'released',
27 |         },
28 |     },
29 |     args: {
30 |         onActiveTabChange: action('onActiveTabChange'),
31 |     },
32 | };
33 | 
34 | export const Default: Story = {
35 |     render: (args) => (
36 |         <Tabs.Root {...args}>
37 |             <Tabs.Tab value="first">
38 |                 <Tabs.Trigger>First Tab</Tabs.Trigger>
39 |                 <Tabs.Content>
40 |                     <b>First Content</b>
41 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
42 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
43 |                     aliquip ex ea commodo consequat.
44 |                 </Tabs.Content>
45 |             </Tabs.Tab>
46 |             <Tabs.Tab value="second">
47 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
48 |                 <Tabs.Content>
49 |                     <b>Second Content</b>
50 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
51 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
52 |                     aliquip ex ea commodo consequat.
53 |                 </Tabs.Content>
54 |             </Tabs.Tab>
55 |             <Tabs.Tab value="third">
56 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
57 |                 <Tabs.Content>
58 |                     <b>Third Content</b>
59 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
60 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
61 |                     aliquip ex ea commodo consequat.
62 |                 </Tabs.Content>
63 |             </Tabs.Tab>
64 |         </Tabs.Root>
65 |     ),
66 | };
67 | 
68 | export const WithDefaultActiveTab: Story = {
69 |     args: {
70 |         defaultActiveTab: 'second',
71 |     },
72 |     render: (args) => (
73 |         <Tabs.Root {...args}>
74 |             <Tabs.Tab value="first">
75 |                 <Tabs.Trigger>First Tab</Tabs.Trigger>
76 |                 <Tabs.Content>
77 |                     <b>First Content</b>
78 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
79 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
80 |                     aliquip ex ea commodo consequat.
81 |                 </Tabs.Content>
82 |             </Tabs.Tab>
83 |             <Tabs.Tab value="second">
84 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
85 |                 <Tabs.Content>
86 |                     <b>Second Content</b>
87 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
88 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
89 |                     aliquip ex ea commodo consequat.
90 |                 </Tabs.Content>
91 |             </Tabs.Tab>
92 |             <Tabs.Tab value="third">
93 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
94 |                 <Tabs.Content>
95 |                     <b>Third Content</b>
96 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
97 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
98 |                     aliquip ex ea commodo consequat.
99 |                 </Tabs.Content>
100 |             </Tabs.Tab>
101 |         </Tabs.Root>
102 |     ),
103 | };
104 | 
105 | export const ExternallyControlled: Story = {
106 |     args: {
107 |         defaultActiveTab: 'second',
108 |     },
109 |     render: (args) => {
110 |         const [activeTab, setActiveTab] = useState('second');
111 |         return (
112 |             <Tabs.Root {...args} activeTab={activeTab} onActiveTabChange={setActiveTab}>
113 |                 <Tabs.Tab value="first">
114 |                     <Tabs.Trigger>First Tab</Tabs.Trigger>
115 |                     <Tabs.Content>
116 |                         <b>First Content</b>
117 |                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
118 |                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
119 |                         laboris nisi ut aliquip ex ea commodo consequat.
120 |                     </Tabs.Content>
121 |                 </Tabs.Tab>
122 |                 <Tabs.Tab value="second">
123 |                     <Tabs.Trigger>Second Tab</Tabs.Trigger>
124 |                     <Tabs.Content>
125 |                         <b>Second Content</b>
126 |                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
127 |                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
128 |                         laboris nisi ut aliquip ex ea commodo consequat.
129 |                     </Tabs.Content>
130 |                 </Tabs.Tab>
131 |                 <Tabs.Tab value="third">
132 |                     <Tabs.Trigger>Third Tab</Tabs.Trigger>
133 |                     <Tabs.Content>
134 |                         <b>Third Content</b>
135 |                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
136 |                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
137 |                         laboris nisi ut aliquip ex ea commodo consequat.
138 |                     </Tabs.Content>
139 |                 </Tabs.Tab>
140 |             </Tabs.Root>
141 |         );
142 |     },
143 | };
144 | 
145 | export const DisabledTabs: Story = {
146 |     render: (args) => (
147 |         <Tabs.Root {...args}>
148 |             <Tabs.Tab value="first">
149 |                 <Tabs.Trigger>
150 |                     <span>First Tab</span>
151 |                 </Tabs.Trigger>
152 |                 <Tabs.Content>
153 |                     First Content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
154 |                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
155 |                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
156 |                 </Tabs.Content>
157 |             </Tabs.Tab>
158 |             <Tabs.Tab value="second" disabled>
159 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
160 |                 <Tabs.Content>
161 |                     <b>Second Content</b>
162 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
163 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
164 |                     aliquip ex ea commodo consequat.
165 |                 </Tabs.Content>
166 |             </Tabs.Tab>
167 |             <Tabs.Tab value="third" disabled>
168 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
169 |                 <Tabs.Content>
170 |                     <b>Third Content</b>
171 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
172 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
173 |                     aliquip ex ea commodo consequat.
174 |                 </Tabs.Content>
175 |             </Tabs.Tab>
176 |         </Tabs.Root>
177 |     ),
178 | };
179 | 
180 | export const WithDecorator: Story = {
181 |     render: (args) => (
182 |         <Tabs.Root {...args}>
183 |             <Tabs.Tab value="first">
184 |                 <Tabs.Trigger>
185 |                     <IconIcon size={20} />
186 |                     First Tab
187 |                 </Tabs.Trigger>
188 |                 <Tabs.Content>
189 |                     <b>First Content</b>
190 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
191 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
192 |                     aliquip ex ea commodo consequat.
193 |                 </Tabs.Content>
194 |             </Tabs.Tab>
195 |             <Tabs.Tab value="second">
196 |                 <Tabs.Trigger>
197 |                     Second Tab
198 |                     <IconIcon size={20} />
199 |                 </Tabs.Trigger>
200 |                 <Tabs.Content>
201 |                     <b>Second Content</b>
202 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
203 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
204 |                     aliquip ex ea commodo consequat.
205 |                 </Tabs.Content>
206 |             </Tabs.Tab>
207 |             <Tabs.Tab value="third" disabled>
208 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
209 |                 <Tabs.Content>
210 |                     <b>Third Content</b>
211 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
212 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
213 |                     aliquip ex ea commodo consequat.
214 |                 </Tabs.Content>
215 |             </Tabs.Tab>
216 |         </Tabs.Root>
217 |     ),
218 | };
219 | 
220 | export const WithNoPadding: Story = {
221 |     args: {
222 |         padding: 'comfortable',
223 |     },
224 | 
225 |     render: (args) => (
226 |         <Tabs.Root padding="none" {...args}>
227 |             <Tabs.Tab value="first">
228 |                 <Tabs.Trigger>First Tab</Tabs.Trigger>
229 |                 <Tabs.Content>
230 |                     <b>First Content</b>
231 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
232 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
233 |                     aliquip ex ea commodo consequat.
234 |                 </Tabs.Content>
235 |             </Tabs.Tab>
236 |             <Tabs.Tab value="second">
237 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
238 |                 <Tabs.Content>
239 |                     <b>Second Content</b>
240 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
241 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
242 |                     aliquip ex ea commodo consequat.
243 |                 </Tabs.Content>
244 |             </Tabs.Tab>
245 |             <Tabs.Tab value="third">
246 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
247 |                 <Tabs.Content>
248 |                     <b>Third Content</b>
249 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
250 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
251 |                     aliquip ex ea commodo consequat.
252 |                 </Tabs.Content>
253 |             </Tabs.Tab>
254 |         </Tabs.Root>
255 |     ),
256 | };
257 | 
258 | export const WithTightPadding: Story = {
259 |     render: (args) => (
260 |         <Tabs.Root padding="tight" {...args}>
261 |             <Tabs.Tab value="first">
262 |                 <Tabs.Trigger>First Tab</Tabs.Trigger>
263 |                 <Tabs.Content>
264 |                     <b>First Content</b>
265 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
266 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
267 |                     aliquip ex ea commodo consequat.
268 |                 </Tabs.Content>
269 |             </Tabs.Tab>
270 |             <Tabs.Tab value="second">
271 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
272 |                 <Tabs.Content>
273 |                     <b>Second Content</b>
274 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
275 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
276 |                     aliquip ex ea commodo consequat.
277 |                 </Tabs.Content>
278 |             </Tabs.Tab>
279 |             <Tabs.Tab value="third">
280 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
281 |                 <Tabs.Content>
282 |                     <b>Third Content</b>
283 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
284 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
285 |                     aliquip ex ea commodo consequat.
286 |                 </Tabs.Content>
287 |             </Tabs.Tab>
288 |         </Tabs.Root>
289 |     ),
290 | };
291 | 
292 | export const WithCompactPadding: Story = {
293 |     render: (args) => (
294 |         <Tabs.Root padding="compact" {...args}>
295 |             <Tabs.Tab value="first">
296 |                 <Tabs.Trigger>First Tab</Tabs.Trigger>
297 |                 <Tabs.Content>
298 |                     <b>First Content</b>
299 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
300 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
301 |                     aliquip ex ea commodo consequat.
302 |                 </Tabs.Content>
303 |             </Tabs.Tab>
304 |             <Tabs.Tab value="second">
305 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
306 |                 <Tabs.Content>
307 |                     <b>Second Content</b>
308 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
309 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
310 |                     aliquip ex ea commodo consequat.
311 |                 </Tabs.Content>
312 |             </Tabs.Tab>
313 |             <Tabs.Tab value="third">
314 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
315 |                 <Tabs.Content>
316 |                     <b>Third Content</b>
317 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
318 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
319 |                     aliquip ex ea commodo consequat.
320 |                 </Tabs.Content>
321 |             </Tabs.Tab>
322 |         </Tabs.Root>
323 |     ),
324 | };
325 | 
326 | export const WithComfortablePadding: Story = {
327 |     render: (args) => (
328 |         <Tabs.Root padding="comfortable" {...args}>
329 |             <Tabs.Tab value="first">
330 |                 <Tabs.Trigger>First Tab</Tabs.Trigger>
331 |                 <Tabs.Content>
332 |                     <b>First Content</b>
333 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
334 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
335 |                     aliquip ex ea commodo consequat.
336 |                 </Tabs.Content>
337 |             </Tabs.Tab>
338 |             <Tabs.Tab value="second">
339 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
340 |                 <Tabs.Content>
341 |                     <b>Second Content</b>
342 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
343 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
344 |                     aliquip ex ea commodo consequat.
345 |                 </Tabs.Content>
346 |             </Tabs.Tab>
347 |             <Tabs.Tab value="third">
348 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
349 |                 <Tabs.Content>
350 |                     <b>Third Content</b>
351 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
352 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
353 |                     aliquip ex ea commodo consequat.
354 |                 </Tabs.Content>
355 |             </Tabs.Tab>
356 |         </Tabs.Root>
357 |     ),
358 | };
359 | 
360 | export const WithSpaciousPadding: Story = {
361 |     render: (args) => (
362 |         <Tabs.Root padding="spacious" {...args}>
363 |             <Tabs.Tab value="first">
364 |                 <Tabs.Trigger>First Tab</Tabs.Trigger>
365 |                 <Tabs.Content>
366 |                     <b>First Content</b>
367 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
368 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
369 |                     aliquip ex ea commodo consequat.
370 |                 </Tabs.Content>
371 |             </Tabs.Tab>
372 |             <Tabs.Tab value="second">
373 |                 <Tabs.Trigger>Second Tab</Tabs.Trigger>
374 |                 <Tabs.Content>
375 |                     <b>Second Content</b>
376 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
377 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
378 |                     aliquip ex ea commodo consequat.
379 |                 </Tabs.Content>
380 |             </Tabs.Tab>
381 |             <Tabs.Tab value="third">
382 |                 <Tabs.Trigger>Third Tab</Tabs.Trigger>
383 |                 <Tabs.Content>
384 |                     <b>Third Content</b>
385 |                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
386 |                     et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
387 |                     aliquip ex ea commodo consequat.
388 |                 </Tabs.Content>
389 |             </Tabs.Tab>
390 |         </Tabs.Root>
391 |     ),
392 | };
393 | 
394 | export default meta;
```

TextInput.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconIcon, IconPen } from '@frontify/fondue-icons';
4 | import { action } from '@storybook/addon-actions';
5 | import { type Meta, type StoryObj } from '@storybook/react';
6 | import { type ComponentProps } from 'react';
7 | 
8 | import { Button } from '../Button/Button';
9 | import { Label } from '../Label/Label';
10 | 
11 | import { TextFieldRoot, TextFieldSlot, TextInput } from './TextInput';
12 | 
13 | type Story = StoryObj<typeof meta>;
14 | const meta: Meta<typeof TextFieldRoot> = {
15 |     title: 'Components/Text Input',
16 |     component: TextFieldRoot,
17 |     subcomponents: {
18 |         // @ts-expect-error Storybook types are incorrect
19 |         'TextInput.Slot': TextFieldSlot,
20 |     },
21 |     tags: ['autodocs'],
22 |     parameters: {
23 |         status: {
24 |             type: 'released',
25 |         },
26 |     },
27 |     args: {
28 |         placeholder: 'Placeholder',
29 |         defaultValue: 'Hello from Frontify',
30 |         onChange: action('onChange'),
31 |         onBlur: action('onBlur'),
32 |         onFocus: action('onFocus'),
33 |     },
34 |     render: (args) => {
35 |         // Used to get the correct component in the Storybook for the simple cases (`TextInput` instead of `TextInput.Root`)
36 |         // More complex cases are using the Story `render` function
37 |         const Component = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
38 |         Component.displayName = 'TextInput';
39 |         return <Component {...args} />;
40 |     },
41 | };
42 | export default meta;
43 | 
44 | export const Text: Story = {};
45 | 
46 | export const Password: Story = {
47 |     args: {
48 |         type: 'password',
49 |     },
50 | };
51 | 
52 | export const Disabled: Story = {
53 |     args: {
54 |         disabled: true,
55 |     },
56 |     render: (args) => (
57 |         <>
58 |             <TextInput {...args} />
59 |             <TextInput.Root {...args}>
60 |                 <TextInput.Slot>
61 |                     <IconIcon size={16} />
62 |                 </TextInput.Slot>
63 |                 <TextInput.Slot name="right">
64 |                     <Button aspect="square" rounding="full" emphasis="weak" size="small" disabled>
65 |                         <IconIcon size={16} />
66 |                     </Button>
67 |                 </TextInput.Slot>
68 |             </TextInput.Root>
69 |         </>
70 |     ),
71 |     decorators: [
72 |         (Story) => (
73 |             <div className="tw-flex tw-flex-col tw-gap-4">
74 |                 <Story />
75 |             </div>
76 |         ),
77 |     ],
78 | };
79 | 
80 | export const Readonly: Story = {
81 |     args: {
82 |         readOnly: true,
83 |     },
84 |     render: (args) => (
85 |         <>
86 |             <TextInput {...args} />
87 | 
88 |             <TextInput.Root {...args}>
89 |                 <TextInput.Slot>
90 |                     <IconIcon size={16} />
91 |                 </TextInput.Slot>
92 |                 <TextInput.Slot name="right">
93 |                     {!args.readOnly ? (
94 |                         <Button aspect="square" rounding="full" emphasis="weak" size="small" disabled>
95 |                             <IconIcon size={16} />
96 |                         </Button>
97 |                     ) : null}
98 |                 </TextInput.Slot>
99 |             </TextInput.Root>
100 |         </>
101 |     ),
102 |     decorators: [
103 |         (Story) => (
104 |             <div className="tw-flex tw-flex-col tw-gap-4">
105 |                 <Story />
106 |             </div>
107 |         ),
108 |     ],
109 | };
110 | 
111 | export const WithLeftItem: Story = {
112 |     render: (args) => (
113 |         <TextInput.Root {...args}>
114 |             <TextInput.Slot name="left">
115 |                 <IconIcon size={16} />
116 |             </TextInput.Slot>
117 |         </TextInput.Root>
118 |     ),
119 | };
120 | 
121 | export const WithRightItem: Story = {
122 |     render: (args) => (
123 |         <TextInput.Root {...args}>
124 |             <TextInput.Slot name="right">
125 |                 <IconIcon size={16} />
126 |             </TextInput.Slot>
127 |         </TextInput.Root>
128 |     ),
129 | };
130 | 
131 | export const WithLeftAndRightItem: Story = {
132 |     render: (args) => (
133 |         <TextInput.Root {...args}>
134 |             <TextInput.Slot name="left">
135 |                 <IconPen size={16} />
136 |             </TextInput.Slot>
137 |             <TextInput.Slot name="right">
138 |                 <IconIcon size={16} />
139 |             </TextInput.Slot>
140 |         </TextInput.Root>
141 |     ),
142 | };
143 | 
144 | export const WithButtons: Story = {
145 |     render: (args) => (
146 |         <TextInput.Root {...args}>
147 |             <TextInput.Slot name="right">
148 |                 <Button aspect="square" rounding="full" emphasis="weak" size="small">
149 |                     <IconIcon size={16} />
150 |                 </Button>
151 |                 <Button aspect="square" rounding="full" emphasis="weak" size="small">
152 |                     <IconIcon size={16} />
153 |                 </Button>
154 |             </TextInput.Slot>
155 |         </TextInput.Root>
156 |     ),
157 | };
158 | 
159 | export const WithLabel: Story = {
160 |     render: (args) => (
161 |         <div className="tw-flex tw-flex-col tw-gap-2">
162 |             <Label htmlFor="text-input">Label</Label>
163 | 
164 |             <TextInput.Root {...args} id="text-input">
165 |                 <TextInput.Slot name="left">
166 |                     <IconPen size={16} />
167 |                 </TextInput.Slot>
168 |                 <TextInput.Slot name="right">
169 |                     <IconIcon size={16} />
170 |                 </TextInput.Slot>
171 |             </TextInput.Root>
172 |         </div>
173 |     ),
174 | };
175 | 
176 | export const Success: Story = {
177 |     args: {
178 |         status: 'success',
179 |     },
180 |     render: (args) => (
181 |         <TextInput.Root {...args}>
182 |             <TextInput.Slot name="left">
183 |                 <IconPen size={16} />
184 |             </TextInput.Slot>
185 |             <TextInput.Slot name="right">
186 |                 <IconIcon size={16} />
187 |             </TextInput.Slot>
188 |         </TextInput.Root>
189 |     ),
190 | };
191 | 
192 | export const Errored: Story = {
193 |     args: {
194 |         status: 'error',
195 |     },
196 |     render: (args) => (
197 |         <TextInput.Root {...args}>
198 |             <TextInput.Slot name="left">
199 |                 <IconPen size={16} />
200 |             </TextInput.Slot>
201 |             <TextInput.Slot name="right">
202 |                 <IconIcon size={16} />
203 |             </TextInput.Slot>
204 |         </TextInput.Root>
205 |     ),
206 | };
207 | 
208 | export const Loading: Story = {
209 |     args: {
210 |         status: 'loading',
211 |     },
212 |     render: (args) => (
213 |         <TextInput.Root {...args}>
214 |             <TextInput.Slot name="left">
215 |                 <IconPen size={16} />
216 |             </TextInput.Slot>
217 |             <TextInput.Slot name="right">
218 |                 <IconIcon size={16} />
219 |             </TextInput.Slot>
220 |         </TextInput.Root>
221 |     ),
222 | };
```

Tooltip.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { IconIcon, IconInfo, IconPen } from '@frontify/fondue-icons';
4 | import { type Meta, type StoryObj } from '@storybook/react';
5 | import { useState } from 'react';
6 | 
7 | import { Button } from '../Button/Button';
8 | import { Flex } from '../Flex/Flex';
9 | import { Label } from '../Label/Label';
10 | import { Switch } from '../Switch/Switch';
11 | import { TextInput } from '../TextInput/TextInput';
12 | 
13 | import { Tooltip, TooltipContent, TooltipRoot, TooltipTrigger } from './Tooltip';
14 | 
15 | type Story = StoryObj<typeof TooltipRoot>;
16 | const meta: Meta<typeof TooltipRoot> = {
17 |     component: TooltipRoot,
18 |     title: 'Components/Tooltip',
19 |     subcomponents: {
20 |         // @ts-expect-error - Storybook has the wrong type for TooltipContent
21 |         'Tooltip.Content': TooltipContent,
22 |         // @ts-expect-error - Storybook has the wrong type for TooltipContent
23 |         'Tooltip.Trigger': TooltipTrigger,
24 |     },
25 |     tags: ['autodocs'],
26 |     parameters: {
27 |         status: {
28 |             type: 'released',
29 |         },
30 |     },
31 |     render: ({ ...args }) => {
32 |         return (
33 |             <Tooltip.Root {...args}>
34 |                 <Tooltip.Trigger>
35 |                     <p>Hover over me!</p>
36 |                 </Tooltip.Trigger>
37 |                 <Tooltip.Content>I am a tooltip!</Tooltip.Content>
38 |             </Tooltip.Root>
39 |         );
40 |     },
41 | };
42 | export default meta;
43 | 
44 | export const Default: Story = {
45 |     args: {},
46 | };
47 | 
48 | export const NoDelay: Story = {
49 |     args: {
50 |         enterDelay: 0,
51 |     },
52 | };
53 | 
54 | export const LongDelay: Story = {
55 |     args: {
56 |         enterDelay: 2000,
57 |     },
58 | };
59 | 
60 | export const ControlledComponent: Story = {
61 |     decorators: [
62 |         (Story) => {
63 |             return (
64 |                 <div className="tw-flex tw-gap-4">
65 |                     <Story />
66 |                 </div>
67 |             );
68 |         },
69 |     ],
70 |     render: () => {
71 |         const [isTooltipOpen, setIsTooltipOpen] = useState(false);
72 |         return (
73 |             <>
74 |                 <Tooltip.Root open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
75 |                     <Tooltip.Trigger>
76 |                         <Button>Hover over me!</Button>
77 |                     </Tooltip.Trigger>
78 |                     <Tooltip.Content>I am a tooltip!</Tooltip.Content>
79 |                 </Tooltip.Root>
80 |                 <Button onPress={() => setIsTooltipOpen(true)}>Open Tooltip</Button>
81 |                 <Button onPress={() => setIsTooltipOpen(false)}>Close Tooltip</Button>
82 |             </>
83 |         );
84 |     },
85 | };
86 | 
87 | export const WithSwitch: Story = {
88 |     render: () => (
89 |         <Flex direction="row" gap="4px" align="flex-start">
90 |             <Switch id="switch" aria-label="Hover me!" />
91 |             <Label htmlFor="switch">
92 |                 <Tooltip.Root>
93 |                     <Tooltip.Trigger>
94 |                         <IconInfo size={16} />
95 |                     </Tooltip.Trigger>
96 |                     <Tooltip.Content>I am a tooltip!</Tooltip.Content>
97 |                 </Tooltip.Root>
98 |             </Label>
99 |         </Flex>
100 |     ),
101 | };
102 | 
103 | export const WithTextInput: Story = {
104 |     render: () => (
105 |         <TextInput.Root>
106 |             <TextInput.Slot name="left">
107 |                 <Tooltip.Root>
108 |                     <Tooltip.Trigger>
109 |                         <IconPen size={16} />
110 |                     </Tooltip.Trigger>
111 |                     <Tooltip.Content>I have a pen</Tooltip.Content>
112 |                 </Tooltip.Root>
113 |             </TextInput.Slot>
114 |             <TextInput.Slot name="right">
115 |                 <Tooltip.Root>
116 |                     <Tooltip.Trigger>
117 |                         <IconIcon size={16} />
118 |                     </Tooltip.Trigger>
119 |                     <Tooltip.Content>I am an icon with a tooltip</Tooltip.Content>
120 |                 </Tooltip.Root>
121 |             </TextInput.Slot>
122 |         </TextInput.Root>
123 |     ),
124 | };
125 | 
126 | export const WithButton: Story = {
127 |     render: () => (
128 |         <Tooltip.Root>
129 |             <Tooltip.Trigger asChild={true}>
130 |                 <Button>Hover me!</Button>
131 |             </Tooltip.Trigger>
132 |             <Tooltip.Content>I am a tooltip!</Tooltip.Content>
133 |         </Tooltip.Root>
134 |     ),
135 | };
```

TooltipContent.stories.tsx
```
1 | /* (c) Copyright Frontify Ltd., all rights reserved. */
2 | 
3 | import { type Meta, type StoryObj } from '@storybook/react';
4 | 
5 | import { Button } from '../Button/Button';
6 | 
7 | import { Tooltip, TooltipContent } from './Tooltip';
8 | 
9 | type Story = StoryObj<typeof TooltipContent>;
10 | const meta: Meta<typeof TooltipContent> = {
11 |     component: TooltipContent,
12 |     title: 'Components/Tooltip/Content',
13 |     tags: ['autodocs'],
14 |     args: {
15 |         padding: 'spacious',
16 |         side: 'top',
17 |         maxWidth: '200px',
18 |         children:
19 |             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
20 |     },
21 |     parameters: {
22 |         status: {
23 |             type: 'released',
24 |         },
25 |     },
26 | 
27 |     render: ({ ...args }) => {
28 |         return (
29 |             <Tooltip.Root>
30 |                 <Tooltip.Trigger>
31 |                     <Button>Hover over me!</Button>
32 |                 </Tooltip.Trigger>
33 |                 <Tooltip.Content {...args} />
34 |             </Tooltip.Root>
35 |         );
36 |     },
37 | };
38 | export default meta;
39 | 
40 | export const LongText: Story = {
41 |     args: {},
42 | };
43 | 
44 | export const Compact: Story = {
45 |     args: {
46 |         padding: 'compact',
47 |     },
48 | };
49 | 
50 | export const TopWithCollision: Story = {
51 |     args: {
52 |         side: 'top',
53 |     },
54 | };
55 | 
56 | export const TopWithoutCollision: Story = {
57 |     args: {
58 |         side: 'top',
59 |     },
60 |     render: ({ ...args }) => {
61 |         return (
62 |             <div className="tw-mt-64">
63 |                 <Tooltip.Root>
64 |                     <Tooltip.Trigger>
65 |                         <Button>Hover over me!</Button>
66 |                     </Tooltip.Trigger>
67 |                     <Tooltip.Content {...args} />
68 |                 </Tooltip.Root>
69 |             </div>
70 |         );
71 |     },
72 | };
73 | 
74 | export const LeftWithCollision: Story = {
75 |     args: {
76 |         side: 'left',
77 |     },
78 | };
79 | 
80 | export const LeftWithoutCollision: Story = {
81 |     args: {
82 |         side: 'left',
83 |     },
84 |     render: ({ ...args }) => {
85 |         return (
86 |             <div className="tw-ml-64">
87 |                 <Tooltip.Root>
88 |                     <Tooltip.Trigger>
89 |                         <Button>Hover over me!</Button>
90 |                     </Tooltip.Trigger>
91 |                     <Tooltip.Content {...args} />
92 |                 </Tooltip.Root>
93 |             </div>
94 |         );
95 |     },
96 | };
97 | 
98 | export const Bottom: Story = {
99 |     args: {
100 |         side: 'bottom',
101 |     },
102 | };
103 | 
104 | export const Right: Story = {
105 |     args: {
106 |         side: 'right',
107 |     },
108 | };
109 | 
110 | export const WithMaxWidth: Story = {
111 |     args: {
112 |         maxWidth: '400px',
113 |     },
114 | };
```

