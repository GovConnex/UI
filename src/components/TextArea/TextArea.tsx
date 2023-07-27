import React from "react";
import {
  StyledAdornment,
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTextAreaWrapper,
} from "./TextArea.styles";
import Typography from "../Typography";

export interface TextAreaProps
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, "label"> {
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
  /**
   * allows resize of the textarea
   */
  resize?: boolean;
}

/**
 * `TextArea` is a extendable textarea component
 *
 * Component Demo: [TextArea](https://ui.govconnex.com/?path=/story/components-textarea--example)
 */
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      label,
      hint,
      startAdornment,
      endAdornment,
      error,
      fullWidth,
      resize,
      ...rest
    } = props;

    return (
      <StyledTextAreaWrapper>
        {label ? (
          <Typography noMargin variant="label" size="md">
            {label}
          </Typography>
        ) : null}

        <StyledTextAreaContainer fullWidth={!!fullWidth}>
          {startAdornment ? (
            <StyledAdornment disabled={props.disabled || false} position="left">
              {props.startAdornment}
            </StyledAdornment>
          ) : null}

          <StyledTextArea
            adornmentPadding={
              startAdornment ? "left" : endAdornment ? "right" : null
            }
            fullWidth={!!fullWidth}
            error={!!error}
            resize={resize}
            ref={ref}
            {...rest}
          ></StyledTextArea>

          {endAdornment ? (
            <StyledAdornment
              disabled={props.disabled || false}
              position="right"
            >
              {props.endAdornment}
            </StyledAdornment>
          ) : null}
        </StyledTextAreaContainer>

        {error || hint ? (
          <Typography
            variant="body"
            color={error ? "secondary.red.500" : "primary.neutral.400"}
            size="sm"
            noMargin
          >
            {error || hint}
          </Typography>
        ) : null}
      </StyledTextAreaWrapper>
    );
  },
);

export default TextArea;
