import React from "react";
import StyledIcon from "./Icon.styles";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  component?: React.ReactNode;
  rotate?: number;
  spin?: number;
}

const Icon = (props: IconProps) => {
  return <StyledIcon rotate={props.rotate} spin={props.spin} {...props}>{props.component}</StyledIcon>;
};

export default Icon;
