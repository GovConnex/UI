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
import {
  faCheckCircle,
  faClose,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/pro-regular-svg-icons";
import {useTheme} from "styled-components";
import { TypographySize } from "../../theming/global-theme.interface";

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
   * text size of description
   */
  descriptionSize?: keyof TypographySize;
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
  "data-cy"?: string;

  icon: IconProp;
}

const variantMap = {
  info: faInfoCircle,
  warning: faExclamationTriangle,
  error: faExclamationCircle,
  success: faCheckCircle,
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
    icon,
    description,
    descriptionSize = "sm",
    variant = "info",
    primaryButton,
    secondaryButton,
    onClose,
  } = props;
  const theme = useTheme();
  return (
    <StyledBanner variant={variant} data-cy={props["data-cy"]}>
      <Icon
        icon={icon || variantMap[variant] as IconProp}
        color={theme.extended.support[`${variant}Dark`]}
      />
      <MainContentContainer>
        <StyledTextWrapper variant={variant}>
          <Typography noMargin variant="label">
            {title}
          </Typography>
          <Typography noMargin variant="body" size={descriptionSize}>
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
          startAdornment={<Icon icon={faClose as IconProp} />}
          onClick={onClose}
          variant="tertiary"
          subtype={variant as ButtonSubtype}
          style={{marginLeft: "auto"}}
          size="sm"
          aria-label="Close"
        />
      )}
    </StyledBanner>
  );
};

export default Banner;
