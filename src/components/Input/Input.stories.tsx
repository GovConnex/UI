import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { withDesign } from 'storybook-addon-designs';
import Icon from "../Icon";
import { faSearch } from "@fortawesome/pro-solid-svg-icons"; // [TODO/FLAG] should be importing this through <Icon> not the lib its using

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
  decorators: [withDesign],
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Search = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Search.args = {
  placeholder: "Search",
  endAdornment: <Icon icon={faSearch} style={{ opacity: "0.4" }} />,
};

Search.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/?node-id=157%3A9356"
  }
};
