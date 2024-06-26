import React, {useEffect, useState} from "react";
import {
  StyledAdornment,
  StyledTextArea,
  StyledTextAreaContainer,
  StyledTextAreaWrapper,
} from "./TextArea.styles";
import Typography from "../Typography";
import {Spacing} from "../../theming/global-theme.interface";

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

  /**
   * makes min height to zero
   */
  squashHeight?: boolean;

  /**
   * indicates whether padding should be removed
   */
  noPadding?: boolean;

  /**
   * overrides the adornment color
   */
  adornmentColor?: string;

  /**
   * overrides the padding
   */
  overridePadding?: keyof Spacing;

  /**
   * allows pointer events on adornment
   */
  allowAdornmentPointerEvents?: boolean;
}

/**
 * `TextArea` is a extendable textarea component
 *
 * Component Demo: [TextArea](https://ui.govconnex.com/?path=/story/components-textarea--example)
 */
const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    label,
    hint,
    startAdornment,
    endAdornment,
    error,
    fullWidth,
    resize,
    squashHeight,
    noPadding,
    adornmentColor,
    overridePadding,
    allowAdornmentPointerEvents,
    ...rest
  } = props;

  const [overridePositionTop, setOverridePositionTop] = useState("");

  const autoResize = () => {
    const textArea = document.querySelector("#textArea") as HTMLTextAreaElement;

    if (textArea) {
      textArea.rows = 1; // Reset rows to 1 to recalculate the new number of rows

      const rowsNeeded = Math.ceil((textArea.scrollHeight - 8) / 18); // Calculate the new number of rows
      textArea.rows = rowsNeeded; // Set the new number of rows
      setOverridePositionTop(`${(rowsNeeded - 1) * 8 + 4}px`);
    }
  };

  useEffect(() => {
    if (squashHeight) {
      autoResize();
    }
  }, []);

  return (
    <StyledTextAreaWrapper fullWidth={fullWidth}>
      {label ? (
        <Typography noMargin variant="label" size="md">
          {label}
        </Typography>
      ) : null}

      <StyledTextAreaContainer
        data-testid="text-area-container"
        squashHeight={squashHeight}
        fullWidth={!!fullWidth}
      >
        {startAdornment ? (
          <StyledAdornment
            data-testid="start-adornment"
            squashHeight={squashHeight}
            noPadding={noPadding}
            adornmentColor={adornmentColor}
            overridePositionTop={overridePositionTop}
            disabled={props.disabled || false}
            position="left"
            allowPointerEvents={allowAdornmentPointerEvents}
          >
            {props.startAdornment}
          </StyledAdornment>
        ) : null}

        <StyledTextArea
          id="textArea"
          data-testid="text-area"
          adornmentPadding={startAdornment ? "left" : endAdornment ? "right" : null}
          fullWidth={!!fullWidth}
          error={!!error}
          resize={resize}
          noPadding={noPadding}
          overridePadding={overridePadding}
          squashHeight={squashHeight}
          ref={ref}
          {...rest}
        ></StyledTextArea>

        {endAdornment ? (
          <StyledAdornment
            data-testid="end-adornment"
            squashHeight={squashHeight}
            noPadding={noPadding}
            adornmentColor={adornmentColor}
            overridePositionTop={overridePositionTop}
            disabled={props.disabled || false}
            position="right"
            allowPointerEvents={allowAdornmentPointerEvents}
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
});

export default TextArea;
