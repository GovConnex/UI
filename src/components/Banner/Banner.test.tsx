import React from "react";
import { render } from "../test-utils";

import Banner from "./Banner";

describe("Banner", () => {
  test("renders the Banner component", () => {
    render(<Banner />);
  });
});