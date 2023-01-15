import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Icon from "../Icon";
import Typography from "../Typography";
import {StyledBanner, StyledTextWrapper}  from "./Banner.styles";

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
  const { title, description, variant = "info" } = props;
  return (
    <StyledBanner variant={variant}>
      <Icon icon={variantMap[variant] as IconProp}/>
      <StyledTextWrapper>
      <Typography noMargin variant="label" >
        {title}
      </Typography>
      <Typography noMargin variant="body" size="sm" >
       {description}
      </Typography>
      </StyledTextWrapper>
    </StyledBanner>
  );
};

export default Banner;
