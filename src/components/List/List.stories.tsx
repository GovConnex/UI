import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { List, ListItem, ListHeading } from "./List";
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/List",
  component: List,
  decorators: [withDesign],
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  children: (
    <>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem button>List Button</ListItem>
      <ListItem button>List Button</ListItem>
    </>
  )
};

export const Nested = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Nested.args = {
  children: (
    <>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListHeading>Nested List</ListHeading>
      <List nested>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
      </List>
    </>
  )
};

export const FixedHeight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FixedHeight.args = {
  style: { height: "200px" },
  children: (
    <>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListHeading sticky>Sticky Heading</ListHeading>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
      <ListItem>List Item</ListItem>
    </>
  )
};
