import React from "react";
import {render} from "../test-utils";

import Avatar, {getInitials} from "./Avatar";

describe("Avatar", () => {
  it("should render an image when src is provided and no error", () => {
    const {getByAltText} = render(<Avatar alt="John Doe" src="path/to/image.jpg" />);
    expect(getByAltText("John Doe")).toBeInTheDocument();
  });

  it("should display initials when src is not provided", () => {
    const {getByText} = render(<Avatar alt="John Doe" />);
    expect(getByText("JD")).toBeInTheDocument();
  });

  it("should display a question mark when no alt text is provided", () => {
    const {getByText} = render(<Avatar />);
    expect(getByText("?")).toBeInTheDocument();
  });

  it("should display initials when src results in an error", () => {
    const {getByText} = render(<Avatar alt="John Doe" src="path/to/invalid.jpg" />);
    // Simulate image load error
    const image = document.querySelector("img");
    if (image) {
      const errorEvent = new Event("error");
      image.dispatchEvent(errorEvent);
    }
    expect(getByText("JD")).toBeInTheDocument();
  });

  it("should have the appropriate size", () => {
    const {container} = render(<Avatar alt="John Doe" size="md" />);
    expect(container.firstChild).toHaveStyle("width: 18px");
  });

  it("should have the appropriate shape", () => {
    const {container} = render(<Avatar alt="John Doe" variant="circle" />);
    expect(container.firstChild).toHaveStyle("border-radius: 50%");
  });

  describe("getInitials", () => {
    it("should not include symbols if there's actual words", () => {
      expect(
        getInitials("Department of Defence — Cocos (Keeling) Islands Airfield Upgrade")
      ).toBe("DDC");
    });

    it("should return initials from a symbol", () => {
      expect(getInitials("?")).toBe("?");
    });

    it("should return initials from a full name", () => {
      expect(getInitials("John Doe")).toBe("JD");
    });

    it("should return empty string if no name is provided", () => {
      expect(getInitials()).toBe("");
    });

    it("should return initials for multiple names", () => {
      expect(getInitials("John Michael Doe")).toBe("JMD");
    });

    it("should limit initials for long names", () => {
      expect(getInitials("Committee of Privileges and Members' Interests")).toBe("CPM");
    });

    it("should return initials in uppercase", () => {
      expect(getInitials("john doe")).toBe("JD");
    });

    it("should handle single name", () => {
      expect(getInitials("John")).toBe("J");
    });
  });
});
