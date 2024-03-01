import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Datepicker from "./Datepicker";
import { withDesign } from 'storybook-addon-designs';
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Datepicker",
  component: Datepicker,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
    },
  },
} as ComponentMeta<typeof Datepicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Datepicker> = (args) => <Datepicker {...args} />;

export const Basic = Template.bind({});

export const WithDefaultDate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithDefaultDate.args = {
  defaultValue: new Date("2022-01-02")
};
