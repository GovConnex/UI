import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Button from "./Button";
import {withDesign} from "storybook-addon-designs";
import Icon from "../Icon";
import {faCoffee} from "@fortawesome/pro-solid-svg-icons";
import {faFaceSmile} from "@fortawesome/pro-regular-svg-icons";
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

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "Primary Button Disabled",
  variant: "primary",
  disabled: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: "Primary Button Loading",
  variant: "primary",
  isLoading: true,
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

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: "Secondary Button Disabled",
  variant: "secondary",
  disabled: true,
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
  children: "Secondary Button Loading",
  variant: "secondary",
  isLoading: true,
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

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  children: "Tertiary Button Disabled",
  variant: "tertiary",
  disabled: true,
};

export const TertiaryLoading = Template.bind({});
TertiaryLoading.args = {
  children: "Tertiary Button Loading",
  variant: "tertiary",
  isLoading: true,
};

export const SupportButtons = () => Template.bind({});
SupportButtons.parameters = {
  docs: {
    figma: {
      url: "https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patte[…]type=design&node-id=101%3A792&mode=design&t=rhJrQVBgPQ3GXl7T-1",
    },
  },
};

export const SuccessPrimary = Template.bind({});
SuccessPrimary.args = {
  children: "Success Button",
  variant: "primary",
  subtype: "success",
};

SuccessPrimary.parameters = {
  docs: {
    description: {
      story:
        "Utilize success buttons the highlight positive actions or outcomes like confirming a successful action or completing significant tasks.",
    },
  },
};

export const SuccessPrimaryDisabled = Template.bind({});
SuccessPrimaryDisabled.args = {
  children: "Success Primary Button Disabled",
  variant: "primary",
  subtype: "success",
  disabled: true,
};

export const SuccessPrimaryLoading = Template.bind({});
SuccessPrimaryLoading.args = {
  children: "Success Primary Button Loading",
  variant: "primary",
  subtype: "success",
  isLoading: true,
};

export const SuccessSecondary = Template.bind({});
SuccessSecondary.args = {
  children: "Success Button",
  variant: "secondary",
  subtype: "success",
};

export const SuccessSecondaryDisabled = Template.bind({});
SuccessSecondaryDisabled.args = {
  children: "Success Secondary Button Disabled",
  variant: "secondary",
  subtype: "success",
  disabled: true,
};

export const SuccessSecondaryLoading = Template.bind({});
SuccessSecondaryLoading.args = {
  children: "Success Secondary Button Loading",
  variant: "secondary",
  subtype: "success",
  isLoading: true,
};

export const SuccessTertiary = Template.bind({});
SuccessTertiary.args = {
  children: "Success Button",
  variant: "tertiary",
  subtype: "success",
};

export const SuccessTertiaryDisabled = Template.bind({});
SuccessTertiaryDisabled.args = {
  children: "Success Tertiary Button Disabled",
  variant: "tertiary",
  subtype: "success",
  disabled: true,
};

export const SuccessTertiaryLoading = Template.bind({});
SuccessTertiaryLoading.args = {
  children: "Success Tertiary Button Loading",
  variant: "tertiary",
  subtype: "success",
  isLoading: true,
};

export const ErrorPrimary = Template.bind({});
ErrorPrimary.args = {
  children: "Error Button",
  variant: "primary",
  subtype: "error",
};

ErrorPrimary.parameters = {
  docs: {
    description: {
      story:
        "Use Danger buttons to convey dangerous and critical actions that requires immediate decision from the users.",
    },
  },
};

export const ErrorPrimaryDisabled = Template.bind({});
ErrorPrimaryDisabled.args = {
  children: "Error Primary Button Disabled",
  variant: "primary",
  subtype: "error",
  disabled: true,
};

export const ErrorPrimaryLoading = Template.bind({});
ErrorPrimaryLoading.args = {
  children: "Error Primary Button Loading",
  variant: "primary",
  subtype: "error",
  isLoading: true,
};

export const ErrorSecondary = Template.bind({});
ErrorSecondary.args = {
  children: "Error Button",
  variant: "secondary",
  subtype: "error",
};

export const ErrorSecondaryDisabled = Template.bind({});
ErrorSecondaryDisabled.args = {
  children: "Error Secondary Button Disabled",
  variant: "secondary",
  subtype: "error",
  disabled: true,
};

export const ErrorSecondaryLoading = Template.bind({});
ErrorSecondaryLoading.args = {
  children: "Error Secondary Button Loading",
  variant: "secondary",
  subtype: "error",
  isLoading: true,
};

export const ErrorTertiary = Template.bind({});
ErrorTertiary.args = {
  children: "Error Button",
  variant: "tertiary",
  subtype: "error",
};

export const ErrorTertiaryDisabled = Template.bind({});
ErrorTertiaryDisabled.args = {
  children: "Error Tertiary Button Disabled",
  variant: "tertiary",
  subtype: "error",
  disabled: true,
};

export const ErrorTertiaryLoading = Template.bind({});
ErrorTertiaryLoading.args = {
  children: "Error Tertiary Button Loading",
  variant: "tertiary",
  subtype: "error",
  isLoading: true,
};

export const InfoPrimary = Template.bind({});
InfoPrimary.args = {
  children: "Info Button",
  variant: "primary",
  subtype: "info",
};

export const InfoPrimaryDisabled = Template.bind({});
InfoPrimaryDisabled.args = {
  children: "Info Primary Button Disabled",
  variant: "primary",
  subtype: "info",
  disabled: true,
};

export const InfoPrimaryLoading = Template.bind({});
InfoPrimaryLoading.args = {
  children: "Info Primary Button Loading",
  variant: "primary",
  subtype: "info",
  isLoading: true,
};

export const InfoSecondary = Template.bind({});
InfoSecondary.args = {
  children: "Info Button",
  variant: "secondary",
  subtype: "info",
};

export const InfoSecondaryDisabled = Template.bind({});
InfoSecondaryDisabled.args = {
  children: "Info Secondary Button Disabled",
  variant: "secondary",
  subtype: "info",
  disabled: true,
};

export const InfoSecondaryLoading = Template.bind({});
InfoSecondaryLoading.args = {
  children: "Info Secondary Button Loading",
  variant: "secondary",
  subtype: "info",
  isLoading: true,
};

export const InfoTertiary = Template.bind({});
InfoTertiary.args = {
  children: "Info Button",
  variant: "tertiary",
  subtype: "info",
};

export const InfoTertiaryDisabled = Template.bind({});
InfoTertiaryDisabled.args = {
  children: "Info Tertiary Button Disabled",
  variant: "tertiary",
  subtype: "info",
  disabled: true,
};

export const InfoTertiaryLoading = Template.bind({});
InfoTertiaryLoading.args = {
  children: "Info Tertiary Button Loading",
  variant: "tertiary",
  subtype: "info",
  isLoading: true,
};

export const WarningPrimary = Template.bind({});
WarningPrimary.args = {
  children: "Warning Button",
  variant: "primary",
  subtype: "warning",
};

WarningPrimary.parameters = {
  docs: {
    description: {
      story:
        "Utilize warning buttons to highlight important alerts or actions that  have a potential negative impact and requires user attention.",
    },
  },
};

export const WarningPrimaryDisabled = Template.bind({});
WarningPrimaryDisabled.args = {
  children: "Warning Primary Button Disabled",
  variant: "primary",
  subtype: "warning",
  disabled: true,
};

export const WarningPrimaryLoading = Template.bind({});
WarningPrimaryLoading.args = {
  children: "Warning Primary Button Loading",
  variant: "primary",
  subtype: "warning",
  isLoading: true,
};

export const WarningSecondary = Template.bind({});
WarningSecondary.args = {
  children: "Warning Button",
  variant: "secondary",
  subtype: "warning",
};

export const WarningSecondaryDisabled = Template.bind({});
WarningSecondaryDisabled.args = {
  children: "Warning Secondary Button Disabled",
  variant: "secondary",
  subtype: "warning",
  disabled: true,
};

export const WarningSecondaryLoading = Template.bind({});
WarningSecondaryLoading.args = {
  children: "Warning Secondary Button Loading",
  variant: "secondary",
  subtype: "warning",
  isLoading: true,
};

export const WarningTertiary = Template.bind({});
WarningTertiary.args = {
  children: "Warning Button",
  variant: "tertiary",
  subtype: "warning",
};

export const WarningTertiaryDisabled = Template.bind({});
WarningTertiaryDisabled.args = {
  children: "Warning Tertiary Button Disabled",
  variant: "tertiary",
  subtype: "warning",
  disabled: true,
};

export const WarningTertiaryLoading = Template.bind({});
WarningTertiaryLoading.args = {
  children: "Warning Tertiary Button Loading",
  variant: "tertiary",
  subtype: "warning",
  isLoading: true,
};

export const InversePrimary = Template.bind({});
InversePrimary.args = {
  children: "Inverse Button",
  variant: "primary",
  subtype: "inverse",
};

export const InversePrimaryDisabled = Template.bind({});
InversePrimaryDisabled.args = {
  children: "Inverse Primary Button Disabled",
  variant: "primary",
  subtype: "inverse",
  disabled: true,
};

export const InversePrimaryLoading = Template.bind({});
InversePrimaryLoading.args = {
  children: "Inverse Primary Button Loading",
  variant: "primary",
  subtype: "inverse",
  isLoading: true,
};

export const InverseSecondary = Template.bind({});
InverseSecondary.args = {
  children: "Inverse Button",
  variant: "secondary",
  subtype: "inverse",
};

export const InverseSecondaryDisabled = Template.bind({});
InverseSecondaryDisabled.args = {
  children: "Inverse Secondary Button Disabled",
  variant: "secondary",
  subtype: "inverse",
  disabled: true,
};

export const InverseSecondaryLoading = Template.bind({});
InverseSecondaryLoading.args = {
  children: "Inverse Secondary Button Loading",
  variant: "secondary",
  subtype: "inverse",
  isLoading: true,
};

export const InverseTertiary = Template.bind({});
InverseTertiary.args = {
  children: "Inverse Button",
  variant: "tertiary",
  subtype: "inverse",
};

export const InverseTertiaryDisabled = Template.bind({});
InverseTertiaryDisabled.args = {
  children: "Inverse Tertiary Button Disabled",
  variant: "tertiary",
  subtype: "inverse",
  disabled: true,
};

export const InverseTertiaryLoading = Template.bind({});
InverseTertiaryLoading.args = {
  children: "Inverse Tertiary Button Loading",
  variant: "tertiary",
  subtype: "inverse",
  isLoading: true,
};

export const SingularIcon = Template.bind({});
SingularIcon.args = {
  children: <Icon icon={faFaceSmile} />,
};

export const LoadingWithText = Template.bind({});
LoadingWithText.args = {
  children: "Loading with text width",
  variant: "primary",
  isLoading: true,
};

export const LoadingWithoutText = Template.bind({});
LoadingWithoutText.args = {
  children: "",
  variant: "primary",
  isLoading: true,
};
