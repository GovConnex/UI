import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Box from "./Box";
import {withDesign} from "storybook-addon-designs";
import Typography from "../Typography";
// @ts-ignore
import mdx from "./Box.mdx";

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
  children: (
    <Typography variant="heading" size="lg">
      box
    </Typography>
  ),
  onClick: () => {
    console.log("test");
  },
};

export const Theme = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Theme.args = {
  backgroundColor: "theme.brand.300",
  cs: {border: "1px solid theme.brand.300"},
  children: (
    <Typography variant="heading" size="lg">
      box
    </Typography>
  ),
  onClick: () => {
    console.log("test");
  },
};

export const Padding = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Padding.args = {
  pt: 7,
  pb: "sm",
  width: "100%",
  children: (
    <Typography variant="heading" size="lg">
      box
    </Typography>
  ),
  onClick: () => {
    console.log("test");
  },
};

export const Breakpoints = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Breakpoints.args = {
  cs: {sm: {backgroundColor: "primary.brand.300"}},
  md: {padding: "spacing.xl", backgroundColor: "primary.brand.500"},
  children: (
    <Typography variant="heading" size="lg">
      box
    </Typography>
  ),
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
