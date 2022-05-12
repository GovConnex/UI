import React from "react";
import Typography from "../Typography";
import StyledListItem, {
  StartAdornmentWrapper,
  StyledListItemEnd,
  StyledListItemStart,
} from "./ListItem.styles";

interface ListItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;

  // checked?: boolean;
  disabled?: boolean;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  onClick,
  // checked,
  disabled,
  className,
  button,
  startAdornment,
  endAdornment,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <StyledListItem button={button} className={className} onClick={handleClick}>
      <StyledListItemStart>
        {/* Put the icon here */}
        {startAdornment}
        <Typography variant={"textSm"} noMargin>
          {children}
        </Typography>
      </StyledListItemStart>
      <StyledListItemEnd>{endAdornment}</StyledListItemEnd>
    </StyledListItem>
  );
};

export default ListItem;
