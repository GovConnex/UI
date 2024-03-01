import React from "react";
import { render } from "../test-utils";

import Datepicker from "./Datepicker";

describe("Datepicker", () => {
  test("renders the Datepicker component", () => {
    render(<Datepicker />);
  });
});