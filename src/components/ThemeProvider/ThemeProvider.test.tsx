import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "./ThemeProvider";

describe("ThemeProvider", () => {
  test("renders the ThemeProvider component", () => {
    render(
      <ThemeProvider theme={"light"}>
        <div>ThemeProvider</div>
      </ThemeProvider>,
    );
  });
});
