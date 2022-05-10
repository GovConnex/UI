import React, { useMemo } from "react";
import { Placement }from '@popperjs/core';
import _ from "lodash";
import Popover from "../Popover";
import { StyledDropdown, StyledDropdownOption, StyledAdornment, StyledDropdownHeading } from "./Dropdown.styles";

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
}

const Dropdown = (props: DropdownProps) => {
  const categorisedOptions = useMemo(() => {
    return _.groupBy(props.options, "category");
  }, [props.options])

  return (
    <Popover anchorEl={props.anchorEl} placement={props.placement}>
      <StyledDropdown {...props}>
        {Object.keys(categorisedOptions).map((category, iidx) => (
          <div key={`category-${iidx}`}>
            {category !== "undefined" &&
              <StyledDropdownHeading>{category}</StyledDropdownHeading>}
            {categorisedOptions[category].map((x, idx) => (
              <StyledDropdownOption onClick={x.onClick} key={`item-${idx}`}>
                {x.startAdornment ?
                  <StyledAdornment position="start">
                    {x.startAdornment}
                  </StyledAdornment>
                : null}

                {x.text}

                {x.endAdornment ?
                  <StyledAdornment position="end">
                    {x.endAdornment}
                  </StyledAdornment>
                : null}
              </StyledDropdownOption>
            ))}
          </div>
        ))}
      </StyledDropdown>
    </Popover>
  );
};

export default Dropdown;
