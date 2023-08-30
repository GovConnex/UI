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

  it("renders default primary button", () => {
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

  it("renders default secondary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "secondary",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.extended.state.primaryBase};
    `);
  });

  it("renders default tertiary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "tertiary",
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

  it("renders success primary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "primary",
      subtype: "success",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.extended.support.successBase};
    `);
  });

  it("renders success secondary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "secondary",
      subtype: "success",
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

  it("renders success tertiary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "tertiary",
      subtype: "success",
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

  it("renders error primary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "primary",
      subtype: "error",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.extended.support.errorBase};
    `);
  });

  it("renders error secondary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "secondary",
      subtype: "error",
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

  it("renders error tertiary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "tertiary",
      subtype: "error",
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

  it("renders warning primary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "primary",
      subtype: "warning",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.extended.support.warningBase};
    `);
  });

  it("renders warning secondary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "secondary",
      subtype: "warning",
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

  it("renders warning tertiary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "tertiary",
      subtype: "warning",
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

  it("renders info primary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "primary",
      subtype: "info",
      shape: "rect",
      size: "md",
      isLoading: false,
    });

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      background-color: ${lightTheme.extended.support.infoBase};
    `);
  });

  it("renders info secondary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "secondary",
      subtype: "info",
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

  it("renders info tertiary button", () => {
    const {getByRole} = renderStyledButton({
      variant: "tertiary",
      subtype: "info",
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
