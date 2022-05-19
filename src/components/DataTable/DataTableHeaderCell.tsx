import React from "react";
import {
  GcxDataTableHeaderCellRoot,
  GcxDataTableHeaderIcon,
} from "./DataTable.styles";
import Icon from "../Icon";
import Typography from "../Typography";

export interface HeaderCellProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DataTableHeaderCell = ({ column }: any) => {
  // console.log("PROPS", props);
  return (
    <GcxDataTableHeaderCellRoot>
      <GcxDataTableHeaderIcon size={"sm"} icon={column.icon} />
      <Typography variant={"textMd"}>{column.displayName}</Typography>
    </GcxDataTableHeaderCellRoot>
  );
};

export default DataTableHeaderCell;
