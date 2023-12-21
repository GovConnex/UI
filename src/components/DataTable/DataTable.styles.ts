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
export const GxcDataTableInnerWrapper = styled.div<{maxHeight?: number}>`
  overflow: auto;
  max-height: ${(p) => (p.maxHeight !== undefined ? `${p.maxHeight}px` : "auto")};
`;
export const GcxDataTable = styled.table<{fullWidth?: boolean}>`
  display: table;
  min-width: 0;
  background-color: ${(p) => p.theme.primary.base.white};
  border-collapse: collapse;
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  position: relative;
`;

export const GcxDataTableThead = styled.thead`
  min-width: 0;
  position: sticky;
  top: 0px;
  z-index: 1;
  background: ${(p) => p.theme.primary.base.white};
`;

export const GcxDataTableTbody = styled.tbody`
  min-width: 0;
`;

export const GcxDataTableTr = styled.tr<{onClick?: any}>`
  min-width: 0;
  border-bottom: 1px solid #ebebeb;

  &:last-child {
    border-bottom: none;
  }

  ${(p) =>
    p.onClick &&
    `
    cursor: pointer;

    &:hover {
      background-color: ${p.theme.core.background.bgSecondary};
    }
  `}
`;

export const GcxDataTableTh = styled.th<{width?: string}>`
  min-width: 0;
  user-select: none;
  text-align: left;
  border-bottom: 1px solid #ebebeb;
  position: sticky;
  top: 0;
`;

export const GcxDataTableTd = styled.td`
  min-width: 0;
`;

// Data cell styles

export const GcxDataTableDataCellRoot = styled.div<{
  hasDropdown: boolean;
}>`
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  gap: ${(p) => p.theme.spacing.md};
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 40px;

  > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${(p) =>
    p.hasDropdown &&
    `
    cursor: pointer;
    &:active,
    &.showMenu {
      background: ${p.theme.core.background.bgSecondary};
      outline: ${p.theme.borderWidth.sm} solid ${p.theme.primary.base.brand};
      outline-offset: -${p.theme.borderWidth.lg};
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
  gap: ${(p) => p.theme.spacing.xs};
  padding: ${(p) => p.theme.spacing.xs} ${(p) => p.theme.spacing.sm};
  color: ${(p) => p.theme.core.content.contentSecondary};

  > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const GcxDataTableHeaderIcon = styled(Icon)`
  color: ${(p) => p.theme.primary.neutral["800"]};
  margin: 0;
  padding: 0;
`;

export const GcxDataTableHeaderSortIcon = styled(Icon)`
  color: ${(p) => p.theme.primary.neutral["800"]};
  position: absolute;
  margin: 0;
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
