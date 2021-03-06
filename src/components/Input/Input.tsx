import React from "react";
import { StyledInputContainer, StyledAdornment, StyledInput } from "./Input.styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <StyledInputContainer fullWidth={!!props.fullWidth}>
      {props.startAdornment ?
        <StyledAdornment position="start">
          {props.startAdornment}
        </StyledAdornment>
    : null}

      <StyledInput fullWidth={!!props.fullWidth} ref={ref} {...props}></StyledInput>

      {props.endAdornment ?
        <StyledAdornment position="end">
          {props.endAdornment}
        </StyledAdornment>
      : null}
    </StyledInputContainer>
  );
});

export default Input;
