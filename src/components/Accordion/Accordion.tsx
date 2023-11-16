import React, {useEffect} from "react";
import SvgIcon from "../SvgIcon";
import Typography from "../Typography";
import {InnerContent, Collapse, Root, StyledAccordion, Chevron} from "./Accordion.styles";

export interface AccordionProps {
  /**
   * content of the Accordion
   */
  children?: React.ReactNode;

  /**
   * renders a custom adornment at the end of the Accordion label
   */
  endAdornment?: React.ReactNode;

  /**
   * label of the Accordion
   */
  label?: string;

  /**
   * active state
   */
  active?: boolean;

  /**
   * manually set Accordion open
   */
  isOpen?: boolean | undefined;
}

/**
 *
 * `Accordion` Describe what it does
 *
 * Component Demo: [Accordion](https://ui.govconnex.com/?path=/story/components-Accordion--example)
 *
 */
const Accordion = (props: AccordionProps) => {
  const {children, endAdornment, label, isOpen, active, ...rest} = props;
  // Get the height of the content
  const content = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState("0px");
  const [open, setOpen] = React.useState(false);

  // Set the height of the content to auto when the transition is done
  function handleTransitionEnd() {
    setHeight((prev) => (prev === "0px" ? "0px" : "auto"));
  }

  // If the height is auto, set it to the fixed px height
  async function handleMousedown() {
    if (isOpen === undefined) {
      setHeight((prev) =>
        prev === "auto" ? `${content.current?.scrollHeight}px` : prev
      );
    }
  }

  function handleClick() {
    if (isOpen === undefined) {
      setOpen(!open);
      setHeight((prev) =>
        prev === "0px" ? `${content.current?.scrollHeight}px` : "0px"
      );
    }
  }

  function handleChild(e: any) {
    e.stopPropagation();
  }

  function handleChildKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (isOpen === undefined && event.key === "Enter") {
      handleChild(event as any); // Call the click handler when Enter is pressed
    }
  }

  useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(isOpen);
      setHeight((prev) =>
        isOpen && prev === "0px" ? `${content.current?.scrollHeight}px` : "0px"
      );
    }
  }, [isOpen]);

  return (
    <StyledAccordion active={!!active}>
      <Root onClick={handleClick} onMouseDown={handleMousedown} {...rest}>
        <Typography variant="label">{label}</Typography>

        {endAdornment ? (
          endAdornment
        ) : (
          <div
            onClick={handleChild}
            onKeyDown={handleChildKeyDown}
            role="button"
            tabIndex={0}
          >
            <Chevron open={open}>
              <SvgIcon icon="chevron-down" />
            </Chevron>
          </div>
        )}
      </Root>

      <Collapse
        active={!!active}
        onTransitionEnd={handleTransitionEnd}
        ref={content}
        height={height}
      >
        <InnerContent>{children}</InnerContent>
      </Collapse>
    </StyledAccordion>
  );
};

export default Accordion;
