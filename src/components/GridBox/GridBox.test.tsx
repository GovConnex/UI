import React from "react";
import { prettyDOM, screen } from "@testing-library/react";
import GridBox from "./GridBox";
import { render } from "../test-utils";

describe("GridBox", () => {
  it("renders GridBox with children", () => {
    render(
      <GridBox>
        <div>Child 1</div>
        <div>Child 2</div>
      </GridBox>,
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("applies custom styles and breakpoint styles correctly", () => {
    const { container } = render(
      <GridBox
        backgroundColor="red"
        sm={{ backgroundColor: "blue" }}
        md={{ backgroundColor: "green" }}
        lg={{ backgroundColor: "yellow" }}
      >
        <div>Child</div>
      </GridBox>,
    );

    const gridbox = container.firstChild as HTMLElement;

    // Print tree
    console.log(prettyDOM(gridbox));

    expect(gridbox).toBeInTheDocument();
    expect(gridbox).toHaveStyle("display: grid");
    expect(screen.getByText("Child")).toBeInTheDocument();
  });
});
