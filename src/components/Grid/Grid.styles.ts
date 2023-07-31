import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.spacing.sm};
  padding: 0 ${(props) => props.theme.spacing.sm};

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
  columnSpanSm?: number /* Column span at small breakpoint */;
  columnSpanMd?: number /* Column span at medium breakpoint */;
  columnSpanLg?: number /* Column span at large breakpoint */;
}>`
  ${(props) => (props.rowSpan ? `grid-row: span ${props.rowSpan}` : "")};
  ${(props) =>
    props.columnSpan
      ? `grid-column: span ${Math.min(props.columnSpanSm || props.columnSpan, 4)}`
      : ""};

  @media (min-width: 600px) {
    ${(props) =>
      props.columnSpan
        ? `grid-column: span ${Math.min(props.columnSpanMd || props.columnSpan, 8)}`
        : ""};
  }

  @media (min-width: 1360px) {
    ${(props) =>
      props.columnSpan
        ? `grid-column: span ${Math.min(props.columnSpanLg || props.columnSpan, 12)}`
        : ""};
  }
`;
