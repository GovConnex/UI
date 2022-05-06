import React from "react";
import { StyledButton, StyledAdornment } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "nofill";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
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
      <StyledAdornment position="start">
        {props.startAdornment}
      </StyledAdornment>

      {props.label}

      <StyledAdornment position="end">
        {props.endAdornment}
      </StyledAdornment>
    </StyledButton>
  );
};

export default Button;
