import React, {useEffect, useRef, useState} from "react";
import {Placement} from "@popperjs/core";
import Popover from "../Popover";
import Input from "../Input/Input";
import {StyledMenuList, StyledSearchBar, StyledBottomAdornment} from "./Menu.styles";
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener";
import {MenuListHeading} from "../MenuList";
import MenuListItem from "../MenuList/MenuListItem";
import {useKey} from "rooks";
import {customStyles} from "../../core/styleFunctions";
import Icon from "../SvgIcon/Icon";
import {faSearch} from "@fortawesome/pro-regular-svg-icons";
import Typography from "../Typography/Typography";
import Button, {ButtonProps} from "../Button/Button";
import Box from "../Box/Box";
import {Modifier} from "react-popper";

export interface MenuOption {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onSelect?: (option?: MenuOption) => void;
  text?: string | number;
  children?: React.ReactNode;
  category?: string;
  style?: React.CSSProperties;
  "data-cy"?: string;
}

export function sortByCategory(options: MenuOption[]) {
  return [...options].sort((a, b) => {
    if (a.category === undefined && b.category === undefined) {
      return 0;
    }
    if (a.category === undefined) {
      return 1;
    }
    if (b.category === undefined) {
      return -1;
    }
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  });
}

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl?: React.RefObject<HTMLElement>;
  options: MenuOption[];
  placement?: Placement;
  onOpen?: () => void;
  onClose?: () => void;
  onOptionSelect?: (option: MenuOption) => void;
  onSearch?: (filteredOptions: any) => void;
  bottomAdornment?: React.ReactNode;
  hasSearch?: boolean;
  textWidth?: string;
  cs?: customStyles;
  popoverCs?: customStyles;
  itemsCs?: customStyles;
  closeOnSelect?: boolean;
  isBlock?: boolean;
  modifiers?: ReadonlyArray<Modifier<any>>;
  noCategory?: boolean;
}

const Menu = ({
  anchorEl,
  options,
  placement = "bottom-start",
  onOpen,
  onClose,
  onOptionSelect,
  onSearch,
  textWidth,
  hasSearch,
  bottomAdornment,
  cs,
  popoverCs,
  itemsCs,
  closeOnSelect = true,
  isBlock = false,
  modifiers,
  noCategory = false,
  ...rest
}: MenuProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortedOptions, setSortedOptions] = React.useState<MenuOption[]>([]);
  const searchInputRef = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof onSearch === "function") {
      setSortedOptions(options);
    } else {
      setSortedOptions(sortByCategory(options));
    }
  }, [options]);

  useEffect(() => {
    if (onOpen) {
      onOpen();
    }

    // Focus the search input when the component mounts
    if (searchInputRef?.current) {
      searchInputRef?.current.focus({preventScroll: true});
    }
  }, []);

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

    const option = sortedOptions[selectedIndex];

    if (option) {
      onOptionSelect && onOptionSelect(option);
      option.onSelect && option.onSelect(option);
      if (onClose && closeOnSelect) {
        onClose();
      }
    }
  });

  useKey(["Escape"], (e) => {
    e.preventDefault();
    onClose && onClose();
  });

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (typeof onSearch === "function") {
      onSearch(value);
    } else {
      const dataListNew = value
        ? [...options].filter(
            (item: any) => item?.text?.toLowerCase()?.includes(value?.toLowerCase())
          )
        : [...options];

      setSortedOptions(sortByCategory([...dataListNew]));
    }
  };

  return (
    <ClickAwayListener onClickAway={onClose || null}>
      <Popover
        modifiers={modifiers}
        isBlock={isBlock}
        anchorEl={anchorEl}
        placement={placement}
        cs={{
          zIndex: 799,
          ...popoverCs,
        }}
      >
        <StyledMenuList cs={cs} {...rest}>
          {hasSearch ? (
            <StyledSearchBar>
              <Input
                name="input"
                fullWidth
                ref={searchInputRef}
                data-cy="filter-issue-search"
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                startAdornment={
                  <Typography noMargin color="core.content.contentTertiary">
                    <Icon icon={faSearch} size="lg" />
                  </Typography>
                }
              />
            </StyledSearchBar>
          ) : null}
          <Box className="MenuItems" cs={itemsCs}>
            {sortedOptions.map((option, idx, array) => {
              const prev = array[idx - 1] || null;

              return (
                <span key={`item-${idx}-${new Date().getTime()}`}>
                  {(!noCategory && (prev === null || prev.category !== option.category)) && (
                    <MenuListHeading prevCategory={prev?.category}>
                      {option.category}
                    </MenuListHeading>
                  )}

                  <MenuListItem
                    data-cy={option["data-cy"]}
                    button
                    style={option.style}
                    textWidth={textWidth}
                    onSelect={() => {
                      if (onOptionSelect) {
                        onOptionSelect(option);
                      }

                      if (option.onSelect) {
                        option.onSelect(option);
                      }

                      if (onClose && closeOnSelect) {
                        onClose();
                      }
                    }}
                    cursor={idx === selectedIndex}
                    startAdornment={option.startAdornment}
                    endAdornment={option.endAdornment}
                  >
                    {option.children || option.text}
                  </MenuListItem>
                </span>
              );
            })}
          </Box>
          {bottomAdornment ? (
            <StyledBottomAdornment>{bottomAdornment}</StyledBottomAdornment>
          ) : null}
        </StyledMenuList>
      </Popover>
    </ClickAwayListener>
  );
};

interface ButtonMenuProps extends ButtonProps {
  menuProps: MenuProps;
  wrapperProps?: customStyles;
}

export function ButtonMenu({menuProps, wrapperProps, ...buttonProps}: ButtonMenuProps) {
  const buttonRef = useRef(null);
  const [shown, setShown] = useState(false);

  return (
    <Box cs={wrapperProps}>
      <Button ref={buttonRef} onClick={() => setShown(!shown)} {...buttonProps} />
      {shown && (
        <Menu {...menuProps} onClose={() => setShown(false)} anchorEl={buttonRef} />
      )}
    </Box>
  );
}

export default Menu;
