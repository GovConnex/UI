import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Button from "./Button";
import {withDesign} from "storybook-addon-designs";
import Icon from "../Icon";
import {faCoffee} from "@fortawesome/pro-solid-svg-icons";
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
    },
  },
  argTypes: {
    disabled: {
      description: "Toggle button to be disabled or not",
      type: "boolean",
    },
    children: {
      description: "Button text",
      type: "string",
    },
    variant: {
      description: "Different types of buttons",
      type: "string",
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "tertiary",
          "text",
          "danger",
          "secondaryDanger",
        ],
      },
    },
    size: {
      description: "Button sizes",
      type: "string",
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    iconOnly: {
      description: "Toggle whether button includes text or is icon only",
      type: "boolean",
    },
    shape: {
      description: "Button shape",
      type: "string",
      control: {
        type: "select",
        options: ["rect", "circle"],
      },
    },
    title: {
      description: "Button title",
      type: "string",
    },
    isLoading: {
      description: "Indicates whether button is loading or not",
      type: "boolean",
    },
    noPadding: {
      description: "Indicates whether there is no padding",
      type: "boolean",
    },
    startAdornment: {
      description: "Adornments or icons to put at the beginning of the button",
    },
    endAdornment: {
      description: "Adornments or icons to put at the end of the button",
    },
    style: {
      description: "CSS style of the button",
      type: Object,
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: "Basic Example Button",
  startAdornment: <Icon icon={faCoffee} />,
  endAdornment: <Icon icon={faCoffee} />,
};

Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patterns?type=design&node-id=101-115&mode=design&t=6N7BMl7js5fsUXtU-0",
  },
};

export const BrandButtons = () => Template.bind({});
BrandButtons.parameters = {
  docs: {
    figma: {
      url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patte[…]type=design&node-id=101%3A531&mode=design&t=fNHDlUnouxNjgChh-1",
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

Primary.parameters = {
  docs: {
    description: {
      story:
        "Use primary buttons to highlight the most important actions like confirmation and  also guide users to the most essential actions like adding alert, and adding issues.",
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

Secondary.parameters = {
  docs: {
    description: {
      story:
        "Use secondary buttons when none of the actions are more important than the others. Secondary buttons can also be used as for secondary actions that complements the primary actions from the primary buttons.",
    },
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Tertiary Button",
  variant: "tertiary",
};

Tertiary.parameters = {
  docs: {
    description: {
      story:
        "Utilize tertiary buttons when there subtle actions required so that users won’t get distracted from the main actions by the primary and secondary buttons.",
    },
  },
};

export const SupportButtons = () => Template.bind({});
SupportButtons.parameters = {
  docs: {
    figma: {
      url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patte[…]type=design&node-id=101%3A792&mode=design&t=rhJrQVBgPQ3GXl7T-1",
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  children: "Success Button",
  variant: "danger",
};

Success.parameters = {
  docs: {
    description: {
      story:
        "Utilize success buttons the highlight positive actions or outcomes like confirming a successful action or completing significant tasks.",
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger Button",
  variant: "danger",
};

Danger.parameters = {
  docs: {
    description: {
      story:
        "Use Danger buttons to convey dangerous and critical actions that requires immediate decision from the users.",
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning Button",
  variant: "danger",
};

Warning.parameters = {
  docs: {
    description: {
      story:
        "Utilize warning buttons to highlight important alerts or actions that  have a potential negative impact and requires user attention.",
    },
  },
};
