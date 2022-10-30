import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./Box";
import { withDesign } from 'storybook-addon-designs';
import Typography from "../Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Box",
  component: Box,
  decorators: [withDesign],
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  cs:{paddingBottom:"spacing.lg", paddingTop:"spacing.lg",paddingLeft:"spacing.lg"},
  children:<Typography variant="heading" size="lg">Page Header</Typography>,
  onClick:() => {console.log("tets")}
};

Example.parameters = {
//  design: {
//    type: "figma",
//    url: ""
//  }
};
