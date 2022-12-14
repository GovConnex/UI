import React from "react";
import { Collapse, Root, StyledAccordion } from "./Accordion.styles";

export interface AccordionProps {
  /**
   * content of the Accordion
   */
  children?: React.ReactNode;
}

/**
 *
 * `Accordion` Describe what it does
 *
 * Component Demo: [Accordion](https://ui.govconnex.com/?path=/story/components-Accordion--example)
 *
 */
const Accordion = (props: AccordionProps) => {

  // Get the height of the content
  const content = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState("0px");

  // Set the height of the content to auto when the transition is done
  function handleTransitionEnd() {
    setHeight((prev) => (prev === "0px" ? "0px" : "auto"));
  }

  // If the height is auto, set it to the fixed px height
  async function handleClick() {
    setHeight((prev) =>
      prev === "auto" ? `${content.current?.scrollHeight}px` : prev
    );
  }

  // Animate from fixed px height
  async function handleMouseUp() {
    setHeight((prev) =>
      prev === "0px" ? `${content.current?.scrollHeight}px` : "0px"
    );
  }

  return (
    <StyledAccordion>
      <Root onMouseDown={handleClick} onMouseUp={handleMouseUp}>Im a title</Root>
      <Collapse
        onTransitionEnd={handleTransitionEnd}
        ref={content}
        height={height}
      >
        Hi im content
      </Collapse>
    </StyledAccordion>
  );
};

export default Accordion;
