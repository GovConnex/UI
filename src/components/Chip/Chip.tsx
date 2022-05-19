import React from "react";
import Typography from "../Typography";
import StyledChip, {
  StyledAdornment,
  StyledChipIcon,
  StyledChipLabel,
} from "./Chip.styles";
import { faCircleXmark } from "@fortawesome/pro-solid-svg-icons";

export interface ChipProps {
  label?: string;
  onClick?: () => void;
  onDelete?: () => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
}

const Chip = ({
  label,
  startAdornment,
  endAdornment,
  onClick,
  onDelete,
  className,
}: ChipProps) => {
  return (
    <StyledChip className={className} onClick={onClick}>
      {startAdornment ? (
        <StyledAdornment position={"start"}>{startAdornment}</StyledAdornment>
      ) : null}
      <StyledChipLabel variant="textSm">{label}</StyledChipLabel>
      {endAdornment ? (
        <StyledAdornment position={"end"}>{endAdornment}</StyledAdornment>
      ) : null}
      {onDelete ? (
        <StyledChipIcon icon={faCircleXmark} onClick={onDelete} />
      ) : null}
    </StyledChip>
  );
};



export default Chip;
