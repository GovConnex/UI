import { faGrid2 } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { render } from "../test-utils";

import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  test("renders the PageHeader component", () => {
    render(<PageHeader icon={faGrid2}>Dashboard</PageHeader>);
  });
});
