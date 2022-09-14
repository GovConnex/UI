import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "./PageHeader";
import { withDesign } from "storybook-addon-designs";
import { faGrid2 } from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PageHeader",
  component: PageHeader,
  decorators: [withDesign],
} as ComponentMeta<typeof PageHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  icon: faGrid2,
  children: <>Dashboard</>,
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
