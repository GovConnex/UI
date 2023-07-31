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

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  children: "Australia",
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=61%3A18486",
  },
};

export const Deletable = Template.bind({});

Deletable.args = {
  children: "Australia",
  onDelete: () => {
    console.log("Deleted");
  },
};

Deletable.parameters = {};
