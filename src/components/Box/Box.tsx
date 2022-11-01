import React from "react";
import { customStyles } from "../../core/styleFunctions";
import StyledBox from "./Box.styles";


// we may want to introduce a "as" prop instead of baking in the div element
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

const Box = React.forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => (
  <StyledBox ref={ref} {...props}>
    {props.children}
  </StyledBox>
));

export default Box;
