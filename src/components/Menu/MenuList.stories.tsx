import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuList, MenuListHeading } from "./MenuList";
import { withDesign } from "storybook-addon-designs";
import MenuItem from "./MenuItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/MenuList",
  component: MenuList,
  decorators: [withDesign],
} as ComponentMeta<typeof MenuList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuList> = (args) => <MenuList {...args} />;

export const Example = Template.bind({});
Example.args = {
  style: { maxWidth: "200px" },
  children: (
    <>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem button>MenuList Button</MenuItem>
      <MenuItem button>MenuList Button</MenuItem>
    </>
  ),
};

export const FixedHeight = Template.bind({});
FixedHeight.args = {
  style: { height: "200px", maxWidth: "200px" },
  children: (
    <>
      <MenuListHeading>Not Sticky Heading</MenuListHeading>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuListHeading sticky>Sticky Heading</MenuListHeading>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
      <MenuItem>MenuList Item</MenuItem>
    </>
  ),
};
