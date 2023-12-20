import React, {useCallback, useEffect} from "react";
import Checkbox from "../Checkbox";
import {
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
  // @ts-ignore
} from "react-table";
import classNames from "classnames";
import {
  GcxDataTable,
  GcxDataTablePagination,
  GcxDataTableRoot,
  GcxDataTableTbody,
  GcxDataTableTd,
  GcxDataTableTh,
  GcxDataTableThead,
  GcxDataTableTr,
  GcxDataTableWrapper,
  Resizer,
  ResizerDrag,
} from "./DataTable.styles";
import DataTableDataCell from "./DataTableDataCell";
import DataTableHeaderCell from "./DataTableHeaderCell";
import {MenuOption, MenuProps} from "../Menu/Menu";

export interface DataTableProps {
  /**
   * Array of untyped objects to display as data in the table
   */
  data: any[];
  /**
   * Class name to apply to the root element
   */
  className?: string;
  /**
   * Number of results for use in pagination.
   */
  numResults?: number;
  /**
   * Objects defining the columns to display in the table.
   */
  columns: any[];
  /**
   * Callback for when the sort changes.
   */
  onChangeSort?: (column: any) => void;
  /**
   * Size of the page for use in pagination.
   */
  pageSize?: number;
  /**
   * Page number for use in pagination.
   */
  page?: number;
  /**
   * List of columns to sort by initially.
   */
  initialSortBy?: any[];
  /**
   * Callback for when the pagination changes.
   */
  onPaginationChange?: (input: {page: any; pageSize: number}) => void;
  /**
   * Callback for when the selected ids change.
   */
  onSelectedIdsChange?: (ids: string[]) => void;
  /**
   * Whether to show the pagination. Defaults to true.
   * @default true
   */
  showPagination?: boolean;
  /**
   * Whether to show the selection checkbox. Defaults to true.
   * @default true
   */
  showSelection?: boolean;
  /**
   * Whether the table should grow to fill its container. Defaults to false.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Action rows to display at the bottom of the table.
   */
  actionRows?: DataTableActionRowProps[];

  /**
   * Data-cy attribute to apply to each row.
   */
  "data-cy-row"?: string | ((row: any) => string);

  /**
   * Callback for when row is clicked.
   */
  onRowClick?: (dataItem: any) => void;
}

export interface DataTableActionRowProps {
  children: React.ReactNode;
  onChange?: (option: MenuOption) => void;
  onClick?: () => void;
  menuProps?: MenuProps;
}

/**
 * Data table built from react-table. It supports pagination, sorting, selection, and resizing.
 *
 * @param param0
 * @returns
 */
const DataTable = ({
  data,
  numResults: numResultsProp,
  columns,
  onChangeSort, // If provided sort is manual (for server side)
  pageSize: pageSizeProp,
  page: pageProp,
  initialSortBy,
  onPaginationChange: onPaginationChangeProp, // If provided pagination is manual (for server side)
  onSelectedIdsChange: onSelectedIdsChangeProp,
  className,
  showPagination = true,
  showSelection = true,
  fullWidth = true,
  actionRows = [],
  "data-cy-row": dataCyRow,
  onRowClick,
}: DataTableProps) => {
  const manualSortBy = !!onChangeSort;
  const manualPagination = !!onPaginationChangeProp;

  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 500, // maxWidth is only used as a limit for resizing
    }),
    []
  );

  // Documentation exists here:
  // https://github.com/TanStack/table/blob/v7/docs/src/pages/docs/api/useTable.md#column-options
  // @ts-ignore
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page: pageRows,
    prepareRow,
    state: {
      sortBy,
      pageIndex: dataTablePageIndex,
      pageSize: dataTablePageSize,
      selectedRowIds,
    },
    gotoPage,
    setPageSize: setDataTablePageSize,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      manualSortBy,
      manualPagination,
      initialState: {
        sortBy: initialSortBy || [],
        pageIndex: manualPagination && pageProp ? pageProp - 1 : 0,
        pageSize: manualPagination ? pageSizeProp : 25,
      },
    },
    useResizeColumns,
    useSortBy,
    usePagination,
    useFlexLayout,
    useRowSelect,
    (hooks: any) => {
      hooks.visibleColumns.push((columns: any) =>
        [
          /// Let's make a column for selection
          showSelection !== false
            ? {
                id: "selection",
                // The header can use the table's getToggleAllRowsSelectedProps method
                // to render a checkbox
                Header: ({getToggleAllRowsSelectedProps}: any) => (
                  <DataTableDataCell
                    children={<Checkbox {...getToggleAllRowsSelectedProps()} />}
                  ></DataTableDataCell>
                ),
                // The cell can use the individual row's getToggleRowSelectedProps method
                // to the render a checkbox
                Cell: ({row}: any) => (
                  <DataTableDataCell
                    children={<Checkbox {...row.getToggleRowSelectedProps()} />}
                  ></DataTableDataCell>
                ),
                defaultCanSort: false,
                maxWidth: 0,
                minWidth: 40,
                width: 40,
              }
            : null,
          ...columns.map((column: any) => ({
            ...column,
            isResizable: column.isResizable !== undefined ? column.isResizable : true,
          })),
        ].filter(Boolean)
      );
      hooks.useInstanceBeforeDimensions.push(({headerGroups}: any) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0];
        const selectionGroupHeader2 = headerGroups[0].headers[1];
        if (selectionGroupHeader) selectionGroupHeader.isResizable = false;
        if (selectionGroupHeader2) selectionGroupHeader2.isResizable = false;
      });
    }
    // useResizeColumns
  );

  const numResults = manualPagination ? numResultsProp : data.length;
  const page = manualPagination ? pageProp : dataTablePageIndex + 1;
  const pageSize = manualPagination ? pageSizeProp : dataTablePageSize;

  useEffect(() => {
    if (onChangeSort) {
      if (sortBy.length > 0) {
        const column = columns.find((c) => c.id === sortBy[0].id);
        onChangeSort([{...sortBy[0], ...column}]);
      }
    }
  }, [onChangeSort, sortBy, columns]);

  const onPaginationChange = useCallback(
    (pageInfo) => {
      if (manualPagination) {
        onPaginationChangeProp(pageInfo);
      } else {
        gotoPage(pageInfo.page - 1);
        setDataTablePageSize(pageInfo.pageSize);
      }
    },
    [manualPagination, gotoPage, setDataTablePageSize, onPaginationChangeProp]
  );

  useEffect(() => {
    if (onSelectedIdsChangeProp && typeof selectedRowIds === "object") {
      onSelectedIdsChangeProp(
        Object.keys(selectedRowIds)
          .map((rowIndex: any) => data[rowIndex]?.id)
          ?.filter(Boolean) || []
      );
    }
    // IMPORTANT — Should only trigger when selectedRowIds changes
    // Do not put anything else in the dependency array
  }, [selectedRowIds]);

  return (
    <GcxDataTableRoot className={classNames(className)}>
      <GcxDataTableWrapper fullWidth={fullWidth}>
        <GcxDataTable fullWidth={fullWidth} {...getTableProps()}>
          <GcxDataTableThead>
            {headerGroups.map((headerGroup: any) => (
              <GcxDataTableTr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <GcxDataTableTh width={column?.width} {...column.getHeaderProps()}>
                    <div {...column.getSortByToggleProps()}>
                      {" "}
                      {column.render("Header")}
                    </div>

                    {column.isResizable ? (
                      <Resizer
                        {...column.getResizerProps()}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="isResizing"
                      >
                        <ResizerDrag />
                      </Resizer>
                    ) : null}
                  </GcxDataTableTh>
                ))}
              </GcxDataTableTr>
            ))}
          </GcxDataTableThead>
          <GcxDataTableTbody {...getTableBodyProps()}>
            {(manualPagination ? rows : pageRows).map((row: any) => {
              prepareRow(row);
              return (
                <GcxDataTableTr
                  {...row.getRowProps()}
                  onClick={
                    onRowClick
                      ? () => {
                          onRowClick(row);
                        }
                      : undefined
                  }
                  data-cy={
                    typeof dataCyRow === "string"
                      ? dataCyRow
                      : typeof dataCyRow === "function"
                      ? dataCyRow(row)
                      : undefined
                  }
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <GcxDataTableTd
                        width={cell?.column?.width}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </GcxDataTableTd>
                    );
                  })}
                </GcxDataTableTr>
              );
            })}
            {actionRows?.map((actionRow, idx) => (
              <GcxDataTableTr key={idx}>
                <GcxDataTableTd>
                  <DataTableDataCell
                    onClick={actionRow?.onClick}
                    onChange={actionRow?.onChange}
                    menuProps={actionRow?.menuProps}
                    children={actionRow?.children}
                  />
                </GcxDataTableTd>
              </GcxDataTableTr>
            ))}
          </GcxDataTableTbody>
        </GcxDataTable>
        {/* Pagination shown by default, but can be hidden */}
        {showPagination !== false && (
          <GcxDataTablePagination
            itemsPerPage={pageSize}
            itemsPerPageOptions={[25, 50, 100]}
            page={page}
            totalItems={numResults || 0}
            onItemsPerPageChange={(newPageSize) =>
              onPaginationChange({page, pageSize: newPageSize})
            }
            onPageChange={(newPage) => onPaginationChange({page: newPage, pageSize})}
          />
        )}
        {/*</div>*/}
      </GcxDataTableWrapper>
    </GcxDataTableRoot>
  );
};

DataTable.DataCell = DataTableDataCell;
DataTable.HeaderCell = DataTableHeaderCell;

export default DataTable;
