import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { withDesign } from 'storybook-addon-designs';
import Icon from "../Icon";
import { faSearch } from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
  decorators: [withDesign],
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const Default = Template.bind({});
Default.args = {
  placeholder: "Default",
  label:"Fancy label",
  hint:"This is a hint",
};


export const Focused = Template.bind({});
Focused.args = {
  startAdornment: <Icon icon={faSearch} style={{ opacity: "0.4" }} />,
  placeholder: "Search",
};


export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Search",
  disabled:true,
  startAdornment: <Icon icon={faSearch} style={{ opacity: "0.4" }} />,
};


export const Error = Template.bind({});
Error.args = {
  placeholder: "Search",
  error:"an error message",
  hint:"this is a hint",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/?node-id=157%3A9356"
  }
};
