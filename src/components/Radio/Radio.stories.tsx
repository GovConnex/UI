import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./Radio";
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Radio",
  component: Radio,
  decorators: [withDesign],
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) =>{ 
  const [checked, setChecked] = React.useState(args.checked);

  return(
<Radio checked={checked} onChange={() => setChecked(!checked)} {...args} />)}

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  label: "Radio",
  description: "Description"
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
  label:"Label",
  description: "Description"
};
export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
List.args = {
  variant: "list",
  label:"Label",
  description: "Description"
};

Example.parameters = {
//  design: {
//    type: "figma",
//    url: ""
//  }
};
