import React from "react";
import Typography from "../Typography";
import StyledChip, { StyledAdornment } from "./Chip.styles";

export interface ChipProps {
  label?: string;
  onClick?: () => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
}

const Chip = ({
  label,
  startAdornment,
  endAdornment,
  onClick,
  className,
}: ChipProps) => {
  return (
    <StyledChip className={className} onClick={onClick}>
      {startAdornment ? (
        <StyledAdornment position={"start"}>{startAdornment}</StyledAdornment>
      ) : null}
      <Typography variant="textSm">{label}</Typography>
      {endAdornment ? (
        <StyledAdornment position={"end"}>{endAdornment}</StyledAdornment>
      ) : null}
    </StyledChip>
  );
};

export default Chip;
