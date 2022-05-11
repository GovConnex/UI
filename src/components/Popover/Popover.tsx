import React, { useState } from "react";
import StyledPopover from "./Popover.styles";
import { Placement, PositioningStrategy }from '@popperjs/core';
import { usePopper, Modifier } from 'react-popper';

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  anchorEl: React.RefObject<HTMLElement>;
  modifiers?: ReadonlyArray<Modifier<any>>;
  placement?: Placement;
  strategy?: PositioningStrategy;
};

const Popover = React.forwardRef<HTMLSpanElement, PopoverProps>((props: PopoverProps, ref) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(props.anchorEl.current, popperElement, {
    modifiers: props.modifiers,
    placement: props.placement,
    strategy: props.strategy
  });

  return (
    <span ref={ref} style={{ display: "contents" }}>
      <StyledPopover
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {props.children}
      </StyledPopover>
    </span>
  );
});

export default Popover;
