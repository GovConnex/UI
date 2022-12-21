import React from "react";
import Typography from "../Typography";
import {StyledRadio, RadioWrapper, RadioLabel, RadioTextWrapper} from "./Radio.styles";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {

  /**
   * checked state of the radio
   * @default `false`
   */
  checked?: boolean;

  /**
   * renders the radio in different variants
   */
  variant: "default" | "card" | "list";

  /**
   * renders a text label next to the radio
   */
  label?: string;

  /**
   * renders a text bellow the label 
   */
  description?: string;

};

/**
 * 
 * `Radio` renders a radio button
 *
 * Component Demo: [Radio](https://ui.govconnex.com/?path=/story/components-Radio--example)
 * 
 */
const Radio = (props: RadioProps) => {
  const {checked=false,variant="default",label, description, ...rest } = props;

  return (
    <RadioLabel variant={variant}>
      <RadioWrapper checked={checked} variant={variant}>
        {label ? (
          <RadioTextWrapper>
            <Typography variant="label">Default</Typography>
            {description ? (
              <Typography
                noMargin
                variant="body"
                size="sm"
                color="primary.neutral.400"
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
