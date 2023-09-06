import React, {useState, useMemo, useEffect} from "react";
import Typography from "../Typography";
import {
  StyledInputContainer,
  StyledAdornment,
  StyledInput,
  StyledInputWrapper,
} from "./Input.styles";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "label"> {
  /**
   * Make width 100%
   * @default `initial`
   */
  fullWidth?: boolean;
  /**
   * renders a component at the start of the input
   */
  startAdornment?: React.ReactNode;
  /**
   * renders a component at the end of the input
   */
  endAdornment?: React.ReactNode;
  /**
   * renders text hint bellow of the input
   */
  hint?: string;
  /**
   * renders a text label above the input
   */
  label?: string;
  /**
   * renders a red error text at the bottom of the input
   */
  error?: string;
}

export const debounce = (fn: Function, ms: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
};

// Expand input props to add delay prop
export interface DebouncedInputProps extends InputProps {
  delayMs?: number;
}

const noop = () => {};

/**
 * Variation of `Input` that only fires change events after X milliseconds (X=delayMs) of no change.
 */
export const DebouncedInput = ({
  value,
  onChange = noop,
  delayMs = 500,
  ...props
}: DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedChange = useMemo(
    () => debounce(onChange as Function, delayMs),
    [onChange]
  );

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    // If value has changed
    if (inputValue !== value) {
      debouncedChange(inputValue);
    }
    // Only fire if inputValue changes.
  }, [inputValue]);

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      {...props}
    />
  );
};

/**
 * `Input` is a extendable input component
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {label, hint, startAdornment, endAdornment, error, fullWidth, ...rest} = props;

  return (
    <StyledInputWrapper fullWidth={!!fullWidth}>
      {label ? (
        <Typography noMargin variant="label" size="md">
          {label}
        </Typography>
      ) : null}

      <StyledInputContainer fullWidth={!!fullWidth}>
        {startAdornment ? (
          <StyledAdornment disabled={props.disabled || false} position="left">
            {props.startAdornment}
          </StyledAdornment>
        ) : null}

        <StyledInput
          adornmentPadding={startAdornment ? "left" : endAdornment ? "right" : null}
          fullWidth={!!fullWidth}
          error={!!error}
          ref={ref}
          {...rest}
        ></StyledInput>

        {endAdornment ? (
          <StyledAdornment disabled={props.disabled || false} position="right">
            {props.endAdornment}
          </StyledAdornment>
        ) : null}
      </StyledInputContainer>

      {error || hint ? (
        <Typography
          variant="body"
          color={error ? "secondary.red.500" : "core.content.contentTertiary"}
          size="sm"
          noMargin
        >
          {error || hint}
        </Typography>
      ) : null}
    </StyledInputWrapper>
  );
});

export default Input;
