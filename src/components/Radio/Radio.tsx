import React from "react";
import Typography from "../Typography";
import {StyledRadio, RadioWrapper, RadioLabel, RadioTextWrapper} from "./Radio.styles";
import {StyledAdornment} from "../Button/Button.styles";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * checked state of the radio
   * @default `false`
   */
  checked?: boolean;

  /**
   * renders the radio in different variants
   * @default `default`
   */
  variant?: "default" | "card" | "list" | "plain";

  /**
   * renders a text label next to the radio
   */
  label?: string;

  /**
   * renders a text bellow the label
   */
  description?: string | React.ReactNode;

  /**
   * renders an icon before the label and description
   */
  startAdornment?: React.ReactNode;
}

/**
 *
 * `Radio` renders a radio button
 *
 * Component Demo: [Radio](https://ui.govconnex.com/?path=/story/components-Radio--example)
 *
 */
const Radio = (props: RadioProps) => {
  const {
    checked,
    variant = "default",
    label,
    description,
    startAdornment,
    ...rest
  } = props;

  return (
    <RadioLabel variant={variant}>
      <RadioWrapper checked={!!checked} variant={variant}>
        {startAdornment ? <StyledAdornment>{startAdornment}</StyledAdornment> : null}
        {label ? (
          <RadioTextWrapper>
            <Typography as="span" variant="label" size="md">
              {label}
            </Typography>
            {description ? (
              <Typography
                noMargin
                variant="body"
                size="sm"
                color="core.content.contentSecondary"
              >
                {description}
              </Typography>
            ) : null}
          </RadioTextWrapper>
        ) : null}

        <StyledRadio type="radio" checked={checked} {...rest} />
      </RadioWrapper>
    </RadioLabel>
  );
};

export default Radio;
