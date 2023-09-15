import React from "react";
import {customStyles} from "../../core/styleFunctions";
import StyledBox from "./Box.styles";
import {Spacing} from "../../theming/global-theme.interface";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @ignore content of the Box
   */
  children?: React.ReactNode;

  /**
   * add custom styles through `cs`
   */
  cs?: customStyles;
}

export interface ExtendedBoxProps extends BoxProps {
  pt?: number | keyof Spacing;
  pb?: number | keyof Spacing;

  // padding
  p?: number | keyof Spacing;

  pl?: number | keyof Spacing;
  pr?: number | keyof Spacing;
  px?: number | keyof Spacing;
  py?: number | keyof Spacing;

  paddingX?: number | keyof Spacing;
  paddingY?: number | keyof Spacing;

  // margin
  m?: number | keyof Spacing;
  mt?: number | keyof Spacing;
  mb?: number | keyof Spacing;
  ml?: number | keyof Spacing;
  mr?: number | keyof Spacing;
  mx?: number | keyof Spacing;
  my?: number | keyof Spacing;
  marginX?: number | keyof Spacing;
  marginY?: number | keyof Spacing;

  // width
  w?: number | keyof Spacing;
  width?: number | keyof Spacing | string;

  // height
  h?: number | keyof Spacing;
  height?: number | keyof Spacing | string;

  // background
  bg?: string;
  backgroundColor?: string;

  // breakpoints
  sm?: customStyles;
  md?: customStyles;
  lg?: customStyles;

  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  zIndex?: number;
  transition?: string;
}

/**
 *
 * `Box` is a extendable div component.
 *  [WARNING] experimental and does not support onClick,
 *  and other props that are passed to the div element.
 *
 * Demo:
 *
 *  - [Box](https://ui.govconnex.com/?path=/story/components-box--example)
 *
 * Docs:
 *
 *  - [Box Docs](https://ui.govconnex.com/?path=/docs/components-box--example/)
 *
 */
const Box = React.forwardRef<HTMLDivElement, ExtendedBoxProps>(function Box(
  props: ExtendedBoxProps,
  ref
) {
  // WARN does not pass onClick, etc to the div element
  return (
    <StyledBox ref={ref} cs={{...props}}>
      {props.children}
    </StyledBox>
  );
});

export default Box;
