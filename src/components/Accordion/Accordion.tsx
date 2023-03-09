import React from "react";
import SvgIcon from "../SvgIcon";
import Typography from "../Typography";
import {
  InnerContent,
  Collapse,
  Root,
  StyledAccordion,
  Chevron,
} from "./Accordion.styles";

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
}

/**
 *
 * `Accordion` Describe what it does
 *
 * Component Demo: [Accordion](https://ui.govconnex.com/?path=/story/components-Accordion--example)
 *
 */
const Accordion = (props: AccordionProps) => {
  const { children, endAdornment, label } = props;
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
    setHeight((prev) =>
      prev === "auto" ? `${content.current?.scrollHeight}px` : prev
    );
  }

  function handleClick() {
    setOpen(!open);
    setHeight((prev) =>
      prev === "0px" ? `${content.current?.scrollHeight}px` : "0px"
    );
  }

  function handleChild(e:any) {
    e.stopPropagation();
  }

  return (
    <StyledAccordion>
      <Root onClick={handleClick} onMouseDown={handleMousedown}>
        <Typography variant="label">{label}</Typography>

        {endAdornment ? (
          endAdornment
        ) : (
          <div onClick={handleChild}>
          <Chevron open={open}>
            <SvgIcon icon="chevron-down" />
          </Chevron>
          </div>
        )}
      </Root>

      <Collapse
        onTransitionEnd={handleTransitionEnd}
        ref={content}
        height={height}
      >
        <InnerContent >{children}</InnerContent>
      </Collapse>
    </StyledAccordion>
  );
};

export default Accordion;
