import React, { ComponentType } from "react";
import { Spacing, TypographySize } from "../../theming/global-theme.interface";
import Typography from "../Typography";
import { StyledButton, StyledAdornment, StyledSpinner } from "./Button.styles";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "danger";
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
  noPadding?: boolean;
}

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
/**
 * `Button` extends the native `button`
 * @todo fix `as` prop to allow for `Link` component without type error
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      shape,
      size,
      title,
      children,
      endAdornment,
      startAdornment,
      iconOnly = false,
      isLoading = false,
      disabled = false,
      noPadding = false,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        disabled={disabled || isLoading}
        variant={variant || "primary"}
        size={size || "md"}
        iconOnly={iconOnly}
        iconOnlySize={iconOnlySizeMap[size || "md"]}
        shape={shape || "rect"}
        isLoading={isLoading}
        noPadding={noPadding}
        {...rest}
      >
        {startAdornment && !isLoading ? (
          <StyledAdornment>{startAdornment}</StyledAdornment>
        ) : null}

        {isLoading ? <StyledSpinner variant={variant ?? "primary"} /> : null}

        {iconOnly && !isLoading ? (
          children
        ) : !isLoading ? (
          <Typography
            as="span"
            variant="label"
            size={typographyMap[size || "md"]}
          >
            {children || title}
          </Typography>
        ) : null}

        {endAdornment && !isLoading ? (
          <StyledAdornment>{endAdornment}</StyledAdornment>
        ) : null}
      </StyledButton>
    );
  }
);

export default Button;
