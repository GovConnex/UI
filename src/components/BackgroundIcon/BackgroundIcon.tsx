import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import React from "react";
import SvgIcon from "../SvgIcon";
import { IconProps } from "../SvgIcon/Icon";
import StyledBackgroundIcon from "./BackgroundIcon.styles";

const Icon = (props: FontAwesomeIconProps | IconProps) => {
  return (
    <StyledBackgroundIcon size={props.size}>
      <SvgIcon {...props} />
    </StyledBackgroundIcon>
  );
};

export default Icon;
