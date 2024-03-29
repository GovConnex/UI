import styled, {keyframes} from "styled-components";
import {ButtonVariant, ButtonShape, ButtonSize, ButtonSubtype} from "./Button";
import {Spacing} from "../../theming/global-theme.interface";
import Typography from "../Typography";
import {getValueFromPath} from "../../core/styleFunctions";

const StyledAdornment = styled.span<{isLoading?: boolean}>`
  display: flex;
  align-items: bottom;
  justify-content: center;
  margin-bottom: 1px;
  visibility: ${(props) => (props.isLoading ? "hidden" : "visible")};
`;

const StyledButton = styled.button<{
  variant: ButtonVariant;
  subtype?: ButtonSubtype;
  iconOnly?: boolean;
  iconOnlySize: keyof Spacing;
  shape: ButtonShape;
  size: ButtonSize;
  isLoading: boolean;
  hasChildren?: boolean;
  noPadding?: boolean;
  isFullWidth?: boolean;
}>`
  position: relative;
  align-items: center;
  cursor: pointer;
  padding: ${(props) =>
    `${props.noPadding ? "0" : props.size === "lg" ? "5px" : props.theme.spacing.xxs} ${
      props.noPadding ? "0" : props.theme.spacing.xs
    }`};
  border-radius: ${(props) =>
    props.shape === "rect" || !props.iconOnly ? props.theme.borderRadius.base : "100%"};
  border: 0 solid transparent;
  display: flex;
  gap: 12px;
  text-decoration: none !important;
  height: ${(props) => (props.isLoading && !props.hasChildren ? "32px" : "auto")};
  width: ${(props) => (props.isLoading && !props.hasChildren ? "32px" : "auto")};

  ${({iconOnly, theme}) =>
    iconOnly
      ? `
      height: ${theme.spacing.lg};
      width: ${theme.spacing.lg};
      padding: 0px;
      align-items: center;
      justify-content: center;
      `
      : ""}

  &:active {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
  }

  ${({isFullWidth}) =>
    isFullWidth &&
    `
    width: 100%;
  `}

  ${({theme, variant}) =>
    variant === "primary" &&
    `
    filter: drop-shadow(${theme.funcShadow.buttons["0"].x}px ${theme.funcShadow.buttons["0"].y}px ${theme.funcShadow.buttons["0"].blur}px ${theme.funcShadow.buttons["0"].color}) drop-shadow(${theme.funcShadow.buttons["1"].x}px ${theme.funcShadow.buttons["1"].y}px ${theme.funcShadow.buttons["1"].blur}px ${theme.funcShadow.buttons["1"].color}) drop-shadow(${theme.funcShadow.buttons["2"].x}px ${theme.funcShadow.buttons["2"].y}px ${theme.funcShadow.buttons["2"].blur}px ${theme.funcShadow.buttons["2"].color}); 
    
    &:disabled {
      filter: none;
    }
  `}

  ${({theme, variant, noPadding, isLoading, size}) =>
    (variant === "secondary" || variant === "secondaryDanger") &&
    `
    padding: ${
      isLoading
        ? `${noPadding ? "0" : `calc(${theme.spacing.xs} - ${theme.borderWidth.md})`}`
        : `${
            noPadding
              ? "0"
              : size === "lg"
              ? `calc(5px - ${theme.borderWidth.md})`
              : `calc(${theme.spacing.xxs} - ${theme.borderWidth.md})`
          } ${noPadding ? "0" : `calc(${theme.spacing.xs} - ${theme.borderWidth.md})`}`
    };
  `}

  ${({theme, variant, noPadding, isLoading, size, subtype}) =>
    (variant === "secondary" || variant === "secondaryDanger") &&
    subtype !== "default" &&
    `
    &:disabled {
      padding: ${
        isLoading
          ? `${noPadding ? "0" : theme.spacing.xs}`
          : `${noPadding ? "0" : size === "lg" ? "5px" : theme.spacing.xxs} ${
              noPadding ? "0" : theme.spacing.xs
            }`
      };
    }
  `}

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "default" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.state.brandBase};

    &:hover:not(:disabled) {
      background-color: ${theme.extended.state.brandHover};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.state.brandBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.state.brandHover};
      outline: ${theme.borderWidth.md} solid ${theme.core.border.borderFocus};
      outline-offset: ${theme.borderWidth.lg};
    }
  `}

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "success" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.support.successBase};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.successDark};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.support.successBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.successDark};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.successBase};
      outline-offset: ${theme.borderWidth.lg};
    }
  `}

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "error" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.support.errorBase};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.errorDark};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.support.errorBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.errorDark};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.errorBase};
      outline-offset: ${theme.borderWidth.lg};
    }
  `}

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "warning" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.support.warningBase};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.warningDark};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.support.warningBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.warningDark};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.warningBase};
      outline-offset: ${theme.borderWidth.lg};
    }
  `}

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "info" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.support.infoBase};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.infoDark};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.support.infoBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.infoDark};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.infoBase};
      outline-offset: ${theme.borderWidth.lg};
    }
  `}

  ${({theme, variant, subtype, isLoading}) =>
    variant === "primary" &&
    subtype === "inverse" &&
    `
    color: ${theme.core.content.contentPrimary};
    background-color: ${theme.extended.state.primaryBase};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:disabled {
      background-color: ${
        isLoading ? theme.extended.state.primaryBase : theme.extended.state.disabled
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      outline: ${theme.borderWidth.md} solid ${theme.extended.state.primaryBase};
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
      outline: ${theme.borderWidth.md} solid ${theme.secondary.red["800"]};
    }
  `}

  ${({theme, subtype, variant}) =>
    variant === "secondary" &&
    subtype === "default" &&
    `
    color: ${theme.core.content.contentPrimary};
    background-color: ${theme.extended.state.primaryBase};
    border: ${theme.borderWidth.md} solid ${theme.core.border.borderLight};

    &:hover:not(:disabled) {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.state.primaryHover};
      outline: ${theme.borderWidth.md} solid ${theme.core.border.borderFocus};
      outline-offset: ${theme.borderWidth.lg};
    }

    &:disabled {
      border: 1px solid ${theme.core.border.borderMedium}
      background-color: ${theme.extended.state.disabled};
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, subtype, variant, isLoading}) =>
    variant === "secondary" &&
    subtype === "success" &&
    `
    color: ${theme.extended.support.successDark};
    background-color: transparent;
    border: ${theme.borderWidth.md} solid ${theme.extended.support.successDark};

    &:hover:not(:disabled) {
      background-color: ${theme.extended.support.successLight};
    }
    
    &:disabled {
      background-color: ${isLoading ? "transparent" : theme.extended.state.disabled};
      border ${
        isLoading
          ? `${theme.borderWidth.md} solid ${theme.extended.support.successDark}`
          : "none"
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.successLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.successDark};
    }
  `}

  ${({theme, subtype, variant, isLoading}) =>
    variant === "secondary" &&
    subtype === "inverse" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: transparent;
    border: ${theme.borderWidth.md} solid ${theme.core.border.borderLight};

    &:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    &:disabled {
      background-color: ${isLoading ? "transparent" : theme.extended.state.disabled};
      border ${
        isLoading
          ? `${theme.borderWidth.md} solid ${theme.core.border.borderLight}`
          : "none"
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.05);
      outline: ${theme.borderWidth.md} solid ${theme.core.border.borderLight};
    }
  `}

  ${({theme, subtype, variant, isLoading}) =>
    variant === "secondary" &&
    subtype === "error" &&
    `
    color: ${theme.extended.support.errorDark};
    background-color: transparent;
    border: ${theme.borderWidth.md} solid ${theme.extended.support.errorDark};

    &:hover:not(:disabled) {
      background-color: ${theme.extended.support.errorLight};
    }
    
    &:disabled {
      background-color: ${isLoading ? "transparent" : theme.extended.state.disabled};
      border ${
        isLoading
          ? `${theme.borderWidth.md} solid ${theme.extended.support.errorDark}`
          : "none"
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.errorLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.errorDark};
    }
  `}

  ${({theme, subtype, variant, isLoading}) =>
    variant === "secondary" &&
    subtype === "warning" &&
    `
    color: ${theme.extended.support.warningDark};
    background-color: transparent;
    border: ${theme.borderWidth.md} solid ${theme.extended.support.warningDark};

    &:hover:not(:disabled) {
      background-color: ${theme.extended.support.warningLight};
    }
    
    &:disabled {
      background-color: ${isLoading ? "transparent" : theme.extended.state.disabled};
      border ${
        isLoading
          ? `${theme.borderWidth.md} solid ${theme.extended.support.warningDark}`
          : "none"
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.warningLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.warningDark};
    }
  `}

  ${({theme, subtype, variant, isLoading}) =>
    variant === "secondary" &&
    subtype === "info" &&
    `
    color: ${theme.extended.support.infoDark};
    background-color: transparent;
    border: ${theme.borderWidth.md} solid ${theme.extended.support.infoDark};

    &:hover:not(:disabled) {
      background-color: ${theme.extended.support.infoLight};
    }
    
    &:disabled {
      background-color: ${isLoading ? "transparent" : theme.extended.state.disabled};
      border ${
        isLoading
          ? `${theme.borderWidth.md} solid ${theme.extended.support.infoDark}`
          : "none"
      };
      color: ${theme.core.content.contentTertiary};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.infoLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.infoDark};
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
      outline: ${theme.borderWidth.md} solid ${theme.foundation.error};
    }
  `}

  ${({theme, subtype, variant}) =>
    (variant === "text" || variant === "tertiary") &&
    subtype === "default" &&
    `
    background-color: transparent;
    color: ${theme.core.content.contentPrimary};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.state.primaryHover};
      outline: ${theme.borderWidth.md} solid ${theme.core.border.borderFocus};
    }

    &:disabled {
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, subtype, variant}) =>
    (variant === "text" || variant === "tertiary") &&
    subtype === "success" &&
    `
    background-color: transparent;
    color: ${theme.extended.support.successDark};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.successLight};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.successLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.successDark};
    }

    &:disabled {
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, subtype, variant}) =>
    (variant === "text" || variant === "tertiary") &&
    subtype === "error" &&
    `
    background-color: transparent;
    color: ${theme.extended.support.errorDark};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.errorLight};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.errorLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.errorDark};
    }

    &:disabled {
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, subtype, variant}) =>
    (variant === "text" || variant === "tertiary") &&
    subtype === "warning" &&
    `
    background-color: transparent;
    color: ${theme.extended.support.warningDark};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.warningLight};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.warningLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.warningDark};
    }

    &:disabled {
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, subtype, variant}) =>
    (variant === "text" || variant === "tertiary") &&
    subtype === "info" &&
    `
    background-color: transparent;
    color: ${theme.extended.support.infoDark};

    &:hover:not(:disabled)  {
      background-color: ${theme.extended.support.infoLight};
    }

    &:focus:not(:disabled) {
      background-color: ${theme.extended.support.infoLight};
      outline: ${theme.borderWidth.md} solid ${theme.extended.support.infoDark};
    }

    &:disabled {
      color: ${theme.core.content.contentTertiary};
    }
  `}

  ${({theme, subtype, variant}) =>
    (variant === "text" || variant === "tertiary") &&
    subtype === "inverse" &&
    `
    background-color: transparent;
    color: ${theme.core.content.contentInversePrimary};

    &:hover:not(:disabled)  {
      background-color: rgba(255, 255, 255, 0.05);
    }

    &:focus:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.05);
      outline: ${theme.borderWidth.md} solid ${theme.core.border.borderLight};
    }

    &:disabled {
      color: ${theme.core.content.contentInversePrimary};
    }
  `}

  ${({theme, color}) =>
    color &&
    `
    color: ${getValueFromPath(theme, color)};
  `}
`;

const StyledTypography = styled(Typography)`
  cursor: pointer;
`;
const spinner = keyframes`
  to {transform: rotate(360deg);}
`;

const StyledSpinner = styled.div<{variant: ButtonVariant; subtype: ButtonSubtype}>`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  margin-left: -8px;
  border-radius: 50%;
  border: 2px solid transparent;
  animation: ${spinner} 0.6s linear infinite;

  ${({theme, variant}) =>
    variant === "primary" &&
    `
      border-top-color: ${theme.core.content.contentInversePrimary};
    `}

  ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "default" &&
    `
      border-top-color: ${theme.core.content.contentPrimary}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "success" &&
    `
      border-top-color: ${theme.extended.support.successDark}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "error" &&
    `
      border-top-color: ${theme.extended.support.errorDark}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "warning" &&
    `
      border-top-color: ${theme.extended.support.warningDark}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "info" &&
    `
      border-top-color: ${theme.extended.support.infoDark}
    `}

    ${({theme, subtype, variant}) =>
    variant === "primary" &&
    subtype === "inverse" &&
    `
      border-top-color: ${theme.core.content.contentPrimary};
    `}

    ${({subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "inverse" &&
    `
      border-top-color: white;
    `}

    ${({theme, variant}) =>
    variant === "danger" &&
    `
      border-top-color: ${theme.extended.state.secondaryBase}
    `}
`;

const StyledLoadingTypography = styled.span`
  visibility: hidden;
`;

export {
  StyledButton,
  StyledSpinner,
  StyledLoadingTypography,
  StyledAdornment,
  StyledTypography,
};
