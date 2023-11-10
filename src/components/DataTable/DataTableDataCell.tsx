import React, {useState, useEffect} from "react";
import {DataCellMenu, GcxDataTableDataCellRoot} from "./DataTable.styles";
import {MenuOption, MenuProps} from "../Menu/Menu";

export interface DataCellProps {
  children: React.ReactNode;
  menuOptions?: MenuOption[];
  menuProps?: MenuProps;
  className?: string;
  onChange?: (option: MenuOption) => void;
  onClick?: () => void;
}

// active state: purple border

const DataTableDataCell = ({
  onChange,
  onClick,
  menuOptions = [],
  menuProps,
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
        hasDropdown={!!onClick || !!menuOptions.length || !!menuProps?.options}
        ref={anchorEl}
        className={className + " " + (showMenu ? "showMenu" : "")}
        onClick={() => {
          if (onClick) {
            onClick();
          }
          setShowMenu(!showMenu);
        }}
      >
        {children}
      </GcxDataTableDataCellRoot>
      {showMenu && (menuOptions?.length || menuProps?.options) ? (
        <DataCellMenu
          placement="bottom-start"
          anchorEl={anchorEl}
          options={menuOptions}
          {...menuProps}
          onOptionSelect={(option: any) => {
            onChange && onChange(option);
            menuProps?.onOptionSelect && menuProps.onOptionSelect(option);
          }}
          onClose={() => {
            if (menuProps?.onClose) {
              menuProps.onClose();
            }
            setShowMenu(false);
          }}
        />
      ) : null}
    </>
  );
};

export default DataTableDataCell;
