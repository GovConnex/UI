import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Input from "./Input";
import {withDesign} from "storybook-addon-designs";
import Icon from "../Icon";
import {faSearch} from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
  decorators: [withDesign],
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const TemplateFocused: ComponentStory<typeof Input> = (args) => (
  // eslint-disable-next-line
  <Input autoFocus {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Default",
  label: "Fancy label",
  hint: "This is a hint",
};

export const Enabled = Template.bind({});
Enabled.args = {
  placeholder: "Placeholder",
  label: "Label",
  hint: "Hint",
  startAdornment: <Icon icon={faSearch} />,
  endAdornment: <Icon icon={faSearch} />,
};

export const Focused = TemplateFocused.bind({});
Focused.args = {
  placeholder: "Placeholder",
  label: "Label",
  hint: "Hint",
  startAdornment: <Icon icon={faSearch} />,
  endAdornment: <Icon icon={faSearch} />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Placeholder",
  label: "Label",
  hint: "Hint",
  startAdornment: <Icon icon={faSearch} />,
  endAdornment: <Icon icon={faSearch} />,
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  error: "This is an error",
  placeholder: "Placeholder",
  label: "Label",
  startAdornment: <Icon icon={faSearch} />,
  endAdornment: <Icon icon={faSearch} />,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  placeholder: "Search",
  fullWidth: true,
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  startAdornment: <Icon icon={faSearch} />,
  placeholder: "Search",
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  endAdornment: <Icon icon={faSearch} />,
  placeholder: "Search",
};

export const WithHint = Template.bind({});
WithHint.args = {
  hint: "This is a hint",
  placeholder: "Search",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "This is the label",
  placeholder: "Search",
};

export const OverridePadding = Template.bind({});
OverridePadding.args = {
  overridePadding: "sm",
  noPadding: true,
  value: "testing this",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/?node-id=157%3A9356",
  },
};
