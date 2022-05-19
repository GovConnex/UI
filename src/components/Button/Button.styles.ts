import styled from "styled-components";
import { ButtonVariant } from "./Button";

const StyledAdornment = styled.span``;

const StyledButton = styled.button<{
  disabled: boolean;
  variant: ButtonVariant;
}>`
  cursor: pointer;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.theme.palette.text.primary};
  border: ${props => props.theme.borderWidth.md} solid transparent;
  display: flex;
  gap: ${props => props.theme.spacing.sm};

  ${({theme, variant}) => variant === "primary" && `
    color: ${theme.palette.background.default};
    background-color: ${theme.palette.primary.main};

    &:hover {
      background-color: ${theme.palette.primary.dark};
    }

    &:active {
      box-shadow: ${theme.shadow.sm.x}px ${theme.shadow.sm.y}px ${theme.shadow.sm.blur}px ${theme.shadow.sm.spread}px ${theme.shadow.sm.color};
    }
  `}

  ${({theme, variant}) => variant === "secondary" && `
    border: ${theme.borderWidth.md} solid ${theme.palette.background.dark};
    background-color: ${theme.palette.gray["0"]};
    box-shadow: ${theme.shadow.sm.x}px ${theme.shadow.sm.y}px ${theme.shadow.sm.blur}px ${theme.shadow.sm.spread}px ${theme.shadow.sm.color};

    &:hover {
      background-color: ${theme.palette.background.dark};
    }
  `}

  ${({theme, variant}) => variant === "text" && `
    background-color: transparent;

    &:hover {
      background-color: ${theme.palette.secondary.extraLight};
    }

    &:active {
      background-color: ${theme.palette.background.dark}
    }
  `}
`;

export { StyledButton, StyledAdornment };
