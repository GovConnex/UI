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
            <Chip children="Chip 2" priority="low" role="error" />
          </span>
          <Chip children="Chip 1" priority="low" />
        </span>
      ),
      subText: "Subtext 1",
      startAdornment: <Avatar alt={"DC Test"} variant="square" size="lg" />,
      endAdornment: <Icon icon={faEllipsis} />,
    },
    {
      children: "Testing child 2",
      subText: "Subtext 2",
      startAdornment: <Avatar alt={"AC Best"} variant="square" size="lg" />,
      endAdornment: <Icon icon={faEllipsis} />,
    },
    {
      children: "Testing child 3",
      subText: "Subtext 3",
      startAdornment: <Avatar alt={"BC Lester"} variant="square" size="lg" />,
      endAdornment: <Icon icon={faEllipsis} />,
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
      endAdornment: <Icon icon={faEllipsis} />,
    },
    {
      children: "Testing child 2",
      superText: "Supertext 2",
      startAdornment: <Avatar alt={"AC Best"} variant="square" size="lg" />,
      endAdornment: <Icon icon={faEllipsis} />,
    },
    {
      children: "Testing child 3",
      superText: "Supertext 3",
      startAdornment: <Avatar alt={"BC Lester"} variant="square" size="lg" />,
      endAdornment: <Icon icon={faEllipsis} />,
    },
  ],
};
