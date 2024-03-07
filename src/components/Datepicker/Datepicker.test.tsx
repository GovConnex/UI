import React from "react";
import {render} from "../test-utils";

import DatePicker from "./DatePicker";

describe("DatePicker", () => {
  test("renders the DatePicker component", () => {
    render(<DatePicker />);
  });
});
