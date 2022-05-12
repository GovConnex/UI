import React, { useMemo } from "react";
import { Placement } from "@popperjs/core";
import _ from "lodash";
import Popover from "../Popover";
import { StyledMenu } from "./Menu.styles";
import ClickAwayListener, { OnClickAway } from "../ClickAwayListener";
import { MenuListHeading } from "../MenuList";
import MenuListItem from "../MenuList/MenuListItem";

export interface MenuOption {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onClick?: (...args: any[]) => void;
  text?: string | number;
  category?: string;
}

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl: React.RefObject<HTMLElement>;
  options: MenuOption[];
  placement?: Placement;
  onClose?: OnClickAway;
}

const Menu = (props: MenuProps) => {
  const categorisedOptions = useMemo(() => {
    return _.groupBy(props.options, "category");
  }, [props.options]);

  return (
    <ClickAwayListener onClickAway={props.onClose || null}>
      <Popover anchorEl={props.anchorEl} placement={props.placement}>
        <StyledMenu {...props}>
          {Object.keys(categorisedOptions).map((category, iidx) => (
            <div key={`category-${iidx}`}>
              {category !== "undefined" && <MenuListHeading>{category}</MenuListHeading>}
              {categorisedOptions[category].map((x, idx) => (
                <MenuListItem
                  button
                  onClick={x.onClick}
                  key={`item-${idx}`}
                  startAdornment={x.startAdornment}
                  endAdornment={x.endAdornment}
                >
                  {x.text}
                </MenuListItem>
              ))}
            </div>
          ))}
        </StyledMenu>
      </Popover>
    </ClickAwayListener>
  );
};

export default Menu;
