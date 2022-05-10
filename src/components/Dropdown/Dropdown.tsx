import React, { useMemo } from "react";
import { Placement }from '@popperjs/core';
import _ from "lodash";
import Popover from "../Popover";
import { StyledDropdown, StyledDropdownOption, StyledAdornment, StyledDropdownHeading } from "./Dropdown.styles";

export interface DropdownOption {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onClick?: () => void;
  text?: string;
  category?: string;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
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
          <>
            {category !== "undefined" &&
              <StyledDropdownHeading key={`heading-${iidx}`}>{category}</StyledDropdownHeading>}
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
          </>
        ))}
      </StyledDropdown>
    </Popover>
  );
};

export default Dropdown;
