import React from "react";
import {render} from "../test-utils";

import DropdownController from "./DropdownController";

describe("DropdownController", () => {
  test("renders the DropdownController component", () => {
    render(
      <DropdownController
        rootButton={() => <div>Test</div>}
        overlay={(toggleVis) => (
          <div
            onClick={() => toggleVis()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toggleVis();
              }
            }}
            role="button"
            tabIndex={0}
          >
            MenuItem
          </div>
        )}
      />
    );
  });
});
