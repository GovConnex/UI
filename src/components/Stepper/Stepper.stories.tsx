import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stepper from "./Stepper";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Stepper",
  component: Stepper,
  decorators: [withDesign],
} as ComponentMeta<typeof Stepper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  activeStep: 1,
  steps: [
    { label: "Step 1", description: "Step 1 description" },
    { label: "Step 2", description: "Step 2 description" },
    { label: "Step 3", description: "Step 3 description", disabled: true },
  ],
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
