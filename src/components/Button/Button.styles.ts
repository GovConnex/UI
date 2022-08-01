import styled from "styled-components";
import { ButtonVariant } from "./Button";
import { Spacing } from "../../theming/global-theme.interface";

const StyledAdornment = styled.span``;

const StyledButton = styled.button<{
  variant: ButtonVariant;
  size: keyof Spacing;
}>`
  cursor: pointer;
  padding: ${props => `${props.theme.spacing[props.size]} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.xs};
  border: 0 solid transparent;
  display: flex;
  gap: ${props => props.theme.spacing.sm};

  &:disabled {
    background-color: ${props => props.theme.primary.neutral["300"]};
  }

  &:disabled:hover {
    background-color: ${props => props.theme.primary.neutral["300"]};
  }

  ${({theme, variant}) => variant === "primary" && `
    color: ${theme.primary.neutral["50"]};
    background-color: ${theme.primary.base.brand};

    &:hover {
      background-color: ${theme.primary.brand["700"]};
    }

    &:active {
      background-color: ${theme.primary.brand["900"]};
    }
  `}

  ${({theme, variant}) => variant === "secondary" && `
    color: ${theme.primary.neutral["900"]};
    background-color: ${theme.primary.neutral["100"]};

    &:hover {
      background-color: ${theme.primary.neutral["300"]};
    }

    &:active {
      background-color: ${theme.primary.neutral["200"]};
    }
  `}

  ${({theme, variant}) => variant === "text" && `
    background-color: transparent;
    color: ${theme.primary.neutral["900"]};

    &:hover {
      background-color: ${theme.primary.neutral["100"]};
    }

    &:active {
      background-color: ${theme.primary.neutral["200"]};
    }
  `}
`;

export { StyledButton, StyledAdornment };
