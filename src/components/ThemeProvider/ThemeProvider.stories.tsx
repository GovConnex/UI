import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeProvider from "./ThemeProvider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GovConnex-UI/TP",
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeProvider> = (args) => <ThemeProvider {...args}><div>LOL</div></ThemeProvider>;

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  theme: "light",
};