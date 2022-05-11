import React from "react";
import { GcxDataTableDataCellRoot } from "./DataTable.styles";

export interface DataCellProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

// active state: purple border

const DataTableDataCell = ({
  onSelect,
  children,
  className,
}: DataCellProps) => {
  return (
    <>
      <GcxDataTableDataCellRoot className={className}>
        {children}
      </GcxDataTableDataCellRoot>
    </>
  );
};

export default DataTableDataCell;
