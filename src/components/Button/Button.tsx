import React, {ComponentType} from "react";
import {Spacing, TypographySize} from "../../theming/global-theme.interface";
import Typography from "../Typography";
import {StyledButton, StyledAdornment, StyledSpinner} from "./Button.styles";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "danger"
  | "secondaryDanger";
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
  as?: string | ComponentType<any>;
  title?: string;
  isLoading?: boolean;
  noPadding?: boolean;
  style?: React.CSSProperties;
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
 * `Button` extends the native `button` by adding styles and functionality.
 *
 * Features include:
 *
 * - `variant` prop to change the color of the button
 * - `size` prop to change the size of the button
 * - `shape` prop to change the shape of the button
 * - `iconOnly` prop to render a button with only an icon
 * - `startAdornment` prop to add an element to the start of the button
 * - `endAdornment` prop to add an element to the end of the button
 * - `isLoading` prop to render a loading spinner
 * - `noPadding` prop to remove padding from the button
 *
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
      style,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref }
        disabled={disabled || isLoading}
        variant={variant || "primary"}
        size={size || "md"}
        iconOnly={iconOnly}
        iconOnlySize={iconOnlySizeMap[size || "md"]}
        shape={shape || "rect"}
        isLoading={isLoading}
        noPadding={noPadding}
        style={style}
        {...rest}
      >
        {startAdornment && !isLoading ? (
          <StyledAdornment>{startAdornment}</StyledAdornment>
        ) : null}

        {isLoading ? <StyledSpinner variant={variant ?? "primary"} /> : null}

        {iconOnly && !isLoading ? (
          children
        ) : !isLoading ? (
          <Typography as="span" variant="label" size={typographyMap[size || "md"]}>
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
