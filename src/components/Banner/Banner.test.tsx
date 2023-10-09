import React from "react";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {ThemeProvider} from "styled-components";
import Banner, {BannerProps} from "./Banner"; // Adjust the import to your file structure
import {lightTheme} from "../../theming/index";

describe("Banner component", () => {
  const renderBanner = (props: BannerProps) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <Banner {...props} />
      </ThemeProvider>
    );
  };

  it("renders title and description", () => {
    const {getByText} = renderBanner({
      title: "Test Title",
      description: "Test Description",
      variant: "info",
    });

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
  });

  it("renders with different border colours based on variant", () => {
    const {container, rerender} = renderBanner({
      title: "Test Title",
      variant: "info",
    });

    expect(container.firstChild).toHaveStyle(`
      border-color: ${lightTheme.extended.support.infoBase};
    `);

    rerender(
      <ThemeProvider theme={lightTheme}>
        <Banner title="Test Title" variant="warning" />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle(`
      border-color: ${lightTheme.extended.support.warningBase};
    `);

    // Add more variants
  });

  it("fires primary button click event", () => {
    const mockClick = jest.fn();
    const {getByText} = renderBanner({
      title: "Test Title",
      primaryButton: {label: "Click Me", onClick: mockClick},
    });

    fireEvent.click(getByText("Click Me"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("fires secondary button click event", () => {
    const mockClick = jest.fn();
    const {getByText} = renderBanner({
      title: "Test Title",
      secondaryButton: {label: "Click Me Too", onClick: mockClick},
    });

    fireEvent.click(getByText("Click Me Too"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("fires onClose event", () => {
    const mockClose = jest.fn();
    const {getByRole} = renderBanner({
      title: "Test Title",
      onClose: mockClose,
    });

    fireEvent.click(getByRole("button", {name: /Close/i})); // Assuming the close button has a 'close' label or aria-label
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
