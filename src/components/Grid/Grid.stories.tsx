import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StyledGrid as Grid, StyledGridCell as GridCell } from "./Grid.styles";
import { withDesign } from "storybook-addon-designs";
import styled, { DefaultTheme } from "styled-components";

// NOTE: this component is deprecated and will be removed in a future release.
// Use the GridBox component instead.

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DEPRECATED-Grid",
  component: Grid,
  decorators: [withDesign],
  parameters: {
    notes:
      "⚠️ This component is deprecated and will be removed in a future release.",
  },
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const spanToBG = (span: number, theme: DefaultTheme) =>
  ({
    1: theme.primary.brand["100"],
    2: theme.primary.brand["200"],
    3: theme.primary.brand["300"],
    4: theme.primary.brand["400"],
  })[span];

const spanToColor = (span: number, theme: DefaultTheme) =>
  ({
    1: theme.primary.brand["800"],
    2: theme.primary.brand["700"],
    3: theme.primary.brand["100"],
    4: theme.primary.brand["50"],
  })[span];

const Cell = styled(GridCell)`
  background: ${(props) => spanToBG(props.columnSpan || 1, props.theme)};
  color: ${(props) => spanToColor(props.columnSpan || 1, props.theme)};
  padding: ${(props) => props.theme.spacing.md};
`;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  children: (
    <>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>

      <Cell columnSpan={2}>Span 2</Cell>
      <Cell columnSpan={2}>Span 2</Cell>
      <Cell>Span 1</Cell>
      <Cell columnSpan={3}>Span 3</Cell>
      <Cell>Span 1</Cell>

      <Cell columnSpan={4} rowSpan={2}>
        Span 4 x 2
      </Cell>
      <Cell columnSpan={4}>Span 4</Cell>
      <Cell columnSpan={4}>Span 4</Cell>

      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>

      <Cell columnSpan={3}>Span 3</Cell>
      <Cell>Span 1</Cell>
      <Cell>Span 1</Cell>
    </>
  ),
};

Example.parameters = {
  //  design: {
  //    type: "figma",
  //    url: ""
  //  }
};
