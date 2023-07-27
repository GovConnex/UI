// PopIn.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PopIn from "./PopIn";

describe("PopIn component", () => {
  test("renders children when visible", () => {
    render(
      <PopIn show={true} position="top" offset="20px">
        <div>PopIn content</div>
      </PopIn>,
    );

    expect(screen.getByText("PopIn content")).toBeInTheDocument();
  });

  test("does not render children when not visible", () => {
    render(
      <PopIn show={false} position="top" offset="20px">
        <div>PopIn content</div>
      </PopIn>,
    );

    expect(screen.getByText("PopIn content")).toBeInTheDocument();
    expect(screen.queryByText("PopIn content")).not.toBeVisible();
  });

  test("toggles visibility when show prop changes", async () => {
    const { rerender } = render(
      <PopIn show={true} position="top" offset="20px">
        <div>PopIn content</div>
      </PopIn>,
    );

    expect(screen.getByText("PopIn content")).toBeInTheDocument();
    expect(screen.getByText("PopIn content")).toBeVisible();

    rerender(
      <PopIn show={false} position="top" offset="20px">
        <div>PopIn content</div>
      </PopIn>,
    );

    await new Promise((resolve) => setTimeout(resolve, 350)); // Wait for the transition to finish

    expect(screen.getByText("PopIn content")).toBeInTheDocument();
    expect(screen.queryByText("PopIn content")).not.toBeVisible();
  });
});
