import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import StackedList from "./StackedList";
import {withDesign} from "storybook-addon-designs";
import ComponentSummary from "./ComponentSummary.mdx";
import ReactDOMServer from "react-dom/server";
import Avatar from "../Avatar";
import Icon from "../Icon";
import Chip from "../Chip";
import Button from "../Button";
import {faEllipsis, faPlus} from "@fortawesome/pro-regular-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/StackedList",
  component: StackedList,
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: ReactDOMServer.renderToString(<ComponentSummary />),
      },
    },
  },
} as ComponentMeta<typeof StackedList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StackedList> = (args) => <StackedList {...args} />;

const role = "error";

export const Basic = Template.bind({});
Basic.args = {
  title: "Details",
  endAdornment: (
    <Button iconOnly variant="secondary">
      <Icon icon={faPlus} />
    </Button>
  ),
  data: [
    {
      children: (
        <span>
          <span style={{paddingRight: "5px"}}>Testing child 1</span>
          <span style={{paddingRight: "5px"}}>
            <Chip children="Chip 2" priority="low" role={role} />
          </span>
          <Chip children="Chip 1" priority="low" />
        </span>
      ),
      subText: "Subtext 1",
      startAdornment: <Avatar alt={"DC Test"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: "Testing child 2",
      subText: "Subtext 2",
      startAdornment: <Avatar alt={"AC Best"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: "Testing child 3",
      subText: "Subtext 3",
      startAdornment: <Avatar alt={"BC Lester"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: (
        <span>
          <span style={{paddingRight: "5px"}}>Testing child 4</span>
          <span style={{paddingRight: "5px"}}>
            <Chip children="Chip 2" priority="low" role={role} />
          </span>
          <Chip children="Chip 1" priority="low" />
        </span>
      ),
      subText: "Subtext 4",
      startAdornment: <Avatar alt={"DC Rest"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: (
        <span>
          <span style={{paddingRight: "5px"}}>Testing child 5</span>
          <span style={{paddingRight: "5px"}}>
            <Chip children="Chip 2" priority="low" role={role} />
          </span>
          <Chip children="Chip 1" priority="low" />
        </span>
      ),
      subText: "Subtext 5",
      startAdornment: <Avatar alt={"DC Sest"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: (
        <span>
          <span style={{paddingRight: "5px"}}>Testing child 6</span>
          <span style={{paddingRight: "5px"}}>
            <Chip children="Chip 2" priority="low" role={role} />
          </span>
          <Chip children="Chip 1" priority="low" />
        </span>
      ),
      subText: "Subtext 6",
      startAdornment: <Avatar alt={"DC West"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: (
        <span>
          <span style={{paddingRight: "5px"}}>Testing child 7</span>
          <span style={{paddingRight: "5px"}}>
            <Chip children="Chip 2" priority="low" role={role} />
          </span>
          <Chip children="Chip 1" priority="low" />
        </span>
      ),
      subText: "Subtext 7",
      startAdornment: <Avatar alt={"DC Vest"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
  ],
};

export const Other = Template.bind({});
Other.args = {
  title: "Other Details",
  data: [
    {
      children: "Testing child 1",
      superText: "Supertext 1",
      startAdornment: <Avatar alt={"DC Test"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: "Testing child 2",
      superText: "Supertext 2",
      startAdornment: <Avatar alt={"AC Best"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
    {
      children: "Testing child 3",
      superText: "Supertext 3",
      startAdornment: <Avatar alt={"BC Lester"} variant="square" size="lg" />,
      endAdornment: (
        <Button iconOnly variant="secondary">
          <Icon icon={faEllipsis} />
        </Button>
      ),
    },
  ],
};
