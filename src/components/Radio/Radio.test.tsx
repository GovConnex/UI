import React from "react";
import {render} from "../test-utils";

import Radio from "./Radio";

describe("Radio", () => {
  test("renders the Radio component", () => {
    render(<Radio variant="card" />);
  });
});
