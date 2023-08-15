import React, {useState, useEffect} from "react";
import {DataCellMenu, GcxDataTableDataCellRoot} from "./DataTable.styles";
import {MenuOption} from "../Menu/Menu";

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
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    let extractedText = "";
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const childProps = child.props as {children?: React.ReactNode};
        extractedText += childProps.children || "";
      } else if (typeof child === "string") {
        extractedText += child;
      }
    });
    setTextContent(extractedText.trim());
  }, [children]);

  return (
    <>
      <GcxDataTableDataCellRoot
        data-title={`${textContent}`}
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
