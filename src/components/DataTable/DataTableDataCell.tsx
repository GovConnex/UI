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
      if (typeof child === "string") {
        extractedText += child;
      } else if (React.isValidElement(child)) {
        const childProps = child.props as {children?: React.ReactNode};
        const childText = extractTextFromComponent(childProps.children);
        extractedText += childText;
      }
    });
    setTextContent(extractedText.trim());
  }, [children]);

  // Helper function to extract text from components
  function extractTextFromComponent(component: React.ReactNode): string {
    if (typeof component === "string") {
      return component;
    } else if (Array.isArray(component)) {
      return component.map(extractTextFromComponent).join("");
    } else if (React.isValidElement(component)) {
      const childProps = component.props as {children?: React.ReactNode};
      return extractTextFromComponent(childProps.children);
    }
    return "";
  }

  return (
    <>
      <GcxDataTableDataCellRoot
        title={textContent}
        hasDropdown={!!menuOptions.length}
        ref={anchorEl}
        className={className}
        onClick={() => setShowMenu(!showMenu)}
      >
        {children}
      </GcxDataTableDataCellRoot>
      {showMenu && menuOptions?.length ? (
        <DataCellMenu
          placement="bottom-start"
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
