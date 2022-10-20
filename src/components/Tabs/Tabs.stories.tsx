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
  return (
    <Tabs value={args.value} >
      {args.children}
    </Tabs>
  )
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  value: "tab1",
  children: [
    <Tabs.Tab key="1" label="Normal tab" value="tab1" />,
    <Tabs.Tab key="2" label="Tab with icon" value="tab2" startAdornment={<Icon icon={["fas", "coffee"]} />} />,
    <Tabs.Tab key="3"  disabled label="Disabled tab" value="tab3" />,
    <Tabs.Tab onClick={()=>console.log("test")} key="4" label="Another tab" value="tab4" />,
  ]
};


Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/%F0%9F%93%90-Bipartisan-Design-System?node-id=83%3A9542"
  }
};
