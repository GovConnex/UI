import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
};

HelloWorld.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/bC4hXdr0nQPjm7xZCCzyDg/V2-Mockups?node-id=1370%3A25109"
  }
}

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};