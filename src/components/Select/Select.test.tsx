import React from "react";
import {render} from "../test-utils";

import Select from "./Select";

describe("Select", () => {
  test("renders the Select component", () => {
    render(<Select dropdown={() => <div>Test</div>}></Select>);
  });
});
