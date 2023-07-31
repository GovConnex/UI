import React, {useState} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Menu from "./Menu";
import {withDesign} from "storybook-addon-designs";
import Button from "../Button";
import Icon from "../Icon";
import {faUser} from "@fortawesome/pro-solid-svg-icons";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Menu",
  component: Menu,
  decorators: [withDesign],
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => {
  const exampleRef = React.useRef<HTMLButtonElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Button ref={exampleRef} onClick={() => setShowMenu(!showMenu)}>
        Toggle menu
      </Button>
      {showMenu && (
        <Menu {...args} onClose={() => setShowMenu(false)} anchorEl={exampleRef} />
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
    {text: "Menu Option", startAdornment: <GreenDot />},
    {
      text: "Hello",
      startAdornment: <GreenDot />,
      endAdornment: <Icon icon={faUser} />,
    },
    {text: "Menu Option Part 2", startAdornment: <GreenDot />},
    {
      text: "Menu Option Part 2: 2",
      startAdornment: <GreenDot />,
      endAdornment: <Icon icon={faUser} />,
    },
  ],
};

Example.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rsh0H6PDD6bMrYyX93eTmW/?node-id=149%3A15787",
  },
};

export const Headings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Headings.args = {
  placement: "bottom-start",
  options: [
    {text: "Menu Option", category: "Animals"},
    {text: "Menu Option", category: "Animals"},
    {text: "Menu Option", category: "Animals"},
    {text: "Menu Option", category: "Animals"},
    {text: "Menu Option", category: "Plants"},
    {text: "Menu Option", category: "Plants"},
  ],
};
