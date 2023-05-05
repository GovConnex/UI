import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DataTable from "./DataTable";
import { withDesign } from "storybook-addon-designs";
import DataTableHeaderCell from "./DataTableHeaderCell";
import {
  faContactCard,
  faHeart,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";
import { DataCell, NameCell, SupportCell, TagCell } from "./DataTable.examples";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Data Table",
  component: DataTable,
  decorators: [withDesign],
} as ComponentMeta<typeof DataTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

const DATA_TABLE_COLUMNS = [
  {
    id: "D00",
    Header: DataTableHeaderCell,
    Cell: NameCell,
    icon: faUser,
    displayName: "Name",
    canResize: true,
    accessor: "name",
    minWidth: 225,
  },
  {
    id: "D01",
    Header: DataTableHeaderCell,
    Cell: SupportCell,
    canResize: true,
    icon: faHeart,
    displayName: "Target Support",
    accessor: "value", // accessor is the "key" in the data
    minWidth: 225,
  },
  {
    id: "D02",
    Header: DataTableHeaderCell,
    Cell: TagCell,
    icon: faContactCard,
    canResize: true,
    displayName: "Secondary Contact",
    accessor: "type", // accessor is the "key" in the data
    minWidth: 225,
  },
];

const DATA_TABLE_DATA = [
  {
    name: "Field 1",
    value: "Value 1",
    type: "Type 1",
  },
  {
    name: "Field 2",
    value: "Value 2",
    type: "Type 2",
  },
  {
    name: "Field 3",
    value: "Value 3",
    type: "Type 3",
  },
];

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  pageSize: 25,
  page: 1,
  numResults: 100,
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=83%3A25768",
  },
};

// Another example, but with one without pagination
export const ExampleWithoutPagination = Template.bind({});
ExampleWithoutPagination.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  showPagination: false,
};

// Another example, but with one without selection
export const ExampleWithoutSelection = Template.bind({});
ExampleWithoutSelection.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS,
  showPagination: false,
  showSelection: false,
};

export const ExampleWithoutHeaderIcons = Template.bind({});
ExampleWithoutHeaderIcons.args = {
  data: DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS.map((column) => ({
    ...column,
    icon: undefined,
  })),
  showPagination: false,
  showSelection: false,
};

export const ExampleWithFullWidth = Template.bind({});
ExampleWithFullWidth.args = {
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
  },
  {
    name: "Field 2",
    value: "Value 2",
    type: "Type 2 is a very long type that should be truncated",
  },
  {
    name: "Field 3",
    value: "Value 3",
    type: "Type 3",
  },
];

export const ExampleWithLongData = Template.bind({});
ExampleWithLongData.args = {
  data: LONG_DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS?.map((column) => ({
    ...column,
    Cell: DataCell,
  })),
  showPagination: false,
  showSelection: false,
};

const TemplateWithWrapper: ComponentStory<typeof DataTable> = (args) => (
  <div style={{ width: "100px" }}>
    <DataTable {...args} />
  </div>
);

export const ExampleNarrowWidthWithHorizontalOverflow = TemplateWithWrapper.bind({});
ExampleNarrowWidthWithHorizontalOverflow.args = {
  data: LONG_DATA_TABLE_DATA,
  columns: DATA_TABLE_COLUMNS?.map((column) => ({
    ...column,
    Cell: DataCell,
  })),
  showPagination: false,
  showSelection: false,
  fullWidth: true,
};
