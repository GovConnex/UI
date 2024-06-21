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

  /**
   * Allow for adding cypress attributes.
   */
  "data-cy"?: string;
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
  lp?: customStyles;
  lg?: customStyles;

  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  zIndex?: number;
  transition?: string;
  filter?: string;
}

/**
 * Box allows for adding custom styles through the `cs` prop, and also through direct props.
 * This function separates the style props from the other regular html props like onClick, aria-label, etc.
 */
export function separateProps(props: ExtendedBoxProps): {
  filteredProps: Record<string, unknown>;
  styleProps: Record<string, unknown>;
} {
  return Object.keys(props).reduce(
    (
      acc: {filteredProps: Record<string, unknown>; styleProps: Record<string, unknown>},
      key: string
    ) => {
      if (
        key.startsWith("on") ||
        key.startsWith("aria-") ||
        key.startsWith("data-") ||
        [
          "role",
          "tabIndex",
          "as",
          "href",
          "to",
          "ref",
          "className",
          "target",
          "rel",
        ].includes(key)
      ) {
        acc.filteredProps[key] = (props as any)[key];
      } else {
        // Assuming other props are for styling
        acc.styleProps[key] = (props as any)[key];
      }
      return acc;
    },
    {filteredProps: {}, styleProps: {}}
  );
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
  props: ExtendedBoxProps
) {
  const {filteredProps, styleProps} = separateProps(props);

  return (
    <StyledBox cs={{...styleProps}} {...filteredProps}>
      {props.children}
    </StyledBox>
  );
});

export default Box;
