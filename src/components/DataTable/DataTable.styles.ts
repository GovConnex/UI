import styled from "styled-components";
import Icon from "../Icon";
import Menu from "../Menu";
import Pagination from "../Pagination";

export const GcxDataTableRoot = styled.div``;
export const GcxDataTableWrapper = styled.div<{fullWidth?: boolean}>`
  border: 1px solid #ebebeb;
  border-radius: 5px;
  overflow: hidden;
  overflow-x: auto;
  display: ${(p) => (p.fullWidth ? "block" : "inline-table")};
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  background: ${(p) => p.theme.primary.base.white};
`;
export const GcxDataTable = styled.table<{fullWidth?: boolean}>`
  display: table;
  min-width: 0;
  background-color: ${(p) => p.theme.primary.base.white};
  border-collapse: collapse;
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  overflow: hidden;
`;

export const GcxDataTableThead = styled.thead`
  min-width: 0;
`;

export const GcxDataTableTbody = styled.tbody`
  min-width: 0;
`;

export const GcxDataTableTr = styled.tr`
  min-width: 0;

  :not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }
`;

export const GcxDataTableTh = styled.th<{width?: string}>`
  width: ${(p) => p.width};
  min-width: 0;
  user-select: none;
  text-align: left;
  border-bottom: 1px solid #ebebeb;
  position: relative;

  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
`;

export const GcxDataTableTd = styled.td`
  min-width: 0;
  border-bottom: 1px solid #ebebeb;

  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
`;

// Data cell styles

export const GcxDataTableDataCellRoot = styled.div<{hasDropdown: boolean}>`
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  gap: ${(p) => p.theme.spacing.md};
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};

  > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${(p) =>
    p.hasDropdown &&
    `
    cursor: pointer;
    &:active {
      outline: ${p.theme.primary.base.brand} solid ${p.theme.borderWidth.lg};
    }
  `}
`;

export const DataCellMenu = styled(Menu)`
  min-width: 220px;
`;

export const GcxDataTableHeaderCellRoot = styled.div<{fullText?: string}>`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: ${(p) => p.theme.spacing.xs};
  color: ${(p) => p.theme.primary.base.black};
`;

export const GcxDataTableHeaderIcon = styled(Icon)`
  color: ${(p) => p.theme.primary.neutral["800"]};
  margin-right: ${(p) => p.theme.spacing.sm};
  margin-left: ${(p) => p.theme.spacing.xs};
`;

export const GcxDataTableHeaderSortIcon = styled(Icon)`
  color: ${(p) => p.theme.primary.neutral["800"]};
  position: absolute;
  margin-top: 4px;
  right: ${(p) => p.theme.spacing.sm};
`;

export const GcxDataTablePagination = styled(Pagination)`
  border-top: 1px solid #ebebeb;
  padding: ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.sm} 0
    ${(p) => p.theme.spacing.sm};
  background-color: ${(p) => p.theme.primary.base.white};
`;

export const ResizerDrag = styled.div`
  width: 5px;
  height: 100%;
  z-index: 1;
`;

export const Resizer = styled.div`
  cursor: col-resize;
  position: absolute;
  padding-right: 10px;
  padding-left: 10px;
  top: 0;
  right: -10px;
  bottom: 0;
  z-index: 1;

  &:hover ${ResizerDrag} {
    background-color: ${(p) => p.theme.primary.base.brand};
  }
`;
