import React from "react";
import {render} from "../test-utils";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "../../theming/index";

import Tabs from "./Tabs";

describe("Tabs", () => {
  test("renders the Tabs component with no children", () => {
    render(
      <Tabs>
        <div>test</div>
      </Tabs>
    );
  });

  test("renders the Tabs component with children", () => {
    render(
      <Tabs>
        <Tabs.Tab label="Normal tab" value="tab1" />,
        <Tabs.Tab disabled label="Disabled tab" value="tab3" />,
        <Tabs.Tab label="Another tab" value="tab4" />,
      </Tabs>
    );
  });

  test("renders the Tabs component with plain divs", () => {
    render(
      <Tabs>
        <div>I should still work</div>
        <div>I also work</div>
      </Tabs>
    );
  });

  test("renders the Tabs component as a Section tab", () => {
    const renderSectionTab = (props: any) => {
      return render(
        <ThemeProvider theme={lightTheme}>
          <Tabs {...props}>
            <Tabs.Tab label="Normal tab" value="tab1" />,
            <Tabs.Tab disabled label="Disabled tab" value="tab3" />,
            <Tabs.Tab label="Another tab" value="tab4" />,
          </Tabs>
        </ThemeProvider>
      );
    };

    const {getByTestId} = renderSectionTab({
      isSection: true,
    });

    const tabButton = getByTestId("section-highlight");
    expect(tabButton).toBeInTheDocument();
    expect(tabButton).toHaveStyle(`
      border-radius: 6px;
    `);
  });
});
