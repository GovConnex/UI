import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import TextArea from "./TextArea";
import {withDesign} from "storybook-addon-designs";
import Icon from "../Icon";
import {faSearch} from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/TextArea",
  component: TextArea,
  decorators: [withDesign],
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};

export const Resize = Template.bind({});
Resize.args = {
  startAdornment: <Icon icon={faSearch} style={{opacity: "0.4"}} />,
  placeholder: "Search",
  resize: true,
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  endAdornment: <Icon icon={faSearch} style={{opacity: "0.4"}} />,
  placeholder: "Search",
};
