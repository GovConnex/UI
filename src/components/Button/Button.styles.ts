import styled, {keyframes} from "styled-components";
import {ButtonVariant, ButtonShape, ButtonSize, ButtonSubtype} from "./Button";
import {Spacing} from "../../theming/global-theme.interface";
import Typography from "../Typography";

const StyledAdornment = styled.span`
  display: flex;
  align-items: bottom;
  justify-content: center;
  margin-bottom: 1px;
`;

const StyledButton = styled.button<{
  variant: ButtonVariant;
  subtype?: ButtonSubtype;
  iconOnly?: boolean;
  iconOnlySize: keyof Spacing;
  shape: ButtonShape;
  size: ButtonSize;
  isLoading: boolean;
  noPadding?: boolean;
}>`
position: relative;
  align-items: center;
  cursor: pointer;
  padding: ${(props) =>
    props.isLoading
      ? `${props.noPadding ? "0" : props.theme.spacing.xs}`
      : `${props.noPadding ? "0" : props.theme.spacing.xxs} ${
          props.noPadding ? "0" : props.theme.spacing.xs
        }`};
  border-radius: ${(props) =>
    props.shape === "rect" || !props.iconOnly ? props.theme.borderRadius.xs : "100%"};
  border: 0 solid transparent;
  display: flex;
  gap: 12px;
  text-decoration: none !important;
  height: auto;

  ${({iconOnly, theme, iconOnlySize}) =>
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
    outline: ${({theme}) =>
      `${theme.borderWidth.lg} solid ${theme.core.border.borderFocus};`}
    outline-offset: ${({theme}) => `${theme.borderWidth.lg};`}
  }

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "default" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.state.brandBase};

    &:hover {
      background-color: ${theme.extended.state.brandHover};
    }

    &:focus {
      background-color: ${theme.extended.state.brandHover};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.state.brandBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "success" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.support.successBase};

    &:hover {
      background-color: ${theme.extended.support.successDark};
    }

    &:focus {
      background-color: ${theme.extended.support.successDark};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.support.successBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      outline: ${theme.borderWidth.lg} solid ${theme.extended.support.successBase};
      outline-offset: ${theme.borderWidth.lg};
    }
  `}
  
  ${({theme, variant, isLoading}) =>
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

  ${({theme, subtype, variant}) =>
    variant === "secondary" &&
    subtype === "default" &&
    `
    color: ${theme.core.content.contentPrimary};
    background-color: ${theme.extended.state.primaryBase};
    border: ${theme.borderWidth.md} solid ${theme.core.border.borderLight};

    &:hover {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:focus {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:disabled {
      border: 1px solid ${theme.core.border.borderMedium}
      background-color: ${theme.extended.state.disabled};
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, variant}) =>
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

  ${({theme, subtype, variant}) =>
    (variant === "text" || variant === "tertiary") &&
    subtype === "default" &&
    `
    background-color: transparent;
    color: ${theme.core.content.contentPrimary};

    &:disabled {
      color: ${theme.core.content.contentTertiary};
    }
  `}
`;

const StyledTypography = styled(Typography)`
  cursor: pointer;
`;
const spinner = keyframes`
  to {transform: rotate(360deg);}
`;

const StyledSpinner = styled.div<{variant: ButtonVariant; subtype: ButtonSubtype}>`
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
    border: 2px solid transparent;
    animation: ${spinner} .6s linear infinite;

    ${({theme, variant}) =>
      variant === "primary" &&
      `
      border-top-color: ${theme.core.content.contentInversePrimary}
    `}

    ${({theme, variant}) =>
      (variant === "secondary" || variant === "tertiary") &&
      `
      border-top-color: ${theme.core.content.contentPrimary}
    `}

    ${({theme, variant}) =>
      variant === "danger" &&
      `
      border-top-color: ${theme.extended.state.secondaryBase}
    `}
`;

const StyledSpinnerContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

export {
  StyledButton,
  StyledSpinner,
  StyledSpinnerContainer,
  StyledAdornment,
  StyledTypography,
};
