import React, {useState} from "react";
import StyledPopover from "./Popover.styles";
import {Placement, PositioningStrategy} from "@popperjs/core";
import {usePopper, Modifier} from "react-popper";
import {customStyles} from "../../core/styleFunctions";

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  anchorEl?: React.RefObject<HTMLElement>;
  modifiers?: ReadonlyArray<Modifier<any>>;
  placement?: Placement;
  strategy?: PositioningStrategy;
  cs?: customStyles;
  isBlock?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  "data-cy"?: string;
}

const Popover = React.forwardRef<HTMLSpanElement, PopoverProps>(
  (props: PopoverProps, ref) => {
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const {styles, attributes} = usePopper(props.anchorEl?.current, popperElement, {
      modifiers: props.modifiers,
      placement: props.placement,
      strategy: props.strategy,
    });

    return (
      <span ref={ref}>
        <StyledPopover
          data-cy={props["data-cy"]}
          ref={setPopperElement}
          isBlock={props.isBlock || false}
          style={{...props.style, ...styles.popper}}
          {...attributes.popper}
          cs={props.cs}
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        >
          {props.children}
        </StyledPopover>
      </span>
    );
  }
);

export default Popover;
