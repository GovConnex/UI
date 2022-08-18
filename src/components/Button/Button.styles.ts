import styled from "styled-components";
import { ButtonVariant, ButtonShape } from "./Button";
import { Spacing } from "../../theming/global-theme.interface";

const StyledAdornment = styled.span``;

const StyledButton = styled.button<{
  variant: ButtonVariant;
  iconOnly?: boolean;
  iconOnlySize: keyof Spacing;
  shape: ButtonShape;
  size: keyof Spacing;
}>`
  cursor: pointer;
  padding: ${(props) =>
    `${props.theme.spacing[props.size]} ${props.theme.spacing.md}`};
  border-radius: ${(props) =>
    props.shape === "rect" || !props.iconOnly
      ? props.theme.borderRadius.xs
      : "100%"};
  border: 0 solid transparent;
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};

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

  &:active:not(:disabled) {
    outline: ${({ theme }) =>
      `${theme.borderWidth.lg} solid ${theme.core.border.borderFocus};`}
    outline-offset: ${({ theme }) => `${theme.borderWidth.lg};`}
  }

  ${({ theme, variant }) =>
    variant === "primary" &&
    `
    color: ${theme.core.content.contentInversePrimary};
    background-color: ${theme.extended.state.primaryBase};

    &:hover {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:active {
      background-color: ${theme.extended.state.primaryHover};
    }

    &:disabled {
      background-color: ${theme.extended.state.disabled};
    }
  `}

  ${({ theme, variant }) =>
    variant === "secondary" &&
    `
    color: ${theme.core.content.contentSecondary};
    background-color: ${theme.extended.state.secondaryBase};
    border: ${theme.borderWidth.md} solid ${theme.core.border.borderLight};

    &:hover {
      background-color: ${theme.extended.state.secondaryHover};
    }

    &:active {
      background-color: ${theme.extended.state.secondaryBase};
    }

    &:disabled {
      background-color: ${theme.extended.state.secondaryHover};
      border-color: ${theme.extended.state.disabled};
      color: ${theme.extended.state.disabled};
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

export { StyledButton, StyledAdornment };
