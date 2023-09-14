import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Avatar from "./Avatar";
import {withDesign} from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [withDesign],
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const cooperSrc =
  "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5bbde01153dc9c5087edf407/ba6faad0-1d60-48c9-9bf4-b5be4fddfcaa/128";

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/GovConnex-Component-Library?node-id=167%3A66750",
  },
};

// Different size variations

export const SizeSM = Template.bind({});
SizeSM.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
  size: "sm",
};

export const SizeSmNoImg = Template.bind({});
SizeSmNoImg.args = {
  alt: "Cooper Darling-Blair",
  size: "sm",
};

export const SizeMD = Template.bind({});
SizeMD.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
  size: "md",
};

export const SizeMdNoImg = Template.bind({});
SizeMdNoImg.args = {
  alt: "Cooper Darling-Blair",
  size: "md",
};

export const SizeLG = Template.bind({});
SizeLG.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
  size: "lg",
};

export const SizeLgNoImg = Template.bind({});
SizeLgNoImg.args = {
  alt: "Cooper Darling-Blair",
  size: "lg",
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
  size: "xl",
};

export const SizeXlNoImg = Template.bind({});
SizeXlNoImg.args = {
  alt: "Cooper Darling-Blair",
  size: "xl",
};

export const Size2XL = Template.bind({});
Size2XL.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
  size: "2xl",
};

export const Size2xlNoImg = Template.bind({});
Size2xlNoImg.args = {
  alt: "Cooper Darling-Blair",
  size: "2xl",
};

export const Size3XL = Template.bind({});
Size3XL.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
  size: "3xl",
};

export const Size3xlNoImg = Template.bind({});
Size3xlNoImg.args = {
  alt: "Cooper Darling-Blair",
  size: "3xl",
};

export const Size4XL = Template.bind({});
Size4XL.args = {
  alt: "Cooper Darling-Blair",
  src: cooperSrc,
  size: "4xl",
};

export const Size4xlNoImg = Template.bind({});
Size4xlNoImg.args = {
  alt: "Cooper Darling-Blair",
  size: "4xl",
};

export const Size4xlNoImgInverse = Template.bind({});
Size4xlNoImgInverse.args = {
  alt: "Cooper Darling-Blair",
  size: "4xl",
  bgColorInverse: true,
};
