import React, { ComponentType } from "react";
import { Spacing, TypographySize } from "../../theming/global-theme.interface";
import {
  StyledButton,
  StyledAdornment,
  StyledTypography,
} from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rect" | "circle";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconOnly?: boolean;
  shape?: ButtonShape;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  as?: string | ComponentType<any>;
  title?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, shape, size, iconOnly, title,  ...props }, ref) => {
    const typographyMap: Record<ButtonSize, keyof TypographySize> = {
      lg: "md",
      md: "sm",
      sm: "sm",
    };

    const iconOnlySizeMap: Record<ButtonSize, keyof Spacing> = {
      lg: "xl",
      md: "lg",
      sm: "md",
    };

    return (
      <StyledButton
        ref={ref}
        disabled={!!props.disabled}
        variant={variant || "primary"}
        size={size || "md"}
        iconOnly={iconOnly}
        iconOnlySize={iconOnlySizeMap[size || "md"]}
        shape={shape || "rect"}
        {...props}
      >
        {props.startAdornment ? (
          <StyledAdornment>{props.startAdornment}</StyledAdornment>
        ) : null}

        {iconOnly ? (
          props.children
        ) : (
          <StyledTypography variant="label" size={typographyMap[size || "md"]}>
            {props.children || title}
          </StyledTypography>
        )}

        {props.endAdornment ? (
          <StyledAdornment>{props.endAdornment}</StyledAdornment>
        ) : null}
      </StyledButton>
    );
  }
);

export default Button;
