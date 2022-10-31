import React from "react";
import { cs } from "../../core/styleFunctions";
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
  cs?: cs;
}

/**
 *
 * `Box` is a extendable div component 
 *
 * Component Demo: [Box](https://ui.govconnex.com/?path=/story/components-Box--example)
 *
 */

const Box = React.forwardRef<any, BoxProps>(({ ...props }, ref) => (
  <StyledBox ref={ref} {...props}>
    {props.children}
  </StyledBox>
));

export default Box;
