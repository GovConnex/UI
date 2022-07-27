import styled from "styled-components";

const StyledAdornment = styled.span<{ position: string }>`
  ${props => `margin-${props.position === "end" ? "left" : "right"}: ${props.theme.spacing.sm}`};
`

const StyledInputContainer = styled.div<{ fullWidth: boolean }>`
  padding: ${props => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  border: ${props => `${props.theme.borderWidth.md} solid ${props.theme.primary.neutral[200]}`};
  width: ${props => props.fullWidth ? "100%" : "fit-content"};
  background-color: ${props => props.theme.primary.base.white};
  display: inline-flex;

  &:focus-within {
    border-color: ${props => props.theme.primary.base.brand};
  }
`;

const StyledInput = styled.input<{ fullWidth: boolean }>`
  width: ${props => props.fullWidth ? "100%" : "initial"};
  border: 0;

  &:focus {
    outline: none;
  }
`;

export { StyledInputContainer, StyledInput, StyledAdornment };
