import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { withDesign } from 'storybook-addon-designs';
import FaIcon from "../FaIcon";
import { faCoffee } from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Add Stakeholder",
  endAdornment: <FaIcon icon={faCoffee} />
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/GovConnex-Component-Library?node-id=48%3A73369"
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click me!",
  variant: "secondary"
};
