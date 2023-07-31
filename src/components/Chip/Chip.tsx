import React from "react";
import Typography from "../Typography";
import StyledChip, {StyledAdornment, StyledChipIcon} from "./Chip.styles";
import {faCircleXmark} from "@fortawesome/pro-solid-svg-icons";

export type ChipRole = "default" | "info" | "success" | "warning" | "error" | "primary"; // Determines colour
export type ChipPriority = "high" | "low";
export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  onDelete?: () => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  size?: ChipSize;
  priority?: ChipPriority;
  role?: ChipRole;
}

const Chip = ({
  children,
  startAdornment,
  endAdornment,
  onDelete,
  role = "default",
  size = "md",
  priority = "low",
  ...props
}: ChipProps) => {
  return (
    <StyledChip role={role} size={size} priority={priority} {...props}>
      {startAdornment ? (
        <StyledAdornment position={"start"}>{startAdornment}</StyledAdornment>
      ) : null}
      <Typography variant="label" as="span" size={size} noMargin>
        {children}
      </Typography>
      {endAdornment ? (
        <StyledAdornment position={"end"}>{endAdornment}</StyledAdornment>
      ) : null}
      {onDelete ? <StyledChipIcon icon={faCircleXmark} onClick={onDelete} /> : null}
    </StyledChip>
  );
};

export default Chip;
