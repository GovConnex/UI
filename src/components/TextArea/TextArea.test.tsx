import React from "react";
import {render} from "../test-utils";
import Icon from "../Icon";
import {faCoffee} from "@fortawesome/pro-solid-svg-icons";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "../../theming/index";
import TextArea from "./TextArea";

describe("TextArea", () => {
  const renderTextArea = (props: any) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <TextArea {...props} />
      </ThemeProvider>
    );
  };

  test("renders the TextArea component", () => {
    render(<TextArea />);
  });

  test("renders full width when set", () => {
    const {getByTestId} = renderTextArea({
      fullWidth: true,
    });

    const container = getByTestId("text-area-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle(`
      width: 100%;
    `);
  });

  test("renders startadornment when set", () => {
    const {getByTestId} = renderTextArea({
      startAdornment: <Icon icon={faCoffee} />,
    });

    const adornment = getByTestId("start-adornment");
    expect(adornment).toBeInTheDocument();
  });

  test("renders endadornment when set", () => {
    const {getByTestId} = renderTextArea({
      endAdornment: <Icon icon={faCoffee} />,
    });

    const adornment = getByTestId("end-adornment");
    expect(adornment).toBeInTheDocument();
  });

  test("renders text when hint is set", () => {
    const {getByTestId, getByText} = renderTextArea({
      hint: "this is a hint",
    });

    const container = getByTestId("text-area-container");
    expect(container).toBeInTheDocument();
    expect(getByText("this is a hint")).toBeInTheDocument();
  });

  test("renders text when label is set", () => {
    const {getByTestId, getByText} = renderTextArea({
      label: "this is the label",
    });

    const container = getByTestId("text-area-container");
    expect(container).toBeInTheDocument();
    expect(getByText("this is the label")).toBeInTheDocument();
  });

  test("renders text when error is set", () => {
    const {getByTestId, getByText} = renderTextArea({
      error: "this is an error",
    });

    const container = getByTestId("text-area-container");
    expect(container).toBeInTheDocument();
    expect(getByText("this is an error")).toBeInTheDocument();
  });

  test("checks padding when no padding is set", () => {
    const {getByTestId} = renderTextArea({
      noPadding: true,
    });

    const textArea = getByTestId("text-area");
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveStyle(`
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
    `);
  });

  test("checks adornment color when it is set", () => {
    const {getByTestId} = renderTextArea({
      adornmentColor: "red",
      startAdornment: <Icon icon={faCoffee} />,
    });

    const adornment = getByTestId("start-adornment");
    expect(adornment).toBeInTheDocument();
    expect(adornment).toHaveStyle(`
      color: red;
    `);
  });

  test("checks padding when overriding padding is set", () => {
    const {getByTestId} = renderTextArea({
      overridePadding: "xs",
      noPadding: true,
    });

    const textArea = getByTestId("text-area");
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveStyle(`
      padding-left: ${lightTheme.spacing.xs};
      padding-right: ${lightTheme.spacing.xs};
      padding-top: ${lightTheme.spacing.xs};
      padding-bottom: ${lightTheme.spacing.xs};
    `);
  });
});
