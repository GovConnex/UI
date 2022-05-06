import React from "react";
import { StyledInputContainer, StyledAdornment, StyledInput } from "./Input.styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = (props: InputProps) => {
  return (
    <StyledInputContainer fullWidth={!!props.fullWidth}>
      <StyledAdornment position="start">
        {props.startAdornment}
      </StyledAdornment>

      <StyledInput fullWidth={!!props.fullWidth} {...props}></StyledInput>

      <StyledAdornment position="end">
        {props.endAdornment}
      </StyledAdornment>
    </StyledInputContainer>
  );
};

export default Input;
