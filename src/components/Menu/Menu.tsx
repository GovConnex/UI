import React, { useMemo } from "react";
import { Placement } from "@popperjs/core";
import _ from "lodash";
import Popover from "../Popover";
import { StyledMenuList } from "./Menu.styles";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import { MenuListHeading } from "../MenuList";
import MenuListItem from "../MenuList/MenuListItem";
import { useKey } from "rooks";

export interface MenuOption {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onSelect?: (option?: MenuOption) => void;
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

  const sortedOptions = useMemo(() => {
    return _.toArray(_.sortBy(options, ["category"]));
  }, [options]);

  useKey(["ArrowDown"], (e) => {
    e.preventDefault();
    setSelectedIndex((selectedIndex + 1) % sortedOptions.length);
  });

  useKey(["ArrowUp"], (e) => {
    e.preventDefault();

    if (selectedIndex > 0) {
      setSelectedIndex((selectedIndex - 1) % sortedOptions.length);
    } else {
      setSelectedIndex(sortedOptions.length - 1);
    }
  });

  useKey(["Enter"], (e) => {
    e.preventDefault();

    const option = options[selectedIndex];

    if (option) {
      onOptionSelect && onOptionSelect(option);
      option.onSelect && option.onSelect(option);
      onClose && onClose();
    }
  });

  useKey(["Escape"], (e) => {
    e.preventDefault();
    onClose && onClose();
  });

  return (
    <ClickAwayListener onClickAway={onClose || null}>
      <Popover anchorEl={anchorEl} placement={placement}>
        <StyledMenuList {...rest}>
          {sortedOptions.map((option, idx, array) => {
            const prev = array[idx - 1] || null;

            return (
              <span key={`item-${idx}-${new Date().getTime()}`}>
                {prev === null || prev.category !== option.category ? (
                  <MenuListHeading>{option.category}</MenuListHeading>
                ) : null}

                <MenuListItem
                  button
                  onSelect={() => {
                    if (onOptionSelect) {
                      onOptionSelect(option);
                    }

                    if (option.onSelect) {
                      option.onSelect(option);
                    }

                    if (onClose) {
                      onClose();
                    }
                  }}
                  cursor={idx === selectedIndex}
                  startAdornment={option.startAdornment}
                  endAdornment={option.endAdornment}
                >
                  {option.text}
                </MenuListItem>
              </span>
            );
          })}
        </StyledMenuList>
      </Popover>
    </ClickAwayListener>
  );
};

export default Menu;
