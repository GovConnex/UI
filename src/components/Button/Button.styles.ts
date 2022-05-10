import styled from "styled-components";
import { ButtonVariant } from "./Button";

const StyledAdornment = styled.span<{ position: string }>`
  ${props => `margin-${props.position === "end" ? "left" : "right"}: ${props.theme.spacing.sm}`};
`;

const StyledButton = styled.button<{
  disabled: boolean;
  variant: ButtonVariant;
}>`
  cursor: pointer;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.theme.palette.text.primary};
  border: ${props => props.theme.borderWidth.md} solid transparent;

  ${props => props.variant === "primary" && `
    color: ${props.theme.palette.background.default};
    background-color: ${props.theme.palette.primary.main};

    &:hover {
      background-color: ${props.theme.palette.primary.dark};
    }

    &:active {
      box-shadow: ${props.theme.shadow.sm.x}px ${props.theme.shadow.sm.y}px ${props.theme.shadow.sm.blur}px ${props.theme.shadow.sm.spread}px ${props.theme.shadow.sm.color};
    }
  `}

  ${props => props.variant === "secondary" && `
    border: ${props.theme.borderWidth.md} solid ${props.theme.palette.background.dark};
    background-color: ${props.theme.palette.gray["0"]};
    box-shadow: ${props.theme.shadow.sm.x}px ${props.theme.shadow.sm.y}px ${props.theme.shadow.sm.blur}px ${props.theme.shadow.sm.spread}px ${props.theme.shadow.sm.color};

    &:hover {
      background-color: ${props.theme.palette.background.dark};
    }
  `}

  ${props => props.variant === "text" && `
    background-color: transparent;

    &:hover {
      background-color: ${props.theme.palette.secondary.extraLight};
    }

    &:active {
      background-color: ${props.theme.palette.background.dark}
    }
  `}
`;

export { StyledButton, StyledAdornment };
