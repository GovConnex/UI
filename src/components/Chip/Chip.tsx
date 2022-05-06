import React from "react";
import StyledChip from "./Chip.styles";

export interface ChipProps {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Chip = (props: ChipProps) => {
  return <StyledChip className={props.className}>{props.label}</StyledChip>;
};

export default Chip;