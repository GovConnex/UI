import classNames from "classnames";
import React from "react";
import Typography from "../Typography";
import StyledMenuListItem, {
  StyledMenuListItemEnd,
  StyledMenuListItemStart,
} from "./MenuListItem.styles";

interface MenuListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onSelect?: (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  cursor?: boolean;

  // checked?: boolean;
  disabled?: boolean;
  className?: string;
  'data-cy'?: string;
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
  ...props
}) => {
  const handleClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!disabled && onSelect) {
      onSelect(e);
    }
  };

  return (
    <StyledMenuListItem {...props} data-cy={props['data-cy']} button={button} className={classNames(className, {
      cursor
    })} onClick={handleClick}>
      <StyledMenuListItemStart>
        {/* Put the icon here */}
        {startAdornment}
        <Typography as="span" variant="body" size="md" noMargin>{children}</Typography>
      </StyledMenuListItemStart>
      <StyledMenuListItemEnd>{endAdornment}</StyledMenuListItemEnd>
    </StyledMenuListItem>
  );
};

export default MenuListItem;
