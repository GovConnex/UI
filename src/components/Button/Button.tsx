import React from "react";
import { StyledButton, StyledAdornment } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "text";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      disabled={!!props.disabled}
      variant={props.variant || "primary"}
      {...props}
    >
      {props.startAdornment ?
        <StyledAdornment position="start">
          {props.startAdornment}
        </StyledAdornment>
      : null}

      {props.children}

      {props.endAdornment ?
        <StyledAdornment position="end">
          {props.endAdornment}
        </StyledAdornment>
      : null}
    </StyledButton>
  );
};

export default Button;
