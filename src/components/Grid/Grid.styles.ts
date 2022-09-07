import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.sm};

  @media (min-width: 600px) {
    grid-template-columns: repeat(8, 1fr);
    gap: ${(props) => props.theme.spacing.md};
    padding: ${(props) => props.theme.spacing.lg};
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(12, 1fr);
    gap: ${(props) => props.theme.spacing.lg};
    padding: ${(props) => props.theme.spacing.xxl};
  }
`;

export const StyledGridCell = styled.div<{
  rowSpan?: number;
  columnSpan?: number;
}>`
  ${(props) => (props.rowSpan ? `grid-row: span ${props.rowSpan}` : "")};
  ${(props) =>
    props.columnSpan ? `grid-column: span ${props.columnSpan}` : ""};
`;
