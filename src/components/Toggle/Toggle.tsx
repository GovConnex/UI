import React from "react";
import Typography from "../Typography";
import {StyledAdornment} from "../Button/Button.styles";
import {
  ToggleTextWrapper,
  ToggleWrapper,
  ToggleView,
  ToggleLabel,
  StyledToggle,
  ToggleIconWrapper,
} from "./Toggle.styles";

export interface ToggleProps {
  /**
   * checked state of the toggle
   * @default `false`
   */
  checked?: boolean;

  /**
   * renders the Toggle in different variants
   * @default `default`
   */
  variant?: "default" | "single" | "list" | "card";

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
 * `Toggle` Describe what it does
 *
 * Component Demo: [Toggle](https://ui.govconnex.com/?path=/story/components-Toggle--example)
 *
 */
function Toggle({
  checked,
  label,
  description,
  variant = "default",
  startAdornment,
  ...rest
}: ToggleProps) {
  return (
    <ToggleLabel>
      <ToggleWrapper checked={!!checked} variant={variant}>
        <ToggleIconWrapper variant={variant}>
          {startAdornment ? <StyledAdornment>{startAdornment}</StyledAdornment> : null}
          {label ? (
            <ToggleTextWrapper>
              <Typography as="span" variant="label" size="md">
                {label}
              </Typography>
              {description ? (
                <Typography
                  noMargin
                  variant="body"
                  size="sm"
                  color="core.content.contentTertiary"
                >
                  {description}
                </Typography>
              ) : null}
            </ToggleTextWrapper>
          ) : null}
        </ToggleIconWrapper>

        <StyledToggle type="checkbox" checked={checked} {...rest} />
        <ToggleView />
      </ToggleWrapper>
    </ToggleLabel>
  );
}

export default Toggle;
