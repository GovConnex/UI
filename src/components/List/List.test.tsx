import React from "react";
import { render } from "../test-utils";

import { List } from "./List";

describe("List", () => {
  test("renders the List component", () => {
    render(<List />);
  });
});
