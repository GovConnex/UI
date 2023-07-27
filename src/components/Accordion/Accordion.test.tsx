import React from "react";
import { render } from "../test-utils";

import Accordion from "./Accordion";

describe("Accordion", () => {
  test("renders the Accordion component", () => {
    render(<Accordion />);
  });
});
