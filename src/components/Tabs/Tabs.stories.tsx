import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";
import { withDesign } from 'storybook-addon-designs';
import Icon from "../Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [withDesign],
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => {
  return(
    <Tabs >
      <Tabs.Tab startAdornment={<Icon icon={["fas","coffee"]}/>}>test</Tabs.Tab>
      <Tabs.Tab disabled>test2</Tabs.Tab>
      <Tabs.Tab>sdf</Tabs.Tab>
      <Tabs.Tab>tesdgsst2</Tabs.Tab>
    </Tabs>
  )
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
};

Example.parameters = {
//  design: {
//    type: "figma",
//    url: ""
//  }
};
