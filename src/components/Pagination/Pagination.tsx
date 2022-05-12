import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";
import React, { useState, useRef, useMemo } from "react";
import Button from "../Button";
import Menu from "../Menu";
import Icon from "../Icon";
import Typography from "../Typography";
import StyledPagination from "./Pagination.styles";

export interface PaginationItemsPerPageObject {
  value: number;
  label: string | number;
};

export type PaginationItemsPerPageOption =
  | number
  | PaginationItemsPerPageObject;

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  onPageChange: (newPage: number) => void;
  onItemsPerPageChange: (newItemsPerPage: number) => void;
  itemsPerPageOptions?: PaginationItemsPerPageOption[];
};

const Pagination = (props: PaginationProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const setItemsPerPage = (newItemsPerPage: number) => {
    setShowMenu(false);
    props.onItemsPerPageChange(newItemsPerPage);
  };

  const dropdownOptions = useMemo(() => {
    if (props.itemsPerPageOptions) {
      return props.itemsPerPageOptions.map((x) =>
        typeof x === "number"
          ? { text: x, onClick: () => setItemsPerPage(x) }
          : { text: x.label, onClick: () => setItemsPerPage(x.value) }
      );
    } else {
      return [
        { text: 10, onClick: () => setItemsPerPage(10) },
        { text: 25, onClick: () => setItemsPerPage(25) },
        { text: 50, onClick: () => setItemsPerPage(50) },
        { text: 100, onClick: () => setItemsPerPage(100) },
      ];
    }
  }, [props.itemsPerPageOptions]);

  return (
    <StyledPagination>
      <>
        <div>
          <Typography>
            Page {props.page} of {Math.ceil(props.totalItems / props.itemsPerPage)}
          </Typography>

          <Button
            variant="secondary"
            onClick={() => props.onPageChange(props.page - 1)}
            disabled={props.page <= 1}
          >
            <Icon icon={faChevronLeft} />
          </Button>

          <Button
            variant="secondary"
            onClick={() => props.onPageChange(props.page + 1)}
            disabled={
              props.page >= Math.ceil(props.totalItems / props.itemsPerPage)
            }
          >
            <Icon icon={faChevronRight} />
          </Button>
        </div>

        <div>
          <Typography>Showing</Typography>

          <Button
            variant="secondary"
            endAdornment={<Icon icon={faCaretDown} />}
            ref={buttonRef}
            onClick={() => setShowMenu(!showMenu)}
          >
            <Typography>{props.itemsPerPage}</Typography>
          </Button>

          {showMenu && (
            <Menu
              placement="bottom-start"
              options={dropdownOptions}
              anchorEl={buttonRef}
              onClose={() => setShowMenu(false)}
            />
          )}

          <Typography>Items out of {props.totalItems}</Typography>
        </div>
      </>
    </StyledPagination>
  );
};

export default Pagination;
