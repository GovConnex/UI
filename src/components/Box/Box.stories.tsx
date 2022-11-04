import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./Box";
import { withDesign } from 'storybook-addon-designs';
import Typography from "../Typography";
// @ts-ignore
import mdx from './Box.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Box",
  component: Box,
  decorators: [withDesign],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  cs:{padding:"30px", paddingTop:"spacing.lg",paddingLeft:"spacing.lg"},
  children:<Typography variant="heading" size="lg">Child in box</Typography>,
  onClick:() => {console.log("test")}
};


export const Breakpoints = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Breakpoints.args = {
  cs: {backgroundColor:"primary.brand.900", md:{backgroundColor:"primary.brand.300"}},
  children:<Typography variant="heading" size="lg">Child in box</Typography>,
};


Example.parameters = {
//  design: {
//    type: "figma",
//    url: ""
//  }
};
