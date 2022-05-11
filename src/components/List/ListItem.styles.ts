import styled from "styled-components";

export const StyledListItem = styled.div<{
  button?: boolean;
  selected?: boolean;
}>`
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    `
    background-color: ${props.theme.palette.secondary.extraLight};
  `}
`;

export const StyledListItemStart = styled.div`
  margin-right: ${(props) => props.theme.spacing.sm};
`;

export const StyledListItemEnd = styled.div`
  margin-left: ${(props) => props.theme.spacing.sm};
`;

export default StyledListItem;
