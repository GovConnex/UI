import React from "react";
import { render } from "../test-utils";

import Icon from "./Icon";

describe("Icon", () => {
  test("renders the Icon component", () => {
    render(<Icon icon={['fas', 'heart']} />);
  });
});
