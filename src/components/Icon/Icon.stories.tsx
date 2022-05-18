import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./Icon";
import { withDesign } from 'storybook-addon-designs';
import { faSearch } from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Icon",
  component: Icon,
  decorators: [withDesign],
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const HeartSvg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeartSvg.args = {
  icon: ['fas', 'heart'],
};

export const FontAwesomeSearch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FontAwesomeSearch.args = {
  icon: faSearch,
  size: "lg",
};
