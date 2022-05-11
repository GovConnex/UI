import React from "react";
import { render } from "../test-utils";

import ClickAwayListener from "./ClickAwayListener";

describe("ClickAwayListener", () => {
  test("renders the ClickAwayListener component", () => {
    render(<ClickAwayListener onClickAway={() => null}><p>hello</p></ClickAwayListener>);
  });
});
