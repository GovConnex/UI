import React from "react";
import { GcxDataTableDataCellRoot } from "./DataTable.styles";

export interface DataCellProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DataTableDataCell = ({ onSelect }: DataCellProps) => {
  return <GcxDataTableDataCellRoot></GcxDataTableDataCellRoot>;
};

export default DataTableDataCell;
