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
    describe("getInitials function", () => {
      it.each([
        ["Defence — Cocos (Keeling) Islands Airfield Upgrade", "DC"],
        ["?", "?"],
        ["John Doe", "JD"],
        [undefined, ""],
        ["", ""],
        [" ", ""],
        ["           ", ""],
        ["John Michael Doe", "JM"],
        ["Vincent van Gogh", "VG"],
        ["Committee of Privileges and Members' Interests", "CP"],
        ["john doe", "JD"],
        ["John", "J"],
      ])("should return '%s' when input is '%s'", (input, expected) => {
        expect(getInitials(input)).toBe(expected);
      });
    });
  });
});
