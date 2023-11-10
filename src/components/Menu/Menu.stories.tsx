import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Menu, {ButtonMenu} from "./Menu";
import {withDesign} from "storybook-addon-designs";
import Button from "../Button";
import Avatar from "../Avatar/Avatar";
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
  return (
    <ButtonMenu
      menuProps={{
        ...args,
      }}
    >
      Toggle menu
    </ButtonMenu>
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
  onSearch: undefined,
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

export const WithCategory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCategory.args = {
  placement: "bottom-start",
  cs: {width: "250px"},
  textWidth: "180px",
  onSearch: undefined,
  onOptionSelect: (option) => {
    console.log(option);
  },
  options: [
    {
      text: "Hon Anthony Albanese MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Anthony Albanese MP" />,
    },
    {
      text: "Hon Dr Anne Aly MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Dr Anne Aly MP" />,
    },
    {
      text: "Hon Karen Andrews MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Karen Andrews MP" />,
    },
    {
      text: "Dr Michelle Ananda-Rajah MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Dr Michelle Ananda-Rajah MP" />,
    },
    {
      text: "Advisory Committe on Clinical Trials",
      category: "Departments and Agencies",
      startAdornment: (
        <Avatar variant="square" alt="Advisory Committe on Clinical Trials" />
      ),
    },
    {
      text: "Australian Competition and Challenge",
      category: "Departments and Agencies",
      startAdornment: (
        <Avatar variant="square" alt="Australian Competition and Challenge" />
      ),
    },
  ],
};

WithCategory.parameters = {
  docs: {
    description: {
      story:
        "Uses cs attribute, text width, option select function that writes to the console, and category.",
    },
  },
};

export const WithSearch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSearch.args = {
  placement: "bottom-start",
  cs: {width: "250px", height: "200px"},
  textWidth: "180px",
  hasSearch: true,
  onSearch: undefined,
  onOptionSelect: (option) => {
    console.log(option);
  },
  options: [
    {
      text: "Hon Anthony Albanese MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Anthony Albanese MP" />,
    },
    {
      text: "Hon Dr Anne Aly MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Dr Anne Aly MP" />,
    },
    {
      text: "Hon Karen Andrews MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Karen Andrews MP" />,
    },
    {
      text: "Dr Michelle Ananda-Rajah MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Dr Michelle Ananda-Rajah MP" />,
    },
    {
      text: "Advisory Committe on Clinical Trials",
      category: "Departments and Agencies",
      startAdornment: (
        <Avatar variant="square" alt="Advisory Committe on Clinical Trials" />
      ),
    },
    {
      text: "Australian Competition and Challenge",
      category: "Departments and Agencies",
      startAdornment: (
        <Avatar variant="square" alt="Australian Competition and Challenge" />
      ),
    },
  ],
};

export const WithBottomAdornment = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithBottomAdornment.args = {
  placement: "bottom-start",
  textWidth: "180px",
  hasSearch: true,
  onSearch: undefined,
  onOptionSelect: (option) => {
    console.log(option);
  },
  bottomAdornment: (
    <Button
      style={{display: "block", textAlign: "center"}}
      isFullWidth
      variant="tertiary"
      key="clear-frequency-filter"
    >
      Clear Selection
    </Button>
  ),
  options: [
    {
      text: "Hon Anthony Albanese MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Anthony Albanese MP" />,
    },
    {
      text: "Hon Dr Anne Aly MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Dr Anne Aly MP" />,
    },
    {
      text: "Hon Karen Andrews MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Hon Karen Andrews MP" />,
    },
    {
      text: "Dr Michelle Ananda-Rajah MP",
      category: "Representatives",
      startAdornment: <Avatar variant="square" alt="Dr Michelle Ananda-Rajah MP" />,
    },
    {
      text: "Advisory Committe on Clinical Trials",
      category: "Departments and Agencies",
      startAdornment: (
        <Avatar variant="square" alt="Advisory Committe on Clinical Trials" />
      ),
    },
    {
      text: "Australian Competition and Challenge",
      category: "Departments and Agencies",
      startAdornment: (
        <Avatar variant="square" alt="Australian Competition and Challenge" />
      ),
    },
  ],
};

export const WithBackendFiltering = Template.bind({});
const filteredOptions = [
  {
    text: "Hon Anthony Albanese MP",
    category: "Representatives",
    startAdornment: <Avatar variant="square" alt="Hon Anthony Albanese MP" />,
  },
  {
    text: "Hon Dr Anne Aly MP",
    category: "Representatives",
    startAdornment: <Avatar variant="square" alt="Hon Dr Anne Aly MP" />,
  },
  {
    text: "Hon Karen Andrews MP",
    category: "Representatives",
    startAdornment: <Avatar variant="square" alt="Hon Karen Andrews MP" />,
  },
  {
    text: "Dr Michelle Ananda-Rajah MP",
    category: "Representatives",
    startAdornment: <Avatar variant="square" alt="Dr Michelle Ananda-Rajah MP" />,
  },
  {
    text: "Advisory Committe on Clinical Trials",
    category: "Departments and Agencies",
    startAdornment: (
      <Avatar variant="square" alt="Advisory Committe on Clinical Trials" />
    ),
  },
  {
    text: "Australian Competition and Challenge",
    category: "Departments and Agencies",
    startAdornment: (
      <Avatar variant="square" alt="Australian Competition and Challenge" />
    ),
  },
];

// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithBackendFiltering.args = {
  placement: "bottom-start",
  textWidth: "180px",
  hasSearch: true,
  onSearch: (value) => {
    console.log("searched values", value);
  },
  onOptionSelect: (option) => {
    console.log(option);
  },
  options: filteredOptions,
};
