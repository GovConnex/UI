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
   url:"https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/%F0%9F%93%90-Bipartisan-Design-System?node-id=3%3A1478"
 }
}
