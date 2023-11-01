import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import DataTable from "./DataTable";
import {withDesign} from "storybook-addon-designs";
import DataTableHeaderCell from "./DataTableHeaderCell";
import {faContactCard, faHeart, faUser} from "@fortawesome/pro-solid-svg-icons";
import {DataCell, NameCell, SupportCell, TagCell} from "./DataTable.examples";
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Data Table",
  component: DataTable,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
    },
  },
  argTypes: {
    data: {
      type: Array,
      defaultValue: [],
      description:
        "(Required) Data to be processed in the table. The array is a list of objects having key value pairs.",
    },
    columns: {
      type: Array,
      defaultValue: [],
      description:
        "(Required) Column config to be processed by the table. It should contain the id, Header(header cell), Cell(Data cell), display name, accessor(key of the data column), and others like minWidth, width, isResizable(defaults to false, works when column does not have a specified width or minWidth. First and second columns are fixed and not resizable.)",
    },
    className: {
      type: "string",
      description: "(Optional) Class name to apply to the root element.",
    },
    numResults: {
      type: "number",
      description: "(Optional) Number of results for use in pagination.",
    },
    onChangeSort: {
      type: "function",
      description: "(Optional) Callback for when the sort changes.",
    },
    pageSize: {
      type: "number",
      description: "(Optional) Size of the page for use in pagination.",
    },
    page: {
      type: "number",
      description: "(Optional) Page number for use in pagination.",
    },
    initialSortBy: {
      type: Array,
      description: "(Optional) List of columns to sort by initially.",
    },
    onPaginationChange: {
      type: "function",
      description: "(Optional) Callback for when the pagination changes.",
    },
    onSelectedIdsChange: {
      type: "function",
      description: "(Optional) Callback for when the selected ids change.",
    },
    showPagination: {
      type: "boolean",
      description: "(Optional) Whether to show the pagination. Defaults to true.",
    },
    showSelection: {
      type: "boolean",
      description: "(Optional) Whether to show the selection checkbox. Defaults to true.",
    },
    fullWidth: {
      type: "boolean",
      description:
        "(Optional) Whether the table should grow to fill its container. Defaults to false.",
    },
  },
} as ComponentMeta<typeof DataTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataTable> = (args) => <DataTable {...args} />;

const DATA_TABLE_COLUMNS = [
  {
    id: "D00",
    Header: DataTableHeaderCell,
    Cell: NameCell,
    icon: faUser,
    displayName: "Name",
    accessor: "name",
  },
  {
    id: "D01",
    Header: DataTableHeaderCell,
    Cell: SupportCell,
    icon: faHeart,
    displayName: "Target Support",
    accessor: "value", // accessor is the "key" in the data
  },
  {
    id: "D02",
    Header: DataTableHeaderCell,
    Cell: TagCell,
    icon: faContactCard,
    displayName: "Secondary Contact",
    accessor: "type", // accessor is the "key" in the data
  },
  {
    id: "D03",
    Header: DataTableHeaderCell,
    Cell: TagCell,
    displayName: "Third Contact",
    accessor: "secondType", // accessor is the "key" in the data
  },
];

const DATA_TABLE_DATA = [
  {
    name: "Field 1",
    value: "Value 1",
    type: "Type 1",
    secondType: "Second Type 1",
  },
  {
    name: "Field 2",
    value: "Value 2",
    type: "Type 2",
    secondType: "Second Type 2",
  },
  {
    name: "Field 3",
    value: "Value 3",
    type: "Type 3",
    secondType: "Second Type 3",
  },
  {
    name: "Field 4",
    value: "Value 4",
    type: "Type 4",
    secondType: "Second Type 4",
  },
];

export const Basic = Template.bind({});
Basic.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  pageSize: 25,
  page: 1,
  numResults: 100,
};

Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=83%3A25768",
  },
};

const DATA_TABLE_COLUMNS_WITHOUT_RESIZE = [
  {
    id: "D04",
    Header: DataTableHeaderCell,
    Cell: NameCell,
    icon: faUser,
    displayName: "Name",
    accessor: "name",
    isResizable: false,
  },
  {
    id: "D05",
    Header: DataTableHeaderCell,
    Cell: SupportCell,
    icon: faHeart,
    displayName: "Target Support",
    accessor: "value", // accessor is the "key" in the data
    isResizable: false,
  },
  {
    id: "D06",
    Header: DataTableHeaderCell,
    Cell: TagCell,
    icon: faContactCard,
    displayName: "Secondary Contact",
    accessor: "type", // accessor is the "key" in the data
    isResizable: false,
  },
  {
    id: "D07",
    Header: DataTableHeaderCell,
    Cell: TagCell,
    displayName: "Third Contact",
    accessor: "secondType", // accessor is the "key" in the data
    isResizable: false,
  },
];

export const WithActionRows = Template.bind({});
WithActionRows.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  showPagination: false,
  actionRows: [
    {
      children: <div>Action Row</div>,
    },
    {
      children: <div>Menu Row</div>,
      menuProps: {
        onOptionSelect(option) {
          console.log(option);
        },
        options: [
          {
            text: "Test",
          },
        ],
      },
    },
  ],
};

// Another example, but with resize property in column config
export const WithoutResizeColumnConfig = Template.bind({});
WithoutResizeColumnConfig.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS_WITHOUT_RESIZE,
  pageSize: 25,
  page: 1,
  numResults: 100,
  fullWidth: false,
};

// Another example, but with one without pagination
export const WithoutPagination = Template.bind({});
WithoutPagination.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  showPagination: false,
};

// Another example, but with one without selection
export const WithoutSelection = Template.bind({});
WithoutSelection.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  showPagination: false,
  showSelection: false,
};

// Another example, but without icons
export const WithoutHeaderIcons = Template.bind({});
WithoutHeaderIcons.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS.map((column) => ({
    ...column,
    icon: undefined,
  })),
  showPagination: false,
  showSelection: false,
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  showPagination: false,
  showSelection: false,
  fullWidth: true,
};

// Example with columns containing long data etc
const LONG_DATA_TABLE_DATA = [
  {
    name: "This is a very long name that should be truncated",
    value:
      "This is a very long name that should be truncated. Lorem ipsum content goes here.",
    type: "Type 1",
    secondType: "Second Type 1",
  },
  {
    name: "Field 2",
    value: "Value 2",
    type: "Type 2 is a very long type that should be truncated",
    secondType: "Second Type 2",
  },
  {
    name: "Field 3",
    value: "Value 3",
    type: "Type 3",
    secondType: "Second Type 3",
  },
];

export const WithLongDataAndSorting = Template.bind({});
WithLongDataAndSorting.args = {
  data: LONG_DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS?.map((column) => ({
    ...column,
    Cell: DataCell,
  })),
  onChangeSort(column) {
    callHandleDataChange(column);
  },
};

// Define a callback function that will be used to update the data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let updateDynamicData = (column: any) => {};

WithLongDataAndSorting.decorators = [
  (Story) => {
    const [dynamicData, setDynamicData] = React.useState(LONG_DATA_TABLE_DATA);
    const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

    // Define the handleDataChange function inside the decorator
    const handleDataChange = (column: any) => {
      // Sort the dynamic data based on the selected column
      if (column) {
        const accessor = column[0]?.accessor;
        if (accessor) {
          const sortedData = [...dynamicData]; // Create a copy
          sortedData.sort((a: any, b: any) => {
            const aValue = a[accessor];
            const bValue = b[accessor];

            // Compare the values based on the current sortOrder
            return sortOrder === "asc"
              ? aValue.localeCompare(bValue)
              : bValue.localeCompare(aValue);
          });

          // Toggle the sortOrder for next sorting
          setSortOrder(sortOrder === "asc" ? "desc" : "asc");

          setDynamicData(sortedData);
        }
      }
    };

    // Assign the handleDataChange function to the update function
    updateDynamicData = handleDataChange;

    return (
      <div>
        <Story args={{...WithLongDataAndSorting.args, data: dynamicData}} />
      </div>
    );
  },
];

// Call the handleDataChange function from outside the story
const callHandleDataChange = (column: any) => {
  if (typeof updateDynamicData === "function") {
    updateDynamicData(column);
  }
};

const DATA_TABLE_COLUMNS_WITH_LONG_WIDTH = [
  {
    id: "D04",
    Header: DataTableHeaderCell,
    Cell: NameCell,
    icon: faUser,
    displayName: "Name",
    accessor: "name",
    width: "300px",
  },
  {
    id: "D05",
    Header: DataTableHeaderCell,
    Cell: SupportCell,
    icon: faHeart,
    displayName: "Target Support",
    accessor: "value", // accessor is the "key" in the data
    width: "300px",
  },
  {
    id: "D06",
    Header: DataTableHeaderCell,
    Cell: TagCell,
    icon: faContactCard,
    displayName: "Secondary Contact",
    accessor: "type", // accessor is the "key" in the data
    width: "300px",
  },
  {
    id: "D07",
    Header: DataTableHeaderCell,
    Cell: TagCell,
    displayName: "Third Contact",
    accessor: "secondType", // accessor is the "key" in the data
    width: "300px",
  },
];

const TemplateWithWrapper: ComponentStory<typeof DataTable> = (args) => (
  <div style={{width: "700px", overflow: "scroll"}}>
    <DataTable {...args} />
  </div>
);

export const WithHorizontalOverflowAndFixedWidth = TemplateWithWrapper.bind({});
WithHorizontalOverflowAndFixedWidth.args = {
  data: LONG_DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS_WITH_LONG_WIDTH?.map((column) => ({
    ...column,
    Cell: DataCell,
  })),
  showPagination: false,
  showSelection: false,
  fullWidth: false,
};
