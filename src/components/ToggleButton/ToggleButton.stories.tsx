import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleButton from "./ToggleButton";
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  decorators: [withDesign],
} as ComponentMeta<typeof ToggleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  children: "ToggleButton"
};

Example.parameters = {
//  design: {
//    type: "figma",
//    url: ""
//  }
};
