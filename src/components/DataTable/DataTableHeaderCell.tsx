import React from "react";
import {
  GcxDataTableHeaderCellRoot,
  GcxDataTableHeaderIcon,
  GcxDataTableHeaderSortIcon,
} from "./DataTable.styles";
import Typography from "../Typography";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowDown, faArrowUp} from "@fortawesome/pro-solid-svg-icons";

// Add the FontAwesome icons to the library
library.add(faArrowDown, faArrowUp);

export interface HeaderCellProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DataTableHeaderCell = ({column}: any) => {
  return (
    <GcxDataTableHeaderCellRoot>
      {column.icon ? <GcxDataTableHeaderIcon size={"sm"} icon={column.icon} /> : null}
      <Typography variant="label" size="md" noMargin>
        {column.displayName}
      </Typography>
      {column.canSort && column.isSorted ? (
        <GcxDataTableHeaderSortIcon
          size={"lg"}
          icon={["far", column.isSortedDesc ? "arrow-up" : "arrow-down"]}
        />
      ) : null}
    </GcxDataTableHeaderCellRoot>
  );
};

export default DataTableHeaderCell;
