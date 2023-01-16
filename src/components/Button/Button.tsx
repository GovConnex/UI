import React, { ComponentType } from "react";
import { Spacing, TypographySize } from "../../theming/global-theme.interface";
import Typography from "../Typography";
import {
  StyledButton,
  StyledAdornment,
  StyledTypography,
  StyledSpinner,
} from "./Button.styles";
import styled, {keyframes} from 'styled-components';


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
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, shape, size, iconOnly, title, isLoading, ...props }, ref) => {
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
        isLoading={isLoading}
        {...props}
      >
        {props.startAdornment && !isLoading ? (
          <StyledAdornment>{props.startAdornment}</StyledAdornment>
        ) : null}

        {isLoading ? <StyledSpinner variant={variant ?? "primary"} /> : null}

        {iconOnly && !isLoading ? (
          props.children
        ) : !isLoading ? (
          <Typography
            as="span"
            variant="label"
            size={typographyMap[size || "md"]}
          >
            {props.children || title}
          </Typography>
        ) : null}

        {props.endAdornment && !isLoading ? (
          <StyledAdornment>{props.endAdornment}</StyledAdornment>
        ) : null}
      </StyledButton>
    );
  }
);

export default Button;
