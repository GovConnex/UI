import React from "react";
import { render } from "../test-utils";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button>Hello World!</Button>);
  });
});
