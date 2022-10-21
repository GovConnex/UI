import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "./Stack";
import { withDesign } from "storybook-addon-designs";
import Input from "../Input";
import Button from "../Button";
// @ts-ignore
import mdx from './Stack.mdx';
import Card from "../Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Stack",
  component: Stack,
  decorators: [withDesign, ],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  
  argTypes: {
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      // control: { type: "radio" },
    },
    alignItems: {
      options: [
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "initial",
        "inherit",
      ],
      // control: { type: "multi-select" },
    },
    justifyContent: {
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "initial",
        "inherit",
      ],
      // control: { type: "radio" },
    },
    gap: {
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
    },
  },
} as ComponentMeta<typeof Stack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stack> = (args) => {
  return (
    <Stack {...args}>
      {/* <div style={{padding:"30px", backgroundColor:""}}>item</div> */}
      <Card>Test</Card>
      <Card>Test</Card>
      <Card>Test</Card>
    </Stack>
  );
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  // direction: {sm:"column"},
};
export const Breakpoints = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Breakpoints.args = {
  direction: {sm:"column",md:"row"} ,
  gap: {sm:"md",md:"sm"},
};

Example.parameters = {
   design: {
     type: "figma",
     url: ""
   }
};
