import React from "react";
import {StyledMenuList, StyledMenuListHeading} from "./MenuList.styles";
import Typography from "../Typography/Typography";

export const MenuList = StyledMenuList;

interface MenuListHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  sticky?: boolean;
  uppercase?: boolean;
  prevCategory?: string;
}
export const MenuListHeading: React.FC<MenuListHeadingProps> = ({
  children,
  sticky,
  uppercase,
  prevCategory,
}) => {
  return children ? (
    <StyledMenuListHeading
      prevCategory={prevCategory}
      sticky={sticky}
      uppercase={uppercase}
    >
      <Typography as="span" variant="body" size="sm" noMargin>
        {children}
      </Typography>
    </StyledMenuListHeading>
  ) : null;
};

export {default as MenuListItem} from "./MenuListItem";
