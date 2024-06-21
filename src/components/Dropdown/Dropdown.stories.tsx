import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Dropdown from "./Dropdown";
import {withDesign} from "storybook-addon-designs";
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";
import Box from "../Box";
import SvgIcon from "../SvgIcon";
import {faCheckCircle} from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Dropdown",
  component: Dropdown,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Box cs={{width: "300px"}}>
    <Dropdown {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  label: "Select Option",
  placeholder: "Choose an option",
  options: [
    {id: "1", text: "Option 1", selected: true},
    {id: "2", text: "Option 2"},
    {id: "3", text: "Option 3"},
  ],
  "data-testid": "dropdown",
  "data-cy": "dropdown",
};

export const WithSelectedOption = Template.bind({});
WithSelectedOption.args = {
  ...Default.args,
  defaultValue: "1",
  maxWidth: "40%",
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  ...Default.args,
  multipleSelect: true,
  selectedIndicator: <SvgIcon icon={faCheckCircle} />,
};

export const WithChipSelect = Template.bind({});
WithChipSelect.args = {
  ...Default.args,
  multipleSelect: true,
  selectedIndicator: <SvgIcon icon={faCheckCircle} />,
  hasSelectedCount: true,
};

export const AllSelected = Template.bind({});
AllSelected.args = {
  label: "All Selected Option",
  placeholder: "Choose an option",
  options: [
    {id: "1", text: "Option 1", selected: true},
    {id: "2", text: "Option 2", selected: true},
    {id: "3", text: "Option 3", selected: true},
  ],
  "data-testid": "dropdown",
  "data-cy": "dropdown",
  multipleSelect: true,
  selectedIndicator: <SvgIcon icon={faCheckCircle} />,
  hasSelectedCount: true,
};

export const WithCategory = Template.bind({});
WithCategory.args = {
  label: "Selected Option",
  placeholder: "Choose an option",
  options: [
    {id: "1", text: "Option 1", category: "a"},
    {id: "2", text: "Option 2", selected: true, category: "a"},
    {id: "3", text: "Option 3", selected: true, category: "b"},
  ],
  "data-testid": "dropdown",
  "data-cy": "dropdown",
  multipleSelect: true,
  selectedIndicator: <SvgIcon icon={faCheckCircle} />,
  hasSelectedCount: true,
};

export const WithLoadingState = Template.bind({});
WithLoadingState.args = {
  ...Default.args,
  loading: true,
  loadingIndicator: <div>Loading...</div>,
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  ...Default.args,
  hasSearch: true,
};

export const WithClearSelection = Template.bind({});
WithClearSelection.args = {
  ...Default.args,
  hasClearSelection: true,
  onClearSelection: () => {
    console.log("cleared");
  },
};

export const WithSelectAll = Template.bind({});
WithSelectAll.args = {
  ...Default.args,
  maxWidth: "200px",
  hasSelectAll: true,
  onSelectAll: () => {
    console.log("select all");
  },
};

export const WithSelectAllAndClearSelection = Template.bind({});
WithSelectAllAndClearSelection.args = {
  ...Default.args,
  maxWidth: "300px",
  hasClearSelection: true,
  hasSelectAll: true,
  onClearSelection: () => {
    console.log("clear selection");
  },
  onSelectAll: () => {
    console.log("select all");
  },
};

export const WithCustomEndAdornment = Template.bind({});
WithCustomEndAdornment.args = {
  ...Default.args,
  options: [
    {id: "1", text: "Option 1", endAdornment: <SvgIcon icon={faCheckCircle} />},
    {id: "2", text: "Option 2", endAdornment: <SvgIcon icon={faCheckCircle} />},
    {id: "3", text: "Option 3", endAdornment: <SvgIcon icon={faCheckCircle} />},
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "An error occurred",
};
