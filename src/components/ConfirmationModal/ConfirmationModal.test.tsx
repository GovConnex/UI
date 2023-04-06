import React from "react";
import { fireEvent, render, screen } from "../test-utils";

import ConfirmationModal from "./ConfirmationModal";

describe("ConfirmationModal", () => {
  test("renders the ConfirmationModal component", () => {
    render(
      <ConfirmationModal
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        title={""}
        text={""}
        backgroundIcon={""}
        buttons={[]}
      />
    );
  });

  test("renders the modal title, content, and buttons correctly", () => {
    const handleSave = jest.fn();
    const handleCancel = jest.fn();

    render(
      <ConfirmationModal
        isOpen={true}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        title="Test Title"
        text="Test Content"
        backgroundIcon="check"
        buttons={[
          {
            text: "Save",
            onClick: handleSave,
            variant: "primary",
          },
          {
            text: "Cancel",
            onClick: handleCancel,
            variant: "secondary",
          },
        ]}
      />
    );

    const title = screen.getByText("Test Title");
    const content = screen.getByText("Test Content");
    const saveButton = screen.getByText("Save");
    const cancelButton = screen.getByText("Cancel");

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("calls onClose when the close button is clicked", () => {
    const handleClose = jest.fn();

    render(
      <ConfirmationModal
        isOpen={true}
        title="Test Title"
        text="Test Content"
        backgroundIcon="check"
        buttons={[
          {
            text: "Close",
            onClick: handleClose,
            variant: "secondary",
          },
        ]}
        onClose={handleClose}
      />
    );

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  test("button click handlers are called when each button is clicked", () => {
    const handleSave = jest.fn();
    const handleCancel = jest.fn();
    const handleClose = jest.fn();

    render(
      <ConfirmationModal
        isOpen={true}
        title="Test Title"
        text="Test Content"
        backgroundIcon="check"
        buttons={[
          {
            text: "Save",
            onClick: handleSave,
            variant: "primary",
          },
          {
            text: "Cancel",
            onClick: handleCancel,
            variant: "secondary",
          },
        ]}
        onClose={handleClose}
      />
    );

    const saveButton = screen.getByText("Save");
    const cancelButton = screen.getByText("Cancel");

    fireEvent.click(saveButton);
    expect(handleSave).toHaveBeenCalledTimes(1);

    fireEvent.click(cancelButton);
    expect(handleCancel).toHaveBeenCalledTimes(1);
  });
});
