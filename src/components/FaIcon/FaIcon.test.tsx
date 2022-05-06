import React from "react";
import { render } from "../test-utils";

import FaIcon from "./FaIcon";
import { faSearch } from "@fortawesome/pro-solid-svg-icons";

describe("FaIcon", () => {
  test("renders the FaIcon component", () => {
    render(<FaIcon icon={faSearch} />);
  });
});
