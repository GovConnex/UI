import React from "react";
import { Placement } from "@popperjs/core";
import Popover from "../Popover";
import { StyledMenuList } from "./Menu.styles";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import MenuItem from "./MenuItem";

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl: React.RefObject<HTMLElement>;
  placement?: Placement;
  onClose?: () => void;
}

const Menu = ({
  anchorEl,
  placement = "bottom-start",
  onClose,
  children,
  ...rest
}: MenuProps) => {
  return (
    <ClickAwayListener onClickAway={onClose || null}>
      <Popover anchorEl={anchorEl} placement={placement}>
        <StyledMenuList {...rest}>
          {children}
        </StyledMenuList>
      </Popover>
    </ClickAwayListener>
  );
};

Menu.Item = MenuItem;

export default Menu;
