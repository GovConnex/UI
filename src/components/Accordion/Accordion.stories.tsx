import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Accordion from "./Accordion";
import {withDesign} from "storybook-addon-designs";
import Toggle from "../Toggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Accordion",
  component: Accordion,
  decorators: [withDesign],
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <div>
    <Accordion {...args} />
  </div>
);
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  label: "Accordion Label",

  children: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget
        aliquam tincidunt, nisl nisl aliquet nisl, nec
      </p>
    </div>
  ),
};

const ManualTemplate: ComponentStory<typeof Accordion> = (args) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Accordion {...args} isOpen={open} />
      <button onClick={() => setOpen(!open)}>toggle open</button>
    </div>
  );
};
export const ManualExample = ManualTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ManualExample.args = {
  label: "Manual accordion label",

  children: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget
        aliquam tincidunt, nisl nisl aliquet nisl, nec
      </p>
    </div>
  ),
};

export const RootTemplate = ManualTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RootTemplate.args = {
  label: "Manual accordion label",
  root: <Toggle variant="card" label="Toggle" description="Toggle description" />,
  children: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget
        aliquam tincidunt, nisl nisl aliquet nisl, nec
      </p>
    </div>
  ),
};
