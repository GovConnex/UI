import styled from "styled-components";
import Icon from "../Icon";
import Menu from "../Menu";
import Pagination from "../Pagination";

export const GcxDataTableRoot = styled.div``;
export const GcxDataTableWrapper = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 5px;
  overflow: hidden;
  display: inline-table;
`;
export const GcxDataTable = styled.table`
  background-color: ${(p) => p.theme.palette.background.default};
  border-collapse: collapse;
`;

export const GcxDataTableThead = styled.thead``;

export const GcxDataTableTbody = styled.tbody``;

export const GcxDataTableTr = styled.tr`
  :not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }
`;

export const GcxDataTableTh = styled.th`
  user-select: none;
  text-align: left;
  border-bottom: 1px solid #ebebeb;
  position: relative;

  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }

  //border-collapse: collapse;
`;

export const GcxDataTableTd = styled.td`
  height: 45px;

  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
`;

// Data cell styles

export const GcxDataTableDataCellRoot = styled.div<{ hasDropdown: boolean }>`
  display: flex;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  gap: ${(p) => p.theme.spacing.md};
  padding: ${(p) => p.theme.spacing.md};

  ${(p) => p.hasDropdown && `
  cursor: pointer;
  &:active {
    outline: ${p.theme.palette.primary.main} solid ${p.theme.borderWidth.lg};
  }
  `}
`;

export const DataCellMenu = styled(Menu)`
  min-width: 220px;
`;

export const GcxDataTableHeaderCellRoot = styled.div`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.spacing.md};
  color: ${(p) => p.theme.palette.gray[900]};
`;

export const GcxDataTableHeaderIcon = styled(Icon)`
  color: ${(p) => p.theme.palette.text.secondary};
  margin-right: ${(p) => p.theme.spacing.md};
`;

export const GcxDataTableHeaderSortIcon = styled(Icon)`
  color: ${(p) => p.theme.palette.text.secondary};
  margin-left: ${(p) => p.theme.spacing.md};
`;

export const GcxDataTablePagination = styled(Pagination)`
  margin-top: ${(p) => p.theme.spacing.md};
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
    background-color: ${(p) => p.theme.palette.primary.main};
  }
`;