import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GridBox from "./GridBox";
import { withDesign } from "storybook-addon-designs";
import Box from "../Box";

import mdx from "./GridBox.mdx";

export default {
  title: "Components/GridBox",
  component: GridBox,
  decorators: [withDesign],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof GridBox>;

const SampleCells = () => (
  <>
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
  </>
);

const Template: ComponentStory<typeof GridBox> = (args) => (
  <GridBox {...args}>
    <SampleCells />
  </GridBox>
);

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {};

export const AllGaps = Template.bind({});
AllGaps.args = {
  showColumnGap: true,
  showRowGap: true,
};

AllGaps.parameters = {};

export const NoGaps = Template.bind({});
NoGaps.args = {
  showColumnGap: false,
  showRowGap: false,
};

NoGaps.parameters = {};
