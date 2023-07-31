import React from "react";
import {render} from "../test-utils";

import {StyledGrid as Grid} from "./Grid.styles";

describe("Grid", () => {
  test("renders the Grid component", () => {
    render(<Grid />);
  });
});
