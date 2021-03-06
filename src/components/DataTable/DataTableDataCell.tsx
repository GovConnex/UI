import React, { useState } from "react";
import { DataCellMenu, GcxDataTableDataCellRoot } from "./DataTable.styles";
import Menu from "../Menu";
import { MenuOption } from "../Menu/Menu";

export interface DataCellProps {
  children: React.ReactNode;
  menuOptions?: MenuOption[];
  className?: string;
  onChange?: (option: MenuOption) => void;
}

// active state: purple border

const DataTableDataCell = ({
  onChange,
  menuOptions = [],
  children,
  className,
}: DataCellProps) => {
  const anchorEl = React.useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <GcxDataTableDataCellRoot
        hasDropdown={!!menuOptions.length}
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
          onOptionSelect={onChange}
          options={menuOptions}
          onClose={() => setShowMenu(false)}
        />
      ) : null}
    </>
  );
};

export default DataTableDataCell;
