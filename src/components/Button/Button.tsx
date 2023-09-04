import React, {ComponentType} from "react";
import {Spacing} from "../../theming/global-theme.interface";
import Typography from "../Typography";
import {
  StyledButton,
  StyledAdornment,
  StyledSpinner,
  StyledSpinnerContainer,
} from "./Button.styles";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "danger"
  | "secondaryDanger";
export type ButtonSubtype = "default" | "info" | "success" | "error" | "warning";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rect" | "circle";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  subtype?: ButtonSubtype;
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
      subtype,
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
        ref={ref}
        disabled={disabled || isLoading}
        variant={variant || "primary"}
        subtype={subtype || "default"}
        size={size || "md"}
        iconOnly={iconOnly}
        iconOnlySize={iconOnlySizeMap[size || "md"]}
        shape={shape || "rect"}
        isLoading={isLoading}
        noPadding={noPadding}
        style={style}
        {...rest}
      >
        {startAdornment && !isLoading && !iconOnly ? (
          <StyledAdornment>{startAdornment}</StyledAdornment>
        ) : null}

        {isLoading ? (
          <StyledSpinnerContainer>
            <StyledSpinner
              variant={variant ?? "primary"}
              subtype={subtype ?? "default"}
            />{" "}
          </StyledSpinnerContainer>
        ) : null}

        {iconOnly && !isLoading ? (
          <StyledAdornment>{startAdornment || endAdornment || children}</StyledAdornment>
        ) : !isLoading ? (
          <Typography as="span" variant="label" size="md">
            {children || title}
          </Typography>
        ) : null}

        {endAdornment && !isLoading && !iconOnly ? (
          <StyledAdornment>{endAdornment}</StyledAdornment>
        ) : null}
      </StyledButton>
    );
  }
);

export default Button;
