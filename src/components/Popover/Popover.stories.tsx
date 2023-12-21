import React, {useRef, useState} from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Popover from "./Popover";
import {withDesign} from "storybook-addon-designs";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils/Popover",
  component: Popover,
  decorators: [withDesign],
} as ComponentMeta<typeof Popover>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = (args) => {
  const exampleRef = useRef<HTMLButtonElement>(null);
  const [showPopper, setShowPopper] = useState(false);

  return (
    <div>
      <Button ref={exampleRef} onClick={() => setShowPopper(!showPopper)}>
        Toggle popper
      </Button>
      {showPopper && (
        <Popover {...args} anchorEl={exampleRef}>
          Testing this looooooooooooooooooooooooooooooong popper!
        </Popover>
      )}
    </div>
  );
};

const TemplateBox: ComponentStory<typeof Popover> = (args) => {
  const exampleRef = useRef<HTMLButtonElement>(null);
  const [showPopper, setShowPopper] = useState(false);

  return (
    <div style={{height: "100%", width: "100%"}}>
      <div style={{bottom: "40px", position: "absolute"}}>
        <Button ref={exampleRef} onClick={() => setShowPopper(!showPopper)}>
          Toggle popper
        </Button>
        {showPopper && (
          <Popover {...args} anchorEl={exampleRef}>
            Testing this looooooooooooooooooooooooooooooong popper!
          </Popover>
        )}
      </div>
    </div>
  );
};

export const PlacementDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PlacementDefault.args = {};

export const PlacementRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PlacementRight.args = {
  placement: "right",
};

export const IsBlockPlacementBottom = TemplateBox.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IsBlockPlacementBottom.args = {
  isBlock: true,
  placement: "bottom-start",
};
