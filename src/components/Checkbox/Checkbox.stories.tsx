import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [withDesign],
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const onChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return <Checkbox {...args} checked={checked} onChange={onChange} />;
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  label: "Checkbox"
};
export const CheckOnly = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CheckOnly.args = {
};

Example.parameters = {
 design: {
   type: "figma",
   url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/Bipartisan-Design-System?node-id=133%3A10483"
 }
};
