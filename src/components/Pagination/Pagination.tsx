import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";
import React, {useState, useRef, useMemo} from "react";
import Button from "../Button";
import Menu from "../Menu";
import Typography from "../Typography";
import Box from "../Box";
import StyledPagination from "./Pagination.styles";
import Icon from "../Icon";

export interface PaginationItemsPerPageObject {
  value: number;
  label: string | number;
}

export type PaginationItemsPerPageOption = number | PaginationItemsPerPageObject;

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  page: number;
  onPageChange: (newPage: number) => void;
  onItemsPerPageChange: (newItemsPerPage: number) => void;
  itemsPerPageOptions?: (PaginationItemsPerPageOption | number)[];
  className?: string;
  paddingForFlipMenu?: number;
}

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
          ? {text: x, onSelect: () => setItemsPerPage(x)}
          : {
              text: x.label || x.value,
              onSelect: () => setItemsPerPage(x.value),
            }
      );
    } else {
      return [
        {text: 10, onSelect: () => setItemsPerPage(10)},
        {text: 25, onSelect: () => setItemsPerPage(25)},
        {text: 50, onSelect: () => setItemsPerPage(50)},
        {text: 100, onSelect: () => setItemsPerPage(100)},
      ];
    }
  }, [props.itemsPerPageOptions]);

  return (
    <StyledPagination className={props.className}>
      <>
        <div>
          <Typography noMargin data-cy="datatable-page-number">
            Page {props.page} of {Math.ceil(props.totalItems / props.itemsPerPage)}
          </Typography>

          <Button
            variant="secondary"
            data-cy="datatable-previous-button"
            onClick={() => props.onPageChange(props.page - 1)}
            disabled={props.page <= 1}
          >
            <Icon icon={faChevronLeft} />
          </Button>

          <Button
            variant="secondary"
            data-cy="datatable-next-button"
            onClick={() => props.onPageChange(props.page + 1)}
            disabled={props.page >= Math.ceil(props.totalItems / props.itemsPerPage)}
          >
            <Icon icon={faChevronRight} />
          </Button>
        </div>

        <div>
          <Typography noMargin>Showing</Typography>
          <Box>
            <Button
              variant="secondary"
              endAdornment={<Icon icon={faCaretDown} />}
              ref={buttonRef}
              onClick={() => setShowMenu(!showMenu)}
            >
              <Typography noMargin>{props.itemsPerPage}</Typography>
            </Button>
            {showMenu && (
              <Menu
                modifiers={[
                  {
                    name: "flip",
                    options: {
                      padding:
                        props.paddingForFlipMenu !== undefined
                          ? props.paddingForFlipMenu
                          : 50,
                    },
                  },
                ]}
                placement="bottom-start"
                options={dropdownOptions}
                anchorEl={buttonRef}
                onClose={() => setShowMenu(false)}
              />
            )}
          </Box>
          <Typography noMargin>Items out of {props.totalItems}</Typography>
        </div>
      </>
    </StyledPagination>
  );
};

export default Pagination;
