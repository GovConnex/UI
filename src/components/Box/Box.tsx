import React from "react";
import StyledBox from "./Box.styles";


export type widthValues = number | string
export type widthProps = {sm?:widthValues; md?: widthValues; lg?:widthValues} | widthValues;

export type customStyles = {width?:widthProps}


export interface BoxProps {
  /**
  * @ignore content of the Box
  */
  children?: React.ReactNode;

  cs?: any;
};

/**
 * 
 * `Box` Describe what it does
 *
 * Component Demo: [Box](https://ui.govconnex.com/?path=/story/components-Box--example)
 * 
 */

const Box = React.forwardRef<any, BoxProps>(({ ...props }, ref) => (
  <StyledBox
  onClick={()=>{}}
    ref={ref}
    padding="20px"
    backgroundColor="core.primary"
    cs={{ paddingBottom: "spacing.sm",
    //  backgroundColor:"blue", 
     sm: { padding: "spacing.md", color:'green' },
     md: { padding: "spacing.md", color:'black' }
     }}
  >
    {props.children}
  </StyledBox>
));

export default Box;
