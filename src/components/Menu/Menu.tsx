import React, {useEffect} from "react";
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

export interface MenuOption {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onSelect?: (option?: MenuOption) => void;
  text?: string | number;
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
  anchorEl: React.RefObject<HTMLElement>;
  options: MenuOption[];
  placement?: Placement;
  onClose?: () => void;
  onOptionSelect?: (option: MenuOption) => void;
  onSearch?: (filteredOptions: any) => void;
  filteredOptions?: any;
  bottomAdornment?: React.ReactNode;
  hasSearch?: boolean;
  textWidth?: string;
  cs?: customStyles;
}

const Menu = ({
  anchorEl,
  options,
  placement = "bottom-start",
  onClose,
  onOptionSelect,
  onSearch,
  filteredOptions = [],
  textWidth,
  hasSearch,
  bottomAdornment,
  cs,
  ...rest
}: MenuProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortedOptions, setSortedOptions] = React.useState<MenuOption[]>([]);
  const searchInputRef = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof onSearch === "function") {
      setSortedOptions(filteredOptions);
    } else {
      setSortedOptions(sortByCategory(options));
    }

    // Focus the search input when the component mounts
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
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

    const option = sortedOptions[selectedIndex];

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

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (typeof onSearch === "function") {
      onSearch(sortedOptions);
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
      <Popover anchorEl={anchorEl} placement={placement}>
        <StyledMenuList cs={cs} {...rest}>
          {hasSearch ? (
            <StyledSearchBar>
              <Input
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
          {sortedOptions.map((option, idx, array) => {
            const prev = array[idx - 1] || null;

            return (
              <span key={`item-${idx}-${new Date().getTime()}`}>
                {(prev === null || prev.category !== option.category) && (
                  <MenuListHeading>{option.category}</MenuListHeading>
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
          {bottomAdornment ? (
            <StyledBottomAdornment>{bottomAdornment}</StyledBottomAdornment>
          ) : null}
        </StyledMenuList>
      </Popover>
    </ClickAwayListener>
  );
};

export default Menu;
