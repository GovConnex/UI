import React from "react";
import StyledIcon from "./Icon.styles";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { SizeProp, RotateProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: React.ReactNode;
  rotate?: RotateProp;
  size?: SizeProp;
}

const isFaProps = (
  props: FontAwesomeIconProps | IconProps,
): props is FontAwesomeIconProps => {
  return !React.isValidElement(props.icon);
};

const Icon = (props: FontAwesomeIconProps | IconProps) => {
  return isFaProps(props) ? (
    <FontAwesomeIcon {...props} />
  ) : (
    <StyledIcon {...props} rotate={props.rotate} size={props.size}>
      {props.icon}
    </StyledIcon>
  );
};

export default Icon;
