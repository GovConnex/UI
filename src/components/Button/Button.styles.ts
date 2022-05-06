import styled from "styled-components";
import { ButtonVariant } from "./Button";

const StyledAdornment = styled.span<{ position: string }>`
  ${props => `margin-${props.position === "end" ? "left" : "right"}: ${props.theme.spacing.sm}`};
`

const StyledButton = styled.button<{
  disabled: boolean;
  variant: ButtonVariant;
}>`
  cursor: pointer;
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.variant === "primary"
    ? props.theme.palette.background.default : props.theme.palette.text.primary};

  ${props => props.variant === "secondary" ?
    `border: ${props.theme.borderWidth.md} solid ${props.theme.palette.background.dark};`
    :
    `border: ${props.theme.borderWidth.md} solid transparent;`}

  ${props => props.variant === "text" ? `
    background-color: transparent;

    &:hover {
      background-color: ${props.theme.palette.secondary.extraLight};
    }

    &:active {
      background-color: ${props.theme.palette.background.dark}
    }
  ` : `
    background-color: ${props.variant === "primary" ?
      props.theme.palette.primary.main : props.theme.palette.gray["0"]};

    &:hover {
      background-color: ${props.variant === "primary" ?
        props.theme.palette.primary.dark : props.theme.palette.background.dark};
  `}
`;

export { StyledButton, StyledAdornment };
