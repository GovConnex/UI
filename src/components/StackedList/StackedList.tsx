import React from "react";
import {
  StyledStackedList,
  StyledHeader,
  StyledHeaderStart,
  StyledHeaderEnd,
  StyledFooterButton,
  StyledEmptyList,
  StyledScrollableWrapper,
  StyledHeaderStartWrapper,
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
   * content of the stackedList
   */
  data?: any[];

  /**
   * title or header
   */
  title?: React.ReactNode;

  /**
   * message when stackedlist is empty
   */
  emptyContentMessage?: string;

  /**
   * element at the end of the stackedlist header
   */
  endAdornment?: React.ReactNode;

  /**
   * indicate whether stacked list is scrollable or not
   */
  isScrollable?: boolean;

  /**
   * indicate whether list shows all in the beginning
   */
  isShowAll?: boolean;

  /**
   * indicates item flex alignment
   */
  itemAlignment?: string;

  /**
   * indicate whether the stacked list is opened by default
   */
  isDefaultOpen?: boolean;

  /**
   * child element to be put as single item
   */
  children?: React.ReactNode;
}

/**
 *
 * `StackedList` Describe what it does
 *
 * Component Demo: [StackedList](https://ui.govconnex.com/?path=/story/components-StackedList--example)
 *
 */
export const StackedList = ({
  data,
  title,
  isScrollable,
  emptyContentMessage,
  endAdornment,
  isShowAll,
  itemAlignment,
  isDefaultOpen = true,
  children,
}: StackedListProps) => {
  // Get the height of the content
  const content = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(isDefaultOpen ? "auto" : "0px");
  const [open, setOpen] = React.useState(isDefaultOpen);
  const [showAll, setShowAll] = React.useState(isShowAll);

  const initialDisplayData =
    data && data.length ? (isScrollable ? data : [...data].slice(0, 5)) : [];

  const extendedDisplayData =
    data && data.length ? (isScrollable ? [] : [...data].slice(5)) : [];

  const handleClick = () => {
    setOpen(!open);
    setHeight((prev) => (prev === "0px" ? "auto" : "0px"));
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
    setHeight("auto");
  };

  return (
    <StyledStackedList>
      <Root>
        <StyledHeader>
          <StyledHeaderStartWrapper onClick={handleClick}>
            <StyledHeaderStart data-testid="chevron">
              <Chevron open={open}>
                <Icon icon={faChevronRight} />
              </Chevron>
            </StyledHeaderStart>
            <Typography variant="heading" size="xs">
              {title}
            </Typography>
          </StyledHeaderStartWrapper>
          <StyledHeaderEnd>{endAdornment}</StyledHeaderEnd>
        </StyledHeader>
      </Root>
      <Collapse ref={content} height={height} data-testid="collapse">
        {children ? <StyledScrollableWrapper>{children}</StyledScrollableWrapper> : null}
        {initialDisplayData && initialDisplayData.length ? (
          isScrollable ? (
            <StyledScrollableWrapper>
              {initialDisplayData.map((item) => (
                <StackedListItem
                  startAdornment={item.startAdornment}
                  endAdornment={item.endAdornment}
                  superText={item.superText}
                  subText={item.subText}
                  itemAlignment={itemAlignment}
                >
                  {item.children}
                </StackedListItem>
              ))}
            </StyledScrollableWrapper>
          ) : (
            initialDisplayData.map((item) => (
              <StackedListItem
                startAdornment={item.startAdornment}
                endAdornment={item.endAdornment}
                superText={item.superText}
                subText={item.subText}
                itemAlignment={itemAlignment}
              >
                {item.children}
              </StackedListItem>
            ))
          )
        ) : (
          !children && (
            <StyledEmptyList data-testid="empty-state">
              <Typography variant="label" size="md">
                {emptyContentMessage || "No content to be displayed"}
              </Typography>
            </StyledEmptyList>
          )
        )}
        {showAll && extendedDisplayData && extendedDisplayData.length
          ? extendedDisplayData.map((item) => (
              <StackedListItem
                startAdornment={item.startAdornment}
                endAdornment={item.endAdornment}
                superText={item.superText}
                subText={item.subText}
                itemAlignment={itemAlignment}
              >
                {item.children}
              </StackedListItem>
            ))
          : null}
        {data &&
        data.length &&
        extendedDisplayData &&
        extendedDisplayData.length &&
        !isScrollable ? (
          <StackedListItem
            isShowAll={true}
            data-testid="show-all"
            itemAlignment={itemAlignment}
          >
            <StyledFooterButton>
              <Typography variant="label" size="md" onClick={handleShowAll}>
                {showAll ? "Show less" : "Show all"}
              </Typography>
            </StyledFooterButton>
          </StackedListItem>
        ) : null}
      </Collapse>
    </StyledStackedList>
  );
};

export {default as StackedListItem} from "./StackedListItem";
