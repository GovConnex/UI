import styled from "styled-components";
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
}>`
  align-items: center;
  cursor: pointer;
  padding: ${(props) => `0 ${props.theme.spacing.md}`};
  border-radius: ${(props) =>
    props.shape === "rect" || !props.iconOnly
      ? props.theme.borderRadius.xs
      : "100%"};
  border: 0 solid transparent;
  display: flex;
  gap: 12px;
  text-decoration: none !important;
  height: ${(props) => heightMap[props.size]};

  & * {
    line-height: ${(props) => heightMap[props.size]};
  }

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

  ${({ theme, variant }) =>
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

export { StyledButton, StyledAdornment, StyledTypography };
