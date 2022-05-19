import React, {useMemo} from "react";
import {Placement} from "@popperjs/core";
import _ from "lodash";
import Popover from "../Popover";
import {StyledMenuList} from "./Menu.styles";
import ClickAwayListener, {OnClickAway} from "../ClickAwayListener/ClickAwayListener";
import {MenuListHeading} from "../MenuList";
import MenuListItem from "../MenuList/MenuListItem";
import {useKey} from "rooks";

export interface MenuOption {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onSelect?: (option: MenuOption) => void;
  text?: string | number;
  category?: string;
}

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl: React.RefObject<HTMLElement>;
  options: MenuOption[];
  placement?: Placement;
  onClose?: () => void;
  onOptionSelect?: (option: MenuOption) => void;
}

const Menu = ({
                anchorEl,
                options,
                placement = "bottom-start",
                onClose,
                onOptionSelect,
                ...rest
}: MenuProps) => {

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  useKey(
    ["ArrowDown"],
    (e) => {
      e.preventDefault();
      setSelectedIndex((selectedIndex + 1) % options.length);
    },
  );

  useKey(
    ["ArrowUp"],
    (e) => {
      e.preventDefault();
      setSelectedIndex((selectedIndex - 1) % options.length);
    },
  );

  useKey(
    ["Enter"],
    (e) => {
      e.preventDefault();
    },
  );

  useKey(
    ["Escape"],
    (e) => {
      e.preventDefault();
      onClose && onClose();
    },
  );


  const categorisedOptions = useMemo(() => {
    return _.groupBy(options, "category");
  }, [options]);


  return (
    <ClickAwayListener onClickAway={onClose || null}>
      <Popover anchorEl={anchorEl} placement={placement}>
        <StyledMenuList {...rest}>
          {Object.keys(categorisedOptions).map((category, iidx) => (
            <div key={`category-${iidx}-${new Date().getTime()}`}>
              {category !== "undefined" && <MenuListHeading>{category}</MenuListHeading>}
              {categorisedOptions[category].map((x, idx) => (
                <MenuListItem
                  button
                  onSelect={() => {
                    if (onOptionSelect) {
                      onOptionSelect(x);
                    }
                    if(x.onSelect) {
                      x.onSelect(x);
                    }

                    if (onClose) {
                      onClose();
                    }
                  }}
                  cursor={idx === selectedIndex}
                  key={`item-${iidx}-${idx}`}
                  startAdornment={x.startAdornment}
                  endAdornment={x.endAdornment}
                >
                  {x.text}
                </MenuListItem>
              ))}
            </div>
          ))}
        </StyledMenuList>
      </Popover>
    </ClickAwayListener>
  );
};

export default Menu;
