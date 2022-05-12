import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuList, MenuListHeading } from "./MenuList";
import { withDesign } from "storybook-addon-designs";
import MenuListItem from "./MenuListItem";
import Icon from "../Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/MenuList",
  component: MenuList,
  decorators: [withDesign],
} as ComponentMeta<typeof MenuList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuList> = (args) => <MenuList {...args} style={{ maxWidth: 200 }} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  children: (
    <>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem button>MenuList Button</MenuListItem>
      <MenuListItem button>MenuList Button</MenuListItem>
    </>
  ),
};

export const FixedHeight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FixedHeight.args = {
  style: { height: "200px" },
  children: (
    <>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListHeading sticky>Sticky Heading</MenuListHeading>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
      <MenuListItem>MenuList Item</MenuListItem>
    </>
  ),
};
