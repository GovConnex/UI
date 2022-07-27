import classNames from "classnames";
import React from "react";
import Typography from "../Typography";
import StyledMenuListItem, {
  StyledMenuListItemEnd,
  StyledMenuListItemStart,
} from "./MenuListItem.styles";

interface MenuListItemProps {
  children?: React.ReactNode;
  onSelect?: () => void;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  cursor?: boolean;

  // checked?: boolean;
  disabled?: boolean;
  className?: string;
}

export const MenuListItem: React.FC<MenuListItemProps> = ({
  children,
  onSelect,
  cursor,
  // checked,
  disabled,
  className,
  button,
  startAdornment,
  endAdornment,
}) => {
  const handleClick = () => {
    if (!disabled && onSelect) {
      onSelect();
    }
  };

  return (
    <StyledMenuListItem button={button} className={classNames(className, {
      cursor
    })} onClick={handleClick}>
      <StyledMenuListItemStart>
        {/* Put the icon here */}
        {startAdornment}
        <Typography variant={"body"} size="sm" noMargin>{children}</Typography>
      </StyledMenuListItemStart>
      <StyledMenuListItemEnd>{endAdornment}</StyledMenuListItemEnd>
    </StyledMenuListItem>
  );
};

export default MenuListItem;
