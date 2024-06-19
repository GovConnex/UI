import React, {useState, useRef} from "react";
import Box from "../Box";
import Typography from "../Typography";
import Input from "../Input";
import SvgIcon from "../SvgIcon";
import Button from "../Button";
import ClickAwayListener from "../ClickAwayListener";
import {MenuList, MenuListHeading} from "../MenuList";
import Popover from "../Popover";
import {ListItem} from "../List";
import Chip from "../Chip";
import {faChevronDown, faSearch} from "@fortawesome/pro-regular-svg-icons";

export interface Option {
  id: string | number;
  text: string;
  selected?: boolean;
  category?: string;
  endAdornment?: React.ReactNode;
}

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  options?: Option[];
  loading?: boolean;
  defaultValue?: React.ReactNode;
  maxWidth?: string;
  multipleSelect?: boolean;
  hasSelectedCount?: boolean;
  hasClearSelection?: boolean;
  hasSelectAll?: boolean;
  hasSearch?: boolean;
  onChange?: (selectedValue: any, previouslySelected: boolean) => void;
  onClearSelection?: () => void;
  onSelectAll?: () => void;
  error?: string;
  "data-testid"?: string;
  "data-cy"?: string;
  loadingIndicator?: React.ReactNode;
  selectedIndicator?: React.ReactNode;
}

/**
 *
 * `Dropdown` Describe what it does
 *
 * Component Demo: [Dropdown](https://ui.govconnex.com/?path=/story/components-Dropdown--example)
 *
 */
const Dropdown = ({
  label,
  placeholder,
  options = [],
  loading,
  defaultValue,
  maxWidth,
  multipleSelect = false,
  hasSelectedCount = false,
  hasClearSelection = false,
  hasSelectAll = false,
  hasSearch = false,
  onChange = () => {},
  onClearSelection = () => {},
  onSelectAll = () => {},
  error,
  "data-testid": dataTestId,
  "data-cy": dataCy,
  loadingIndicator,
  selectedIndicator,
}: DropdownProps) => {
  const popRef = useRef<any>(null);
  const [showPopover, setShowPopover] = useState(false);
  // eslint-disable-next-line
  const [value, setValue] = useState(defaultValue);
  const [searchTerm, setSearchTerm] = useState("");
  const selectedCount = [
    ...new Set(
      options?.filter((item: any) => item?.selected)?.map((item: any) => item?.id)
    ),
  ]?.length;

  // all is selected if there is nothing selected(for empty selected) and not selected is 0 (for all selected)
  const notSelectedCount = [
    ...new Set(
      options?.filter((item: any) => !item?.selected)?.map((item: any) => item?.id)
    ),
  ]?.length;

  const optionsDisplayed = searchTerm
    ? (options || []).filter(
        (item: any) => item?.text?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    : options || [];

  return (
    <ClickAwayListener
      onClickAway={(e) => {
        // Check if the clicked element is the anchorEl, if so, prevent the clickaway logic
        if (popRef?.current && popRef?.current?.contains(e?.target)) {
          return;
        }

        // Your regular clickaway logic here
        setShowPopover(false);
      }}
    >
      <Box>
        <Input
          data-testid={dataTestId}
          data-cy={dataCy}
          error={error}
          onClick={() => {
            setShowPopover(true);
          }}
          endAdornment={
            <Box
              cs={{
                display: "inline-flex",
                gap: "spacing.xs",
                alignItems: "center",
                paddingLeft: "spacing.sm",
                background: "white",
              }}
            >
              {hasSelectedCount ? (
                !notSelectedCount ? (
                  // needed to disable because eslint is looking for aria attribute role
                  // eslint-disable-next-line
                  <Chip priority="low" role="primary" size="md">
                    ALL
                  </Chip>
                ) : selectedCount ? (
                  // needed to disable because eslint is looking for aria attribute role
                  // eslint-disable-next-line
                  <Chip priority="low" role="primary" size="md">
                    {selectedCount}
                  </Chip>
                ) : null
              ) : null}
              <SvgIcon
                icon={faChevronDown}
                onClick={() => {
                  setShowPopover(true);
                }}
              />
            </Box>
          }
          fullWidth
          ref={popRef}
          label={label}
          placeholder={placeholder}
          value={
            multipleSelect
              ? selectedCount
                ? label
                : ""
              : options?.find((item: any) => item?.id === defaultValue)?.text || ""
          }
          readOnly={true}
        />
        {showPopover ? (
          <Popover
            isBlock
            anchorEl={popRef}
            placement="top-start"
            modifiers={[
              {
                name: "preventOverflow",
                options: {
                  mainAxis: false, // true by default
                },
              },
            ]}
            style={{
              padding: "0px",
              zIndex: 9,
              width: "calc(100% - 40px)",
              maxWidth: maxWidth ? maxWidth : "unset",
            }}
          >
            <MenuList style={{position: "relative"}}>
              <div style={{maxHeight: "100%", position: "relative"}}>
                <span
                  style={{
                    padding: `0 3px`,
                    backgroundColor: "white",
                    top: 0,
                    zIndex: 1,
                    position: "sticky",
                    display: "block",
                  }}
                ></span>
                {loading ? (
                  loadingIndicator
                ) : (
                  <Box cs={{display: "flex", width: "100%", flexDirection: "column"}}>
                    {hasSearch ? (
                      <Box cs={{background: "white"}}>
                        <Input
                          name="input"
                          fullWidth
                          type="search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e?.target?.value)}
                          startAdornment={
                            <Typography noMargin color="core.content.contentTertiary">
                              <SvgIcon icon={faSearch} size="lg" />
                            </Typography>
                          }
                        />
                      </Box>
                    ) : null}
                    <Box
                      cs={{
                        maxHeight: "240px",
                        overflow: "auto",
                        marginTop: hasSearch ? "spacing.xxs" : "0px",
                        marginBottom: hasClearSelection ? "spacing.xxs" : "0px",
                      }}
                    >
                      {optionsDisplayed?.filter((item: any) => item?.text)?.length ? (
                        optionsDisplayed
                          ?.filter((item: any) => item?.text)
                          ?.map((x: any, idx: any, array: any) => {
                            const prev = array[idx - 1] || null;
                            return (
                              <>
                                {prev === null || prev?.category !== x?.category ? (
                                  <Box
                                    cs={{marginTop: prev === null ? "0px" : "spacing.xs"}}
                                  >
                                    <MenuListHeading>{x?.category}</MenuListHeading>
                                  </Box>
                                ) : null}
                                <ListItem
                                  style={{padding: "4px 8px"}}
                                  key={idx}
                                  data-testid={`dropdown-option-item-${x?.id || idx}`}
                                  data-cy={`dropdown-option-item-${x?.id || idx}`}
                                  button
                                  endAdornment={
                                    x?.endAdornment ||
                                    ((multipleSelect && x?.selected) ||
                                    (!multipleSelect && x?.id === defaultValue)
                                      ? selectedIndicator
                                      : null)
                                  }
                                  onClick={() => {
                                    onChange(x?.id, x?.selected);

                                    if (!multipleSelect) {
                                      setShowPopover(false);
                                    }
                                  }}
                                >
                                  <Box
                                    cs={{display: "inline-flex", alignItems: "center"}}
                                  >
                                    {x?.text}
                                  </Box>
                                </ListItem>
                              </>
                            );
                          })
                      ) : (
                        <Box
                          cs={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "spacing.xxs",
                          }}
                        >
                          <Typography
                            noMargin
                            variant="label"
                            size="md"
                            color="core.content.contentTertiary"
                          >
                            No data to show
                          </Typography>
                        </Box>
                      )}
                    </Box>
                    {hasSelectAll ? (
                      <Box cs={{background: "white"}}>
                        {
                          <Button
                            variant="secondary"
                            isFullWidth={true}
                            style={{display: "block", textAlign: "center"}}
                            onClick={onSelectAll}
                          >
                            Select All
                          </Button>
                        }
                      </Box>
                    ) : null}
                    {hasClearSelection ? (
                      <Box cs={{background: "white"}}>
                        {
                          <Button
                            variant="secondary"
                            isFullWidth={true}
                            style={{display: "block", textAlign: "center"}}
                            onClick={onClearSelection}
                          >
                            Clear Selection
                          </Button>
                        }
                      </Box>
                    ) : null}
                  </Box>
                )}
              </div>
            </MenuList>
          </Popover>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default Dropdown;
