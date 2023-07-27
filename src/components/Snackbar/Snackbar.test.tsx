import React from "react";
import { render } from "../test-utils";
import { fireEvent } from "@testing-library/react";

import Snackbar from "./Snackbar";

describe("Snackbar", () => {
  test("renders the Snackbar component without any errors", () => {
    render(<Snackbar />);
  });

  test("renders the children prop of the Snackbar component", () => {
    const { getByText } = render(
      <Snackbar>This is a Snackbar message</Snackbar>,
    );
    expect(getByText("This is a Snackbar message")).toBeInTheDocument();
  });

  test("renders the startAdornment prop of the Snackbar component", () => {
    const { getByTestId } = render(
      <Snackbar startAdornment={<div data-testid="test-adornment" />}>
        This is a Snackbar message
      </Snackbar>,
    );
    expect(getByTestId("test-adornment")).toBeInTheDocument();
  });

  test("renders the actions prop of the Snackbar component", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Snackbar
        actions={[
          { text: "Action 1", onClick: mockOnClick },
          { text: "Action 2", onClick: mockOnClick },
        ]}
      >
        This is a Snackbar message
      </Snackbar>,
    );
    fireEvent.click(getByText("Action 1"));
    fireEvent.click(getByText("Action 2"));
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });
});
