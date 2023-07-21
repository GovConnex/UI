import styled, { keyframes } from "styled-components";
import { ButtonVariant, ButtonShape, ButtonSize } from "./Button";
import { Spacing } from "../../theming/global-theme.interface";
import Typography from "../Typography";

const StyledAdornment = styled.span`
  display: flex;
  align-items: bottom;
  justify-content: center;
  margin-bottom: 1px;
`;

const heightMap = {
  sm: "24px",
  md: "32px",
  lg: "40px",
};

const StyledButton = styled.button<{
  variant: ButtonVariant;
  iconOnly?: boolean;
  iconOnlySize: keyof Spacing;
  shape: ButtonShape;
  size: ButtonSize;
  isLoading: Boolean;
  noPadding?: boolean;
}>`
position: relative;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => `${props.noPadding ? "0" : props.theme.spacing.xs} 
    ${props.noPadding ? "0" : props.theme.spacing[props.size]}`};
  border-radius: ${(props) =>
    props.shape === "rect" || !props.iconOnly
      ? props.theme.borderRadius.xs
      : "100%"};
  border: 0 solid transparent;
  display: flex;
  gap: 12px;
  text-decoration: none !important;
  height: auto;

  ${({ iconOnly, theme, iconOnlySize }) =>
    iconOnly
      ? `
      width: ${theme.spacing[iconOnlySize]};
      height: ${theme.spacing[iconOnlySize]};
      align-items: center;
      justify-content: center;
      padding: 0;
      `
      : ""}

  &:active {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
  }

  &:focus:not(:disabled) {
    outline: ${({ theme }) =>
      `${theme.borderWidth.lg} solid ${theme.core.border.borderFocus};`}
    outline-offset: ${({ theme }) => `${theme.borderWidth.lg};`}
  }

  ${({ theme, variant, isLoading }) =>
    variant === "primary" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.state.primaryBase};

    &:hover {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:focus {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.primary.brand[500] : theme.extended.state.disabled
      };
    }
  `}
  ${({ theme, variant, isLoading }) =>
    variant === "danger" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.foundation.error};

    &:hover {
      background-color: ${theme.secondary.red["800"]};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.foundation.error : theme.extended.state.disabled
      };
    }

    &:focus:not(:disabled) {
      background-color: ${theme.secondary.red["800"]};
      outline: ${theme.borderWidth.lg} solid ${theme.secondary.red["800"]};
    }
  `}

  ${({ theme, variant }) =>
    variant === "secondary" &&
    `
    color: ${theme.core.content.contentSecondary};
    background-color: ${theme.extended.state.secondaryBase};
    border: ${theme.borderWidth.md} solid ${theme.core.border.borderLight};

    &:hover {
      background-color: ${theme.primary.neutral["200"]};
    }

    &:focus {
      background-color: ${theme.extended.state.secondaryBase};
    }

    &:disabled {
      background-color: ${theme.extended.state.secondaryHover};
      border-color: ${theme.extended.state.disabled};
      color: ${theme.extended.state.disabled};
    }
  `}

  ${({ theme, variant }) =>
    variant === "secondaryDanger" &&
    `
    color: ${theme.foundation.error};
    background-color: ${theme.extended.state.secondaryBase};
    border: ${theme.borderWidth.md} solid ${theme.foundation.error};

    &:hover {
      background-color: ${theme.secondary.red["50"]};
    }

    &:disabled {
      background-color: ${theme.extended.state.secondaryHover};
      border-color: ${theme.extended.state.disabled};
      color: ${theme.extended.state.disabled};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.secondary.red["50"]};
      border-color: transparent;
      outline: ${theme.borderWidth.lg} solid ${theme.foundation.error};
    }
  `}

  ${({ theme, variant }) =>
    (variant === "text" || variant === "tertiary") &&
    `
    background-color: transparent;
    color: ${theme.core.content.contentSecondary};

    &:disabled {
      color: ${theme.extended.state.disabled};
    }
  `}
`;

const StyledTypography = styled(Typography)`
  cursor: pointer;
`;
const spinner = keyframes`
  to {transform: rotate(360deg);}
`;

const StyledSpinner = styled.div<{ variant: ButtonVariant }>`
 &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid ${({ theme, variant }) =>
      variant === "primary"
        ? theme.extended.state.primaryBase
        : variant === "danger"
        ? theme.foundation.error
        : theme.extended.state.secondaryBase};
    border-top-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.extended.state.secondaryBase
        : variant === "danger"
        ? theme.extended.state.secondaryBase
        : theme.extended.state.primaryBase};
    animation: ${spinner} .6s linear infinite;
`;

export { StyledButton, StyledSpinner, StyledAdornment, StyledTypography };
