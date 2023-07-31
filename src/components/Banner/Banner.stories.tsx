import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Banner from "./Banner";
import {withDesign} from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Banner",
  component: Banner,
  decorators: [withDesign],
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Info = Template.bind({});
Info.args = {
  title: "Title",
  description: "Description",
  variant: "info",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Title",
  description: "Description",
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title",
  description: "Description",
  variant: "error",
};

export const Success = Template.bind({});
Success.args = {
  title: "Title",
  description: "Description",
  variant: "success",
};

// Example.parameters = {
// //  design: {
// //    type: "figma",
// //    url: ""
// //  }
// };
