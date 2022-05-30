import React from "react";
import {
  GcxDataTableHeaderCellRoot,
  GcxDataTableHeaderIcon, GcxDataTableHeaderSortIcon,
} from "./DataTable.styles";
import Icon from "../Icon";
import Typography from "../Typography";

export interface HeaderCellProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DataTableHeaderCell = ({ column }: any) => {
  return (
    <GcxDataTableHeaderCellRoot>
      <GcxDataTableHeaderIcon size={"sm"} icon={column.icon} />
      <Typography variant={"textMd"}>{column.displayName}</Typography>
      {column.canSort && column.isSorted ? (
        <GcxDataTableHeaderSortIcon
          size={"xs"}
          icon={["fas", column.isSortedDesc ? "arrow-up" : "arrow-down"]}
        />
      ) : null}
    </GcxDataTableHeaderCellRoot>
  );
};

export default DataTableHeaderCell;
