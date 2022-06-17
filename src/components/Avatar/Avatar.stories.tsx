import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [withDesign],
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  alt: "Cooper Darling-Blair",
  src: "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5bbde01153dc9c5087edf407/ba6faad0-1d60-48c9-9bf4-b5be4fddfcaa/128",
};

Example.parameters = {
   design: {
     type: "figma",
     url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/GovConnex-Component-Library?node-id=167%3A66750"
   }
};
