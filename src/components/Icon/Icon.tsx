import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { faMoneyBillSimple, faChartLineUp } from "@fortawesome/pro-thin-svg-icons";
import { faPaperclip } from "@fortawesome/pro-light-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, far, faPaperclip, faMoneyBillSimple, faChartLineUp);

const Icon = (props: FontAwesomeIconProps) => {
  return <FontAwesomeIcon {...props} />;
};

export default Icon;
