import React from "react";
import {render, screen} from "../test-utils";
import "@testing-library/react";
import {fireEvent} from "@testing-library/dom";

import Input, {DebouncedInput} from "./Input";

describe("Input", () => {
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
});
