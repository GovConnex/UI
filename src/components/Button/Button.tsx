import React from "react";
import StyledButton from "./Button.styles";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.label}</StyledButton>;
};

export default Button;