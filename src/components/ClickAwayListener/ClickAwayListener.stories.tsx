import React, { useState, useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ClickAwayListener from "./ClickAwayListener";
import { withDesign } from "storybook-addon-designs";
import Button from "../Button";
import Popover from "../Popover";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils/ClickAwayListener",
  component: ClickAwayListener,
  decorators: [withDesign],
} as ComponentMeta<typeof ClickAwayListener>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClickAwayListener> = (_) => {
  const [open, setOpen] = useState(false);
  const exampleRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span>
        <Button ref={exampleRef} onClick={handleClick} variant="text">Toggle popper</Button>
        {open && <Popover placement="bottom-start" anchorEl={exampleRef}>I will stay open until you click away!</Popover>}
      </span>
    </ClickAwayListener>
  );
}

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
