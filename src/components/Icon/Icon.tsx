import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fat } from "@fortawesome/pro-thin-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, far, fal, fad, fat);

const Icon = (props: FontAwesomeIconProps) => {
  return <FontAwesomeIcon {...props} />;
};

export default Icon;
