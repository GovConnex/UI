import React, { useCallback, useEffect, useState } from "react";

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
  GcxDataTableRoot,
  GcxDataTableTbody,
  GcxDataTableTd,
  GcxDataTableTh,
  GcxDataTableThead,
  GcxDataTableTr,
  GcxDataTableWrapper,
} from "./DataTable.styles";
import DataTableDataCell from "./DataTableDataCell";
import DataTableHeaderCell from "./DataTableHeaderCell";

// Data table built from react-table. Pagination, sortby etc can be SS or CS

const uuid = require("uuid/v4");

// const SelectionCheckbox = React.forwardRef((props, ref) => {
//   const [id] = useState(uuid());
//   const defaultRef = React.useRef();
//   const resolvedRef = ref || defaultRef;
//   return (
//     <>
//       {/*<Checkbox*/}
//       {/*  ref={resolvedRef}*/}
//       {/*  {...props}*/}
//       {/*  id={"DataTableCheckbox-" + id}*/}
//       {/*  onChange={(...params) => {*/}
//       {/*    // onChange is passed as third param to Carbon Checkbox's onChange, normally 1st*/}
//       {/*    props.onChange(params[2]);*/}
//       {/*  }}*/}
//       {/*/>*/}
//     </>
//   );
// });

export interface DataTableProps {
  data: any[];
  className?: string;
  numResults?: number;
  columns: any[];
  onChangeSort?: (column: any) => void;
  pageSize?: number;
  page: number;
  initialSortBy?: any[];
  onPaginationChange?: (input: { page: any; pageSize: number }) => void;
  onSelectedIdsChange?: (ids: string[]) => void;
}

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
}: DataTableProps) => {
  const manualSortBy = !!onChangeSort;
  const manualPagination = !!onPaginationChangeProp;

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
      manualSortBy,
      manualPagination,
      initialState: {
        sortBy: initialSortBy || [],
        pageIndex: manualPagination ? pageProp - 1 : 0,
        pageSize: manualPagination ? pageSizeProp : 25,
      },
    },
    useResizeColumns,
    useSortBy,
    usePagination,
    useFlexLayout,
    useRowSelect,
    (hooks: any) => {
      hooks.visibleColumns.push((columns: any) => [
        /// Let's make a column for selection
        // {
        //   id: "selection",
        //   // The header can use the table's getToggleAllRowsSelectedProps method
        //   // to render a checkbox
        //   Header: ({getToggleAllRowsSelectedProps}: any) => (
        //     <div>
        //       <SelectionCheckbox {...getToggleAllRowsSelectedProps()} />
        //     </div>
        //   ),
        //   // The cell can use the individual row's getToggleRowSelectedProps method
        //   // to the render a checkbox
        //   Cell: ({row}: any) => (
        //     <div>
        //       <SelectionCheckbox {...row.getToggleRowSelectedProps()} />
        //     </div>
        //   ),
        //   defaultCanSort: false,
        //   maxWidth: 0,
        //   minWidth: 40,
        //   width: 40,
        // },
        ...columns,
      ]);
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }: any) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0];
        const selectionGroupHeader2 = headerGroups[0].headers[1];
        if (selectionGroupHeader) selectionGroupHeader.canResize = false;
        if (selectionGroupHeader2) selectionGroupHeader2.canResize = false;
      });
    }
    // useResizeColumns
  );

  const numResults = manualPagination ? numResultsProp : data.length;
  const page = manualPagination ? pageProp : dataTablePageIndex + 1;
  const pageSize = manualPagination ? pageSizeProp : dataTablePageSize;

  useEffect(() => {
    if (onChangeSort) {
      onChangeSort(sortBy);
    }
  }, [onChangeSort, sortBy]);

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
    const selectedRowsStillPresent = Object.keys(selectedRowIds).every(
      (rowIndex: any) => data[rowIndex]
    );
    if (onSelectedIdsChangeProp && selectedRowsStillPresent)
      onSelectedIdsChangeProp(
        Object.keys(selectedRowIds).map((rowIndex: any) => data[rowIndex].id)
      );
  }, [selectedRowIds, onSelectedIdsChangeProp, data]);

  // if (loading) return <InlineLoading />;
  return (
    <GcxDataTableRoot
      className={classNames(className)}
    >
      <GcxDataTableWrapper>
        <GcxDataTable
          {...getTableProps()}
        >
          <GcxDataTableThead>
            {headerGroups.map((headerGroup: any) => (
              <GcxDataTableTr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <GcxDataTableTh
                    {...column.getHeaderProps()}
                  >
                    <div {...column.getSortByToggleProps()}>
                      {" "}
                      {column.render("Header")}
                      {/*{column.id !== "PROFILE_IMAGE" && column.canSort ? (*/}
                      {/*  <>*/}
                      {/*    {column.isSorted ? (*/}
                      {/*      <Icon*/}
                      {/*        color={"palette.primary.main"}*/}
                      {/*        icon={column.isSortedDesc ? "chevron-up" : "chevron-down"}*/}
                      {/*        style={{*/}
                      {/*          marginRight: 15,*/}
                      {/*          height: 12,*/}
                      {/*          display: "inline",*/}
                      {/*        }}*/}
                      {/*      />*/}
                      {/*    ) : null}*/}
                      {/*  </>*/}
                      {/*) : null}*/}
                    </div>

                    {column.canResize ? (
                      <div
                        {...column.getResizerProps()}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className={`resizer ${
                          column.isResizing ? "isResizing" : ""
                        }`}
                      >
                        <div className={"resizer-panel"} />
                      </div>
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
                <GcxDataTableTr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <GcxDataTableTd {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </GcxDataTableTd>
                    );
                  })}
                </GcxDataTableTr>
              );
            })}
          </GcxDataTableTbody>
        </GcxDataTable>
      </GcxDataTableWrapper>
      {/*<div className={"govconnex-data-table-pagination"}>*/}
      {/*<Pagination*/}
      {/*  pageSize={pageSize}*/}
      {/*  pageSizes={[25, 50, 100]}*/}
      {/*  page={page}*/}
      {/*  totalItems={numResults}*/}
      {/*  onChange={onPaginationChange}*/}
      {/*/>*/}
      {/*</div>*/}
    </GcxDataTableRoot>
  );
};

DataTable.DataCell = DataTableDataCell;
DataTable.HeaderCell = DataTableHeaderCell;

export default DataTable;
