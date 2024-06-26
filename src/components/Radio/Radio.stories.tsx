import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Radio from "./Radio";
import {withDesign} from "storybook-addon-designs";
import {faBook} from "@fortawesome/pro-solid-svg-icons";
import Icon from "../Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Radio",
  component: Radio,
  decorators: [withDesign],
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => {
  const [checked, setChecked] = React.useState(args.checked);

  return <Radio checked={checked} onChange={() => setChecked(!checked)} {...args} />;
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  label: "Radio",
  description: "Description",
};
// export const Simple = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Simple.args = {
//   variant: "simple"
// };
export const Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
  variant: "card",
  label: "Label",
  description: <div>Example</div>,
};
export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
List.args = {
  variant: "list",
  label: "Label",
  description: "Description",
};
export const Plain = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Plain.args = {
  variant: "plain",
  label: "Label",
  description: "Description",
};

export const IconRadio = Template.bind({});

IconRadio.args = {
  variant: "card",
  label: "Label",
  description: "Description",
  startAdornment: <Icon icon={faBook} />,
};

export const IconOnLabel = Template.bind({});

IconOnLabel.args = {
  variant: "card",
  label: (
    <>
      <Icon icon={faBook} /> Label
    </>
  ),
  description: "Description",
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
