import React from "react";
import { customStyles } from "../../core/styleFunctions";
import StyledBox from "./Box.styles";
import type * as CSS from "csstype";
import GlobalTheme, { Spacing } from "../../theming/global-theme.interface";


export interface BoxProps extends React.HTMLAttributes<HTMLElement>{
  /**
   * @ignore content of the Box
   */
  children?: React.ReactNode;

  /**
   * add custom styles through `cs`
   */
  cs?: customStyles;
  
}

// CHANGE: add a new interface
export interface tes {
  pt: number | keyof Spacing;
  pb: number | keyof Spacing;
}

export interface LP extends tes, BoxProps {}
 
/**
 *
 * `Box` is a extendable div component 
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

const Box = React.forwardRef<HTMLDivElement,LP>(function Box(
  props: LP,
  ref
) {

  // WARN does not pass onClick, etc. to the div element
  return (
    <StyledBox ref={ref} cs={{...props}}>
      {props.children}
    </StyledBox>
  );
});

export default Box;
