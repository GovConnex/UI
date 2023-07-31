import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Tabs from "./Tabs";
import {withDesign} from "storybook-addon-designs";
import Icon from "../Icon";
// @ts-ignore
import mdx from "./Tabs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [withDesign],
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    value: {
      options: ["tab1", "tab2", "tab2", "tab3", "tab4"],
      control: {type: "select"},
    },
  },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => {
  return <Tabs {...args}>{args.children}</Tabs>;
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  value: "tab1",
  onChange: (e: any) => {
    console.log(e);
  },
  children: [
    <Tabs.Tab key="1" label="Normal tab" value="tab1" />,
    <Tabs.Tab
      key="2"
      label="Tab with icon"
      value="tab2"
      startAdornment={<Icon icon={["fas", "coffee"]} />}
    />,
    <Tabs.Tab key="3" disabled label="Disabled tab" value="tab3" />,
    <Tabs.Tab
      onClick={() => console.log("test")}
      key="4"
      label="Another tab"
      value="tab4"
    />,
  ],
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/%F0%9F%93%90-Bipartisan-Design-System?node-id=83%3A9542",
  },
};
