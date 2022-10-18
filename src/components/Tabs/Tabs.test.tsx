import React from "react";
import { render } from "../test-utils";

import Tabs from "./Tabs";

describe("Tabs", () => {
  test("renders the Tabs component with no children", () => {
    render(<Tabs />);
  });
  test("renders the Tabs component with children", () => {
    render(<Tabs>
      <Tabs.Tab label="Normal tab" value="tab1" />,
      <Tabs.Tab disabled label="Disabled tab" value="tab3" />,
      <Tabs.Tab label="Another tab" value="tab4" />,
    </Tabs>);
  });
  test("renders the Tabs component with plain divs", () => {
    render(<Tabs>
      <div>I should still work</div>
      <div>I also work</div>
    </Tabs>);
  });
});