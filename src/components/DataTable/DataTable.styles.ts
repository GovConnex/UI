import styled from "styled-components";

export const GcxDataTableRoot = styled.div`
`;
export const GcxDataTableWrapper = styled.div`
  border: 1px solid #EBEBEB;
  border-radius: 5px;
  overflow: hidden;
  
  
`;
export const GcxDataTable = styled.table`
  background-color: ${p => p.theme.palette.background.default};
  border-collapse: collapse;
`;

export const GcxDataTableThead = styled.thead``;

export const GcxDataTableTbody = styled.tbody``;

export const GcxDataTableTr = styled.tr`
  :not(:last-child) {
    border-bottom: 1px solid #EBEBEB;
  }
`;

export const GcxDataTableTh = styled.th`
  text-align: left;
  padding: ${p => p.theme.spacing.md};
  border-bottom: 2px solid #EBEBEB;
  :not(:last-child) { 
    border-right: 1px solid #EBEBEB;
  }
  //border-collapse: collapse;
`;

export const GcxDataTableTd = styled.td`
  //& > * {
    padding: ${p => p.theme.spacing.md};
  //}
  
  :not(:last-child) {
    border-right: 1px solid #EBEBEB;
  }
  
  //border: 1px solid #EBEBEB;
  //border-collapse: collapse;
`;