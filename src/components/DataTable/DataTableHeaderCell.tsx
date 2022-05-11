import React from "react";
import { GcxDataTableDataCellRoot } from "./DataTable.styles";

export interface HeaderCellProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DataTableHeaderCell = ({ onSelect }: HeaderCellProps) => {
  return <GcxDataTableDataCellRoot></GcxDataTableDataCellRoot>;
};

export default DataTableHeaderCell;
