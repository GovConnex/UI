import React from "react";
import Typography from "../Typography";
import StyledMenuListItem, {
  StyledMenuListItemEnd,
  StyledMenuListItemStart,
} from "./MenuListItem.styles";

interface MenuListItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;

  // checked?: boolean;
  disabled?: boolean;
  className?: string;
}

export const MenuListItem: React.FC<MenuListItemProps> = ({
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
    <StyledMenuListItem button={button} className={className} onClick={handleClick}>
      <StyledMenuListItemStart>
        {/* Put the icon here */}
        {startAdornment}
        <Typography variant={"textSm"} noMargin>{children}</Typography>
      </StyledMenuListItemStart>
      <StyledMenuListItemEnd>{endAdornment}</StyledMenuListItemEnd>
    </StyledMenuListItem>
  );
};

export default MenuListItem;
