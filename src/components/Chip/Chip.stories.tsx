import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Chip from "./Chip";
import {withDesign} from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Chip",
  component: Chip,
  decorators: [withDesign],
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: "Australia",
};

Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=61%3A18486",
  },
};

export const PrimaryHighPriority = Template.bind({});
PrimaryHighPriority.args = {
  children: "Australia",
  role: "primary",
  priority: "high",
};

export const PrimaryLowPriority = Template.bind({});
PrimaryLowPriority.args = {
  children: "Australia",
  role: "primary",
  priority: "low",
};

export const InfoHighPriority = Template.bind({});
InfoHighPriority.args = {
  children: "Australia",
  role: "info",
  priority: "high",
};

export const InfoLowPriority = Template.bind({});
InfoLowPriority.args = {
  children: "Australia",
  role: "info",
  priority: "low",
};

export const SuccessHighPriority = Template.bind({});
SuccessHighPriority.args = {
  children: "Australia",
  role: "success",
  priority: "high",
};

export const SuccessLowPriority = Template.bind({});
SuccessLowPriority.args = {
  children: "Australia",
  role: "success",
  priority: "low",
};

export const WarningHighPriority = Template.bind({});
WarningHighPriority.args = {
  children: "Australia",
  role: "warning",
  priority: "high",
};

export const WarningLowPriority = Template.bind({});
WarningLowPriority.args = {
  children: "Australia",
  role: "warning",
  priority: "low",
};

export const ErrorHighPriority = Template.bind({});
ErrorHighPriority.args = {
  children: "Australia",
  role: "error",
  priority: "high",
};

export const ErrorLowPriority = Template.bind({});
ErrorLowPriority.args = {
  children: "Australia",
  role: "error",
  priority: "low",
};

export const LongText = Template.bind({});
LongText.args = {
  children: "This is a looooooooooooooong text",
};

export const Deletable = Template.bind({});
Deletable.args = {
  children: "Australia",
  onDelete: () => {
    console.log("Deleted");
  },
};

Deletable.parameters = {};
