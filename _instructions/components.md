
// File: /Users/florianschulz/dev/fondue/packages/charts/dist/index.d.ts
export declare type BarChartClickHandlerParams<DataPointDetails extends Record<string, any> | void = void> = EventHandlerParams<BarChartDataPoint<DataPointDetails>>;

export declare type BarChartDataPoint<DataPointDetails extends Record<string, any> | void = void> = DataPointDetails extends void ? BarChartDataPointBase : BarChartDataPointBase & {
    details: DataPointDetails;
};

export declare type BarChartProps<DataPointDetails extends Record<string, any> | void = void> = {
    series: BarChartSeries<DataPointDetails>[];
    height: number;
    width?: number;
    displayStyle?: DisplayStyle;
    horizontal?: boolean;
    hideLegend?: boolean;
    allowDecimalTickValues?: boolean;
    legendPosition?: LegendPosition_2;
    valueFormatter?: ValueFormatter;
    labelFormatter?: LabelFormatter;
    onBarClick?: (e: BarChartClickHandlerParams<DataPointDetails>) => void;
};

export declare type BarChartSeries<DataPointDetails extends Record<string, any> | void = void> = {
    name: string;
    dataPoints: BarChartDataPoint<DataPointDetails>[];
};

export declare type ChartHeadingProps = {
    title: ReactNode | string;
    description?: string;
    icon?: ReactNode;
};

export declare type DisplayStyle = 'default' | 'overlapped';

export declare type LegendPosition = 'top' | 'bottom';

export declare type LinearGaugeProps = {
    sections: LinearGaugeSection[];
} & ({
    totalLabel: string;
    totalValue: string;
} | {
    totalLabel?: never;
    totalValue?: never;
});

export declare type LinearGaugeTooltipState = {
    x: number;
    y: number;
};

export declare type LineChartDataPoint = {
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
};

export declare type LineChartProps = {
    series: LineChartSeries[];
    height: number;
    width?: number;
    missingValueLabel?: string;
    locale?: string;
    hideGlyphs?: boolean;
    hideArea?: boolean;
    hideLegend?: boolean;
    legendPosition?: LegendPosition;
    highlightNegativeValues?: boolean;
    markLine?: MarkLineProps;
    valueFormatter?: ValueFormatter;
};

export declare type LineChartSeries = {
    dataPoints: LineChartDataPoint[];
    name: string;
};

export declare type MarkLineProps = {
    name: string;
    value: number;
};

export declare type Padding = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

export declare type PieChartDatum = {
    value: number;
    label: string;
};

export declare type PieChartProps = {
    size: number;
    data: PieChartDatum[];
    valueFormatter?: ValueFormatter;
    showLabelTitle?: boolean;
    showLabelValue?: boolean;
    showLabelPercentage?: boolean;
    shouldSortData?: boolean;
    colorScale?: ColorScale;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/AreaStackChart/types.ts
export type AreaStackChartDataPoint = {
    timestamp: Date;
    value: number | null;
    description?: string;
};

export type AreaStackChartSeries = {
    dataPoints: AreaStackChartDataPoint[];
    name: string;
};

export type AreaStackChartProps = {
    series: AreaStackChartSeries[];
    height: number;
    width?: number;
    missingValueLabel?: string;
    childSumLabel?: string;
    locale?: string;
    hideLegend?: boolean;
    legendPosition?: LegendPosition;
    markLine?: MarkLineProps;
    valueFormatter?: ValueFormatter;
    domain?: 'storage' | 'count';
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/BarChart/types.ts
export type BarChartDataPoint<DataPointDetails extends Record<string, any> | void = void> =
    DataPointDetails extends void
        ? BarChartDataPointBase
        : BarChartDataPointBase & {
              details: DataPointDetails;
          };

export type BarChartSeries<DataPointDetails extends Record<string, any> | void = void> = {
    name: string;
    dataPoints: BarChartDataPoint<DataPointDetails>[];
};

export type DisplayStyle = 'default' | 'overlapped';

export type BarChartProps<DataPointDetails extends Record<string, any> | void = void> = {
    series: BarChartSeries<DataPointDetails>[];
    height: number;
    width?: number;
    displayStyle?: DisplayStyle;
    horizontal?: boolean;
    hideLegend?: boolean;
    allowDecimalTickValues?: boolean;
    legendPosition?: LegendPosition;
    valueFormatter?: ValueFormatter;
    labelFormatter?: LabelFormatter;
    onBarClick?: (e: BarChartClickHandlerParams<DataPointDetails>) => void;
};

export type BarChartClickHandlerParams<DataPointDetails extends Record<string, any> | void = void> = EventHandlerParams<
    BarChartDataPoint<DataPointDetails>
>;

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/ChartHeading/ChartHeading.tsx
export type ChartHeadingProps = {
    title: ReactNode | string;
    description?: string;
    icon?: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/LineChart/types.ts
export type LineChartDataPoint = {
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
};

export type LineChartSeries = {
    dataPoints: LineChartDataPoint[];
    name: string;
};

export type MarkLineProps = {
    name: string;
    value: number;
};

export type LegendPosition = 'top' | 'bottom';

export type LineChartProps = {
    series: LineChartSeries[];
    height: number;
    width?: number;
    missingValueLabel?: string;
    locale?: string;
    hideGlyphs?: boolean;
    hideArea?: boolean;
    hideLegend?: boolean;
    legendPosition?: LegendPosition;
    highlightNegativeValues?: boolean;
    markLine?: MarkLineProps;
    valueFormatter?: ValueFormatter;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/LinearGauge/LinearGauge.tsx
export type LinearGaugeProps = { sections: LinearGaugeSection[] } & (
    | { totalLabel: string; totalValue: string }
    | { totalLabel?: never; totalValue?: never }
);

export type LinearGaugeTooltipState = {
    x: number;
    y: number;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/LinearGauge/types.ts
export type LinearGaugeSection = {
    name: string;
    label: string;
    percentage: number;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/PieChart/types.ts
export type PieChartDatum = {
    value: number;
    label: string;
};

export type PieChartProps = {
    size: number;
    data: PieChartDatum[];
    valueFormatter?: ValueFormatter;
    showLabelTitle?: boolean;
    showLabelValue?: boolean;
    showLabelPercentage?: boolean;
    shouldSortData?: boolean;
    colorScale?: ColorScale;
};

export type Padding = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/Treemap/types.ts
export type TreemapDataPoint = {
    id: string;
    label: string;
    value: number | null;
    parentId: string | null;
    description?: string;
    color?: string;
};

export type TreemapDataPointGroup = {
    groupIds: string[];
} & TreemapDataPoint;

export type TreemapProps = {
    data: TreemapDataPoint[];
    childSumLabel: string;
    missingValueLabel?: string;
    colorLabelMap?: ColorLabelMap;
    valueFormatter?: ValueFormatter;
    width: number;
    height: number;
    legendItems?: TreemapLegendItem[];
    sizeThresholds?: SizeThresholds;
};

export type SizeThresholds = {
    mobile: number;
    desktop: number;
};

export type TreemapTooltipState = {
    activeNode: HierarchyNode<TreemapDataPoint | TreemapDataPointGroup>;
    x: number;
    y: number;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/common/components/Tooltip/Tooltip.tsx
export type TooltipCrossHairStyle = 'line' | 'bar';

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/common/components/Tooltip/TooltipContent.tsx
export type TooltipItemProps = {
    title: string;
    value: string | number;
    color?: string;
    type?: string;
    valueContext?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/charts/src/components/common/types.ts
export type ValueFormatter = (value: number) => string;

export type LabelFormatter = (label: string) => string;

// File: /Users/florianschulz/dev/fondue/packages/components/scripts/types.ts
export type ComponentFileBuilderResponse = {
    content: string;
    extension: string;
    subdirectory?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Box/Box.tsx
export type BoxProps = LayoutComponentProps & {
    /**
     * The element to render the Box component as.
     * @default 'div'
     */
    as?: 'div' | 'span';
    /**
     * The display property.
     * @default 'block'
     */
    display?: Responsive<'none' | 'block' | 'inline-block' | 'inline'>;

    children?: ReactNode;
    'data-test-id'?: string;
} & CommonAriaProps;

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Button/Button.tsx
export type ButtonProps = {
    /**
     * @default "button"
     */
    type?: ButtonType;
    /**
     * @default null
     */
    title?: string;
    /**
     * @default "default"
     */
    variant?: ButtonStyle;
    /**
     * @default "strong"
     */
    emphasis?: ButtonEmphasis;
    /**
     * @default "medium"
     */
    size?: ButtonSize;
    /**
     * @default "medium"
     */
    rounding?: ButtonRounding;
    /**
     * @default false
     */
    disabled?: boolean;
    /**
     * @default "default"
     */
    aspect?: ButtonAspect;
    /**
     * @default true
     */
    hugWidth?: boolean;
    children?: ReactNode;
    onPress?: (event?: MouseEvent<HTMLButtonElement>) => void;
    form?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
    'data-test-id'?: string;
    className?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Checkbox/Checkbox.tsx
export type CheckboxProps = {
    id?: string;
    name?: string;
    /**
     * The default value of the checkbox
     * Used for uncontrolled components
     * @default false
     */
    defaultValue?: boolean | 'indeterminate';
    /**
     * The controlled value of the checkbox
     * @default false
     */
    value?: boolean | 'indeterminate';
    /**
     * The size of the checkbox
     * @default "default"
     */
    size?: 'default' | 'large';
    /**
     * The emphasis of the checkbox
     * @default "default"
     */
    emphasis?: 'default' | 'weak';
    /**
     * Disable the checkbox
     * @default false
     */
    disabled?: boolean;
    /**
     * Make the checkbox required in form
     * @default false
     */
    required?: boolean;
    /**
     * Make the checkbox read-only
     * @default false
     */
    readOnly?: boolean;
    className?: string;
    /**
     * Event handler called when the checkbox value changes
     */
    onChange?: (event: FormEvent<HTMLButtonElement>) => void;
    /**
     * Event handler called when the checkbox is blurred
     */
    onBlur?: (event: FormEvent<HTMLButtonElement>) => void;
    /**
     * Event handler called when the checkbox is focused
     */
    onFocus?: (event: FormEvent<HTMLButtonElement>) => void;
    'data-test-id'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Dialog/Dialog.tsx
export type DialogRootProps = {
    /**
     * Disable interaction with the rest of the page
     * @default false
     */
    modal?: boolean;
    /**
     * The controlled `open` state of the dialog
     * @default false
     */
    open?: boolean;
    /**
     * Event handler called when the `open` state changes
     */
    onOpenChange?: (open: boolean) => void;
    children?: ReactNode;
};

export type DialogContentProps = {
    /**
     * Add rounded corners to the dialog
     * @default true
     */
    rounded?: boolean;
    /**
     * Define the padding of the dialog
     * @default "compact"
     */
    padding?: 'none' | 'tight' | 'compact' | 'comfortable' | 'spacious';
    /**
     * The vertical alignment of the divider
     * @default "center"
     */
    verticalAlign?: 'top' | 'center';

    /**
     * Define a maximum width for the dialog
     * @default "800px"
     */
    maxWidth?: string;
    /**
     * Define a minimum width for the dialog
     * @default "400px"
     */
    minWidth?: string;
    /**
     * Define a minimum height for the dialog
     * @default "200px"
     */
    minHeight?: string;
    /**
     * Show a dark underlay behind the dialog
     * @default false
     */
    showUnderlay?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type DialogTriggerProps = {
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     * @default true
     */
    asChild?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type DialogHeaderProps = {
    /**
     * Define the padding for the dialog header
     */
    padding?: 'none' | 'tight' | 'compact' | 'comfortable' | 'spacious';
    /**
     * Show a border at the bottom of the header
     * @default true
     */
    showBorder?: boolean;
    /**
     * Show a close button in the header
     * @default true
     */
    showCloseButton?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type DialogFooterProps = {
    /**
     * Define the padding for the dialog footer
     */
    padding?: 'none' | 'tight' | 'compact' | 'comfortable' | 'spacious';
    /**
     * Show a border at the top of the footer
     * @default true
     */
    showBorder?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type DialogBodyProps = {
    /**
     * Define the padding for the dialog body
     */
    padding?: 'none' | 'tight' | 'compact' | 'comfortable' | 'spacious';
    children?: ReactNode;
    'data-test-id'?: string;
};

export type DialogSideContentProps = { children?: ReactNode; 'data-test-id'?: string };

export type DialogCloseProps = { children?: ReactNode };

export type DialogAnnouncementProps = { children?: ReactNode; asChild?: boolean };

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Divider/Divider.tsx
export type DividerProps = {
    /**
     * The style of the divider
     * @default "solid"
     */
    variant?: DividerStyle;
    /**
     * The padding of the divider
     * @default "medium"
     */
    padding?: DividerPadding;
    /**
     * The color of the divider
     * @default "default"
     */
    color?: DividerColor;
    /**
     * The direction of the divider
     * @default "horizontal"
     */
    direction?: DividerDirection;
    'data-test-id'?: string;
    className?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Dropdown/Dropdown.tsx
export type DropdownRootProps = {
    children?: ReactNode;
    /**
     * When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.
     * @default false
     */
    modal?: boolean;
    /**
     * Controls the open state of the dropdown.
     */
    open?: boolean;
    /**
     * Callback that is called when the open state of the dropdown changes.
     */
    onOpenChange?: (open: boolean) => void;

    'data-test-id'?: string;
};

export type DropdownTriggerProps = {
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     * @default true
     */
    asChild?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type DropdownContentProps = {
    children?: ReactNode;
    'data-test-id'?: string;
    /**
     * Defines the alignment of the dropdown.
     * @default "start"
     */
    align?: 'start' | 'center' | 'end';
    /**
     * Defines the preferred side of the dropdown. It will not be respected if there are collisions with the viewport.
     * @default "bottom"
     */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Prevents the focus from being set on the trigger when the dropdown is closed.
     */
    preventTriggerFocusOnClose?: boolean;
};

export type DropdownGroupProps = { children: ReactNode; 'data-test-id'?: string };

export type DropdownSubMenuProps = { children: ReactNode; 'data-test-id'?: string };

export type DropdownSubTriggerProps = { children: ReactNode; 'data-test-id'?: string };

export type DropdownSubContentProps = {
    children: ReactNode;
    'data-test-id'?: string;
};

export type DropdownItemProps = {
    children: ReactNode;
    /**
     * Disables the item.
     */
    disabled?: boolean;
    /**
     * The text value of the item that is passed to the onSelect callback.
     */
    textValue?: string;
    /**
     * The style of the item.
     * @default "default"
     */
    emphasis?: 'default' | 'danger';
    /**
     * Callback that is called when the item is selected.
     */
    onSelect?: (event: Event) => void;
    'data-test-id'?: string;
};

export type DropdownSlotProps = { children: ReactNode; name?: 'left' | 'right'; 'data-test-id'?: string };

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Flex/Flex.tsx
export type FlexProps = LayoutComponentProps & {
    /**
     * The element to render the Flex component as.
     * @default 'div'
     */
    as?: 'div' | 'span';
    /**
     * The display property.
     * @default 'flex'
     */
    display?: Responsive<'none' | 'flex' | 'inline-flex'>;
    /**
     * The direction of the children.
     * @default 'row'
     */
    direction?: Responsive<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
     * The alignment of the children.
     */
    align?: Responsive<'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'>;
    /**
     * The justification of the children.
     */
    justify?: Responsive<'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'>;
    /**
     * The wrap property.
     */
    wrap?: Responsive<'nowrap' | 'wrap' | 'wrap-reverse'>;
    /**
     * The gap between the children.
     */
    gap?: Responsive<SizeValue>;
    /**
     * The horizontal gap between the children.
     */
    gapX?: Responsive<SizeValue>;
    /**
     * The vertical gap between the children.
     */
    gapY?: Responsive<SizeValue>;

    children?: ReactNode;
    'data-test-id'?: string;
} & CommonAriaProps;

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Flyout/Flyout.tsx
export type FlyoutRootProps = {
    /**
     * Disable interaction with the rest of the page
     * @default false
     */
    modal?: boolean;
    /**
     * The controlled `open` state of the flyout
     * @default false
     */
    open?: boolean;
    /**
     * Event handler called when the `open` state changes
     */
    onOpenChange?: (open: boolean) => void;
    children?: ReactNode;
};

export type FlyoutTriggerProps = {
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     * @default true
     */
    asChild?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type FlyoutContentProps = {
    /**
     * Add a shadow to the flyout
     * @default "medium"
     */
    shadow?: 'none' | 'medium' | 'large';
    /**
     * Add rounded corners to the flyout
     * @default "medium"
     */
    rounded?: 'none' | 'medium' | 'large';
    /**
     * Define the prefered side of the flyout. Can be overriden by viewport collisions viewport.
     * @default "bottom"
     */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Define the prefered alignment of the flyout. Can be overriden by viewport collisions viewport.
     * @default "start"
     */
    align?: 'start' | 'center' | 'end';
    /**
     * Define the padding of the flyout
     * @default "compact"
     */
    padding?: 'none' | 'tight' | 'compact' | 'comfortable' | 'spacious';
    /**
     * Define the fixed width of the flyout
     * @default "fit-content"
     */
    width?: string;
    /**
     * Define the maximum width of the flyout
     * @default "360px"
     */
    maxWidth?: string;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type FlyoutHeaderProps = {
    /**
     * Show a close button in the header
     * @default false
     */
    showCloseButton?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export type FlyoutFooterProps = { children?: ReactNode; 'data-test-id'?: string };

export type FlyoutBodyProps = { children?: ReactNode; 'data-test-id'?: string };

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Grid/Grid.tsx
export type GridProps = LayoutComponentProps & {
    /**
     * The element to render the Grid component as.
     * @default 'div'
     */
    as?: 'div' | 'span';

    /**
     * The display property.
     * @default 'grid'
     */
    display?: 'none' | 'grid' | 'inline-grid';
    /**
     * The columns property.
     */
    columns?: Responsive<string | number>;
    /**
     * The rows property.
     */
    rows?: Responsive<string | number>;
    /**
     * The flow property.
     */
    flow?: Responsive<'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'>;
    /**
     * The alignment of the children.
     */
    align?: Responsive<'start' | 'center' | 'end' | 'baseline' | 'stretch'>;
    /**
     * The justification of the children.
     */
    justify?: Responsive<'start' | 'center' | 'end' | 'between'>;
    /**
     * The gap between the children.
     */
    gap?: Responsive<SizeValue>;
    /**
     * The horizontal gap between the children.
     */
    gapX?: Responsive<SizeValue>;
    /**
     * The vertical gap between the children.
     */
    gapY?: Responsive<SizeValue>;

    children?: ReactNode;
    'data-test-id'?: string;
} & CommonAriaProps;

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Label/Label.tsx
export type LabelProps = {
    id?: string;
    children: ReactNode;
    /**
     * The id of the input element the label is associated with
     */
    htmlFor: string;
    /**
     * Add an asterisk to the label to indicate it is required
     * @default false
     */
    required?: boolean;
    className?: string;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/LoadingBar/LoadingBar.tsx
export type LoadingBarProps = {
    /**
     * The current value of the loading bar. If `null`, the loading bar will be in an indeterminate state.
     * @default null
     */
    value: number | null;
    /**
     * The maximum value of the loading bar
     * @default 100
     */
    max?: number;
    /**
     * @default 'fondue-loading-bar'
     */
    'data-test-id'?: string;
    /**
     * Add rounded corners to the loading bar
     * @default true
     */
    rounded?: boolean;
    /**
     * The style of the loading bar
     * @default "default"
     */
    variant?: 'default' | 'positive' | 'negative';
    /**
     * The size of the loading bar
     * @default "medium"
     */
    size?: 'small' | 'medium' | 'large' | 'x-large';
    /**
     * The label of the loading bar for accessibility purposes
     */
    getValueLabel?: (value: number, max: number) => string;
} & ({ 'aria-label': string } | { 'aria-labelledby': string });

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/ScrollArea/ScrollArea.tsx
export type ScrollAreaProps = {
    /**
     * "auto" visible when content is overflowing on the corresponding orientation.
     * "always" always visible regardless of whether the content is overflowing.
     * "scroll" visible when the user is scrolling along its corresponding orientation.
     * "hover" when the user is hovering over the scroll area.
     * @default 'hover'
     */
    type?: 'auto' | 'always' | 'scroll' | 'hover';
    /**
     * Maximum height of the scroll area
     * @default '100%'
     */
    maxHeight?: string | number;
    /**
     * Minimum width of the scroll area
     * @default '100%'
     */
    maxWidth?: string | number;
    /**
     * Determines if a inset shadow should be shown the edge of the component
     */
    showShadow?: boolean;
    'data-test-id'?: string;
    children: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Section/Section.tsx
export type SectionProps = LayoutComponentProps & {
    /**
     * The display property.
     * @default 'block'
     */
    display?: Responsive<'none' | 'block' | 'inline-block' | 'inline'>;

    children?: ReactNode;
    'data-test-id'?: string;
} & CommonAriaProps;

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/SegmentedControl/SegmentedControl.tsx
export type SegmentedControlRootProps = {
    id?: string;
    children: ReactNode;
    /**
     * The default value of the segmented control
     * Used for uncontrolled components
     */
    defaultValue: string;
    /**
     * The controlled value of the segmented control
     */
    value?: string;
    /**
     * Event handler called when the value changes
     */
    onValueChange?: (value: string) => void;
    /**
     * Disable the segmented control
     * @default false
     */
    disabled?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Select/Combobox.tsx
export type ComboboxProps = {
    /**
     * Children of the Combobox component. This can contain the `Select.Slot` components for the label, decorators, clear action and menu.
     */
    children?: ReactNode;
    /**
     * Callback function that is called when an item is selected.
     */
    onSelect?: (selectedValue: string | null) => void;
    /**
     * The active value in the combobox component. This is used to control the combobox externally.
     */
    value?: string | null;
    /**
     * The default value of the combobox component. Used for uncontrolled usages.
     */
    defaultValue?: string;
    /**
     * The placeholder in the combobox component.
     */
    placeholder?: string;
    /**
     * Status of the text input
     * @default "neutral"
     */
    status?: 'neutral' | 'success' | 'error';
    /**
     * Disables the combobox component.
     */
    disabled?: boolean;
    /**
     * The alignment of the menu.
     * @default "start"
     */
    alignMenu?: 'start' | 'center' | 'end' /**
     * Defines the preferred side of the select. It will not be respected if there are collisions with the viewport.
     * @default "bottom"
     */;
    side?: 'left' | 'right' | 'bottom' | 'top';
    /**
     * The aria label of the combobox component.
     */
    'aria-label'?: string;
    /**
     * The data test id of the select component.
     */
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Select/Select.tsx
export type SelectComponentProps = {
    /**
     * Children of the Select component. This can contain the `Select.Slot` components for the label, decorators, clear action and menu.
     */
    children?: ReactNode;
    /**
     * Callback function that is called when an item is selected.
     */
    onSelect?: (selectedValue: string | null) => void;
    /**
     * The active value in the select component. This is used to control the select externally.
     */
    value?: string | null;
    /**
     * The default value of the select component. Used for uncontrolled usages.
     */
    defaultValue?: string;
    /**
     * The placeholder in the select component.
     */
    placeholder?: string;
    /**
     * Status of the text input
     * @default "neutral"
     */
    status?: 'neutral' | 'success' | 'error';
    /**
     * Disables the select component.
     */
    disabled?: boolean;
    /**
     * The alignment of the menu.
     * @default "start"
     */
    alignMenu?: 'start' | 'center' | 'end';
    /**
     * Defines the preferred side of the select. It will not be respected if there are collisions with the viewport.
     * @default "bottom"
     */
    side?: 'left' | 'right' | 'bottom' | 'top';
    /**
     * The aria label of the select component.
     */
    'aria-label'?: string;
    /**
     * The data test id of the select component.
     */
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Select/SelectItem.tsx
export type SelectItemProps = {
    /**
     * The value of the select item.
     */
    value: string;
    /**
     * The data test id of the select item.
     */
    'data-test-id'?: string;
} & (
    | {
          /**
           * The label of the select item. Required when the child is not a string.
           */
          label: string;
          /**
           * The children of the select item. This can be a custom component or a string.
           */
          children?: ReactNode;
      }
    | {
          label?: string;
          children: string;
      }
);

export type SelectItemGroupProps = {
    /**
     * The children of the select item group. This can contain multiple `Select.Item` components.
     */
    children: ReactNode;
    /**
     * The internal group ID of the select item group.
     */
    groupId: string;
    /**
     * The data test id of the select item group.
     */
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Select/SelectMenu.tsx
export type SelectMenuProps = {
    /**
     * @internal
     * The index of the highlighted item in the menu.
     */
    highlightedIndex: number;
    /**
     * @internal
     * Callback function to retrieve the props for a menu element.
     */
    getMenuProps: UseSelectPropGetters<unknown>['getMenuProps'] | UseComboboxPropGetters<unknown>['getMenuProps'];
    /**
     * @internal
     * Callback function to retrieve the props for a item element.
     */
    getItemProps: UseSelectPropGetters<unknown>['getItemProps'] | UseComboboxPropGetters<unknown>['getItemProps'];
    /**
     * @internal
     * The children of the menu component. This can contain multiple `Select.Item` or `Select.Group` components.
     */
    children: ReactNode;
    /**
     * @internal
     * The filter text shown in the combobox input element.
     */
    filterText?: string;
    /**
     * @internal
     * The alignment of the menu.
     */
    align: 'start' | 'center' | 'end';
    /**
     * @internal
     * Defines the preferred side of the select. It will not be respected if there are collisions with the viewport.
     * @default "bottom"
     */
    side: 'left' | 'right' | 'bottom' | 'top';
    /**
     * @internal
     * The type of the menu.
     */
    selectedItem?: {
        value: string;
    } | null;
    /**
     * @internal
     * A boolean to indicate if highlighted item was changed since opening the menu.
     * This is used to determine the style of the selected/highlighted item.
     */
    hasInteractedSinceOpening?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Select/SelectSlot.tsx
export type SelectSlotProps = {
    /**
     * The children of the select slot. This can be a custom component.
     */
    children?: ReactNode;
    /**
     * The slot name that is used to determine the placement.
     */
    name: 'menu' | 'left' | 'right' | 'clear';
    /**
     * The data test id of the select slot.
     */
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Select/useSelectData.tsx
export type SelectItemType = {
    value: string;
    label: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Slider/Slider.tsx
export type SliderProps = {
    id?: string;
    name?: string;
    /**
     * The default value of the slider
     * Used for uncontrolled components
     * @default [0]
     */
    defaultValue?: number[];
    /**
     * The controlled value of the slider
     * @default [0]
     */
    value?: number[];
    /**
     * Minimum value of the slider
     * @default 0
     */
    min?: number;
    /**
     * Maximum value of the slider
     * @default 100
     */
    max?: number;
    /**
     * The granularity with which the slider can step through values
     * @default 1
     */
    step?: number;
    /**
     * The minimum steps between thumbs in a range slider
     * @default 0
     */
    minStepsBetweenThumbs?: number;
    /**
     * Disable the slider
     * @default false
     */
    disabled?: boolean;
    onChange?: (value: number[]) => void;
    onCommit?: (value: number[]) => void;
    'data-test-id'?: string;
} & CommonAriaAttrs;

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Tabs/Tabs.tsx
export type TabsRootProps = {
    id?: string;
    children: ReactNode;
    /**
     * Define the padding of the dialog
     * @default "compact"
     */
    padding?: 'none' | 'tight' | 'compact' | 'comfortable' | 'spacious';
    /**
     * The default active tab
     * Used for uncontrolled components
     */
    defaultActiveTab?: string;
    /**
     * The controlled value of the active tab
     */
    activeTab?: string;
    /**
     * The height of the tabs
     * @default 'medium'
     */
    size?: 'medium' | 'large';
    /**
     * Event handler called when the active tab changes
     */
    onActiveTabChange?: (value: string) => void;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Tabs/types.ts
export type TabTrigger = {
    ref?: RefObject<HTMLButtonElement>;
    element: ReactNode;
    props: HTMLAttributes<HTMLButtonElement>;
    disabled?: boolean;
    value: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/TextInput/TextInput.tsx
export type TextInputProps = {
    id?: string;
    name?: string;
    /**
     * The place where the input slots are placed
     */
    children?: ReactNode;
    /**
     * The default value of the text input
     * Used for uncontrolled components
     */
    defaultValue?: string | number;
    /**
     * The controlled value of the text input
     */
    value?: string | number;
    /**
     * Type of the text input
     * @default "text"
     */
    type?: 'date' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
    /**
     * The placeholder in the text input
     */
    placeholder?: string;
    /**
     * Disable the text input
     * @default false
     */
    disabled?: boolean;
    /**
     * Make the text input required in form
     * @default false
     */
    required?: boolean;
    /**
     * Make the text input spell-checkable
     * @default true
     */
    spellCheck?: boolean;
    /**
     * Make the text input read-only
     * @default false
     */
    readOnly?: boolean;
    /**
     * Set the type of input so autocomplete can help the user
     * @default "on"
     */
    autoComplete?: string;
    /**
     * The maximum length of the text input
     */
    maxLength?: number;
    /**
     * Status of the text input
     * @default "neutral"
     */
    status?: 'neutral' | 'success' | 'error' | 'loading';
    className?: string;
    /**
     * Event handler called when the text input value changes
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Event handler called when the text input is blurred
     */
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Event handler called when the text input is focused
     */
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Event handler called when a key is pressed
     */
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Event handler called when a key is released
     */
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Event handler called when the text inside of text input is selected
     */
    onSelect?: (event: SyntheticEvent<HTMLInputElement>) => void;
    'data-test-id'?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
};

export type TextFieldSlotProps = {
    children: ReactNode;
    name?: 'left' | 'right';
    className?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/components/Tooltip/Tooltip.tsx
export type TooltipRootProps = {
    /**
     * Sets the open state of the tooltip.
     */
    open?: boolean;
    /**
     * Callback that is called when the open state of the tooltip changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * The delay in milliseconds before the tooltip appears.
     * @default 700
     */
    enterDelay?: number;
    children: Array<ReactElement<TooltipTriggerProps | TooltipContentProps>>;
};

export type TooltipTriggerProps = {
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     * @default false
     */
    asChild?: boolean;
    children: ReactNode;
    'data-test-id'?: string;
};

export type TooltipContentProps = {
    /**
     * @default "spacious"
     */
    padding?: 'spacious' | 'compact';
    /**
     * Defines the preferred side of the tooltip. It will not be respected if there are collisions with the viewport.
     */
    side?: 'top' | 'right' | 'bottom' | 'left';
    maxWidth?: string;
    className?: string;
    children: ReactNode;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/helpers/aria.ts
export type CommonAriaProps = {
    /**
     * Aria label for the component.
     */
    'aria-label'?: string;
    /**
     * Aria label for the component when it is hidden.
     */
    'aria-hidden'?: boolean;
    /**
     * Aria role for the component.
     */
    role?: string;
    /**
     * Aria described by for the component.
     */
    'aria-describedby'?: string;
    /**
     * Aria labelled by for the component.
     */
    'aria-labelledby'?: string;
    /**
     * Aria expanded for the component.
     */
    'aria-expanded'?: boolean;
    /**
     * Aria has popup for the component.
     */
    'aria-haspopup'?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/helpers/layout.ts
export type Breakpoint = keyof typeof screens;

export type Responsive<TValue> = ({ [key in Breakpoint]?: TValue } & { base?: TValue }) | TValue;

export type SizeValue = SpacingValue | 'auto' | 'fit-content' | 'intrinsic' | 'max-content' | 'min-content';

export type LayoutComponentProps = {
    /**
     * The margin property of the component.
     */
    m?: Responsive<SpacingValue>;
    /**
     * The horizontal margin property of the component.
     */
    mx?: Responsive<SpacingValue>;
    /**
     * The vertical margin property of the component.
     */
    my?: Responsive<SpacingValue>;
    /**
     * The margin-top property of the component.
     */
    mt?: Responsive<SpacingValue>;
    /**
     * The margin-right property of the component.
     */
    mr?: Responsive<SpacingValue>;
    /**
     * The margin-bottom property of the component.
     */
    mb?: Responsive<SpacingValue>;
    /**
     * The margin-left property of the component.
     */
    ml?: Responsive<SpacingValue>;

    /**
     * The padding property of the component.
     */
    p?: Responsive<SpacingValue>;
    /**
     * The horizontal padding property of the component.
     */
    px?: Responsive<SpacingValue>;
    /**
     * The vertical padding property of the component.
     */
    py?: Responsive<SpacingValue>;
    /**
     * The padding-top property of the component.
     */
    pt?: Responsive<SpacingValue>;
    /**
     * The padding-right property of the component.
     */
    pr?: Responsive<SpacingValue>;
    /**
     * The padding-bottom property of the component.
     */
    pb?: Responsive<SpacingValue>;
    /**
     * The padding-left property of the component.
     */
    pl?: Responsive<SpacingValue>;

    /**
     * The width property of the component.
     */
    width?: Responsive<SizeValue>;
    /**
     * The min-width property of the component.
     */
    minWidth?: Responsive<SizeValue>;
    /**
     * The max-width property of the component.
     */
    maxWidth?: Responsive<SizeValue>;

    /**
     * The height property of the component.
     */
    height?: Responsive<SizeValue>;
    /**
     * The min-height property of the component.
     */
    minHeight?: Responsive<SizeValue>;
    /**
     * The max-height property of the component.
     */
    maxHeight?: Responsive<SizeValue>;

    /**
     * The overflow property of the component.
     */
    overflow?: Responsive<OverflowValue>;
    /**
     * The horizontal overflow property of the component.
     */
    overflowX?: Responsive<OverflowValue>;
    /**
     * The vertical overflow property of the component.
     */
    overflowY?: Responsive<OverflowValue>;

    /**
     * The position property of the component.
     */
    position?: Responsive<PositionValue>;
    /**
     * The top property of the component.
     */
    top?: Responsive<SpacingValue>;
    /**
     * The right property of the component.
     */
    right?: Responsive<SpacingValue>;
    /**
     * The bottom property of the component.
     */
    bottom?: Responsive<SpacingValue>;
    /**
     * The left property of the component.
     */
    left?: Responsive<SpacingValue>;
};

// File: /Users/florianschulz/dev/fondue/packages/components/src/utilities/types.ts
export type AtLeastOneAttr<T> = Partial<T> &
    {
        [K in keyof T]-?: Required<Pick<T, K>>;
    }[keyof T];

export type AriaLabelAttrs = Pick<AriaAttributes, 'aria-label'> & Pick<AriaAttributes, 'aria-labelledby'>;

export type AtLeastOneAriaLabelAttr = AtLeastOneAttr<AriaLabelAttrs>;

export type CommonAriaAttrs = Pick<AriaAttributes, 'aria-describedby'> & AtLeastOneAriaLabelAttr;

// File: /Users/florianschulz/dev/fondue/packages/fondue/dist/index.d.ts
export declare type AccordionHeaderIconProps = {
    isOpen: boolean;
    size?: AccordionHeaderIconSize;
    'data-test-id'?: string;
};

export declare type AccordionHeaderIconSize = 'small' | 'medium' | 'large';

export declare type AccordionHeaderProps = {
    decorator?: ReactNode;
    children: string;
    disabled?: boolean;
    isOpen: boolean;
    'data-test-id'?: string;
};

export declare type AccordionItemProps = {
    header: Omit<AccordionHeaderProps, 'isOpen'> & {
        active?: boolean;
        onClick?: () => void;
    };
    padding?: boolean;
    divider?: boolean;
    headerComponent?: (props: AccordionHeaderProps) => ReactElement;
    'data-test-id'?: string;
    children?: ReactNode;
};

export declare type AccordionProps = {
    children?: ReactNode;
    divider?: boolean;
    border?: boolean;
    'data-test-id'?: string;
};

export declare type ActionMenuBlock = {
    id: string;
    menuItems: (ActionMenuItemType | ActionMenuSwitchItemType)[];
    ariaLabel?: string;
};

export declare type ActionMenuItemType = MenuItemType & {
    onClick: () => void;
};

export declare type ActionMenuProps = {
    ariaLabel?: string;
    menuBlocks: ActionMenuBlock[];
    focus?: FocusStrategy;
    border?: boolean;
    scrollable?: boolean;
    /**
     * @deprecated Use the onClick method available on each `menuItem` in the `menuBlocks` instead.
     * @example
     *  <ActionMenu
     menuBlocks={[
     {
     id: 'menu-block-1',
     menuItems: [
     {
     id: 'menu-item-1',
     label: 'Item 1',
     onClick: () => console.log('Item 1 clicked');
     },
     ],
     },
     ]}
     />
     *  */
    onClick?: () => void;
};

export declare type ActionMenuSwitchItemType = MenuItemType & {
    onClick: (switchValue: boolean) => void;
    type: 'switch';
    initialValue: boolean;
};

export declare type AddBlockButtonProps = {
    onClick: () => void;
    title?: string;
    /** @deprecated use direction with ButtonDirection */
    orientation?: AddBlockButtonDirection;
    direction?: ButtonDirection;
    'data-test-id'?: string;
};

export declare type AriaAccordionItemProps = {
    item: Node_2<AccordionItemProps>;
    state: TreeState_2<AccordionItemProps>;
    header: Omit<AccordionHeaderProps, 'isOpen'> & {
        active?: boolean;
        onClick?: () => void;
    };
    padding?: boolean;
    divider?: boolean;
    headerComponent?: (props: AccordionHeaderProps) => ReactElement;
    'data-test-id'?: string;
};

export declare type AriaListProps = {
    ariaProps: HTMLAttributes<HTMLElement>;
    border?: boolean;
    children: ReactNode;
    scrollable?: boolean;
};

export declare type AriaOptionProps = {
    menuItem: MenuItemType | ActionMenuItemType | ActionMenuSwitchItemType;
    node: Node_2<object>;
    isSelected?: boolean;
    state: TreeState_2<object>;
    /**
     *  @deprecated Use `menuItem.onClick` instead
     *  */
    onClick?: () => void;
};

export declare type AriaSectionProps = {
    ariaLabel?: string;
    children: ReactNode;
};

export declare type AssetInputProps = {
    assets?: AssetType[];
    size: AssetInputSize;
    numberOfLocations?: number;
    actions?: ActionMenuProps['menuBlocks'];
    isLoading?: boolean;
    hideSize?: boolean;
    hideExtension?: boolean;
    onUploadClick?: (files: FileList) => void;
    onLibraryClick?: () => void;
    onMultiAssetClick?: () => void;
    acceptFileType?: string;
};

export declare type AssetType = (ImageAsset & UploadSource) | (ImageAsset & LibrarySource) | (IconAsset & UploadSource) | (IconAsset & LibrarySource) | (OtherAsset & UploadSource) | (OtherAsset & LibrarySource);

export declare type BadgeProps = {
    style?: BadgeStyle;
    icon?: ReactElement<IconProps>;
    status?: BadgeStatusIconProps['status'];
    onClick?: () => void;
    onDismiss?: () => void;
    disabled?: boolean;
    emphasis?: BadgeEmphasis;
    size?: BadgeSize;
    children?: ReactNode;
    'data-test-id'?: string;
    /** @description withTitle could be disabled only in the case another overlay is present, ex Tooltip */
    withTitleAttribute?: boolean;
};

export declare type BadgeSize = 'small' | 'medium';

export declare type BadgeStatusIconProps = {
    status: BadgeStatus | Color | string;
    disabled: boolean;
    'data-test-id'?: string;
};

export declare type BaseDialogProps = {
    modality?: Modality;
    maxWidth?: string | number;
    maxHeight?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    /** @description This property enable a full screen gray underlay only for modal and blocking-modal options. */
    darkUnderlay?: boolean;
    /** @description If enabled, any value assigned to the maxHeight property won't have any effect.
     * autoHeight will set the maxHeight of the dialog Component automatically calculating the available space in the viewport. */
    autoHeight?: boolean;
    roundedCorners?: boolean;
    width?: string | number;
};

export declare type BlurOnBreakPluginProps = PluginProps & BlurOnBreakPlatePlugin;

export declare type BoxProps = {
    'data-test-id'?: string;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    as?: ContainerHTMLElement;
} & HTMLAttributes<HTMLDivElement | HTMLSpanElement>;

export declare type Breadcrumb = {
    label: string;
    link?: string;
    onClick?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent_2<T>) => void;
    decorator?: ReactElement<IconProps>;
    bold?: boolean;
    badges?: BadgeProps[];
    'data-test-id'?: string;
} & Pick<BreadcrumbsProps, 'activeInline'>;

export declare type BreadcrumbsProps = {
    items: Breadcrumb[];
    keepRoot?: boolean;
    activeInline?: boolean;
    truncate?: boolean;
    'data-test-id'?: string;
    verticalGap?: BreadcrumbGap;
};

export declare type ButtonElements = {
    button: string;
    icon: string;
    text: string;
};

export declare type ButtonGroupProps = {
    size: ButtonSize;
    children?: ReactNode;
    'data-test-id'?: string;
};

export declare type ButtonProps = {
    type?: ButtonType;
    title?: string;
    style?: ButtonStyle;
    emphasis?: ButtonEmphasis;
    hideLabel?: boolean;
    size?: ButtonSize;
    rounding?: ButtonRounding;
    disabled?: boolean;
    icon?: ReactElement;
    children?: ReactNode;
    onClick?: (event?: MouseEvent_2<HTMLButtonElement>) => void;
    hugWidth?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    formId?: string;
    /** @deprecated use emphasis with ButtonEmphasis.Weak */
    solid?: boolean;
    /** @deprecated inverted can be done by wrapping the component in a className="tw-dark" */
    inverted?: boolean;
    'data-test-id'?: string;
};

export declare type CardProps = {
    children: ReactNode | ReactNode[];
    hoverable?: boolean;
    onClick?: (event: PressEvent) => void;
    'data-test-id'?: string;
};

export declare type Cell = {
    sortId: string | number;
    value: ReactNode;
    ariaLabel?: string;
    align?: ColumnAlign;
};

export declare type CheckboxProps = {
    id?: string;
    state?: CheckboxState;
    emphasis?: CheckboxEmphasis;
    size?: CheckboxSize;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    hideLabel?: boolean;
    tooltip?: InputLabelTooltipProps;
    helperText?: string;
    'aria-label'?: string;
    groupInputProps?: HTMLAttributes<HTMLElement>;
    'data-test-id'?: string;
};

export declare type CheckboxValue = Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'> & {
    value: string;
};

export declare type ChecklistBase = {
    checkboxes: CheckboxValue[];
    setActiveValues: (value: string[]) => void;
    activeValues?: string[];
    ariaLabel?: string;
    'data-test-id'?: string;
};

export declare type ChecklistProps = ChecklistBase & {
    direction: ChecklistDirection.Vertical | ChecklistDirection.Horizontal;
    columns?: Columns;
};

export declare type CodeProps = {
    size?: CodeSize;
    weight?: CodeWeight;
    as?: 'code' | 'pre' | 'span';
    color?: CodeColor;
    children?: ReactNode;
};

export declare type CollisionPosition = Nullable<'before' | 'within' | 'after'>;

export declare type Column = {
    name: string;
    titleNode?: ReactNode;
    key: string;
    sortable?: boolean;
    align?: ColumnAlign;
};

export declare type ColumnAlign = 'left' | 'right';

export declare type ColumnBreakValue = 'active' | 'inactive' | undefined;

export declare type Columns = 1 | 2 | 3 | 4;

export declare type ContainerProps = {
    children?: ReactNode | ReactNode[];
    minWidth?: `${number}${DimensionUnity}`;
    maxWidth?: `${number}${DimensionUnity}`;
    minHeight?: `${number}${DimensionUnity}`;
    maxHeight?: `${number}${DimensionUnity}`;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    as?: ContainerHTMLElement;
};

export declare type DatePickerProps = {
    placeHolder?: string;
    isClearable?: boolean;
    shouldCloseOnSelect?: boolean;
    dateFormat?: string;
    /** @description when the variant is of type 'range', the value should be the startDate */
    value?: Date | null;
    minDate?: Date;
    maxDate?: Date;
    validation?: Validation;
    customTrigger?: ReactNode;
    customHeader?: ReactNode;
    children?: ReactNode;
    hasPopperArrow?: boolean;
    preventOpenOnFocus?: boolean;
    inline?: boolean;
    filterDate?: (date: Date) => boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onBlur?: () => void;
    onKeyDown?: (event: KeyboardEvent_2<HTMLDivElement>) => void;
    'data-test-id'?: string;
} & (SingleDatePickerProps | RangeDatePickerProps);

export declare type DialogBodyProps = {
    children: ReactNode;
    maxHeight?: number | string;
    padding?: DialogPadding;
    'data-test-id'?: string;
};

export declare type DialogFooterProps = {
    children?: ReactNode;
    actionButtons: ButtonProps[];
    backButton?: Omit<ButtonProps, 'emphasis' | 'icon' | 'size'>;
    padding?: DialogPadding;
    separator?: boolean;
    'data-test-id'?: string;
};

export declare type DialogHeaderProps = {
    title: string;
    separator?: boolean;
    onClose?: () => void;
    icon?: ReactElement<IconProps>;
    badge?: ReactElement<BadgeProps>;
    children?: ReactNode;
    padding?: 'compact' | 'comfortable' | 'spacious';
    'data-test-id'?: string;
};

export declare type DialogPadding = 'none' | 'compact' | 'comfortable' | 'spacious';

export declare type DialogProps = Omit<OverlayProps, 'placement' | 'flip' | 'offset' | 'theme' | 'withArrow' | 'arrowCustomColors' | 'shadow' | 'isDialog'> & Omit<BaseDialogProps, 'width'>;

export declare type DimensionUnity = '%' | 'px' | 'rem' | 'em' | 'vh' | 'vw';

export declare type DividerProps = {
    style?: DividerStyle;
    height?: DividerHeight | string;
    color?: string;
    vertical?: boolean;
    'data-test-id'?: string;
};

export declare type DraggableItem<T = Record<string, unknown>> = T & {
    id: string;
    sort: Nullable<number>;
    type?: string;
    parentId?: string;
};

export declare type DragHandleProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    active?: boolean;
    showDragHandlerOnHoverOnly?: boolean;
    activeColorStyle?: TreeItemColors;
};

export declare type DragHandlerPosition = 'left' | 'right' | 'none';

export declare type DropdownProps = {
    id?: string;
    menuBlocks: MenuBlock[];
    onChange: (id?: string | number) => void;
    activeItemId?: string | number;
    placeholder?: string;
    size?: DropdownSize;
    disabled?: boolean;
    clearable?: boolean;
    ariaLabel?: string;
    decorator?: ReactElement;
    autoResize?: boolean;
    validation?: Validation;
    alignment?: DropdownAlignment;
    position?: DropdownPosition;
    emphasis?: TriggerEmphasis;
    flip?: boolean;
    'data-test-id'?: string;
    enablePortal?: boolean;
};

export declare type DropZoneData<T> = {
    targetItem: DraggableItem<T>;
    position: CollisionPosition;
};

export declare type DropZoneProps<T> = {
    data: DropZoneData<T>;
    onDrop?: OnDropCallback<T>;
    accept: string | string[];
    children?: JSX.Element;
    'data-test-id'?: string;
};

export declare type ExpandButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    expanded?: boolean;
    active?: boolean;
};

export declare type FieldsetHeaderProps = {
    size?: FieldsetHeaderSize;
    active?: boolean;
    decorator?: ReactNode;
    type?: FieldsetHeaderType;
    disabled?: boolean;
    bold?: boolean;
    children: string;
    onClick?: () => void;
    as?: keyof JSX.IntrinsicElements;
    tabIndex?: number;
    'data-test-id'?: string;
};

export declare type FilterableMultiSelectItem = {
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
};

export declare type FilterableMultiSelectProps = {
    items: FilterableMultiSelectItem[];
    activeItemKeys: (string | number)[];
    disabled?: boolean;
    onSelectionChange: (keys: (string | number)[]) => void;
    ariaLabel?: string;
    label?: string;
    placeholder?: string;
    type?: FilterableMultiSelectType;
    size?: FilterableMultiSelectSize;
    validation?: Validation;
    summarizedLabel?: string;
    indeterminateItemKeys?: (string | number)[];
    flip?: boolean;
    emphasis?: TriggerEmphasis;
    enablePortal?: boolean;
    filterLabel?: string;
    emptyFilteredResultsLabel?: string;
};

export declare type FlexAlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'baseline' | 'stretch' | 'normal';

export declare type FlexAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export declare type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export declare type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export declare type FlexProps = {
    direction?: FlexDirection;
    wrap?: FlexWrap;
    spacing?: SpacingValue;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    justify?: FlexJustify;
    alignItems?: FlexAlignItems;
    alignContent?: FlexAlignContent;
    'data-test-id'?: string;
    children?: ReactNode | ReactNode[];
    bg?: string;
    color?: string;
    as?: ContainerHTMLElement;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    minWidth?: `${number}${DimensionUnity}`;
    maxWidth?: `${number}${DimensionUnity}`;
    minHeight?: `${number}${DimensionUnity}`;
    maxHeight?: `${number}${DimensionUnity}`;
};

export declare type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export declare type FloatingModalWrapperProps = {
    children: ReactNode;
    minWidth: CSSProperties['minWidth'];
    padding: CSSProperties['padding'];
    'data-test-id'?: string;
};

export declare type FlyoutFooterProps = {
    buttons: [ButtonProps, ButtonProps] | [ButtonProps];
    border?: boolean;
    children?: ReactNode;
};

export declare type FlyoutProps = {
    trigger: ReactNode | ((triggerProps: HTMLAttributes<HTMLElement>, ref: MutableRefObject<HTMLElement | null>, triggerState: {
        isFocusVisible: boolean;
        isPressed: boolean;
    }) => JSX.Element);
    onCancel?: () => void;
    onConfirm?: (event?: MouseEvent_2<HTMLButtonElement>) => void;
    title?: string;
    decorator?: ReactNode;
    badges?: BadgeProps[];
    hug?: boolean;
    fitContent?: boolean;
    isOpen?: boolean;
    onOpenChange: (isOpen: boolean) => void;
    fixedHeader?: ReactNode;
    fixedFooter?: ReactNode;
    contentMinHeight?: number;
    /**
     * The legacy footer buttons section inside of the flyout will be deleted in the future.
     * @deprecated Pass the FlyoutFooter component with buttons to the Flyout component.
     */
    legacyFooter?: boolean;
    placement?: FlyoutPlacement;
    offset?: number;
    updatePositionOnContentChange?: boolean;
    isTriggerDisabled?: boolean;
    children?: ReactNode;
};

export declare type FormControlProps = {
    direction?: FormControlDirection;
    disabled?: boolean;
    clickable?: boolean;
    label?: Omit<InputLabelProps, 'disabled'>;
    extra?: ReactNode;
    helper?: Omit<HelperTextProps, 'disabled' | 'style'> & {
        position?: HelperPosition;
    };
    style?: FormControlStyle;
    name?: string;
    children?: ReactNode;
    'data-test-id'?: string;
};

export declare type FormFieldProps = {
    children: ReactElement;
    label: LabelProps;
    disabled?: boolean;
    error?: boolean;
    errorText?: string;
    errorTextColor?: Validation;
    helperText?: string;
    helperTextColor?: Validation;
    hiddenLabel?: boolean;
    readOnly?: boolean;
    status?: Validation;
    'data-test-id'?: string;
};

export declare type FrontifyPatternProps = {
    pattern: PatternDesign;
    scale?: PatternScale;
    scaleOrigin?: PatternScaleOrigin;
    foregroundColor?: PatternTheme;
    'data-test-id'?: string;
};

export declare type GeneratedIconProps = {
    size?: IconSize;
    filled?: boolean;
};

export declare type GridProps = {
    column?: number;
    spacing?: SpacingValue;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    children?: ReactNode;
    width?: `${number}${DimensionUnity}`;
    rowHeight?: `${number}${DimensionUnity}` | 'auto';
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    as?: ContainerHTMLElement;
};

export declare type HeadingProps = SharedTypographyProps & {
    size?: HeadingSize;
    weight?: HeadingWeight;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
    color?: HeadingColor;
    children?: ReactNode;
};

export declare type IconItem = {
    id: string;
    icon: ReactElement<IconProps>;
    value?: string;
    ariaLabel: string;
    disabled?: boolean;
};

export declare type IconProps = GeneratedIconProps & {
    icon: IconEnum;
};

export declare type ImageAsset = {
    type: 'image' | 'logo';
    name: string;
    extension: string;
    src?: string;
    alt?: string;
    icon?: undefined;
    size: number;
};

export declare type InlineDialogProps = Omit<OverlayProps, 'theme' | 'isDetached' | 'verticalAlignment' | 'withArrow' | 'arrowCustomColors' | 'shadow' | 'isDialog'> & Omit<BaseDialogProps, 'darkUnderlay'> & {
    unsafe_zIndex?: number;
};

export declare type InputLabelProps = {
    id?: string;
    htmlFor: string;
    required?: boolean;
    disabled?: boolean;
    clickable?: boolean;
    tooltip?: InputLabelTooltipProps;
    bold?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

export declare type InputLabelTooltipProps = (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>) | (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[];

export declare type InternalTreeItemMultiSelectProps = TreeItemMultiselectProps & TreeItemPrivateProps_2;

export declare type InternalTreeItemProps = TreeItemProps & TreeItemPrivateProps;

export declare type Item = {
    label: string;
    value: string;
    avatar?: ReactNode;
    isCategory?: boolean;
    isDivider?: boolean;
    imgSrc?: string;
    ariaLabel?: string;
};

export declare type ItemElementType = 'a' | 'button' | 'span';

export declare type LabelProps = {
    text: string;
    hugWidth?: boolean;
    required?: boolean;
    secondaryLabel?: string;
    tooltips?: TooltipProps[];
    toolTipSize?: IconSize;
};

export declare type LegacyCollectionItemProps<T> = {
    item: LegacyOrderableListItem<T>;
    dragDisabled: boolean;
    renderContent: LegacyRenderListItem<T>;
    listId: string;
};

export declare type LegacyDragProperties = {
    componentDragState: LegacyItemDragState;
    isFocusVisible: boolean;
};

export declare type LegacyOrderableListItem<T = Record<string, unknown>> = DraggableItem<T> & {
    alt: string;
};

export declare type LegacyOrderableListProps<T> = {
    items: LegacyOrderableListItem<T>[];
    dragDisabled: boolean;
    onMove: (modifiedItems: LegacyOrderableListItem<T>[]) => void;
    renderContent: LegacyRenderListItem<T>;
    'data-test-id'?: string;
};

export declare type LegacyRenderListItem<T> = (items: LegacyOrderableListItem<T>, dragProps: LegacyDragProperties) => ReactElement;

export declare type LegacyStackAlign = 'start' | 'end' | 'stretch' | 'center';

export declare type LegacyStackJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export declare type LegacyStackProps = {
    padding: LegacyStackSpacing;
    spacing: LegacyStackSpacing;
    direction?: 'row' | 'column';
    wrap?: boolean;
    justify?: LegacyStackJustify;
    align?: LegacyStackAlign;
    children?: ReactNode;
    'data-test-id'?: string;
};

export declare type LegacyStackSpacing = 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export declare type LegacyTextareaProps = {
    id?: string;
    value?: string;
    required?: boolean;
    decorator?: ReactNode;
    placeholder?: string;
    disabled?: boolean;
    onInput?: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (e: FocusEvent_2<HTMLTextAreaElement>) => void;
    validation?: Validation;
    /** When autosize if false, this is used as 'rows' property for standard textarea */
    minRows?: number;
    /** When autosize if false, this property is ignored */
    maxRows?: number;
    autosize?: boolean;
    resizeable?: boolean;
    selectable?: boolean;
    focusOnMount?: boolean;
    onEnterPressed?: (event: KeyboardEvent_2<HTMLTextAreaElement>) => void;
} & AriaAttributes;

export declare type LegacyTooltipProps = {
    triggerElement?: ReactElement;
    content: ReactNode;
    tooltipIcon?: ReactElement;
    heading?: ReactNode;
    headingIcon?: ReactElement;
    linkUrl?: string;
    linkLabel?: string;
    brightHeader?: BrightHeaderStyle;
    buttons?: [TooltipButton, TooltipButton] | [TooltipButton];
    children?: ReactNode;
    position?: TooltipPosition;
    alignment?: TooltipAlignment;
    flip?: boolean;
    withArrow?: boolean;
    withStrongBorder?: boolean;
    hoverDelay?: number;
    enterDelay?: number;
    open?: boolean;
    disabled?: boolean;
    /** @deprecated use disabled since the tooltip is always present in the DOM now so hidden has no effect anymore */
    hidden?: boolean;
    enablePortal?: boolean;
    'data-test-id'?: string;
};

export declare type LibrarySource = {
    source: 'library';
    sourceName: string;
};

export declare type LoadingBarProps = {
    percentage?: number;
    size?: LoadingBarSize;
    state?: LoadingBarState;
    rounded?: boolean;
};

export declare type LoadingCircleProps = {
    style?: LoadingCircleStyle;
    size?: LoadingCircleSize;
    'data-test-id'?: string;
};

export declare type MappedMentionableItems = Map<string, string>;

export declare type MentionableItem = TComboboxItemWithData<MentionItemData>;

export declare type MentionableItems = MentionableItem[];

export declare type MenuBlock = {
    id: string;
    menuItems: MenuItemType[];
    ariaLabel?: string;
};

export declare type MenuItemContentProps = {
    title?: ReactNode;
    decorator?: ReactElement;
    switchComponent?: ReactElement;
    subtitle?: string;
    size?: MenuItemContentSize;
    ariaProps?: HTMLAttributes<HTMLElement>;
    children?: ReactNode;
};

export declare type MenuItemProps = {
    style?: MenuItemStyle;
    disabled?: boolean;
    active?: boolean;
    checked?: boolean;
    selectionIndicator?: SelectionIndicatorIcon;
    /** @deprecated this prop is not being used anymore */
    type?: string;
    link?: string;
    onBlur?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: FocusEvent_2<T>) => void;
    onClick?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent_2<T>) => void;
    onFocus?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: FocusEvent_2<T>) => void;
    onMouseEnter?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent_2<T>) => void;
    onMouseOut?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent_2<T>) => void;
    onMouseOver?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent_2<T>) => void;
    onMouseLeave?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent_2<T>) => void;
    children?: ReactNode;
    'data-test-id'?: string;
} & Omit<MenuItemContentProps, 'iconSize'>;

export declare type MenuItemType = Omit<MenuItemProps, 'switchComponent'> & {
    id: string | number;
    link?: string;
};

export declare type MenuProps = Props_3;

export declare type MenuStateType = {
    'aria-label': string;
    children: ReactNode;
};

export declare type ModalBodyProps = {
    direction?: ScrollWrapperDirection;
    children?: ModalBodyChildren;
    horizontalPadding?: boolean;
};

export declare type ModalButton = Omit<ButtonProps, 'size'>;

export declare type ModalFooterProps = {
    buttons: [ModalButton] | [ModalButton, ModalButton];
};

export declare type ModalHeaderProps = {
    title?: string;
    leadText?: ReactNode;
    decorator?: ReactElement;
    variant?: ModalHeaderVariant;
};

export declare type ModalPadding = {
    [key: string]: {
        top: string;
        horizontal: string;
        bottom: string;
    };
};

export declare type ModalProps = {
    visual?: ModalVisualProps;
    width?: ModalWidth;
    children?: ModalBodyChildren;
    isOpen: boolean;
    onClose?: () => void;
    isDismissable?: boolean;
    zIndex?: number;
    compact?: boolean;
} & Omit<AriaOverlayProps, 'isOpen'> & AriaDialogProps;

export declare type ModalVisualProps = {
    pattern?: PatternDesign;
    foregroundColor?: PatternTheme;
};

export declare type MultiInputProps = {
    layout: MultiInputLayout;
    spanLastItem?: boolean;
    children: ReactNode;
    'data-test-id'?: string;
};

export declare type MultiSelectItem = {
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
};

export declare type MultiSelectProps = {
    items: MultiSelectItem[];
    activeItemKeys: (string | number)[];
    disabled?: boolean;
    onSelectionChange: (keys: (string | number)[]) => void;
    ariaLabel?: string;
    label?: string;
    placeholder?: string;
    type?: MultiSelectType;
    size?: MultiSelectSize;
    validation?: Validation;
    summarizedLabel?: string;
    indeterminateItemKeys?: (string | number)[];
    flip?: boolean;
    emphasis?: TriggerEmphasis;
    enablePortal?: boolean;
};

export declare type OnDropCallback<T> = (targetItem: DraggableItem<T>, sourceItem: DraggableItem<T>, position: CollisionPosition, direction?: 'up' | 'down') => void;

export declare type OnExpandCallback = (id: string) => void;

export declare type OnSelectCallback = (id: string, ignoreRemoveSelected?: boolean, nodes?: TreeNodeWithoutElements[]) => void;

export declare type OnSelectInternalCallback = (id: string, ignoreRemoveSelected?: boolean) => void;

export declare type OnShrinkCallback = (id: string) => void;

export declare type OnTreeDropCallback = (args: {
    id: string;
    parentId: Nullable<string>;
    sort: number;
    contentComponent: Nullable<ReactNode>;
    parentType?: string;
}) => void;

export declare type OrderableListItem<T = Record<string, unknown>> = DraggableItem<T> & {
    alt: string;
};

export declare type OrderableListItemStyle = TreeItemStyling;

export declare type OrderableListProps<T> = {
    items: OrderableListItem<T>[];
    dragDisabled: boolean;
    dragHandlerPosition?: DragHandlerPosition;
    itemStyle?: OrderableListItemStyle;
    selectedId?: string;
    onMove: (modifiedItems: DraggableItem<T>[]) => void;
    renderContent: RenderListItem<T>;
    'data-test-id'?: string;
} & Pick<TreeProps, 'enableDragDelay'>;

export declare type Overlay = {
    id: string;
    label?: string;
    level?: number;
    children: ReactNode;
    contentComponent?: ReactNode;
    isSelected?: boolean;
    dragHandlerPosition?: DragHandlerPosition;
    showContentWhileDragging: boolean;
};

export declare type OverlayProps = PopperProps & {
    id?: string;
    open: boolean;
    'data-test-id'?: string;
    role?: string;
    theme?: 'light' | 'dark';
    shadow?: 'none' | 'small' | 'medium' | 'large';
    isDialog?: boolean;
    handleClose?: () => void;
};

export declare type Palette = {
    id: number | string;
    title: string;
    colors: Color[];
};

export declare type PatternScaleOrigin = ('top' | 'left' | 'bottom' | 'right')[];

export declare type PopperDimension = {
    width: number;
    height: number;
};

export declare type PopperPlacement = 'top' | 'bottom' | 'top-start' | 'bottom-start' | 'top-end' | 'bottom-end' | 'right' | 'left' | 'right-start' | 'right-end' | 'left-start' | 'left-end';

export declare type PopperProps = {
    children?: ReactNode;
    anchor: RefObject<Element>;
    open?: boolean;
    placement?: PopperPlacement;
    offset?: [number, number];
    flip?: boolean;
    enablePortal?: boolean;
    zIndex?: number | string;
    /** @description This property will detach the overlay from its trigger and will be relatively position to the body. example: Dialog compoennt. */
    isDetached?: boolean;
    /** @description This property will take effect only if isDetached is enabled. */
    verticalAlignment?: 'top' | 'centered';
    /** @description The property sets the way the modal is positioned on the view */
    strategy?: PositioningStrategy;
    withArrow?: boolean;
    arrowCustomColors?: string;
};

export declare type PortalProps = {
    children?: ReactNode;
    container?: HTMLElement;
};

export declare type PrepareElementStyleProps = {
    dimension: PopperDimension;
    isVerticalAlignedToTop: boolean;
};

export declare type RadioButtonProps = {
    value: string;
    disabled?: boolean;
    hideLabel?: boolean;
    emphasis?: RadioButtonEmphasis;
    helperText?: string;
    tooltip?: string;
};

export declare type RadioListProps = {
    children: ReactNode;
    onChange?: (value: string) => void;
    direction?: RadioListDirection;
    defaultValue?: string;
    name?: string;
    ariaLabel?: string;
};

export declare type RadioPillProps = {
    label: string;
    active: boolean;
    onClick?: (event?: MouseEvent_2<HTMLButtonElement>) => void;
    icon?: ReactElement;
    'data-test-id'?: string;
};

export declare type ReactDatePickerRef = default_2<boolean, undefined>;

export declare type RegisterNodeChildrenPayload = Extract<TreeStateAction, {
    type: 'REGISTER_NODE_CHILDREN';
}>['payload'];

export declare type RenderListItem<T> = (items: OrderableListItem<T>) => ReactElement;

export declare type RichTextEditorContextProps = {
    styles: Record<string, CSSProperties>;
    position: Position;
    wrapperClassNames: string;
    editorId: string;
};

export declare type RichTextEditorProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onTextChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    readonly?: boolean;
    padding?: PaddingSizes;
    position?: Position;
    plugins?: PluginComposer;
    onValueChanged?: (value: TreeOfNodes | null) => void;
    border?: boolean;
    updateValueOnChange?: boolean;
    toolbarWidth?: number;
    hideExternalFloatingModals?: (editorId: string) => void;
};

export declare type Row = {
    key: Key;
    cells: Record<string, Cell>;
    actionElements?: ReactNode;
};

export declare type SegmentedControlsProps = {
    id?: string;
    items: (TextOrNumberItem | IconItem)[];
    activeItemId?: string;
    onChange: (id: string) => void;
    ariaLabel?: string;
    disabled?: boolean;
    hugWidth?: boolean;
    size?: SegmentSize;
};

export declare type SegmentSize = 'small' | 'medium';

export declare type SelectMenuProps = {
    menuBlocks: MenuBlock[];
    ariaProps: AriaListBoxOptions<any>;
    state: ListState<any>;
    ariaLabel?: string;
    scrollable?: boolean;
};

export declare type SensorContext = MutableRefObject<{
    nodes: ReactElement[];
    offset: number;
}>;

export declare type SerializeNodesToHtmlOptions = {
    styles?: Record<string, CSSPropertiesHover>;
    mentionable?: MentionableItems;
    columns?: number;
    columnGap?: CSSProperties['columnGap'];
    customClass?: string;
};

export declare type SliderProps = BaseSliderProps & Pick<AriaAttributes, 'aria-label'> & Pick<AriaAttributes, 'aria-labelledby'>;

export declare type SliderValue = {
    raw: number;
    withSuffix: string;
};

export declare type SortableProps = Partial<ReturnType<typeof useSortable>>;

export declare type SortableTreeItemProps = TreeItemProps;

export declare type SpacingValue = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;

export declare type STACK_ALIGN_CONTENT = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'baseline' | 'stretch' | 'normal';

export declare type STACK_ALIGN_ITEMS = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export declare type STACK_DIRECTION = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export declare type STACK_JUSTIFY = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export declare type STACK_PROPS = {
    children?: ReactNode | ReactNode[] | JSX.Element;
    direction?: STACK_DIRECTION;
    spacing?: SpacingValue;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    divider?: ReactElement;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    justify?: STACK_JUSTIFY;
    alignItems?: STACK_ALIGN_ITEMS;
    alignContent?: STACK_ALIGN_CONTENT;
    as?: ContainerHTMLElement;
};

export declare type SwitchLabelStyle = 'default' | 'heading';

export declare type SwitchMode = 'on' | 'off' | 'indeterminate';

export declare type SwitchProps = {
    id?: string;
    mode?: SwitchMode;
    disabled?: boolean;
    label?: string;
    labelStyle?: string;
    name?: string;
    size?: SwitchSize;
    hug?: boolean;
    tooltip?: InputLabelTooltipProps;
    ariaLabel?: string;
    onChange?: (e: MouseEvent_2) => void;
    'data-test-id'?: string;
};

export declare type SwitchSize = 'small' | 'medium';

export declare type TabItemProps = {
    id: string;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    decorator?: ReactElement;
    badge?: BadgeProps;
    children: ReactNode;
    active?: boolean;
};

export declare type TableCellProps = {
    cell: any;
    selectionMode: string;
    type?: TableCellType;
    isChecked?: boolean;
    selectedRows: Key[];
    setSelectedRows?: (ids?: Key[]) => void;
    align?: ColumnAlign;
};

export declare type TableColumnHeaderProps = {
    column: any;
    type?: TableColumnHeaderType;
    rowIds: Key[];
    sortDirection?: SortDirection;
    selectionMode: string;
    isColumnSorted?: boolean;
    handleSortChange: (column: string, direction?: SortDirection) => void;
    setSelectedRows?: (ids?: Key[]) => void;
    align?: ColumnAlign;
};

export declare type TableProps = {
    columns: Column[];
    rows: Row[];
    onSelectionChange?: (ids?: Key[]) => void;
    onSortChange?: (column: string, direction?: SortDirection) => void;
    selectionMode?: SelectionMode_2;
    selectedRowIds?: Key[];
    ariaLabel?: string;
    children?: ReactNode;
};

export declare type TableRowProps = {
    isSelected?: boolean;
    children: ReactNode;
};

export declare type TabsProps = {
    paddingX?: TabsPaddingX;
    size?: TabSize;
    activeItemId: string;
    children: ReactNode;
    onChange?: (tabId: string) => void;
    maxHeight?: `${number}${DimensionUnity}`;
    minHeight?: `${number}${DimensionUnity}`;
};

export declare type TagProps = {
    'data-test-id'?: string;
} & (TagPropsUnselected | TagPropsSelected);

export declare type TextareaProps = {
    autosize?: boolean;
    focusOnMount?: boolean;
    resizable?: boolean;
    selectable?: boolean;
    defaultValue?: string;
    value?: string;
    onChange?: (value?: string) => void;
    onEnterPressed?: (value?: string) => void;
    onKeyDown?: (event: KeyboardEvent_2<HTMLTextAreaElement>) => void;
} & Omit<InputSharedBaseProps, 'value'> & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & Omit<TextareaAutosizeProps, 'onChange' | 'defaultValue' | 'value'>;

export declare type TextInputBaseProps = {
    id?: string;
    type?: TextInputType;
    decorator?: ReactNode;
    dotted?: boolean;
    clearable?: boolean;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    autocomplete?: boolean;
    readonly?: boolean;
    validation?: Validation;
    copyable?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    onEnterPressed?: (event: KeyboardEvent_2<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent_2<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent_2<HTMLInputElement>) => void;
    onClear?: () => void;
    maxLength?: number;
    size?: number;
    spellcheck?: boolean;
    /** @deprecated a `ref` can be forwarded to expose the underlying `<input />` DOM node.
     @example
     ```tsx
     import { TextInput } from '@frontify/fondue';

     const Component = () => {
     const inputRef = useRef();

     useEffect(() => {
     if (inputRef.current) {
     inputRef.current.focus();
     }
     }, [)
     return <TextInput ref={inputRef} />
     }
     ```
     */
    focusOnMount?: boolean;
    selectable?: boolean;
    extraActions?: TextInputExtraAction[];
    ariaLabel?: string;
} & AriaAttributes;

export declare type TextInputExtraAction = {
    onClick: () => void;
    icon: ReactElement;
    title: string;
    tooltip?: Omit<LegacyTooltipProps, 'triggerElement'>;
    disabled?: boolean;
};

export declare type TextInputProps = TextInputTextProps | TextInputNumberProps | TextInputPasswordProps | TextInputSearchProps;

export declare type TextOrNumberItem = {
    id: string;
    value: string | number;
    disabled?: boolean;
};

export declare type TextProps = SharedTypographyProps & AriaAttributes & {
    size?: TextSize;
    weight?: TextWeight;
    as?: 'a' | 'abbr' | 'address' | 'em' | 'label' | 'li' | 'span' | 'strong' | 'time' | 'p';
    color?: TextColor;
    /** @description optional color prop that uses the inverse box color when accessibility contrast is needed */
    boxColor?: BoxColor;
    children?: ReactNode;
};

export declare type TextStyleRenderElementProps = {
    styles: CSSProperties;
} & PlateRenderElementProps;

export declare type ToastProps = {
    isOpen: boolean;
    style: ToastStyle;
    icon: ReactNode;
    animationDirection?: ToastAnimationDirection;
    children?: ReactNode;
    theme?: ToastTheme;
    enableExitAnimation?: boolean;
    'data-test-id'?: string;
};

export declare type ToastTheme = 'light' | 'dark';

export declare type TooltipButton = {
    label: string;
    action: () => void;
};

export declare type TooltipIconProps = {
    tooltip?: LegacyTooltipProps;
    iconSize?: IconSize;
    triggerIcon?: ReactElement<IconProps>;
    triggerStyle?: TooltipIconTriggerStyle;
    'data-test-id'?: string;
};

export declare type TooltipProps = {
    id?: string;
    children: ReactElement;
    openOnMount?: boolean;
    placement?: PopperPlacement;
    offset?: [number, number];
    flip?: boolean;
    enablePortal?: boolean;
    content: string;
    withArrow?: boolean;
    size?: 'spacious' | 'compact';
    maxWidth?: string | number;
    maxHeight?: string | number;
    enterDelay?: number;
    leaveDelay?: number;
    'data-test-id'?: string;
    zIndex?: number;
    disabled?: boolean;
};

export declare type TreeActive = Omit<Active, 'id'> & {
    id: string;
};

export declare type TreeAnnouncements = {
    onDragStart({ active }: Pick<TreeDragEvent, 'active'>): string | undefined;
    onDragMove?({ active, over }: TreeDragEvent): string | undefined;
    onDragOver({ active, over }: TreeDragEvent): string | undefined;
    onDragEnd({ active, over }: TreeDragEvent): string | undefined;
    onDragCancel({ active, over }: TreeDragEvent): string | undefined;
};

export declare type TreeItemMultiselectProps = Omit<TreeItemProps, 'type' | 'onDrop' | 'accepts' | 'registerOverlay' | 'draggable' | 'showContentWhileDragging' | 'ignoreItemDoubleClick' | 'showDragHandlerOnHoverOnly' | 'dragHandlerPosition'> & {
    isDisabled?: boolean;
    checkBoxPosition?: DragHandlerPosition;
    onBeforeUnregisterChildren?: (id: string, nodes: TreeNodeWithoutElements[]) => void;
};

export declare type TreeItemMultiselectWithNodes = TreeItemMultiselectProps & {
    id: string;
    parentId: string;
    extendedId?: string;
    nodes?: TreeItemMultiselectWithNodes[];
    numChildNodes?: number;
    onSelect?: (id: string) => void;
};

export declare type TreeItemProps = SortableProps & (TreeItemWithLabelProps | TreeItemWithContentComponentProps);

export declare type TreeItemPropsSizing = 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

export declare type TreeItemState = {
    parentId?: string;
    childrenIds?: string[];
    level: number;
    domElement?: HTMLElement;
};

export declare type TreeItemStyling = {
    spacingY?: TreeItemPropsSizing;
    contentHight?: TreeItemContentFit;
    shadow?: TreeItemPropsSizing;
    borderRadius?: TreeItemPropsSizing;
    borderWidth?: Exclude<TreeItemPropsSizing, 'x-large'>;
    borderStyle?: TreeItemBorderStyle;
    activeColorStyle?: TreeItemColors;
};

export declare type TreeItemWithContentComponentProps = {
    label?: never;
    contentComponent?: ReactNode;
} & TreeItemBaseProps;

export declare type TreeItemWithLabelProps = {
    label?: string;
    contentComponent?: never;
} & TreeItemBaseProps;

export declare type TreeNodeWithoutElements = {
    id: string;
    level: number;
    parentId: string;
    extendedId: string;
    nodes: TreeNodeWithoutElements[];
};

export declare type TreeOfNodes = TNode[];

export declare type TreeOver = Omit<Over, 'id'> & {
    id: string;
};

export declare type TreeProps = {
    id: string;
    draggable?: boolean;
    children: ReactNode;
    multiselect?: boolean;
    selectedIds?: string[];
    expandedIds?: string[];
    dragHandlerPosition?: DragHandlerPosition;
    enableDragDelay?: boolean;
    showDragHandlerOnHoverOnly?: boolean;
    showContentWhileDragging?: boolean;
    itemStyle?: TreeItemStyling;
    'data-test-id'?: string;
    onSelect?: OnSelectCallback;
    onExpand?: OnExpandCallback;
    onShrink?: OnShrinkCallback;
    onDrop?: OnTreeDropCallback;
};

export declare type TreeState = {
    selectedIds: Set<string>;
    expandedIds: Set<string>;
    selectionMode: 'single' | 'multiselect';
    overlay?: Overlay;
    nodes: ReactElement<InternalTreeItemProps>[];
    rootNodes: ReactElement<InternalTreeItemProps>[];
    projection: Nullable<Projection>;
};

export declare type TreeStateAction = {
    type: 'REPLACE_STATE';
    payload: TreeState;
} | {
    type: 'REGISTER_OVERLAY_ITEM';
    payload: Overlay;
} | {
    type: 'SET_SELECT';
    payload: string;
} | {
    type: 'EXPAND_NODE';
    payload: string;
} | {
    type: 'SHRINK_NODE';
    payload: string;
} | {
    type: 'SET_HIDDEN';
    payload: {
        ids: string[];
        isHidden: boolean;
    };
} | {
    type: 'SET_SELECTION_MODE';
    payload: {
        selectionMode: TreeState['selectionMode'];
    };
} | {
    type: 'SET_PROJECTION';
    payload: Nullable<Projection>;
} | {
    type: 'REGISTER_NODE_CHILDREN';
    payload: {
        id: string;
        children: ReactElement<InternalTreeItemProps>[];
    };
} | {
    type: 'UNREGISTER_NODE_CHILDREN';
    payload: string;
} | {
    type: 'REPLACE_EXPANDED';
    payload: string[];
} | {
    type: 'REPLACE_SELECTED';
    payload: string[];
} | {
    type: 'REGISTER_ROOT_NODES';
    payload: ReactElement<InternalTreeItemProps>[];
} | {
    type: 'REGISTER_NODES';
    payload: ReactElement<InternalTreeItemProps>[];
};

export declare type TriggerProps = {
    disabled?: boolean;
    children?: ReactNode;
    isOpen?: boolean;
    onClear?: () => void;
    onDelete?: () => void;
    buttonProps?: HTMLAttributes<HTMLElement>;
    isFocusVisible?: boolean;
    size?: TriggerSize;
    showClear?: boolean;
    validation?: Validation;
    emphasis?: TriggerEmphasis;
};

export declare type UploadSource = {
    source: 'upload';
    sourceName?: undefined;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/scripts/types.ts
export type ComponentFileBuilderResponse = {
    content: string;
    extension: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Accordion/types.ts
export type AccordionProps = {
    children?: ReactNode;
    divider?: boolean;
    border?: boolean;
    'data-test-id'?: string;
};

export type AriaAccordionItemProps = {
    item: Node<AccordionItemProps>;
    state: TreeState<AccordionItemProps>;
    header: Omit<AccordionHeaderProps, 'isOpen'> & { active?: boolean; onClick?: () => void };
    padding?: boolean;
    divider?: boolean;
    headerComponent?: (props: AccordionHeaderProps) => ReactElement;
    'data-test-id'?: string;
};

export type AccordionItemProps = {
    header: Omit<AccordionHeaderProps, 'isOpen'> & { active?: boolean; onClick?: () => void };
    padding?: boolean;
    divider?: boolean;
    headerComponent?: (props: AccordionHeaderProps) => ReactElement;
    'data-test-id'?: string;
    children?: ReactNode;
};

export type AccordionHeaderIconSize = 'small' | 'medium' | 'large';

export type AccordionHeaderProps = {
    decorator?: ReactNode;
    children: string;
    disabled?: boolean;
    isOpen: boolean;
    'data-test-id'?: string;
};

export type AccordionHeaderIconProps = {
    isOpen: boolean;
    size?: AccordionHeaderIconSize;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/ActionMenu/ActionMenu/ActionMenu.tsx
export type ActionMenuItemType = MenuItemType & { onClick: () => void };

export type ActionMenuSwitchItemType = MenuItemType & {
    onClick: (switchValue: boolean) => void;
    type: 'switch';
    initialValue: boolean;
};

export type ActionMenuBlock = {
    id: string;
    menuItems: (ActionMenuItemType | ActionMenuSwitchItemType)[];
    ariaLabel?: string;
};

export type ActionMenuProps = {
    ariaLabel?: string;
    menuBlocks: ActionMenuBlock[];
    focus?: FocusStrategy;
    border?: boolean;
    scrollable?: boolean;
    /**
     * @deprecated Use the onClick method available on each `menuItem` in the `menuBlocks` instead.
     * @example
     *  <ActionMenu
          menuBlocks={[
              {
                  id: 'menu-block-1',
                  menuItems: [
                      {
                          id: 'menu-item-1',
                          label: 'Item 1',
                          onClick: () => console.log('Item 1 clicked');
                      },
                  ],
              },
          ]}
        />
     *  */
    onClick?: () => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/ActionMenu/Aria/AriaList.tsx
export type AriaListProps = {
    ariaProps: HTMLAttributes<HTMLElement>;
    border?: boolean;
    children: ReactNode;
    scrollable?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/ActionMenu/Aria/AriaMenuItem.tsx
export type AriaOptionProps = {
    menuItem: MenuItemType | ActionMenuItemType | ActionMenuSwitchItemType;
    node: Node<object>;
    isSelected?: boolean;
    state: TreeState<object>;
    /**
     *  @deprecated Use `menuItem.onClick` instead
     *  */
    onClick?: () => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/ActionMenu/Aria/AriaSection.tsx
export type AriaSectionProps = {
    ariaLabel?: string;
    children: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/ActionMenu/Aria/helper.tsx
export type MenuStateType = {
    'aria-label': string;
    children: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/AddBlockButton/AddBlockButton.tsx
export type AddBlockButtonProps = {
    onClick: () => void;
    title?: string;
    /** @deprecated use direction with ButtonDirection */
    orientation?: AddBlockButtonDirection;
    direction?: ButtonDirection;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/AssetInput/AssetInput.tsx
export type ImageAsset = {
    type: 'image' | 'logo';
    name: string;
    extension: string;
    src?: string;
    alt?: string;
    icon?: undefined;
    size: number;
};

export type UploadSource = { source: 'upload'; sourceName?: undefined };

export type LibrarySource = { source: 'library'; sourceName: string };

export type AssetType =
    | (ImageAsset & UploadSource)
    | (ImageAsset & LibrarySource)
    | (IconAsset & UploadSource)
    | (IconAsset & LibrarySource)
    | (OtherAsset & UploadSource)
    | (OtherAsset & LibrarySource);

export type AssetInputProps = {
    assets?: AssetType[];
    size: AssetInputSize;
    numberOfLocations?: number;
    actions?: ActionMenuProps['menuBlocks'];
    isLoading?: boolean;
    hideSize?: boolean;
    hideExtension?: boolean;
    onUploadClick?: (files: FileList) => void;
    onLibraryClick?: () => void;
    onMultiAssetClick?: () => void;
    acceptFileType?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/AssetInput/MultiAssetPreview/MultiAssetPreview.tsx
export type MultiAssetPreviewProps = {
    numberOfLocations: number;
    assets: AssetType[];
    onClick: () => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/AssetInput/SingleAsset/SelectedAsset.tsx
export type SelectedAssetProps = Pick<
    AssetInputProps,
    'actions' | 'isLoading' | 'size' | 'hideSize' | 'hideExtension'
> & {
    asset: AssetType;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Badge/types.ts
export type BadgeSize = 'small' | 'medium';

export type BadgeProps = {
    style?: BadgeStyle;
    icon?: ReactElement<IconProps>;
    status?: BadgeStatusIconProps['status'];
    onClick?: () => void;
    onDismiss?: () => void;
    disabled?: boolean;
    emphasis?: BadgeEmphasis;
    size?: BadgeSize;
    children?: ReactNode;
    'data-test-id'?: string;
    /** @description withTitle could be disabled only in the case another overlay is present, ex Tooltip */
    withTitleAttribute?: boolean;
};

export type BadgeStatusIconProps = { status: BadgeStatus | Color | string; disabled: boolean; 'data-test-id'?: string };

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Box/Box.tsx
export type BoxProps = {
    'data-test-id'?: string;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    as?: ContainerHTMLElement;
} & HTMLAttributes<HTMLDivElement | HTMLSpanElement>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Breadcrumbs/Breadcrumbs.tsx
export type Breadcrumb = {
    label: string;
    link?: string;
    onClick?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent<T>) => void;
    decorator?: ReactElement<IconProps>;
    bold?: boolean;
    badges?: BadgeProps[];
    'data-test-id'?: string;
} & Pick<BreadcrumbsProps, 'activeInline'>;

export type BreadcrumbsProps = {
    items: Breadcrumb[];
    keepRoot?: boolean;
    activeInline?: boolean;
    truncate?: boolean;
    'data-test-id'?: string;
    verticalGap?: BreadcrumbGap;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Button/Button.tsx
export type ButtonProps = {
    type?: ButtonType;
    title?: string;
    style?: ButtonStyle;
    emphasis?: ButtonEmphasis;
    hideLabel?: boolean;
    size?: ButtonSize;
    rounding?: ButtonRounding;
    disabled?: boolean;
    icon?: ReactElement;
    children?: ReactNode;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    hugWidth?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    formId?: string;
    /** @deprecated use emphasis with ButtonEmphasis.Weak */
    solid?: boolean;
    /** @deprecated inverted can be done by wrapping the component in a className="tw-dark" */
    inverted?: boolean;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Button/ButtonTypes.ts
export type ButtonElements = {
    button: string;
    icon: string;
    text: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/ButtonGroup/ButtonGroup.tsx
export type ButtonGroupProps = { size: ButtonSize; children?: ReactNode; 'data-test-id'?: string };

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Card/Card.tsx
export type CardProps = {
    children: ReactNode | ReactNode[];
    hoverable?: boolean;
    onClick?: (event: PressEvent) => void;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Checkbox/Checkbox.tsx
export type CheckboxProps = {
    id?: string;
    state?: CheckboxState;
    emphasis?: CheckboxEmphasis;
    size?: CheckboxSize;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    hideLabel?: boolean;
    tooltip?: InputLabelTooltipProps;
    helperText?: string;
    'aria-label'?: string;
    groupInputProps?: HTMLAttributes<HTMLElement>;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Checklist/Checklist.tsx
export type Columns = 1 | 2 | 3 | 4;

export type CheckboxValue = Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'> & { value: string };

export type ChecklistBase = {
    checkboxes: CheckboxValue[];
    setActiveValues: (value: string[]) => void;
    activeValues?: string[];
    ariaLabel?: string;
    'data-test-id'?: string;
};

export type ChecklistProps = ChecklistBase & {
    direction: ChecklistDirection.Vertical | ChecklistDirection.Horizontal;
    columns?: Columns;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/CollapsibleWrap/types.ts
export type CollapsibleWrapProps = {
    isOpen: boolean;
    preventInitialAnimation?: boolean;
    animateOpacity?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Container/Container.tsx
export type ContainerProps = {
    children?: ReactNode | ReactNode[];
    minWidth?: `${number}${DimensionUnity}`;
    maxWidth?: `${number}${DimensionUnity}`;
    minHeight?: `${number}${DimensionUnity}`;
    maxHeight?: `${number}${DimensionUnity}`;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    as?: ContainerHTMLElement;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/DatePicker/DatePicker.tsx
export type DatePickerProps = {
    placeHolder?: string;
    isClearable?: boolean;
    shouldCloseOnSelect?: boolean;
    dateFormat?: string;
    /** @description when the variant is of type 'range', the value should be the startDate */
    value?: Date | null;
    minDate?: Date;
    maxDate?: Date;
    validation?: Validation;
    customTrigger?: ReactNode;
    customHeader?: ReactNode;
    children?: ReactNode;
    hasPopperArrow?: boolean;
    preventOpenOnFocus?: boolean;
    inline?: boolean;
    filterDate?: (date: Date) => boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onBlur?: () => void;
    onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
    'data-test-id'?: string;
} & (SingleDatePickerProps | RangeDatePickerProps);

export type ReactDatePickerRef = ReactDatePicker<boolean, undefined>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Dialog/Dialog.tsx
export type DialogProps = Omit<
    OverlayProps,
    'placement' | 'flip' | 'offset' | 'theme' | 'withArrow' | 'arrowCustomColors' | 'shadow' | 'isDialog'
> &
    Omit<BaseDialogProps, 'width'>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Divider/Divider.tsx
export type DividerProps = {
    style?: DividerStyle;
    height?: DividerHeight | string;
    color?: string;
    vertical?: boolean;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/DropZone/DropZone.tsx
export type OnDropCallback<T> = (
    targetItem: DraggableItem<T>,
    sourceItem: DraggableItem<T>,
    position: CollisionPosition,
    direction?: 'up' | 'down',
) => void;

export type DropZoneData<T> = {
    targetItem: DraggableItem<T>;
    position: CollisionPosition;
};

export type DropZoneProps<T> = {
    data: DropZoneData<T>;
    onDrop?: OnDropCallback<T>;
    accept: string | string[];
    children?: JSX.Element;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Dropdown/Dropdown.tsx
export type DropdownProps = {
    id?: string;
    menuBlocks: MenuBlock[];
    onChange: (id?: string | number) => void;
    activeItemId?: string | number;
    placeholder?: string;
    size?: DropdownSize;
    disabled?: boolean;
    clearable?: boolean;
    ariaLabel?: string;
    decorator?: ReactElement;
    autoResize?: boolean;
    validation?: Validation;
    alignment?: DropdownAlignment;
    position?: DropdownPosition;
    emphasis?: TriggerEmphasis;
    flip?: boolean;
    'data-test-id'?: string;
    enablePortal?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Dropdown/SelectMenu/SelectMenu.tsx
export type MenuItemType = Omit<MenuItemProps, 'switchComponent'> & { id: string | number; link?: string };

export type MenuBlock = {
    id: string;
    menuItems: MenuItemType[];
    ariaLabel?: string;
};

export type SelectMenuProps = {
    menuBlocks: MenuBlock[];
    ariaProps: AriaListBoxOptions<any>;
    state: ListState<any>;
    ariaLabel?: string;
    scrollable?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/FieldsetHeader/FieldsetHeader.tsx
export type FieldsetHeaderProps = {
    size?: FieldsetHeaderSize;
    active?: boolean;
    decorator?: ReactNode;
    type?: FieldsetHeaderType;
    disabled?: boolean;
    bold?: boolean;
    children: string;
    onClick?: () => void;
    as?: keyof JSX.IntrinsicElements;
    tabIndex?: number;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/FilterableMultiSelect/FilterableMultiSelect.tsx
export type FilterableMultiSelectItem = {
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
};

export type FilterableMultiSelectProps = {
    items: FilterableMultiSelectItem[];
    activeItemKeys: (string | number)[];
    disabled?: boolean;
    onSelectionChange: (keys: (string | number)[]) => void;
    ariaLabel?: string;
    label?: string;
    placeholder?: string;
    type?: FilterableMultiSelectType;
    size?: FilterableMultiSelectSize;
    validation?: Validation;
    summarizedLabel?: string;
    indeterminateItemKeys?: (string | number)[];
    flip?: boolean;
    emphasis?: TriggerEmphasis;
    enablePortal?: boolean;
    filterLabel?: string;
    emptyFilteredResultsLabel?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Flex/Flex.tsx
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type FlexAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type FlexAlignContent =
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'baseline'
    | 'stretch'
    | 'normal';

export type FlexProps = {
    direction?: FlexDirection;
    wrap?: FlexWrap;
    spacing?: SpacingValue;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    justify?: FlexJustify;
    alignItems?: FlexAlignItems;
    alignContent?: FlexAlignContent;
    'data-test-id'?: string;
    children?: ReactNode | ReactNode[];
    bg?: string;
    color?: string;
    as?: ContainerHTMLElement;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    minWidth?: `${number}${DimensionUnity}`;
    maxWidth?: `${number}${DimensionUnity}`;
    minHeight?: `${number}${DimensionUnity}`;
    maxHeight?: `${number}${DimensionUnity}`;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Flyout/Flyout.tsx
export type FlyoutProps = {
    trigger:
        | ReactNode
        | ((
              triggerProps: HTMLAttributes<HTMLElement>,
              ref: MutableRefObject<HTMLElement | null>,
              triggerState: { isFocusVisible: boolean; isPressed: boolean },
          ) => JSX.Element);
    onCancel?: () => void;
    onConfirm?: (event?: MouseEvent<HTMLButtonElement>) => void;
    title?: string;
    decorator?: ReactNode;
    badges?: BadgeProps[];
    hug?: boolean;
    fitContent?: boolean;
    isOpen?: boolean;
    onOpenChange: (isOpen: boolean) => void;
    fixedHeader?: ReactNode;
    fixedFooter?: ReactNode;
    contentMinHeight?: number;
    /**
     * The legacy footer buttons section inside of the flyout will be deleted in the future.
     * @deprecated Pass the FlyoutFooter component with buttons to the Flyout component.
     */
    legacyFooter?: boolean;
    placement?: FlyoutPlacement;
    offset?: number;
    updatePositionOnContentChange?: boolean;
    isTriggerDisabled?: boolean;
    children?: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Flyout/FlyoutFooter.tsx
export type FlyoutFooterProps = {
    buttons: [ButtonProps, ButtonProps] | [ButtonProps];
    border?: boolean;
    children?: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Form/Form.tsx
export type FormProps = {
    children: ReactNode;
    'data-test-id'?: string;
} & FormHTMLAttributes<HTMLFormElement>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/FormControl/FormControl.tsx
export type FormControlProps = {
    direction?: FormControlDirection;
    disabled?: boolean;
    clickable?: boolean;
    label?: Omit<InputLabelProps, 'disabled'>;
    extra?: ReactNode;
    helper?: Omit<HelperTextProps, 'disabled' | 'style'> & { position?: HelperPosition };
    style?: FormControlStyle;
    name?: string;
    children?: ReactNode;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/FormField/FormField.tsx
export type LabelProps = {
    text: string;
    hugWidth?: boolean;
    required?: boolean;
    secondaryLabel?: string;
    tooltips?: TooltipProps[];
    toolTipSize?: IconSize;
};

export type FormFieldProps = {
    children: ReactElement;
    label: LabelProps;
    disabled?: boolean;
    error?: boolean;
    errorText?: string;
    errorTextColor?: Validation;
    helperText?: string;
    helperTextColor?: Validation;
    hiddenLabel?: boolean;
    readOnly?: boolean;
    status?: Validation;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/FrontifyPattern/FrontifyPattern.tsx
export type FrontifyPatternProps = {
    pattern: PatternDesign;
    scale?: PatternScale;
    scaleOrigin?: PatternScaleOrigin;
    foregroundColor?: PatternTheme;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Grid/Grid.tsx
export type GridProps = {
    column?: number;
    spacing?: SpacingValue;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    children?: ReactNode;
    width?: `${number}${DimensionUnity}`;
    rowHeight?: `${number}${DimensionUnity}` | 'auto';
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    as?: ContainerHTMLElement;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/InlineDialog/InlineDialog.tsx
export type InlineDialogProps = Omit<
    OverlayProps,
    'theme' | 'isDetached' | 'verticalAlignment' | 'withArrow' | 'arrowCustomColors' | 'shadow' | 'isDialog'
> &
    Omit<BaseDialogProps, 'darkUnderlay'> & { unsafe_zIndex?: number };

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/InputLabel/InputLabel.tsx
export type InputLabelTooltipProps =
    | (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
    | (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[];

export type InputLabelProps = {
    id?: string;
    htmlFor: string;
    required?: boolean;
    disabled?: boolean;
    clickable?: boolean;
    tooltip?: InputLabelTooltipProps;
    bold?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/LegacyOrderableList/types.ts
export type LegacyRenderListItem<T> = (
    items: LegacyOrderableListItem<T>,
    dragProps: LegacyDragProperties,
) => ReactElement;

export type LegacyCollectionItemProps<T> = {
    item: LegacyOrderableListItem<T>;
    dragDisabled: boolean;
    renderContent: LegacyRenderListItem<T>;
    listId: string;
};

export type LegacyOrderableListItem<T = Record<string, unknown>> = DraggableItem<T> & {
    alt: string;
};

export type LegacyDragProperties = {
    componentDragState: LegacyItemDragState;
    isFocusVisible: boolean;
};

export type LegacyOrderableListProps<T> = {
    items: LegacyOrderableListItem<T>[];
    dragDisabled: boolean;
    onMove: (modifiedItems: LegacyOrderableListItem<T>[]) => void;
    renderContent: LegacyRenderListItem<T>;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/LegacyOrderableList/utils/types.ts
export type StoryListItem = {
    textContent: JSX.Element;
};

export type HighlightProps = {
    color: HighlightColor;
    children: ReactChild;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/LegacyTextarea/LegacyTextarea.tsx
export type LegacyTextareaProps = {
    id?: string;
    value?: string;
    required?: boolean;
    decorator?: ReactNode;
    placeholder?: string;
    disabled?: boolean;
    onInput?: (value: string) => void;
    onBlur?: (value: string) => void;
    onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    validation?: Validation;
    /** When autosize if false, this is used as 'rows' property for standard textarea */
    minRows?: number;
    /** When autosize if false, this property is ignored */
    maxRows?: number;
    autosize?: boolean;
    resizeable?: boolean;
    selectable?: boolean;
    focusOnMount?: boolean;
    onEnterPressed?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
} & AriaAttributes;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/LegacyTooltip/LegacyTooltip.tsx
export type TooltipButton = {
    label: string;
    action: () => void;
};

export type LegacyTooltipProps = {
    triggerElement?: ReactElement;
    content: ReactNode;
    tooltipIcon?: ReactElement;
    heading?: ReactNode;
    headingIcon?: ReactElement;
    linkUrl?: string;
    linkLabel?: string;
    brightHeader?: BrightHeaderStyle;
    buttons?: [TooltipButton, TooltipButton] | [TooltipButton];
    children?: ReactNode;
    position?: TooltipPosition;
    alignment?: TooltipAlignment;
    flip?: boolean;
    withArrow?: boolean;
    withStrongBorder?: boolean;
    hoverDelay?: number;
    enterDelay?: number;
    open?: boolean;
    disabled?: boolean;
    /** @deprecated use disabled since the tooltip is always present in the DOM now so hidden has no effect anymore */
    hidden?: boolean;
    enablePortal?: boolean;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/LoadingBar/LoadingBar.tsx
export type LoadingBarProps = {
    percentage?: number;
    size?: LoadingBarSize;
    state?: LoadingBarState;
    rounded?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/LoadingCircle/LoadingCircle.tsx
export type LoadingCircleProps = {
    style?: LoadingCircleStyle;
    size?: LoadingCircleSize;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Menu/Menu.tsx
export type MenuProps = Props;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/MenuItem/MenuItem.tsx
export type MenuItemProps = {
    style?: MenuItemStyle;
    disabled?: boolean;
    active?: boolean;
    checked?: boolean;
    selectionIndicator?: SelectionIndicatorIcon;
    /** @deprecated this prop is not being used anymore */
    type?: string;
    link?: string;
    onBlur?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: FocusEvent<T>) => void;
    onClick?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent<T>) => void;
    onFocus?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: FocusEvent<T>) => void;
    onMouseEnter?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent<T>) => void;
    onMouseOut?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent<T>) => void;
    onMouseOver?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent<T>) => void;
    onMouseLeave?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent<T>) => void;
    children?: ReactNode;
    'data-test-id'?: string;
} & Omit<MenuItemContentProps, 'iconSize'>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/MenuItem/MenuItemContent.tsx
export type MenuItemContentProps = {
    title?: ReactNode;
    decorator?: ReactElement;
    switchComponent?: ReactElement;
    subtitle?: string;
    size?: MenuItemContentSize;
    ariaProps?: HTMLAttributes<HTMLElement>;
    children?: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Modal/types.ts
export type ModalButton = Omit<ButtonProps, 'size'>;

export type ModalVisualProps = {
    pattern?: PatternDesign;
    foregroundColor?: PatternTheme;
};

export type ModalHeaderProps = {
    title?: string;
    leadText?: ReactNode;
    decorator?: ReactElement;
    variant?: ModalHeaderVariant;
};

export type ModalBodyProps = {
    direction?: ScrollWrapperDirection;
    children?: ModalBodyChildren;
    horizontalPadding?: boolean;
};

export type ModalFooterProps = {
    buttons: [ModalButton] | [ModalButton, ModalButton];
};

export type ModalPadding = {
    [key: string]: { top: string; horizontal: string; bottom: string };
};

export type ModalProps = {
    visual?: ModalVisualProps;
    width?: ModalWidth;
    children?: ModalBodyChildren;
    isOpen: boolean;
    onClose?: () => void;
    isDismissable?: boolean;
    zIndex?: number;
    compact?: boolean;
} & Omit<AriaOverlayProps, 'isOpen'> &
    AriaDialogProps;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/MultiInput/MultiInput.tsx
export type MultiInputProps = {
    layout: MultiInputLayout;
    spanLastItem?: boolean;
    children: ReactNode;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/MultiSelect/MultiSelect.tsx
export type MultiSelectItem = {
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
};

export type MultiSelectProps = {
    items: MultiSelectItem[];
    activeItemKeys: (string | number)[];
    disabled?: boolean;
    onSelectionChange: (keys: (string | number)[]) => void;
    ariaLabel?: string;
    label?: string;
    placeholder?: string;
    type?: MultiSelectType;
    size?: MultiSelectSize;
    validation?: Validation;
    summarizedLabel?: string;
    indeterminateItemKeys?: (string | number)[];
    flip?: boolean;
    emphasis?: TriggerEmphasis;
    enablePortal?: boolean;
};

export type Item = {
    label: string;
    value: string;
    avatar?: ReactNode;
    isCategory?: boolean;
    isDivider?: boolean;
    imgSrc?: string;
    ariaLabel?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/NumberInput/types.ts
export type NumberInputProps = {
    controls?: boolean;
    stepInterval?: number;
} & InputBaseProps<number>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/OrderableList/types.ts
export type RenderListItem<T> = (items: OrderableListItem<T>) => ReactElement;

export type OrderableListItem<T = Record<string, unknown>> = DraggableItem<T> & {
    alt: string;
};

export type OrderableListItemStyle = TreeItemStyling;

export type OrderableListProps<T> = {
    items: OrderableListItem<T>[];
    dragDisabled: boolean;
    dragHandlerPosition?: DragHandlerPosition;
    itemStyle?: OrderableListItemStyle;
    selectedId?: string;
    onMove: (modifiedItems: DraggableItem<T>[]) => void;
    renderContent: RenderListItem<T>;
    'data-test-id'?: string;
} & Pick<TreeProps, 'enableDragDelay'>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/OrderableList/utils/types.ts
export type StoryListItem = {
    textContent: JSX.Element;
};

export type HighlightProps = {
    color: HighlightColor;
    children: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/PasswordInput/PasswordInput.tsx
export type PasswordInputProps = { obfuscated?: boolean } & Omit<
    InputBaseProps<string>,
    'valueSelect' | 'decorator' | 'suffix'
>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Popper/types.ts
export type PopperPlacement =
    | 'top'
    | 'bottom'
    | 'top-start'
    | 'bottom-start'
    | 'top-end'
    | 'bottom-end'
    | 'right'
    | 'left'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';

export type PopperProps = {
    children?: ReactNode;
    anchor: RefObject<Element>;
    open?: boolean;
    placement?: PopperPlacement;
    offset?: [number, number];
    flip?: boolean;
    enablePortal?: boolean;
    zIndex?: number | string;
    /** @description This property will detach the overlay from its trigger and will be relatively position to the body. example: Dialog compoennt. */
    isDetached?: boolean;
    /** @description This property will take effect only if isDetached is enabled. */
    verticalAlignment?: 'top' | 'centered';
    /** @description The property sets the way the modal is positioned on the view */
    strategy?: PositioningStrategy;
    withArrow?: boolean;
    arrowCustomColors?: string;
};

export type PopperDimension = {
    width: number;
    height: number;
};

export type PrepareElementStyleProps = {
    dimension: PopperDimension;
    isVerticalAlignedToTop: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Portal/Portal.tsx
export type PortalProps = { children?: ReactNode; container?: HTMLElement };

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RadioList/RadioButton.tsx
export type RadioButtonProps = {
    value: string;
    disabled?: boolean;
    hideLabel?: boolean;
    emphasis?: RadioButtonEmphasis;
    helperText?: string;
    tooltip?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RadioList/RadioList.tsx
export type RadioListProps = {
    children: ReactNode;
    onChange?: (value: string) => void;
    direction?: RadioListDirection;
    defaultValue?: string;
    name?: string;
    ariaLabel?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RadioPill/RadioPill.tsx
export type RadioPillProps = {
    label: string;
    active: boolean;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    icon?: ReactElement;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/AlignPlugin/types.ts
export type AlignPluginProps = PluginProps & {
    validTypes?: string[];
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/BlurOnBreakPlugin/index.ts
export type BlurOnBreakPluginProps = PluginProps & BlurOnBreakPlatePlugin;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/ColumnBreakPlugin/types.ts
export type BreakAfterPluginProps = PluginProps & {
    columns?: number;
    gap?: string | number;
    /**
     * If provided the `columns` property will be ignored
     */
    customClass?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/ColumnBreakPlugin/utils/setColumnBreaks.ts
export type ColumnBreakValue = 'active' | 'inactive' | undefined;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/EmojiPlugin/EmojiPicker/EmojiPickerContent.tsx
export type EmojiPickerContentProps = Pick<
    UseEmojiPickerType,
    | 'i18n'
    | 'onMouseOver'
    | 'onSelectEmoji'
    | 'emojiLibrary'
    | 'isSearching'
    | 'searchResult'
    | 'visibleCategories'
    | 'refs'
    | 'settings'
>;

export type EmojiButtonProps = {
    index: number;
    emoji: Emoji;
    onSelect: (emoji: Emoji) => void;
    onMouseOver: (emoji?: Emoji) => void;
};

export type RowOfButtonsProps = Pick<UseEmojiPickerType, 'onMouseOver' | 'onSelectEmoji' | 'emojiLibrary'> & {
    row: GridRow;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/EmojiPlugin/EmojiPicker/EmojiPickerNavigation.tsx
export type EmojiPickerNavigationProps = Pick<
    UseEmojiPickerType,
    'i18n' | 'emojiLibrary' | 'icons' | 'focusedCategory'
> & {
    onClick: (id: EmojiCategoryList) => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/EmojiPlugin/EmojiPicker/EmojiPickerPreview.tsx
export type EmojiPickerPreviewProps = Pick<UseEmojiPickerType, 'emoji' | 'hasFound' | 'isSearching' | 'i18n'>;

export type EmojiPreviewProps = Pick<UseEmojiPickerType, 'emoji'>;

export type NoEmojiPreviewProps = Pick<UseEmojiPickerType, 'i18n'>;

export type PickAnEmojiPreviewProps = NoEmojiPreviewProps;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/EmojiPlugin/EmojiPicker/EmojiPickerSearchAndClear.tsx
export type EmojiPickerSearchAndClearProps = Pick<UseEmojiPickerType, 'i18n' | 'searchValue' | 'clearSearch'>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/EmojiPlugin/EmojiPicker/EmojiPickerSearchBar.tsx
export type EmojiPickerSearchBarProps = {
    children: ReactNode;
} & Pick<UseEmojiPickerType, 'i18n' | 'searchValue' | 'setSearch'>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/LinkPlugin/FloatingLink/CustomFloatingLink.tsx
export type LinkFloatingToolbarProps = {
    state?: LinkFloatingToolbarState;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/LinkPlugin/FloatingLink/InsertLinkModal/types.ts
export type InsertModalDispatchType = { type: string; payload?: Partial<InsertModalStateProps> };

export type InsertModalStateProps = {
    url: string;
    text: string;
    newTab: CheckboxState;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/LinkPlugin/types.ts
export type TLinkElement = TPlateLinkElement & {
    chosenLink?: {
        searchResult?: {
            link?: string;
        };
        openInNewTab?: boolean;
    };
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/ListPlugin/types.ts
export type ListPluginProps = PluginProps & {
    isSoftBreak?: boolean;
};

export type WithListPlugin = ListPlugin & {
    isSoftBreak?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/MentionPlugin/MentionMarkupElement/types.ts
export type MarkupElementProps = PlateRenderElementProps;

export type MarkupElementNodeType = ({ children, ...props }: MarkupElementProps) => ReactElement;

export type MarkupElementNodeComponentProps = { category: MentionableCategory } & MarkupElementProps;

export type MarkupElementNodeComponentType = ({
    category,
    children,
    ...props
}: MarkupElementNodeComponentProps) => ReactElement;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/MentionPlugin/types.ts
export type MentionItemData = {
    id: string;
    category: MentionableCategory;
    image?: string;
};

export type MentionableItem = TComboboxItemWithData<MentionItemData>;

export type MentionableItems = MentionableItem[];

export type MentionPluginProps = PluginProps & {
    mentionableItems: MentionableItems;
};

export type MappedMentionableItems = Map<string, string>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/TextStylePlugin/TextStyleDropdown/types.ts
export type TextStyleDropdownProps = {
    editorId?: string;
    textStyles?: Plugin[];
};

export type DropdownTriggerProps = {
    label: string;
    open: boolean;
    onClick: () => void;
};

export type DropdownItemProps = {
    editor: PlateEditor;
    type: Plugin;
    children: ReactNode;
};

export type TextStyleButtonProps = PluginButtonProps & {
    textStyles?: Plugin[];
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/TextStylePlugin/types.ts
export type TextStyleRenderElementProps = {
    styles: CSSProperties;
} & PlateRenderElementProps;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/Plugins/types.ts
export type Unknown = unknown;

export type ObjectType<T extends Unknown> = Record<string, T>;

export type ButtonGroupProps = {
    index: number;
    children?: ReactNode;
};

export type Button = {
    id: string;
    button: PluginButton;
};

export type Buttons = Button[][];

export type IconStylingWrapperProps = {
    icon: ReactElement;
};

export type InlineData = () => ReactElement;

export type PlatePluginList = Map<string, PlatePlugin<Record<string, any>>[]>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/RichTextEditor.tsx
export type RichTextEditorProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onTextChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    readonly?: boolean;
    padding?: PaddingSizes;
    position?: Position;
    plugins?: PluginComposer;
    onValueChanged?: (value: TreeOfNodes | null) => void;
    border?: boolean;
    updateValueOnChange?: boolean; // Only set to true when you are sure that performance isn't an issue
    toolbarWidth?: number;
    hideExternalFloatingModals?: (editorId: string) => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/components/EditorPositioningWrapper/ToolbarWrapper/types.ts
export type ToolbarWrapperProps = {
    children: ReactNode;
    editorWidth?: number;
    toolbarButtonGroups?: ButtonGroupsPerRow;
    toolbarWidth?: number;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/components/EditorPositioningWrapper/types.ts
export type WrapperProps = {
    children: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/components/FloatingModal/FloatingModal.tsx
export type FloatingModalWrapperProps = {
    children: ReactNode;
    minWidth: CSSProperties['minWidth'];
    padding: CSSProperties['padding'];
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/components/Toolbar/types.ts
export type ToolbarButtonsPosition = Record<Position, Buttons>;

export type ToolbarProps = {
    toolbarButtons: ToolbarButtons;
    editorId: string;
    toolbarWidth?: number;
};

export type ButtonGroupWidths = { group: Button[]; buttonGroupWidth: number; index: number }[];

export type ButtonGroupsPerRow = ButtonGroupWidths[];

export type ButtonGroupProps = {
    index: number;
    children?: ReactNode;
};

export type ToolbarButtonProps = Omit<ToolbarPrimitive.ToolbarToggleItemProps, 'asChild' | 'value'> & {
    pressed?: boolean;
    isDropdown?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/context/RichTextEditorContext.tsx
export type RichTextEditorContextProps = {
    styles: Record<string, CSSProperties>;
    position: Position;
    wrapperClassNames: string;
    editorId: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/serializer/markdown/deserializer/types.ts
export type DeserializerConfig = {
    allowUnsafeLink: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/serializer/markdown/remarkFondue/extensions/mention/types.ts
export type RegExpMatchArray = string[] & {
    index: number;
    input: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/serializer/markdown/remarkFondue/types.ts
export type NodeChild = {
    type: string;
    value?: string;
    text?: string;
    target?: TargetValue;
    children?: NodeChild[];
};

export type TreeNode = {
    type: string;
    target?: TargetValue;
    children: NodeChild[];
};

export type NodeChildKey = keyof NodeChild;

export type RemarkExtension = (tree: TreeNode) => void;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/serializer/markdown/types.ts
export type InputNodeTypes = {
    paragraph: string;
    blockQuote: string;
    codeBlock: string;
    link: string;
    ulList: string;
    olList: string;
    listItem: string;
    listItemChild: string;
    heading: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    emphasisMark: string;
    strongMark: string;
    deleteMark: string;
    inlineCodeMark: string;
    thematicBreak: string;
    image: string;
    mention: string;
};

export type MarkdownAstNodeType =
    | 'paragraph'
    | 'heading'
    | 'list'
    | 'listItem'
    | 'listItemChild'
    | 'link'
    | 'image'
    | 'blockquote'
    | 'code'
    | 'html'
    | 'emphasis'
    | 'strong'
    | 'delete'
    | 'inlineCode'
    | 'thematicBreak'
    | 'text'
    | 'mention';

export type NodeType = BlockType | LeafType;

export type LeafType = {
    text: string;
    strikethrough?: boolean;
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
    parentType?: string;
};

export type BlockType = {
    type: string;
    children: NodeType[];
    parentType?: string;
    caption?: string;
    language?: string;
    break?: boolean;
    link?: string;
    url?: string;
    id?: string;
    category?: string;
    target?: TargetValue;
};

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export type OptionType<T extends InputNodeTypes = InputNodeTypes> = {
    nodeTypes: RecursivePartial<T>;
    linkDestinationKey: string;
    ignoreParagraphNewline: boolean;
    listDepth: number;
    imageSourceKey?: string;
    imageCaptionKey?: string;
};

export type PartialOptionType<T extends OptionType = OptionType> = Partial<T>;

export type MarkdownAstNode = {
    type?: MarkdownAstNodeType;
    ordered?: boolean;
    value?: string;
    text?: string;
    children?: Array<MarkdownAstNode>;
    depth?: 1 | 2 | 3 | 4 | 5 | 6;
    url?: string;
    alt?: string;
    lang?: string;
    // Markdown Ast metadata
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    position?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    spread?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    checked?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    indent?: any;
    target?: TargetValue;
};

export type TargetValue = (typeof Targets)[keyof typeof Targets];

export type TextNode = { text?: string };

export type CodeBlockNode<T extends InputNodeTypes> = {
    type: T['codeBlock'];
    language: string | undefined;
    children: Array<TextNode>;
};

export type HeadingNode<T extends InputNodeTypes> = {
    type: T['heading'][1] | T['heading'][2] | T['heading'][3] | T['heading'][4] | T['heading'][5] | T['heading'][6];
    children: Array<DeserializedNode<T>>;
};

export type ListNode<T extends InputNodeTypes> = {
    type: T['olList'] | T['ulList'];
    children: Array<DeserializedNode<T>>;
};

export type ListItemNode<T extends InputNodeTypes> = {
    type: T['listItem'];
    children: Array<DeserializedNode<T>>;
};

export type ListItemChildNode<T extends InputNodeTypes> = {
    type: T['listItemChild'];
    children: Array<DeserializedNode<T>>;
};

export type ParagraphNode<T extends InputNodeTypes> = {
    type: T['paragraph'];
    break?: true;
    children: Array<DeserializedNode<T>>;
};

export type LinkNode<T extends InputNodeTypes> = {
    type: T['link'];
    children: Array<DeserializedNode<T>>;
    [urlKey: string]: string | undefined | Array<DeserializedNode<T>>;
};

export type ImageNode<T extends InputNodeTypes> = {
    type: T['image'];
    children: Array<DeserializedNode<T>>;
    [sourceOrCaptionKey: string]: string | undefined | Array<DeserializedNode<T>>;
};

export type BlockQuoteNode<T extends InputNodeTypes> = {
    type: T['blockQuote'];
    children: Array<DeserializedNode<T>>;
};

export type InlineCodeMarkNode<T extends InputNodeTypes> = {
    type: T['inlineCodeMark'];
    children: Array<TextNode>;
    language: string | undefined;
};

export type ThematicBreakNode<T extends InputNodeTypes> = {
    type: T['thematicBreak'];
    children: Array<DeserializedNode<T>>;
};

export type ItalicNode<T extends InputNodeTypes> = {
    [K in T['emphasisMark']]: true;
} & {
    children: TextNode;
};

export type BoldNode = {
    bold: true;
    children: TextNode;
};

export type StrikeThoughNode = {
    strikethrough: true;
    children: TextNode;
};

export type InlineCodeNode = {
    code: true;
    text: string | undefined;
};

export type DeserializedNode<T extends InputNodeTypes> =
    | CodeBlockNode<T>
    | HeadingNode<T>
    | ListNode<T>
    | ListItemNode<T>
    | ListItemChildNode<T>
    | ParagraphNode<T>
    | LinkNode<T>
    | ImageNode<T>
    | BlockQuoteNode<T>
    | InlineCodeMarkNode<T>
    | ThematicBreakNode<T>
    | ItalicNode<T>
    | BoldNode
    | StrikeThoughNode
    | InlineCodeNode
    | TextNode;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/serializer/nodes/button.ts
export type ButtonStylesType = Record<string, Record<string, CSSPropertiesHover>>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/serializer/serializeToHtml.ts
export type SerializeNodesToHtmlOptions = {
    styles?: Record<string, CSSPropertiesHover>;
    mentionable?: MentionableItems;
    columns?: number;
    columnGap?: CSSProperties['columnGap'];
    customClass?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/serializer/types.ts
export type CSSPropertiesHover = CSSProperties & { hover?: CSSProperties };

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/RichTextEditor/types.ts
export type TreeOfNodes = TNode[];

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/ScrollWrapper/types.ts
export type ScrollWrapperProps = {
    direction?: ScrollWrapperDirection;
    children?: ReactElement | ReactElement[];
    'data-test-id'?: string;
    tabindex?: number;
    scrollShadows?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/SegmentedControls/SegmentedControls.tsx
export type IconItem = {
    id: string;
    icon: ReactElement<IconProps>;
    value?: string;
    ariaLabel: string;
    disabled?: boolean;
};

export type TextOrNumberItem = {
    id: string;
    value: string | number;
    disabled?: boolean;
};

export type SegmentSize = 'small' | 'medium';

export type SegmentedControlsProps = {
    id?: string;
    items: (TextOrNumberItem | IconItem)[];
    activeItemId?: string;
    onChange: (id: string) => void;
    ariaLabel?: string;
    disabled?: boolean;
    hugWidth?: boolean;
    size?: SegmentSize;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Slider/Slider.tsx
export type SliderValue = {
    raw: number;
    withSuffix: string;
};

export type SliderProps = BaseSliderProps &
    Pick<AriaAttributes, 'aria-label'> &
    Pick<AriaAttributes, 'aria-labelledby'>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Stack/Stack.tsx
export type STACK_DIRECTION = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type STACK_JUSTIFY = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type STACK_ALIGN_ITEMS = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type STACK_ALIGN_CONTENT =
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'baseline'
    | 'stretch'
    | 'normal';

export type STACK_PROPS = {
    children?: ReactNode | ReactNode[] | JSX.Element;
    direction?: STACK_DIRECTION;
    spacing?: SpacingValue;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    divider?: ReactElement;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    justify?: STACK_JUSTIFY;
    alignItems?: STACK_ALIGN_ITEMS;
    alignContent?: STACK_ALIGN_CONTENT;
    as?: ContainerHTMLElement;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Switch/Switch.tsx
export type SwitchSize = 'small' | 'medium';

export type SwitchMode = 'on' | 'off' | 'indeterminate';

export type SwitchLabelStyle = 'default' | 'heading';

export type SwitchProps = {
    id?: string;
    mode?: SwitchMode;
    disabled?: boolean;
    label?: string;
    labelStyle?: string;
    name?: string;
    size?: SwitchSize;
    hug?: boolean;
    tooltip?: InputLabelTooltipProps;
    ariaLabel?: string;
    onChange?: (e: MouseEvent) => void;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Table/Table.tsx
export type ColumnAlign = 'left' | 'right';

export type Cell = {
    sortId: string | number;
    value: ReactNode;
    ariaLabel?: string;
    align?: ColumnAlign;
};

export type Column = {
    name: string;
    titleNode?: ReactNode;
    key: string;
    sortable?: boolean;
    align?: ColumnAlign;
};

export type Row = {
    key: Key;
    // cell keys have to correspond to column key values
    // e.g. Column { name: 'User', key: 'user' } ==> Row Cell { user: { id: 'anna', value: 'Anna' } }
    cells: Record<string, Cell>;
    actionElements?: ReactNode;
};

export type TableProps = {
    columns: Column[];
    rows: Row[];
    onSelectionChange?: (ids?: Key[]) => void;
    onSortChange?: (column: string, direction?: SortDirection) => void;
    selectionMode?: SelectionMode;
    selectedRowIds?: Key[];
    ariaLabel?: string;
    children?: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Table/TableCell.tsx
export type TableCellProps = {
    cell: any;
    selectionMode: string;
    type?: TableCellType;
    isChecked?: boolean;
    selectedRows: Key[];
    setSelectedRows?: (ids?: Key[]) => void;
    align?: ColumnAlign;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Table/TableColumnHeader.tsx
export type TableColumnHeaderProps = {
    column: any;
    type?: TableColumnHeaderType;
    rowIds: Key[];
    sortDirection?: SortDirection;
    selectionMode: string;
    isColumnSorted?: boolean;
    handleSortChange: (column: string, direction?: SortDirection) => void;
    setSelectedRows?: (ids?: Key[]) => void;
    align?: ColumnAlign;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Table/TableRow.tsx
export type TableRowProps = {
    isSelected?: boolean;
    children: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tabs/TabItem.tsx
export type TabItemProps = {
    id: string;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    decorator?: ReactElement;
    badge?: BadgeProps;
    children: ReactNode;
    active?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tabs/Tabs.tsx
export type TabsProps = {
    paddingX?: TabsPaddingX;
    size?: TabSize;
    activeItemId: string;
    children: ReactNode;
    onChange?: (tabId: string) => void;
    maxHeight?: `${number}${DimensionUnity}`;
    minHeight?: `${number}${DimensionUnity}`;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tag/Tag.tsx
export type TagProps = { 'data-test-id'?: string } & (TagPropsUnselected | TagPropsSelected);

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/TextInput/TextInput.tsx
export type TextInputExtraAction = {
    onClick: () => void;
    icon: ReactElement;
    title: string;
    tooltip?: Omit<LegacyTooltipProps, 'triggerElement'>;
    disabled?: boolean;
};

export type TextInputBaseProps = {
    id?: string;
    type?: TextInputType;
    decorator?: ReactNode;
    dotted?: boolean;
    clearable?: boolean;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    autocomplete?: boolean;
    readonly?: boolean;
    validation?: Validation;
    copyable?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    onEnterPressed?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    maxLength?: number;
    size?: number;
    spellcheck?: boolean;
    /** @deprecated a `ref` can be forwarded to expose the underlying `<input />` DOM node.
        @example
        ```tsx
            import { TextInput } from '@frontify/fondue';

            const Component = () => {
            const inputRef = useRef();

            useEffect(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, [)
            return <TextInput ref={inputRef} />
         }
         ```
    */
    focusOnMount?: boolean;
    selectable?: boolean;
    extraActions?: TextInputExtraAction[];
    ariaLabel?: string;
} & AriaAttributes;

export type TextInputProps = TextInputTextProps | TextInputNumberProps | TextInputPasswordProps | TextInputSearchProps;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Textarea/Textarea.tsx
export type TextareaProps = {
    autosize?: boolean;
    focusOnMount?: boolean;
    resizable?: boolean;
    selectable?: boolean;
    defaultValue?: string;
    value?: string;
    onChange?: (value?: string) => void;
    onEnterPressed?: (value?: string) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
} & Omit<InputSharedBaseProps, 'value'> &
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> &
    Omit<TextareaAutosizeProps, 'onChange' | 'defaultValue' | 'value'>;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Toast/types.tsx
export type ToastProps = {
    isOpen: boolean;
    style: ToastStyle;
    icon: ReactNode;
    animationDirection?: ToastAnimationDirection;
    children?: ReactNode;
    theme?: ToastTheme;
    enableExitAnimation?: boolean;
    'data-test-id'?: string;
};

export type ToastTheme = 'light' | 'dark';

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tooltip/Tooltip.tsx
export type TooltipProps = {
    id?: string;
    children: ReactElement;
    openOnMount?: boolean;
    placement?: PopperPlacement;
    offset?: [number, number];
    flip?: boolean;
    enablePortal?: boolean;
    content: string;
    withArrow?: boolean;
    size?: 'spacious' | 'compact';
    maxWidth?: string | number;
    maxHeight?: string | number;
    enterDelay?: number;
    leaveDelay?: number;
    'data-test-id'?: string;
    zIndex?: number;
    disabled?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/TooltipIcon/TooltipIcon.tsx
export type TooltipIconProps = {
    tooltip?: LegacyTooltipProps;
    iconSize?: IconSize;
    triggerIcon?: ReactElement<IconProps>;
    triggerStyle?: TooltipIconTriggerStyle;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/TreeContext.ts
export type TreeContextProps = {
    treeState: TreeState;
    onSelect: OnSelectInternalCallback;
    onExpand: OnExpandCallback;
    onShrink: OnShrinkCallback;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/TreeItem/DragHandle.tsx
export type DragHandleProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    active?: boolean;
    showDragHandlerOnHoverOnly?: boolean;
    activeColorStyle?: TreeItemColors;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/TreeItem/ExpandButton.tsx
export type ExpandButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    expanded?: boolean;
    active?: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/TreeItem/TreeItem.tsx
export type InternalTreeItemProps = TreeItemProps & TreeItemPrivateProps;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/TreeItem/TreeItemMultiselect.tsx
export type InternalTreeItemMultiSelectProps = TreeItemMultiselectProps & TreeItemPrivateProps;

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/TreeItem/TreeItemOverlay.tsx
export type Overlay = {
    id: string;
    label?: string;
    level?: number;
    children: ReactNode;
    contentComponent?: ReactNode;
    isSelected?: boolean;
    dragHandlerPosition?: DragHandlerPosition;
    showContentWhileDragging: boolean;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/helpers/multiselect.ts
export type TreeItemMultiselectWithNodes = TreeItemMultiselectProps & {
    id: string;
    parentId: string;
    extendedId?: string;
    nodes?: TreeItemMultiselectWithNodes[];
    numChildNodes?: number;
    onSelect?: (id: string) => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/types.ts
export type SensorContext = MutableRefObject<{
    nodes: ReactElement[];
    offset: number;
}>;

export type TreeNodeWithoutElements = {
    id: string;
    level: number;
    parentId: string;
    extendedId: string;
    nodes: TreeNodeWithoutElements[];
};

export type OnSelectCallback = (id: string, ignoreRemoveSelected?: boolean, nodes?: TreeNodeWithoutElements[]) => void;

export type OnSelectInternalCallback = (id: string, ignoreRemoveSelected?: boolean) => void;

export type OnExpandCallback = (id: string) => void;

export type OnShrinkCallback = (id: string) => void;

export type OnTreeDropCallback = (args: {
    id: string;
    parentId: Nullable<string>;
    sort: number;
    contentComponent: Nullable<ReactNode>;
    parentType?: string;
}) => void;

export type DragHandlerPosition = 'left' | 'right' | 'none';

export type TreeItemPropsSizing = 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

export type TreeItemStyling = {
    spacingY?: TreeItemPropsSizing;
    contentHight?: TreeItemContentFit;
    shadow?: TreeItemPropsSizing;
    borderRadius?: TreeItemPropsSizing;
    borderWidth?: Exclude<TreeItemPropsSizing, 'x-large'>;
    borderStyle?: TreeItemBorderStyle;
    activeColorStyle?: TreeItemColors;
};

export type TreeProps = {
    id: string;
    draggable?: boolean;
    children: ReactNode;
    multiselect?: boolean;
    selectedIds?: string[];
    expandedIds?: string[];
    dragHandlerPosition?: DragHandlerPosition;
    enableDragDelay?: boolean;
    showDragHandlerOnHoverOnly?: boolean;
    showContentWhileDragging?: boolean;
    itemStyle?: TreeItemStyling;
    'data-test-id'?: string;
    onSelect?: OnSelectCallback;
    onExpand?: OnExpandCallback;
    onShrink?: OnShrinkCallback;
    onDrop?: OnTreeDropCallback;
};

export type TreeItemWithLabelProps = {
    label?: string;
    contentComponent?: never;
} & TreeItemBaseProps;

export type TreeItemWithContentComponentProps = {
    label?: never;
    contentComponent?: ReactNode;
} & TreeItemBaseProps;

export type SortableProps = Partial<ReturnType<typeof useSortable>>;

export type TreeItemProps = SortableProps & (TreeItemWithLabelProps | TreeItemWithContentComponentProps);

export type TreeItemMultiselectProps = Omit<
    TreeItemProps,
    | 'type'
    | 'onDrop'
    | 'accepts'
    | 'registerOverlay'
    | 'draggable'
    | 'showContentWhileDragging'
    | 'ignoreItemDoubleClick'
    | 'showDragHandlerOnHoverOnly'
    | 'dragHandlerPosition'
> & {
    isDisabled?: boolean;
    checkBoxPosition?: DragHandlerPosition;
    onBeforeUnregisterChildren?: (id: string, nodes: TreeNodeWithoutElements[]) => void;
};

export type SortableTreeItemProps = TreeItemProps;

export type TreeItemState = {
    parentId?: string;
    childrenIds?: string[];
    level: number;
    domElement?: HTMLElement;
};

export type TreeState = {
    selectedIds: Set<string>;
    expandedIds: Set<string>;
    selectionMode: 'single' | 'multiselect';
    overlay?: Overlay;
    nodes: ReactElement<InternalTreeItemProps>[];
    rootNodes: ReactElement<InternalTreeItemProps>[];
    projection: Nullable<Projection>;
};

export type TreeStateAction =
    | { type: 'REPLACE_STATE'; payload: TreeState }
    | { type: 'REGISTER_OVERLAY_ITEM'; payload: Overlay }
    | { type: 'SET_SELECT'; payload: string }
    | { type: 'EXPAND_NODE'; payload: string }
    | { type: 'SHRINK_NODE'; payload: string }
    | { type: 'SET_HIDDEN'; payload: { ids: string[]; isHidden: boolean } }
    | { type: 'SET_SELECTION_MODE'; payload: { selectionMode: TreeState['selectionMode'] } }
    | { type: 'SET_PROJECTION'; payload: Nullable<Projection> }
    | { type: 'REGISTER_NODE_CHILDREN'; payload: { id: string; children: ReactElement<InternalTreeItemProps>[] } }
    | { type: 'UNREGISTER_NODE_CHILDREN'; payload: string }
    | { type: 'REPLACE_EXPANDED'; payload: string[] }
    | { type: 'REPLACE_SELECTED'; payload: string[] }
    | { type: 'REGISTER_ROOT_NODES'; payload: ReactElement<InternalTreeItemProps>[] }
    | { type: 'REGISTER_NODES'; payload: ReactElement<InternalTreeItemProps>[] };

export type RegisterNodeChildrenPayload = Extract<TreeStateAction, { type: 'REGISTER_NODE_CHILDREN' }>['payload'];

export type CollisionPosition = Nullable<'before' | 'within' | 'after'>;

export type TreeActive = Omit<Active, 'id'> & {
    id: string;
};

export type TreeOver = Omit<Over, 'id'> & {
    id: string;
};

export type TreeAnnouncements = {
    onDragStart({ active }: Pick<TreeDragEvent, 'active'>): string | undefined;
    onDragMove?({ active, over }: TreeDragEvent): string | undefined;
    onDragOver({ active, over }: TreeDragEvent): string | undefined;
    onDragEnd({ active, over }: TreeDragEvent): string | undefined;
    onDragCancel({ active, over }: TreeDragEvent): string | undefined;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Tree/utils/mocks.ts
export type TreeItemMock = TreeItemMultiselectProps &
    TreeItemProps & {
        id: string;
        nodes?: TreeItemMock[];
        numChildNodes?: number;
    };

export type TreeItemMockMultiselect = TreeItemMultiselectProps & {
    id: string;
    nodes?: TreeItemMockMultiselect[];
    numChildNodes?: number;
    onSelect?: (id: string) => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/components/Trigger/Trigger.tsx
export type TriggerProps = {
    disabled?: boolean;
    children?: ReactNode;
    isOpen?: boolean;
    onClear?: () => void;
    onDelete?: () => void;
    buttonProps?: HTMLAttributes<HTMLElement>;
    isFocusVisible?: boolean;
    size?: TriggerSize;
    showClear?: boolean;
    validation?: Validation;
    emphasis?: TriggerEmphasis;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/foundation/Icon/IconProps.ts
export type GeneratedIconProps = {
    size?: IconSize;
    filled?: boolean;
};

export type IconProps = GeneratedIconProps & {
    icon: IconEnum;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/foundation/Icon/IconTemplateDynamic.ts
export type IconComponent = {
    size: string | null;
    filled: boolean;
    name: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/foundation/Pattern/PatternScaleOrigin.tsx
export type PatternScaleOrigin = ('top' | 'left' | 'bottom' | 'right')[];

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/layout/LegacyStack/LegacyStack.tsx
export type LegacyStackSpacing = 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type LegacyStackJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

export type LegacyStackAlign = 'start' | 'end' | 'stretch' | 'center';

export type LegacyStackProps = {
    padding: LegacyStackSpacing;
    spacing: LegacyStackSpacing;
    direction?: 'row' | 'column';
    wrap?: boolean;
    justify?: LegacyStackJustify;
    align?: LegacyStackAlign;
    children?: ReactNode;
    'data-test-id'?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/types/colors.ts
export type Palette = {
    id: number | string;
    title: string;
    colors: Color[];
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/types/dialog.ts
export type DialogPadding = 'none' | 'compact' | 'comfortable' | 'spacious';

export type DialogHeaderProps = {
    title: string;
    separator?: boolean;
    onClose?: () => void;
    icon?: ReactElement<IconProps>;
    badge?: ReactElement<BadgeProps>;
    children?: ReactNode;
    padding?: 'compact' | 'comfortable' | 'spacious';
    'data-test-id'?: string;
};

export type DialogBodyProps = {
    children: ReactNode;
    maxHeight?: number | string;
    padding?: DialogPadding;
    'data-test-id'?: string;
};

export type DialogFooterProps = {
    children?: ReactNode;
    actionButtons: ButtonProps[];
    backButton?: Omit<ButtonProps, 'emphasis' | 'icon' | 'size'>;
    padding?: DialogPadding;
    separator?: boolean;
    'data-test-id'?: string;
};

export type BaseDialogProps = {
    modality?: Modality;
    maxWidth?: string | number;
    maxHeight?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    /** @description This property enable a full screen gray underlay only for modal and blocking-modal options. */
    darkUnderlay?: boolean;
    /** @description If enabled, any value assigned to the maxHeight property won't have any effect.
     * autoHeight will set the maxHeight of the dialog Component automatically calculating the available space in the viewport. */
    autoHeight?: boolean;
    roundedCorners?: boolean;
    width?: string | number;
};

export type OverlayProps = PopperProps & {
    id?: string;
    open: boolean;
    'data-test-id'?: string;
    role?: string;
    theme?: 'light' | 'dark';
    shadow?: 'none' | 'small' | 'medium' | 'large';
    isDialog?: boolean;
    handleClose?: () => void;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/types/elements.ts
export type ContainerHTMLElement = 'div' | 'span';

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/types/input.ts
export type InputSharedBaseProps = {
    autocomplete?: boolean;
    clearable?: boolean;
    decorator?: ReactElement;
    extraActions?: ExtraAction[];
    hugWidth?: boolean;
    id?: string;
    status?: Validation;
    'data-test-id'?: string;
} & AriaAttributes;

export type InputBaseProps<TValue> = {
    size?: number;
    suffix?: string;
    value?: TValue;
    valueSelect?: boolean;
    onChange?: (value?: TValue) => void;
} & InputSharedBaseProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'onChange' | 'value'>;

export type InputType = 'Text' | 'Textarea' | 'Password' | 'Number';

export type InputActionCallbacks = {
    text?: () => void;
    textarea?: () => void;
    password?: () => void;
    increment?: () => void;
    clearable?: () => void;
};

export type InputActionsProps = {
    clearable?: boolean;
    obfuscated?: boolean;
    isObfuscated?: boolean;
    increment?: boolean;
    disabled?: boolean;
    callbacks: InputActionCallbacks;
    dataTestId?: string;
};

export type ExtraAction = {
    icon: ReactElement;
    title: string;
    callback: () => void;
};

export type InputExtraActionsProps = {
    actions: ExtraAction[];
    disabled?: boolean;
    dataTestId?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/types/withRequired.ts
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/typography/Code/Code.tsx
export type CodeProps = {
    size?: CodeSize;
    weight?: CodeWeight;
    as?: 'code' | 'pre' | 'span';
    color?: CodeColor;
    children?: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/typography/Heading/Heading.tsx
export type HeadingProps = SharedTypographyProps & {
    size?: HeadingSize;
    weight?: HeadingWeight;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
    color?: HeadingColor;
    children?: ReactNode;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/typography/Text/Text.tsx
export type TextProps = SharedTypographyProps &
    AriaAttributes & {
        size?: TextSize;
        weight?: TextWeight;
        as?: 'a' | 'abbr' | 'address' | 'em' | 'label' | 'li' | 'span' | 'strong' | 'time' | 'p';
        color?: TextColor;
        /** @description optional color prop that uses the inverse box color when accessibility contrast is needed */
        boxColor?: BoxColor;
        children?: ReactNode;
    };

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/typography/shared/types.ts
export type SharedTypographyProps = {
    overflow?: TypographyOverflow;
    whitespace?: TypographyWhitespace;
    display?: TypographyDisplay;
    wordBreak?: TypographyWordBreak;
    decoration?: TypographyDecoration;
};

export type TypographyOverflow = 'truncate' | 'ellipsis' | 'clip' | 'visible';

export type TypographyWhitespace = 'unset' | 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';

export type TypographyDisplay = 'inline-block' | 'block' | 'inline' | 'none';

export type TypographyWordBreak = 'break-words' | 'break-all' | 'normal';

export type TypographyDecoration = 'underline' | 'line-through' | 'none';

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/utilities/dimensions.ts
export type SpacingValue = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;

export type DimensionUnity = '%' | 'px' | 'rem' | 'em' | 'vh' | 'vw';

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/utilities/dnd/types.ts
export type DraggableItem<T = Record<string, unknown>> = T & {
    id: string;
    sort: Nullable<number>;
    type?: string;
    parentId?: string;
};

// File: /Users/florianschulz/dev/fondue/packages/fondue/src/utilities/elements.ts
export type ItemElementType = 'a' | 'button' | 'span';

// File: /Users/florianschulz/dev/fondue/packages/icons/dist/createFondueIcon.d.ts
export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>, children?: IconNode][];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export type FondueIconProps = ComponentAttributes & {
    size?: `${IconSizeAsNumber}` | IconSizeAsNumber | IconSize;
};

export type FondueIcon = ForwardRefExoticComponent<FondueIconProps>;

// File: /Users/florianschulz/dev/fondue/packages/icons/src/createFondueIcon.ts
export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>, children?: IconNode][];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export type FondueIconProps = ComponentAttributes & {
    size?: `${IconSizeAsNumber}` | IconSizeAsNumber | IconSize;
};

export type FondueIcon = ForwardRefExoticComponent<FondueIconProps>;
