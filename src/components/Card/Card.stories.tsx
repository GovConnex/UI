import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Card",
  component: Card,
  decorators: [withDesign],
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Focused = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Focused.args = {
  focused: true,
  children: <div>Hello!</div>,
};

Focused.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/Bipartisan-Design-System?node-id=87%3A3154",
  },
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  children: <div>Hello!</div>,
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/Bipartisan-Design-System?node-id=87%3A3154",
  },
};