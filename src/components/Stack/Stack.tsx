import React from "react";
import StyledStack from "./Stack.styles";
import { Spacing } from "../../theming/global-theme.interface";

export type directionValues =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";
export type directionProps =
  | { sm?: directionValues; md?: directionValues; lg?: directionValues }
  | directionValues;

export type alignItemValues =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";
export type alignItemProps =
  | { sm?: alignItemValues; md?: alignItemValues; lg?: alignItemValues }
  | alignItemValues;

export type justifyConentValues =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";
export type justifyContentProps =
  | {
      sm?: justifyConentValues;
      md?: justifyConentValues;
      lg?: justifyConentValues;
    }
  | justifyConentValues;

export type gapProps =
  | { sm?: keyof Spacing; md?: keyof Spacing; lg?: keyof Spacing }
  | keyof Spacing;

export interface StackProps {
  /**
   * content of the Stack
   */
  children?: React.ReactNode;
  /**
   * flex-direction of the child content
   * @default column
   */
  direction?: directionProps;
  /**
   * defines gap between child components 
   */
  gap?: gapProps;

  alignItems?: alignItemProps;

  justifyContent?: justifyContentProps;
}

/**
 *
 * `Stack` manages layout of its children along vertical or horizontal axis
 *
 * Demo: 
 * 
 *  - [Stack](https://ui.govconnex.com/?path=/story/components-Stack--example)
 * 
 * Docs: 
 * 
 *  - [Stack Docs](https://ui.govconnex.com/?path=/docs/components-Stack--example/)
 *
 */
const Stack = (props: StackProps) => {
  return <StyledStack {...props} />;
};

export default Stack;
