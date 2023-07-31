import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React from "react";
import SvgIcon from "../SvgIcon";
import {IconProps} from "../SvgIcon/Icon";
import StyledBackgroundIcon from "./BackgroundIcon.styles";
import {customStyles} from "../../core/styleFunctions";

const Icon = (props: {cs?: customStyles} & (FontAwesomeIconProps | IconProps)) => {
  return (
    <StyledBackgroundIcon size={props.size} cs={props.cs}>
      <SvgIcon {...props} />
    </StyledBackgroundIcon>
  );
};

export default Icon;
