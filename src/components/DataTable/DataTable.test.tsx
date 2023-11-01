import React from "react";
import DataTable from "./DataTable";
import DataTableHeaderCell from "./DataTableHeaderCell";
import {faContactCard, faHeart, faUser} from "@fortawesome/pro-solid-svg-icons";
import {render, screen} from "../test-utils";
import DataTableDataCell from "./DataTableDataCell";
import Typography from "../Typography";

export const DataCell = (props: {row: {original: {value: string}}}) => {
  return (
    <DataTableDataCell>
      <Typography variant="body" size="md" noMargin>
        {props?.row?.original?.value}
      </Typography>
    </DataTableDataCell>
  );
};

const DATA_TABLE_COLUMNS = [
  {
    id: "D00",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    icon: faUser,
    displayName: "Field 1",
    canResize: true,
    accessor: "name",
    minWidth: 225,
  },
  {
    id: "D01",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    canResize: true,
    icon: faHeart,
    displayName: "Field 2",
    accessor: "value", // accessor is the "key" in the data
    minWidth: 225,
  },
  {
    id: "D02",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    icon: faContactCard,
    canResize: true,
    displayName: "Field 3",
    accessor: "type", // accessor is the "key" in the data
    minWidth: 225,
  },
];

const DATA_TABLE_COLUMNS_FIXED_WIDTH = [
  {
    id: "D00",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    icon: faUser,
    displayName: "Field 1",
    canResize: true,
    accessor: "name",
    minWidth: 225,
    width: "300px",
  },
  {
    id: "D01",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    canResize: true,
    icon: faHeart,
    displayName: "Field 2",
    accessor: "value", // accessor is the "key" in the data
    minWidth: 225,
    width: "300px",
  },
  {
    id: "D02",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    icon: faContactCard,
    canResize: true,
    displayName: "Field 3",
    accessor: "type", // accessor is the "key" in the data
    minWidth: 225,
    width: "300px",
  },
];

const DATA_TABLE_COLUMNS_WITH_RESIZE = [
  {
    id: "D00",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    icon: faUser,
    displayName: "Field 1",
    canResize: true,
    accessor: "name",
    isResizable: true,
  },
  {
    id: "D01",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    canResize: true,
    icon: faHeart,
    displayName: "Field 2",
    accessor: "value", // accessor is the "key" in the data
    isResizable: true,
  },
  {
    id: "D02",
    Header: DataTableHeaderCell,
    Cell: DataCell,
    icon: faContactCard,
    canResize: true,
    displayName: "Field 3",
    accessor: "type", // accessor is the "key" in the data
    isResizable: true,
  },
];

const DATA_TABLE_DATA = [
  {
    name: "Field 1",
    value: "Value 1",
    type: "Type 1",
  },
  {
    name: "Field 2",
    value: "Value 2",
    type: "Type 2",
  },
  {
    name: "Field 3",
    value: "Value 3",
    type: "Type 3",
  },
];

describe("DataTable", () => {
  test("renders the DataTable component with action rows", async () => {
    render(
      <DataTable
        data={DATA_TABLE_DATA}
        columns={DATA_TABLE_COLUMNS}
        showPagination={false}
        actionRows={[
          {
            children: <div>Action Row</div>,
          },
          {
            children: <div>Menu Row</div>,
            menuProps: {
              onOptionSelect(option) {
                console.log(option);
              },
              options: [
                {
                  text: "Test",
                },
              ],
            },
          },
        ]}
      />
    );

    expect(await screen.findByText(/Action Row/i, {exact: false})).toBeInTheDocument();
    expect(await screen.findByText(/Menu Row/i, {exact: false})).toBeInTheDocument();
  });

  test("renders the DataTable component with pagination", async () => {
    render(
      <DataTable
        data={DATA_TABLE_DATA}
        columns={DATA_TABLE_COLUMNS}
        pageSize={25}
        page={1}
        numResults={100}
      />
    );

    expect(await screen.findByText(/Field 1/i, {exact: false})).toBeInTheDocument();
    expect((await screen.findAllByText(/Value 1/i, {exact: false}))?.length).toBe(3);
  });

  test("renders the DataTable component without pagination", async () => {
    render(
      <DataTable
        data={DATA_TABLE_DATA}
        columns={DATA_TABLE_COLUMNS}
        showPagination={false}
      />
    );

    expect(await screen.findByText(/Field 1/i, {exact: false})).toBeInTheDocument();
    expect((await screen.findAllByText(/Value 1/i, {exact: false}))?.length).toBe(3);
  });

  test("renders the DataTable component without selection", async () => {
    render(
      <DataTable
        data={DATA_TABLE_DATA}
        columns={DATA_TABLE_COLUMNS}
        showPagination={false}
        showSelection={false}
      />
    );

    expect(await screen.findByText(/Field 1/i, {exact: false})).toBeInTheDocument();
    expect((await screen.findAllByText(/Value 1/i, {exact: false}))?.length).toBe(3);
  });

  test("renders the DataTable component without header icon", async () => {
    render(
      <DataTable
        data={DATA_TABLE_DATA}
        columns={DATA_TABLE_COLUMNS?.map((column) => {
          return {
            ...column,
            icon: undefined,
          };
        })}
        showPagination={false}
        showSelection={false}
      />
    );

    expect(await screen.findByText(/Field 1/i, {exact: false})).toBeInTheDocument();
    expect((await screen.findAllByText(/Value 1/i, {exact: false}))?.length).toBe(3);
  });

  test("renders the DataTable component and check if width is auto on full false", async () => {
    const renderTable = () => {
      return render(
        <DataTable
          data={DATA_TABLE_DATA}
          columns={DATA_TABLE_COLUMNS?.map((column) => {
            return {
              ...column,
              icon: undefined,
            };
          })}
          showPagination={false}
          showSelection={false}
          fullWidth={false}
        />
      );
    };

    const {getByRole} = renderTable();

    const table = getByRole("table");
    expect(table).toBeInTheDocument();
    expect(table).toHaveStyle("width: auto");
  });

  test("renders the DataTable component and check if column supports fixed width", async () => {
    const renderTable = () => {
      return render(
        <DataTable
          data={DATA_TABLE_DATA}
          columns={DATA_TABLE_COLUMNS_FIXED_WIDTH?.map((column) => {
            return {
              ...column,
              icon: undefined,
            };
          })}
          showPagination={false}
          showSelection={false}
        />
      );
    };

    const {getByRole} = renderTable();

    const table = getByRole("table");
    const th = table.querySelector("th");
    expect(th).toBeInTheDocument();
    expect(th).toHaveStyle("width: 300px");
  });

  test("renders the DataTable component and check if resizer is rendered", async () => {
    const renderTable = () => {
      return render(
        <DataTable
          data={DATA_TABLE_DATA}
          columns={DATA_TABLE_COLUMNS_WITH_RESIZE?.map((column) => {
            return {
              ...column,
              icon: undefined,
            };
          })}
          showPagination={false}
          showSelection={false}
        />
      );
    };

    const {getByRole} = renderTable();

    const table = getByRole("table");
    const resizer = table.querySelector(".isResizing");
    expect(resizer).toBeInTheDocument();
  });

  test("check if title attribute gets cell value", async () => {
    const renderTable = () => {
      return render(
        <DataTable
          data={DATA_TABLE_DATA}
          columns={DATA_TABLE_COLUMNS_WITH_RESIZE?.map((column) => {
            return {
              ...column,
              icon: undefined,
            };
          })}
          showPagination={false}
          showSelection={false}
        />
      );
    };

    const {getByRole} = renderTable();
    const table = getByRole("table");
    const firstDataCell = table.querySelector("tbody tr:first-child td>div");
    expect(firstDataCell).toHaveAttribute("title", "Value 1");
  });
});
