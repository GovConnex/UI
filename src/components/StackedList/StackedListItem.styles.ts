import styled from "styled-components";
import Typography from "../Typography";
import {addCustomStyles, customStyles} from "../../core/styleFunctions";

export const StyledStackedListItem = styled.div<{cs?: customStyles; isShowAll?: boolean}>`
  background-color: ${(props) => props.theme.core.background.bgPrimary};
  padding: ${(props) =>
    `${props.theme.spacing["2xs"]} ${
      props.isShowAll ? props.theme.spacing.xs : props.theme.spacing.sm
    }`}};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};

  &:first-child {
    padding-top: 0px;
  }

  &:last-child {
    padding-bottom: ${(props) => (props.isShowAll ? "0px" : props.theme.spacing.sm)};
  }
  ${(cs) => addCustomStyles(cs)};
`;

export const StyledStackedListItemStart = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: center;
  vertical-align: middle;
`;

export const StyledStackedListItemEnd = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const StyledSubTypography = styled(Typography)`
  color: ${(props) => props.theme.core.content.contentTertiary};
`;

export const StyledChildTypography = styled(Typography)`
  color: ${(props) => props.theme.core.content.contentPrimary};
`;

export const StyledTextWrapper = styled.div`
  display: block;
  width: 100%;
`;

export default StyledStackedListItem;
