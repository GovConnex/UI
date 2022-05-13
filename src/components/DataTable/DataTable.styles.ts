import styled from "styled-components";
import Icon from "../Icon";

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
  text-align: left;

  border-bottom: 2px solid #ebebeb;
  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
  //border-collapse: collapse;
`;

export const GcxDataTableTd = styled.td`
  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
`;

export const GcxDataTableDataCellRoot = styled.div`
  display: flex;
`;

export const GcxDataTableHeaderCellRoot = styled.div`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.spacing.md};
  color: ${(p) => p.theme.palette.gray[900]};
`;

export const GcxDataTableHeaderIcon = styled(Icon)`
  margin-right: ${(p) => p.theme.spacing.md};
`;
