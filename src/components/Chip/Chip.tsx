import React from "react";
import Typography from "../Typography";
import StyledChip, {
  StyledAdornment,
  StyledChipIcon,
} from "./Chip.styles";
import { faCircleXmark } from "@fortawesome/pro-solid-svg-icons";

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  onDelete?: () => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Chip = ({
  children,
  startAdornment,
  endAdornment,
  onDelete,
  ...props
}: ChipProps) => {
  return (
    <StyledChip {...props}>
      {startAdornment ? (
        <StyledAdornment position={"start"}>{startAdornment}</StyledAdornment>
      ) : null}
      <Typography variant="body" size="md" noMargin>{children}</Typography>
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
