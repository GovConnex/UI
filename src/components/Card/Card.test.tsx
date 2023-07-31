import React from "react";
import {render} from "../test-utils";

import Card from "./Card";

describe("Card", () => {
  test("renders the Card component", () => {
    render(<Card />);
  });
});
