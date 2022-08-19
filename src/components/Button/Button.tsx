import React from "react";
import { Spacing } from "../../theming/global-theme.interface";
import { StyledButton, StyledAdornment } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rect" | "circle";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconOnly?: boolean;
  shape?: ButtonShape;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({variant, shape, size, ...props}, ref) => {
  const sizeMap: Record<ButtonSize, keyof Spacing> = {
    "lg": "sm",
    "md": "xs",
    "sm": "xxs"
  };

  const iconOnlySizeMap: Record<ButtonSize, keyof Spacing> = {
    "lg": "xl",
    "md": "lg",
    "sm": "md"
  };

  return (
    <StyledButton
      ref={ref}
      disabled={!!props.disabled}
      variant={variant || "primary"}
      size={sizeMap[size || "md"]}
      iconOnlySize={iconOnlySizeMap[size || "md"]}
      shape={shape || 'rect'}
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
