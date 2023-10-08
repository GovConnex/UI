import {IconProp} from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Icon from "../Icon";
import Typography from "../Typography";
import Button from "../Button";
import {
  StyledBanner,
  StyledTextWrapper,
  ButtonWrapper,
  MainContentContainer,
} from "./Banner.styles";
import {ButtonSubtype} from "../Button/Button";

export interface BannerProps {
  /**
   * title of the banner
   */
  title?: string;
  /**
   * description of the banner
   */
  description?: string;
  /**
   * variant of the banner
   */
  variant?: "info" | "warning" | "error" | "success";

  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };

  onClose?: () => void;
}

const variantMap = {
  info: "info-circle",
  warning: "exclamation-triangle",
  error: "exclamation-circle",
  success: "check-circle",
};

/**
 *
 * `Banner` renders a banner with title and description in the color of the variant.
 *
 * Component Demo: [Banner](https://ui.govconnex.com/?path=/story/components-Banner--example)
 *
 */
const Banner = (props: BannerProps) => {
  const {
    title,
    description,
    variant = "info",
    primaryButton,
    secondaryButton,
    onClose,
  } = props;
  return (
    <StyledBanner variant={variant}>
      {/* <Icon icon={`far,` && (variantMap[ variant ] as IconProp)} /> */}
      <Icon icon={["far", "heart"] as IconProp} />
      <MainContentContainer>
        <StyledTextWrapper variant={variant}>
          <Typography noMargin variant="label">
            {title}
          </Typography>
          <Typography noMargin variant="body" size="sm">
            {description}
          </Typography>
        </StyledTextWrapper>
        {(primaryButton || secondaryButton) && (
          <ButtonWrapper>
            {primaryButton && (
              <Button
                variant="secondary"
                subtype={variant as ButtonSubtype}
                onClick={primaryButton.onClick}
                size="sm"
              >
                {primaryButton.label}
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant="tertiary"
                subtype={variant as ButtonSubtype}
                onClick={secondaryButton.onClick}
                size="sm"
              >
                {secondaryButton.label}
              </Button>
            )}
          </ButtonWrapper>
        )}
      </MainContentContainer>
      {onClose && (
        <Button
          iconOnly
          startAdornment={<Icon icon={"close" as IconProp} />}
          onClick={onClose}
          variant="tertiary"
          subtype={variant as ButtonSubtype}
          style={{marginLeft: "auto"}}
          size="sm"
        />
      )}
    </StyledBanner>
  );
};

export default Banner;
