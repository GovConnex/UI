import React from "react";
import StyledStackedListItem, {
  StyledStackedListItemEnd,
  StyledStackedListItemStart,
  StyledSubTypography,
  StyledChildTypography,
  StyledTextWrapper,
} from "./StackedListItem.styles";
import {customStyles} from "../../core/styleFunctions";

interface StackedListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  superText?: React.ReactNode;
  subText?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  "data-cy"?: string;
  cs?: customStyles;
  isShowAll?: boolean;
  itemAlignment?: string;
}

export const StackedListItem: React.FC<StackedListItemProps> = ({
  children,
  className,
  startAdornment,
  endAdornment,
  superText,
  subText,
  cs,
  isShowAll,
  itemAlignment,
  ...props
}) => {
  return (
    <StyledStackedListItem
      isShowAll={isShowAll}
      itemAlignment={itemAlignment}
      cs={cs}
      {...props}
      data-cy={props["data-cy"]}
      className={className}
    >
      <StyledStackedListItemStart>{startAdornment}</StyledStackedListItemStart>
      <StyledTextWrapper>
        <StyledSubTypography variant="body" size="sm" noMargin>
          {superText}
        </StyledSubTypography>
        {superText ? <br /> : null}
        <StyledChildTypography variant="label" size="md" noMargin>
          {children}
        </StyledChildTypography>
        {children ? <br /> : null}
        <StyledSubTypography variant="body" size="sm" noMargin>
          {subText}
        </StyledSubTypography>
      </StyledTextWrapper>
      <StyledStackedListItemEnd>{endAdornment}</StyledStackedListItemEnd>
    </StyledStackedListItem>
  );
};

export default StackedListItem;
