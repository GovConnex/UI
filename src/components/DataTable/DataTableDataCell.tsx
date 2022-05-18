import React, { useState } from "react";
import { DataCellMenu, GcxDataTableDataCellRoot } from "./DataTable.styles";
import Menu from "../Menu";
import { MenuOption } from "../Menu/Menu";

export interface DataCellProps {
  children: React.ReactNode;
  menuOptions?: MenuOption[];
  className?: string;
  onSelect?: () => void;
}

// active state: purple border

const DataTableDataCell = ({
  onSelect,
  menuOptions = [],
  children,
  className,
}: DataCellProps) => {
  const anchorEl = React.useRef(null);
  const [showMenu, setShowMenu] = useState(false);


  return (
    <>
      <GcxDataTableDataCellRoot
        ref={anchorEl}
        className={className}
        onClick={() => setShowMenu(!showMenu)}
      >
        {children}
      </GcxDataTableDataCellRoot>
      {showMenu && menuOptions?.length ? (
        <DataCellMenu
          placement="bottom"
          anchorEl={anchorEl}
          onOptionSelect={onSelect}
          options={menuOptions}
          onClose={() => setShowMenu(false)}
        />
      ) : null}
    </>
  );
};

export default DataTableDataCell;
