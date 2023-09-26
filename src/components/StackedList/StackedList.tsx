import React from "react";
import {
  StyledStackedList,
  StyledHeader,
  StyledHeaderStart,
  StyledHeaderEnd,
  StyledFooterButton,
  Root,
  Collapse,
  Chevron,
} from "./StackedList.styles";
import {StackedListItem} from "./StackedListItem";
import Typography from "../Typography";
import Icon from "../Icon";
import {faChevronRight} from "@fortawesome/pro-regular-svg-icons";

export interface StackedListProps {
  /**
   * content of the StackedList
   */
  data?: any[];
  title?: string;
  endAdornment?: React.ReactNode;
}

/**
 *
 * `StackedList` Describe what it does
 *
 * Component Demo: [StackedList](https://ui.govconnex.com/?path=/story/components-StackedList--example)
 *
 */
const StackedList = ({data, title, endAdornment}: StackedListProps) => {
  // Get the height of the content
  const content = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(`${content.current?.scrollHeight}px`);
  const [open, setOpen] = React.useState(true);
  const [showAll, setShowAll] = React.useState(false);

  const initialDisplayData = data && data.length ? [...data].slice(0, 5) : [];
  const extendedDisplayData = data && data.length ? [...data].slice(5) : [];

  const handleClick = () => {
    setOpen(!open);
    setHeight((prev) => (prev === "0px" ? `${content.current?.scrollHeight}px` : "0px"));
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
    setHeight("auto");
  };

  return (
    <StyledStackedList>
      <Root>
        <StyledHeader>
          <StyledHeaderStart onClick={handleClick}>
            <Chevron open={open}>
              <Icon icon={faChevronRight} />
            </Chevron>
          </StyledHeaderStart>
          <Typography onClick={handleClick} variant="heading" size="xs">
            {title}
          </Typography>
          <StyledHeaderEnd>{endAdornment}</StyledHeaderEnd>
        </StyledHeader>
      </Root>
      <Collapse ref={content} height={height}>
        {initialDisplayData && initialDisplayData.length
          ? initialDisplayData.map((item) => (
              <StackedListItem
                startAdornment={item.startAdornment}
                endAdornment={item.endAdornment}
                superText={item.superText}
                subText={item.subText}
              >
                {item.children}
              </StackedListItem>
            ))
          : null}
        {showAll && extendedDisplayData && extendedDisplayData.length
          ? extendedDisplayData.map((item) => (
              <StackedListItem
                startAdornment={item.startAdornment}
                endAdornment={item.endAdornment}
                superText={item.superText}
                subText={item.subText}
              >
                {item.children}
              </StackedListItem>
            ))
          : null}
        <StackedListItem
          startAdornment={
            <StyledFooterButton onClick={handleShowAll}>
              <Typography variant="label" size="md">
                {showAll ? "Show less" : "Show all"}
              </Typography>
            </StyledFooterButton>
          }
        ></StackedListItem>
      </Collapse>
    </StyledStackedList>
  );
};

export default StackedList;
