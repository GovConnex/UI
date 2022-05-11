import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { withDesign } from 'storybook-addon-designs';

import Button from "../Button";
import FaIcon from "../FaIcon";
import { faUser } from "@fortawesome/pro-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Dropdown",
  component: Dropdown,
  decorators: [withDesign],
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => {
  const exampleRef = React.useRef<HTMLButtonElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <Button ref={exampleRef} onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</Button>
      {showDropdown && <Dropdown {...args} anchorEl={exampleRef}>I'm drop!</Dropdown>}
    </div>
  );
}

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  placement: "bottom-start",
  options: [
    { text: "Dropdown Option", startAdornment: <FaIcon icon={faUser} /> },
    { text: "Hello", startAdornment: <FaIcon icon={faUser} /> },
    { text: "Dropdown Option Part 2", startAdornment: <FaIcon icon={faUser} /> },
  ]
};

export const Headings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Headings.args = {
  placement: "bottom-start",
  options: [
    { text: "Dropdown Option", category: "Animals" },
    { text: "Dropdown Option", category: "Animals" },
    { text: "Dropdown Option", category: "Animals" },
    { text: "Dropdown Option", category: "Animals" },
    { text: "Dropdown Option", category: "Plants" },
    { text: "Dropdown Option", category: "Plants" },
  ]
};
