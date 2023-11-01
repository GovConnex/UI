import styled from "styled-components";

export const StyledMenuListItem = styled.div<{
  button?: boolean;
  selected?: boolean;
}>`
  background-color: ${(props) => props.theme.primary.base.white};
  padding: ${(props) => `${props.theme.spacing["2xs"]} ${props.theme.spacing.xs}`};
  color: ${(props) => props.theme.core.content.contentPrimary};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.sm};

  ${(props) =>
    props.button &&
    `
    cursor: pointer;

    &:hover, &.cursor {
      background-color: ${props.theme.primary.neutral["100"]};
    }
  `}

  ${(props) =>
    props.selected && `background-color: ${props.theme.primary.neutral["100"]};`}
`;

export const StyledMenuListItemStart = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: center;
  justify-content: space-between;
`;

export const StyledMenuListItemText = styled.div<{textWidth?: string}>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: ${(props) => (props.textWidth ? props.textWidth : "100%")};
`;

export const StyledMenuListItemEnd = styled.div``;

export default StyledMenuListItem;
