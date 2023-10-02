import React from "react";
import {render} from "../test-utils";

import {StackedList} from "./StackedList";

describe("StackedList", () => {
  const renderStackedList = (props: any) => {
    return render(<StackedList {...props} />);
  };

  test("renders the StackedList component", () => {
    render(<StackedList />);
  });

  test("checks accordion functionality works", () => {
    const {getByTestId} = renderStackedList({
      title: "Details",
    });

    const chevron = getByTestId("chevron");
    expect(chevron).toBeInTheDocument();

    chevron.click();

    const collapse = getByTestId("collapse");
    expect(collapse).toHaveStyle(`
      height: 0px;
    `);
  });

  test("checks for empty state", () => {
    const {getByTestId} = renderStackedList({
      title: "Details",
    });

    const emptyState = getByTestId("empty-state");
    expect(emptyState).toBeInTheDocument();
  });

  test("show all button should not be visible if items are less than 5", () => {
    const {queryByText} = renderStackedList({
      title: "Details",
      data: [{children: "Test One"}, {children: "Test Two"}, {children: "Test Three"}],
    });

    const showAll = queryByText("Show all");
    expect(showAll).not.toBeInTheDocument();
  });

  test("show all should be shown when items are more than 5", () => {
    const {getByTestId} = renderStackedList({
      title: "Details",
      data: [
        {children: "Test One"},
        {children: "Test Two"},
        {children: "Test Three"},
        {children: "Test Four"},
        {children: "Test Five"},
        {children: "Test Six"},
        {children: "Test Seven"},
      ],
    });

    const showAll = getByTestId("show-all");
    expect(showAll).toBeInTheDocument();
  });
});
