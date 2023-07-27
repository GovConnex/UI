import React from "react";
import { render } from "../test-utils";

import Pagination from "./Pagination";

describe("Pagination", () => {
  test("renders the Pagination component", () => {
    render(
      <Pagination
        totalItems={100}
        onPageChange={() => null}
        page={1}
        itemsPerPage={1}
        onItemsPerPageChange={() => null}
      />,
    );
  });
});
