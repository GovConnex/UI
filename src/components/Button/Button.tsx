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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <StyledButton
      ref={ref}
      disabled={!!props.disabled}
      variant={props.variant || "primary"}
      {...props}
    >
      {props.startAdornment ?
        <StyledAdornment>
          {props.startAdornment}
        </StyledAdornment>
      : null}

      {props.children}

      {props.endAdornment ?
        <StyledAdornment>
          {props.endAdornment}
        </StyledAdornment>
      : null}
    </StyledButton>
  );
});

export default Button;
