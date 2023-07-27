import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropdownController from "./DropdownController";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DropdownController",
  component: DropdownController,
  decorators: [withDesign],
} as ComponentMeta<typeof DropdownController>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownController> = (args) => (
  <DropdownController {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  rootButton: () => <div>Test</div>,
  overlay: (toggleVis) => <div onClick={() => toggleVis()}>MenuItem</div>,
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
