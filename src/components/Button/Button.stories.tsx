import React, {PropsWithChildren} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Button from "./Button";
import {withDesign} from "storybook-addon-designs";
import Icon from "../Icon";
import {faCoffee, faBook} from "@fortawesome/pro-solid-svg-icons";
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
const LinkTemplate: ComponentStory<typeof Button> = (args) => (
  <Button
    as={(props: PropsWithChildren<unknown>) => (
      <a href="" {...props}>
        {props.children}
      </a>
    )}
    {...args}
  />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Primary Button",
  startAdornment: <Icon icon={faCoffee} />,
  endAdornment: <Icon icon={faCoffee} />,
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patterns?type=design&node-id=101-115&mode=design&t=6N7BMl7js5fsUXtU-0",
  },
  docs: {
    figma: {
      url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patterns?type=design&node-id=101-115&mode=design&t=6N7BMl7js5fsUXtU-0",
    },
    description: {
      story:
        '## Alternate Variant\n\nAnother variant of the Button component.\n\n```jsx\n<Button label="Alternate Button" />\n```',
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
    figma: {
      url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patterns?type=design&node-id=101-115&mode=design&t=6N7BMl7js5fsUXtU-0",
    },
    description: {
      url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patterns?type=design&node-id=101-115&mode=design&t=6N7BMl7js5fsUXtU-0",
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const PrimaryLg = Template.bind({});
PrimaryLg.args = {
  children: "Primary Lg Button",
  size: "lg",
  variant: "primary",
};

PrimaryLg.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const PrimarySm = Template.bind({});
PrimarySm.args = {
  children: "Primary Sm Button",
  size: "sm",
  variant: "primary",
};

PrimarySm.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const Text = Template.bind({});
Text.args = {
  children: "Text Button",
  variant: "text",
  startAdornment: <Icon icon={faBook} />,
};

Text.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const ButtonAsALink = LinkTemplate.bind({});
ButtonAsALink.args = {
  children: "Text Button",
  variant: "text",
  startAdornment: <Icon icon={faBook} />,
};

ButtonAsALink.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  iconOnly: true,
  children: <Icon icon={faBook} />,
};

IconButton.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
  children: <Icon icon={faBook} />,
};

IsLoading.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
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
        "Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const DangerSm = Template.bind({});
DangerSm.args = {
  children: "Danger Button",
  variant: "danger",
  size: "sm",
};

DangerSm.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const DangerLg = Template.bind({});
DangerLg.args = {
  children: "Danger Button",
  variant: "danger",
  size: "lg",
};

DangerLg.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const SecondaryDanger = Template.bind({});
SecondaryDanger.args = {
  children: "Secondary Danger Button",
  variant: "secondaryDanger",
};

SecondaryDanger.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const SecondaryDangerSm = Template.bind({});
SecondaryDangerSm.args = {
  children: "Secondary Danger Button",
  variant: "secondaryDanger",
  size: "sm",
};

SecondaryDangerSm.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const SecondaryDangerLg = Template.bind({});
SecondaryDangerLg.args = {
  children: "Secondary Danger Button",
  variant: "secondaryDanger",
  size: "lg",
};

SecondaryDangerLg.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};

export const SecondaryDangerDisabled = Template.bind({});
SecondaryDangerDisabled.args = {
  children: "Secondary Danger Button",
  variant: "secondaryDanger",
  size: "lg",
  disabled: true,
};

SecondaryDangerDisabled.parameters = {
  docs: {
    description: {
      story:
        "Test Using Markdown-formatted descriptions in the parameters field allows you to provide detailed usage explanations directly within your stories and have them automatically rendered in the documentation panel. This can help users understand how to use your component effectively.",
    },
  },
};
