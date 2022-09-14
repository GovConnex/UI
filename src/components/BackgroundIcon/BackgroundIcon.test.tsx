import React from "react";
import { render } from "../test-utils";

import Icon from "./BackgroundIcon";

describe("BackgroundIcon", () => {
  test("renders the BackgroundIcon component", () => {
    render(<Icon icon={<span></span>} />);
  });
});
