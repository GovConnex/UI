import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GridBox from "./GridBox";
import { withDesign } from "storybook-addon-designs";
import Box from "../Box";

export default {
  title: "Components/GridBox",
  component: GridBox,
  decorators: [withDesign],
} as ComponentMeta<typeof GridBox>;

const Template: ComponentStory<typeof GridBox> = (args) => (
  <GridBox {...args}>
    <Box
      cs={{
        gridColumn: "span 2",
        gridRow: "span 1",
        background: "lightblue",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Span 2 columns
    </Box>
    <Box
      cs={{
        gridColumn: "span 4",
        gridRow: "span 1",
        background: "lightsalmon",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Span 4 columns
    </Box>
    <Box
      cs={{
        gridColumn: "span 6",
        gridRow: "span 1",
        background: "lightgreen",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Span 6 columns
    </Box>
    <Box
      cs={{
        gridColumn: "span 1",
        gridRow: "span 2",
        background: "lightcoral",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Span 2 rows
    </Box>
    <Box
      cs={{
        gridColumn: "span 1",
        gridRow: "span 3",
        background: "lightskyblue",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Span 3 rows
    </Box>
  </GridBox>
);

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {};
