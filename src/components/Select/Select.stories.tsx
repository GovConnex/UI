import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Select",
  component: Select,
  decorators: [withDesign],
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ maxWidth: "300px" }}>
    <Select {...args} />
  </div>
);
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  title: "Select",
  chipValue: "All",
  children: [<div>Option 1</div>, <div>Option 2</div>, <div>Option 3</div>],
  fullWidth: true,
};
export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  title: "Select",
  chipValue: "All",
  error: "Error message",
  dropdown: ({ close }) => <div onClick={close}>Dropdown</div>,
  // children: [
  //   <div>Option 1</div>,
  //   <div>Option 2</div>,
  //   <div>Option 3</div>,
  // ],
  fullWidth: true,
};
export const LongList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LongList.args = {
  title: "Log list",
  chipValue: "All",
  maxHeight: "200px",
  children: [
    <div>Option 1</div>,
    <div>Option 2</div>,
    <div>Option 3</div>,
    <div>Option 2</div>,
    <div>Option 3</div>,
    <div>Option 2</div>,
    <div>Option 3</div>,
    <div>Option 2</div>,
    <div>Option 3</div>,
    <div>Option 2</div>,
    <div>Option 3</div>,
  ],
  fullWidth: true,
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
