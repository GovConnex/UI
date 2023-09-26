import React from "react";
import {
  StyledStackedList,
  StyledHeader,
  StyledHeaderStart,
  StyledHeaderEnd,
  StyledFooterButton,
} from "./StackedList.styles";
import {StackedListItem} from "./StackedListItem";
import Typography from "../Typography";
import Icon from "../Icon";
import Button from "../Button";
import {faChevronDown, faChevronRight} from "@fortawesome/pro-regular-svg-icons";

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
  return (
    <StyledStackedList>
      <StyledHeader>
        <StyledHeaderStart>
          <Icon icon={faChevronDown}></Icon>
        </StyledHeaderStart>
        <Typography variant="heading" size="xs">
          {title}
        </Typography>
        <StyledHeaderEnd>{endAdornment}</StyledHeaderEnd>
      </StyledHeader>
      {data && data.length
        ? data.map((item) => (
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
          <StyledFooterButton>
            <Typography variant="label" size="md">
              Show All
            </Typography>
          </StyledFooterButton>
        }
      ></StackedListItem>
    </StyledStackedList>
  );
};

export default StackedList;
