import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { withDesign } from "storybook-addon-designs";
import Button from "../Button";
import Icon from "../Icon";
import { faUser } from "@fortawesome/pro-solid-svg-icons";
import styled from "styled-components";

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
      <Button ref={exampleRef} onClick={() => setShowDropdown(!showDropdown)}>
        Toggle dropdown
      </Button>
      {showDropdown && (
        <Dropdown
          {...args}
          onClose={() => setShowDropdown(false)}
          anchorEl={exampleRef}
        >
          I'm drop!
        </Dropdown>
      )}
    </div>
  );
};

const GreenDot = styled.div`
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  placement: "bottom-start",
  options: [
    { text: "Dropdown Option", startAdornment: <GreenDot /> },
    { text: "Hello", startAdornment: <GreenDot /> },
    { text: "Dropdown Option Part 2", startAdornment: <GreenDot /> },
  ],
};

export const Headings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Headings.args = {
  placement: "bottom-start",
  options: [
    {
      text: "Dropdown Option",
      category: "Animals",
      startAdornment: <Icon icon={faUser} />,
    },
    { text: "Dropdown Option", category: "Animals" },
    { text: "Dropdown Option", category: "Animals" },
    { text: "Dropdown Option", category: "Animals" },
    { text: "Dropdown Option", category: "Plants" },
    { text: "Dropdown Option", category: "Plants" },
  ],
};
