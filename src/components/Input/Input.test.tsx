import React from "react";
import {render, screen} from "../test-utils";
import "@testing-library/react";
import {fireEvent} from "@testing-library/dom";
import Icon from "../Icon";
import {faCoffee} from "@fortawesome/pro-solid-svg-icons";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "../../theming/index";

import Input, {DebouncedInput} from "./Input";

describe("Input", () => {
  const renderInput = (props: any) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <Input {...props} />
      </ThemeProvider>
    );
  };

  test("renders the Input component", () => {
    render(<Input />);
  });

  test("renders the DebouncedInput component", () => {
    render(<DebouncedInput value="Hello world" />);

    expect(screen.getByRole("textbox")).toHaveValue("Hello world");
  });

  test("DebouncedInput doesnt trigger change immediately", () => {
    const onChange = jest.fn();

    render(<DebouncedInput value="Hello world" onChange={onChange} />);

    // Fire event to change input value
    fireEvent.change(screen.getByRole("textbox"), {
      target: {value: "Hello world 2"},
    });

    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole("textbox")).toHaveValue("Hello world 2");
  });

  test("Normal Input DOES trigger change immediately", () => {
    const onChange = jest.fn();

    render(<Input value="Hello world" onChange={onChange} />);

    // Fire event to change input value
    fireEvent.change(screen.getByRole("textbox"), {
      target: {value: "Hello world 2"},
    });

    expect(onChange).toHaveBeenCalled();
  });

  test("renders full width when set", () => {
    const {getByTestId} = renderInput({
      fullWidth: true,
    });

    const container = getByTestId("input-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle(`
      width: 100%;
    `);
  });

  test("renders startadornment when set", () => {
    const {getByTestId} = renderInput({
      startAdornment: <Icon icon={faCoffee} />,
    });

    const adornment = getByTestId("start-adornment");
    expect(adornment).toBeInTheDocument();
  });

  test("renders endadornment when set", () => {
    const {getByTestId} = renderInput({
      endAdornment: <Icon icon={faCoffee} />,
    });

    const adornment = getByTestId("end-adornment");
    expect(adornment).toBeInTheDocument();
  });

  test("renders text when hint is set", () => {
    const {getByTestId, getByText} = renderInput({
      hint: "this is a hint",
    });

    const container = getByTestId("input-container");
    expect(container).toBeInTheDocument();
    expect(getByText("this is a hint")).toBeInTheDocument();
  });

  test("renders text when label is set", () => {
    const {getByTestId, getByText} = renderInput({
      label: "this is the label",
    });

    const container = getByTestId("input-container");
    expect(container).toBeInTheDocument();
    expect(getByText("this is the label")).toBeInTheDocument();
  });

  test("renders text when error is set", () => {
    const {getByTestId, getByText} = renderInput({
      error: "this is an error",
    });

    const container = getByTestId("input-container");
    expect(container).toBeInTheDocument();
    expect(getByText("this is an error")).toBeInTheDocument();
  });

  test("checks padding when no padding is set", () => {
    const {getByTestId} = renderInput({
      noPadding: true,
    });

    const textArea = getByTestId("input");
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveStyle(`
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
    `);
  });

  test("checks padding when overriding padding is set", () => {
    const {getByTestId} = renderInput({
      overridePadding: "xs",
      noPadding: true,
    });

    const textArea = getByTestId("input");
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveStyle(`
      padding-left: ${lightTheme.spacing.xs};
      padding-right: ${lightTheme.spacing.xs};
      padding-top: ${lightTheme.spacing.xs};
      padding-bottom: ${lightTheme.spacing.xs};
    `);
  });
});
