import styled from "styled-components";

const StyledAdornment = styled.span<{ position: string }>`
  ${props => `margin-${props.position === "end" ? "left" : "right"}: ${props.theme.spacing.sm}`};
`

const StyledInputContainer = styled.div<{ fullWidth: boolean }>`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  border: ${props => `${props.theme.borderWidth.md} solid ${props.theme.palette.border}`};
  width: ${props => props.fullWidth ? "100%" : "fit-content"};
  background-color: ${props => props.theme.palette.gray["0"]};
  display: inline-flex;

  &:focus-within {
    border-color: ${props => props.theme.palette.primary.main};
  }
`;

const StyledInput = styled.input<{ fullWidth: boolean }>`
  width: ${props => props.fullWidth ? "100%" : "initial"};
  border: 0;

  &:focus {
    outline: none;
  }
`

export { StyledInputContainer, StyledInput, StyledAdornment };
