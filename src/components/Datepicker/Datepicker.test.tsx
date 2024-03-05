import React from "react";
import {render} from "../test-utils";

import Datepicker from "./Datepicker";

jest.mock('react-datepicker/dist/react-datepicker.css', () => '')

describe("Datepicker", () => {
  test("renders the Datepicker component", () => {
    render(<Datepicker />);
  });
});
