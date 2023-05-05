import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PopIn from "./PopIn";
import { withDesign } from "storybook-addon-designs";
import Box from "../Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PopIn",
  component: PopIn,
  decorators: [withDesign],
} as ComponentMeta<typeof PopIn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PopIn> = (args) => {
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
      <PopIn {...args} show={show} setShow={setShow}>
        {args.children}
      </PopIn>
    </>
  );
};

export const Top = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Top.args = {
  show: true,
  position: "top",
  offset: "spacing.md",
  children: (
    <Box
      cs={{
        backgroundColor: "primary.brand.50",
        padding: "spacing.xs",
      }}
    >
      Example
    </Box>
  ),
};

export const Bottom = Template.bind({});
Bottom.args = {
  show: true,
  position: "bottom",
  offset: "spacing.md",
  children: (
    <Box
      cs={{
        backgroundColor: "primary.brand.50",
        padding: "spacing.xs",
      }}
    >
      Example
    </Box>
  ),
};
