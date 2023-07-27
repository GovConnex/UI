import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { List, ListItem } from "./List";
import { withDesign } from "storybook-addon-designs";

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
      <ListItem>Item!</ListItem>
      <ListItem>Item!</ListItem>
      <ListItem variant="header">Header!</ListItem>
      <ListItem>Item!</ListItem>
      <ListItem>Item!</ListItem>
      <ListItem>Item!</ListItem>
      <ListItem variant="subheader">Sub Header!</ListItem>
      <ListItem>Item!</ListItem>
      <ListItem>Item!</ListItem>
      <ListItem>Item!</ListItem>
    </>
  ),
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/?node-id=645%3A46279",
  },
};
