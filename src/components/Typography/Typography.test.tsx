import React from "react";
import { render } from "../test-utils";

import Typography from "./Typography";

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<Typography />);
  });

  test("should accept non existing variant", () => {
    render(<Typography variant="non-existing-variant" />);
  });
});
