import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FaIcon from "./FaIcon";
import { withDesign } from 'storybook-addon-designs';
import { faSearch } from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/FaIcon",
  component: FaIcon,
  decorators: [withDesign],
} as ComponentMeta<typeof FaIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FaIcon> = (args) => <FaIcon {...args} />;

export const Search = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Search.args = {
  icon: faSearch
};

export const SearchLg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchLg.args = {
  icon: faSearch,
  faProps: {
    size: "lg"
  }
};
