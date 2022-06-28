import React from "react";
import { GcxDataTableDataCellRoot } from "./DataTable.styles";

export interface DataCellProps {
  children?: React.ReactNode;
  menuContent?: React.ReactNode;
  className?: string;
}

// active state: purple border

const DataTableDataCell = ({
  menuContent,
  children,
  className,
}: DataCellProps) => {
  return (
    <>
      <GcxDataTableDataCellRoot hasDropdown={!!menuContent} className={className}>
        {children}
      </GcxDataTableDataCellRoot>
    </>
  );
};

export default DataTableDataCell;
