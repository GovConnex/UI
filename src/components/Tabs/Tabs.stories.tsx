import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Tabs from "./Tabs";
import {withDesign} from "storybook-addon-designs";
import Icon from "../Icon";
import {faCoffee, faPlus} from "@fortawesome/pro-solid-svg-icons";
import Chip from "../Chip";
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Tabs",
  component: Tabs,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
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

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
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
      startAdornment={<Icon icon={faCoffee} />}
    />,
    <Tabs.Tab key="3" disabled label="Disabled tab" value="tab3" />,
    <Tabs.Tab
      onClick={() => console.log("test")}
      key="4"
      label="Another tab"
      value="tab4"
    />,
    <Tabs.Tab
      key="5"
      label="With Chip"
      value="tab5"
      endAdornment={<Chip children="4" priority="low" />}
    />,
  ],
};

Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/%F0%9F%93%90-Bipartisan-Design-System?node-id=83%3A9542",
  },
};

export const PageTabs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageTabs.args = {
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
      startAdornment={<Icon icon={faCoffee} />}
    />,
    <Tabs.Tab key="3" disabled label="Disabled tab" value="tab3" />,
    <Tabs.Tab
      onClick={() => console.log("test")}
      key="4"
      label="Another tab"
      value="tab4"
    />,
    <Tabs.Tab
      key="5"
      label="With Chip"
      value="tab5"
      endAdornment={<Chip children="4" priority="low" />}
    />,
  ],
};

PageTabs.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/%F0%9F%93%90-Bipartisan-Design-System?node-id=83%3A9542",
  },
};

export const SectionTabs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SectionTabs.args = {
  value: "tab1",
  onChange: (e: any) => {
    console.log(e);
  },
  isSection: true,
  children: [
    <Tabs.Tab key="1" label="Normal tab" value="tab1" />,
    <Tabs.Tab
      key="2"
      label="Tab with icon"
      value="tab2"
      startAdornment={<Icon icon={faCoffee} />}
    />,
    <Tabs.Tab key="3" disabled label="Disabled tab" value="tab3" />,
    <Tabs.Tab
      onClick={() => console.log("test")}
      key="4"
      label="Another tab"
      value="tab4"
    />,
    <Tabs.Tab
      key="5"
      label="With Chip"
      value="tab5"
      endAdornment={<Chip children="4" priority="low" />}
    />,
  ],
};

SectionTabs.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/pQqcx1z6rSV8MVmokydQMr/%F0%9F%93%90-Bipartisan-Design-System?node-id=83%3A9542",
  },
};

export const IconOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconOnly.args = {
  value: "tab1",
  onChange: (e: any) => {
    console.log(e);
  },
  isSection: true,
  children: [
    <Tabs.Tab key="1" iconOnly value="tab1" startAdornment={<Icon icon={faCoffee} />} />,
    <Tabs.Tab key="2" iconOnly value="tab2" endAdornment={<Icon icon={faPlus} />} />,
  ],
};
