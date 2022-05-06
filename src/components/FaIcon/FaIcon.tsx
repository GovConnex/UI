import React from "react";
import Icon, { IconProps } from "../Icon/Icon";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface FontAweIconProps extends Omit<FontAwesomeIconProps, "icon"> { }

export interface FaIconProps extends Omit<IconProps, "component"> {
  icon: IconProp;
  faProps?: FontAweIconProps;
}

const FaIcon = (props: FaIconProps) => {
  return <Icon component={<FontAwesomeIcon icon={props.icon} {...props.faProps} /> } {...props} />
};

export default FaIcon;
