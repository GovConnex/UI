import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./Accordion";
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Accordion",
  component: Accordion,
  decorators: [withDesign],
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => 
(
  <div>

<Accordion {...args} />
<Accordion {...args} />
  </div>
)
;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
};

Example.parameters = {
//  design: {
//    type: "figma",
//    url: ""
//  }
};
