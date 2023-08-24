import React from "react";
import {render} from "../test-utils";

import Chip from "./Chip";

import {ThemeProvider} from "styled-components";
import {lightTheme} from "../../theming/index";

describe("Chip", () => {
  const renderStyledChip = (props: any) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <Chip {...props}>Test Button</Chip>
      </ThemeProvider>
    );
  };

  it("renders default high priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "default",
      priority: "high",
    });

    const chip = getByRole("default");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.core.background.bgSecondary};
    `);
  });

  it("renders default low priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "default",
      priority: "low",
    });

    const chip = getByRole("default");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.core.background.bgSecondary};
    `);
  });

  it("renders primary high priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "primary",
      priority: "high",
    });

    const chip = getByRole("primary");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.core.content.contentBrandPrimary};
    `);
  });

  it("renders primary low priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "primary",
      priority: "low",
    });

    const chip = getByRole("primary");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.core.content.contentBrandTertiary};
    `);
  });

  it("renders info high priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "info",
      priority: "high",
    });

    const chip = getByRole("info");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.infoBase};
    `);
  });

  it("renders info low priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "info",
      priority: "low",
    });

    const chip = getByRole("info");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.infoLight};
    `);
  });

  it("renders warning high priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "warning",
      priority: "high",
    });

    const chip = getByRole("warning");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.warningBase};
    `);
  });

  it("renders warning low priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "warning",
      priority: "low",
    });

    const chip = getByRole("warning");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.warningLight};
    `);
  });

  it("renders error high priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "error",
      priority: "high",
    });

    const chip = getByRole("error");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.errorBase};
    `);
  });

  it("renders error low priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "error",
      priority: "low",
    });

    const chip = getByRole("error");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.errorLight};
    `);
  });

  it("renders success high priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "success",
      priority: "high",
    });

    const chip = getByRole("success");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.successBase};
    `);
  });

  it("renders success low priority chip", () => {
    const {getByRole} = renderStyledChip({
      role: "success",
      priority: "low",
    });

    const chip = getByRole("success");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(`
      background-color: ${lightTheme.extended.support.successLight};
    `);
  });
});
