import React, { useMemo } from "react";
import { Placement }from '@popperjs/core';
import _ from "lodash";
import Popover from "../Popover";
import { StyledDropdown, StyledAdornment } from "./Dropdown.styles";
import { ListHeading, ListItem } from "../List";
import ClickAwayListener, { OnClickAway } from "../ClickAwayListener";
import Typography from "../Typography";

export interface DropdownOption {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onClick?: (...args: any[]) => void;
  text?: string | number;
  category?: string;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl: React.RefObject<HTMLElement>;
  options: DropdownOption[];
  placement?: Placement;
  onClose?: OnClickAway;
}

const Dropdown = (props: DropdownProps) => {
  const categorisedOptions = useMemo(() => {
    return _.groupBy(props.options, "category");
  }, [props.options])

  return (
    <ClickAwayListener onClickAway={props.onClose || null}>
      <Popover anchorEl={props.anchorEl} placement={props.placement}>
        <StyledDropdown {...props}>
          {Object.keys(categorisedOptions).map((category, iidx) => (
            <React.Fragment key={`category-${iidx}`}>
              {category !== "undefined" &&
                <ListHeading uppercase>{category}</ListHeading>}
              {categorisedOptions[category].map((x, idx) => (
                <ListItem button onClick={x.onClick} key={`item-${idx}`}>
                  {x.startAdornment ?
                    <StyledAdornment position="start">
                      {x.startAdornment}
                    </StyledAdornment>
                  : null}

                  <Typography variant="textSm" style={{marginBottom: 0}}>{x.text}</Typography>

                  {x.endAdornment ?
                    <StyledAdornment position="end">
                      {x.endAdornment}
                    </StyledAdornment>
                  : null}
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </StyledDropdown>
      </Popover>
    </ClickAwayListener>
  );
};

export default Dropdown;
