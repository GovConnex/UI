import React from "react";
import SvgIcon from "../SvgIcon";
import Typography from "../Typography";
import {
  StyledStepper,
  StyledBullet,
  InfoWrapper,
  StyledTrack,
  BulletWrapper,
} from "./Stepper.styles";

export interface StepperProps {
  /**
   * content of the Stepper
   */
  children?: React.ReactNode;

  /**
   * orientation of the Stepper
   */
  orientation?: "horizontal" | "vertical";

  /**
   * active step
   */
  activeStep?: number;

  /**
   * steps to render
   */
  steps?: Array<{ label: string; description: string; disabled?: boolean }>;
}

/**
 *
 * `Stepper` is a component that renders a list of steps
 *
 * Component Demo: [Stepper](https://ui.govconnex.com/?path=/story/components-Stepper--example)
 *
 */
const Stepper = ({ activeStep = 0, steps = [] }: StepperProps) => {
  //  const {activeStep, ...rest} = props;

  function isPassed(activeStep: number, index: number) {
    return activeStep > index;
  }

  return (
    <StyledStepper>
      {steps.map((item, index) => (
        <>
          <BulletWrapper key={item.label}>
            <StyledBullet
              disabled={item.disabled ?? false}
              passed={isPassed(activeStep, index)}
              active={activeStep === index}
            >
              {isPassed(activeStep, index) || item.disabled ? (
                <SvgIcon
                  icon={item.disabled ? "dash" : "check"}
                  size="xs"
                  color="white"
                />
              ) : null}
            </StyledBullet>

            <InfoWrapper>
              <Typography
                color={
                  isPassed(activeStep + 1, index)
                    ? "core.border.borderFocus"
                    : "primary.neutral.500"
                }
                variant="label"
                noMargin
              >
                {item.label}
              </Typography>
              <Typography
                color={
                  isPassed(activeStep + 1, index)
                    ? "primary.neutral.900"
                    : "primary.neutral.600"
                }
                size="sm"
                noMargin
              >
                {item.description}
              </Typography>
            </InfoWrapper>
          </BulletWrapper>

          {index != steps.length - 1 ? (
            <StyledTrack passed={isPassed(activeStep, index)} /> // track
          ) : null}
        </>
      ))}
    </StyledStepper>
  );
};

export default Stepper;
