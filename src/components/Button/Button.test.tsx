import React from "react";
import {render} from "../test-utils";
import Button from "./Button";
import "@testing-library/jest-dom/extend-expect";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "../../theming/index";

describe("StyledButton", () => {
  const renderStyledButton = (props: any) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <Button {...props}>Test Button</Button>
      </ThemeProvider>
    );
  };

  it("renders primary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "primary",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.extended.state.brandBase};
    `);
  });

  it("renders secondary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "secondary",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.extended.state.secondaryBase};
    `);
  });

  it("renders danger button", () => {
    const {getByRole} = renderStyledButton({
      variant: "danger",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.foundation.error};
    `);
  });

  it("renders text button", () => {
    const {getByRole} = renderStyledButton({
      variant: "text",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: transparent;
    `);
  });

  it("renders secondary danger button", () => {
    const {getByRole} = renderStyledButton({
      variant: "secondaryDanger",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      border-color: ${lightTheme.foundation.error};
    `);
  });

  it("expects to pick up styling", () => {
    const {getByRole} = renderStyledButton({
      style: {width: "24px"},
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("width: 24px");
  });
});
