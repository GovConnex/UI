import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Toggle from "./Toggle";
import {withDesign} from "storybook-addon-designs";
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";
import {faBook} from "@fortawesome/pro-solid-svg-icons";
import Icon from "../Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Toggle",
  component: Toggle,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
    },
  },
} as ComponentMeta<typeof Toggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Single = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Single.args = {
  variant: "single",
};

export const Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
  variant: "card",
  label: "Label",
  description: <div>Example</div>,
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  variant: "default",
  label: "Label",
  description: <div>Example</div>,
};

export const IconToggle = Template.bind({});
IconToggle.args = {
  variant: "card",
  label: "Label",
  description: "Description",
  startAdornment: <Icon icon={faBook} />,
};
