import React from "react";
import Card from "../Card";
import {render} from "../test-utils";

import Stack from "./Stack";

describe("Stack", () => {
  test("renders the Stack component with no children", () => {
    render(<Stack />);
  });
  test("renders the Stack component with vanilla options", () => {
    render(<Stack />);
  });
  test("renders the Stack component with children and breakpoints", () => {
    render(
      <Stack direction={{sm: "column", md: "column"}} gap={{md: "sm"}}>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
      </Stack>
    );
  });
});
