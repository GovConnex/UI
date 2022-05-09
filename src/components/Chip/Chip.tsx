import React from "react";
import Typography from "../Typography";
import StyledChip, { StyledIcon } from "./Chip.styles";

export interface ChipProps {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Chip = ({ label, icon, onClick, className }: ChipProps) => {
  return (
    <StyledChip className={className} onClick={onClick}>
      {icon ? <StyledIcon>{icon}</StyledIcon> : null}
      <Typography variant="textMd">{label}</Typography>
    </StyledChip>
  );
};

export default Chip;
