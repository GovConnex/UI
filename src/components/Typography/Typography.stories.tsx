import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "./Typography";
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography",
  component: Typography,
  decorators: [withDesign],
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args}>Abcdefg</Typography>;


export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  variant: "body",
};

Example.parameters = {
 design: {
   type: "figma",
   url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=11%3A38"
 }
}
