import styled from "styled-components";

export const StyledMenuListItem = styled.div<{
  button?: boolean;
  selected?: boolean;
}>`
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.md};

  ${(props) =>
    props.button &&
    `
    cursor: pointer;

    &:hover {
      background-color: ${props.theme.palette.secondary.extraLight};
    }
  `}

  ${(props) =>
    props.selected &&
    `background-color: ${props.theme.palette.secondary.extraLight};`}
`;

export const StyledMenuListItemStart = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  align-items: center;
  justify-content: space-between;
`;

export const StyledMenuListItemEnd = styled.div``;

export default StyledMenuListItem;
