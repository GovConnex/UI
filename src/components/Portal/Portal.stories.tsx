import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Portal from "./Portal";
import {withDesign} from "storybook-addon-designs";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utils/Portal",
  component: Portal,
  decorators: [withDesign],
} as ComponentMeta<typeof Portal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Portal> = ({disablePortal}) => {
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const divStyle = {
    border: "1px solid gray",
    borderRadius: "2px",
    margin: "10px 0",
    padding: "5px",
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {show ? "Unmount children" : "Mount children"}
      </Button>

      <div style={divStyle}>
        It looks like I will render here.
        {show ? (
          <Portal container={container.current} disablePortal={disablePortal}>
            <span>{disablePortal ? " And I do!" : "But I actually render here!"}</span>
          </Portal>
        ) : null}
      </div>
      <div style={divStyle} ref={container} />
    </>
  );
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
