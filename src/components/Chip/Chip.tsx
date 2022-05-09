import React from "react";
import StyledChip, { StyledIcon } from "./Chip.styles";

export interface ChipProps {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Chip = (props: ChipProps) => {
  return <StyledChip className={props.className}>
    <StyledIcon>{props.icon}</StyledIcon>

  </StyledChip>;
};

export default Chip;