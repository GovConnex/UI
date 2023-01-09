import React from "react";
import StyledToggleButton from "./ToggleButton.styles";

export interface ToggleButtonProps {
  /**
  * content of the ToggleButton
  */
  children?: React.ReactNode;
};

/**
 * 
 * `ToggleButton` Describe what it does
 *
 * Component Demo: [ToggleButton](https://ui.govconnex.com/?path=/story/components-ToggleButton--example)
 * 
 */
const ToggleButton = (props: ToggleButtonProps) => {
  return <StyledToggleButton>{props.children}</StyledToggleButton>;
};

export default ToggleButton;
