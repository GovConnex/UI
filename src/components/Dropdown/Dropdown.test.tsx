import React from "react";
import {render, fireEvent, waitFor} from "../test-utils";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const options = [
    {id: "1", text: "Option 1", selected: false, category: "Category 1"},
    {id: "2", text: "Option 2", selected: true, category: "Category 1"},
    {id: "3", text: "Option 3", selected: false, category: "Category 2"},
  ];

  it("renders the Dropdown component with the label and placeholder", () => {
    const {getByText, getByPlaceholderText} = render(
      <Dropdown label="Dropdown Label" placeholder="Select an option" options={options} />
    );
    const label = getByText("Dropdown Label");
    const placeholder = getByPlaceholderText("Select an option");

    expect(label).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });

  it("opens the dropdown when the input is clicked", async () => {
    const {getByText, getByRole} = render(
      <Dropdown label="Dropdown" options={options} />
    );
    const input = getByRole("textbox");

    fireEvent.click(input);

    await waitFor(() => {
      expect(getByText("Option 1")).toBeInTheDocument();
      expect(getByText("Option 2")).toBeInTheDocument();
    });
  });

  it("selects an option and triggers onChange callback", async () => {
    const onChange = jest.fn();
    const {getByRole, getByText} = render(
      <Dropdown label="Dropdown" options={options} onChange={onChange} />
    );
    const input = getByRole("textbox");

    fireEvent.click(input);
    const option1 = getByText("Option 1");
    fireEvent.click(option1);

    expect(onChange).toHaveBeenCalledWith("1", false);
  });

  it("closes the dropdown on option selection if not multipleSelect", async () => {
    const {getByRole, getByText, queryByText} = render(
      <Dropdown label="Dropdown" options={options} />
    );
    const input = getByRole("textbox");

    fireEvent.click(input);
    const option1 = getByText("Option 1");
    fireEvent.click(option1);

    await waitFor(() => {
      expect(queryByText("Option 1")).not.toBeInTheDocument();
    });
  });

  it("renders search input when hasSearch is true", () => {
    const {getByRole} = render(<Dropdown label="Dropdown" options={options} hasSearch />);
    const input = getByRole("textbox");
    fireEvent.click(input);

    const searchInput = getByRole("searchbox");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders clear selection button when hasClearSelection is true", async () => {
    const onClearSelection = jest.fn();
    const {getByRole, getByText} = render(
      <Dropdown
        label="Dropdown"
        options={options}
        hasClearSelection
        onClearSelection={onClearSelection}
      />
    );
    const input = getByRole("textbox");
    fireEvent.click(input);

    const clearButton = getByText("Clear Selection");
    fireEvent.click(clearButton);

    expect(onClearSelection).toHaveBeenCalledTimes(1);
  });

  it("shows loading spinner when loading is true", async () => {
    const {getByText, getByRole} = render(
      <Dropdown
        label="Dropdown"
        options={options}
        loading
        loadingIndicator="inline-loading"
      />
    );
    const input = getByRole("textbox");
    fireEvent.click(input);

    await waitFor(() => {
      expect(getByText("inline-loading")).toBeInTheDocument();
    });
  });

  it("shows inputvalue in input if provided", async () => {
    const {getByRole} = render(
      <Dropdown label="Dropdown" options={options} inputValue="Super cool option" />
    );
    const input = getByRole("textbox");

    expect(input).toHaveValue("Super cool option");
  });

  it("fires event if user types in Input if onInputChange is provided", async () => {
    const onInputChange = jest.fn();
    const {getByRole} = render(
      <Dropdown label="Dropdown" options={options} onInputChange={onInputChange} />
    );
    const input = getByRole("textbox");

    fireEvent.change(input, {target: {value: "Super cool option"}});

    expect(onInputChange).toHaveBeenCalledWith(expect.anything());
  });
});
