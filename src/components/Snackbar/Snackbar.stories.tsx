import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Snackbar, { PopinSnackbar } from "./Snackbar";
import { withDesign } from "storybook-addon-designs";
import Icon from "../SvgIcon/Icon";
import Box from "../Box";
import {faStar} from "@fortawesome/pro-solid-svg-icons/faStar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Snackbar",
  component: Snackbar,
  decorators: [withDesign],
} as ComponentMeta<typeof Snackbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  children: "An action was triggered",
};

export const WithButtons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithButtons.args = {
  children: "An action was triggered",
  actions: [
    {
      text: "View",
      onClick: () => {
        console.log("View");
      },
    },
    {
      text: "Dismiss",
      onClick: () => {
        console.log("Dismiss");
      },
    },
  ],
};

/**
 * Testing one two three
 */
export const WithStartAdornment = Template.bind({});
WithStartAdornment.args = {
  children: "An action was triggered",
  startAdornment: <Icon icon={faStar} />,
};
// Add explanation
WithStartAdornment.parameters = {
  design: {
    type: "figma",
    url: "",
  },
  description: "This is a description of the component",
};

/**
 * Testing one two three
 */
export const LongText = Template.bind({});
LongText.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
  startAdornment: <Icon icon={["fas", "heart"]} />,
  actions: [
    {
      text: "View",
      onClick: () => {
        console.log("View");
      },
    },
  ],
};

const PopinWrapperTemplate: ComponentStory<typeof PopinSnackbar> = (args) => {
  const [show, setShow] = useState(args.show);

  return (
    <>
      <Box
        cs={{
          marginTop: "spacing.xl",
          marginBottom: "spacing.xl",
        }}
      >
        <button onClick={() => setShow(!show)}>
          Toggle show (currently; {show ? "true" : "false"})
        </button>
      </Box>
      <PopinSnackbar
        {...args}
        show={show}
        setShow={setShow}
        actions={
          // if actions set, override default actions with setShow(false)
          args.actions
            ? args.actions.map((action) => ({
                ...action,
                onClick: () => {
                  action.onClick();
                  setShow(false);
                },
              }))
            : undefined
        }
      >
        {args.children}
      </PopinSnackbar>
    </>
  );
};

export const PopinTop = PopinWrapperTemplate.bind({});
PopinTop.args = {
  show: true,
  position: "top",
  offset: "spacing.md",
  children: "Wasssssssup, something really cool happened",
};

export const PopinBottom = PopinWrapperTemplate.bind({});
PopinBottom.args = {
  show: true,
  position: "bottom",
  offset: "spacing.md",
  children: "Wasssssssup, something really cool happened",
  actions: [
    {
      text: "Close",
      onClick: () => {
        console.log("Close");
      },
    },
  ],
};
