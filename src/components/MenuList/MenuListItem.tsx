import classNames from "classnames";
import React from "react";
import Typography from "../Typography";
import StyledMenuListItem, {
  StyledMenuListItemEnd,
  StyledMenuListItemStart,
  StyledMenuListItemText,
} from "./MenuListItem.styles";

interface MenuListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onSelect?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  cursor?: boolean;
  textWidth?: string;

  // checked?: boolean;
  disabled?: boolean;
  className?: string;
  "data-cy"?: string;
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
  textWidth,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!disabled && onSelect) {
      onSelect(e);
    }
  };

  return (
    <StyledMenuListItem
      {...props}
      data-cy={props["data-cy"]}
      button={button}
      className={classNames(className, {
        cursor,
      })}
      onClick={handleClick}
    >
      <StyledMenuListItemStart>
        {/* Put the icon here */}
        {startAdornment}
        <StyledMenuListItemText textWidth={textWidth} title={children}>
          <Typography as="span" variant="body" size="md" noMargin>
            {children}
          </Typography>
        </StyledMenuListItemText>
      </StyledMenuListItemStart>
      <StyledMenuListItemEnd>{endAdornment}</StyledMenuListItemEnd>
    </StyledMenuListItem>
  );
};

export default MenuListItem;
