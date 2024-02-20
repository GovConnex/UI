import React from "react";
import {render} from "../test-utils";
import Avatar, {getInitials, checkImageOnLoadSuccessful} from "./Avatar";

class ImageMock {
  src: string = "";
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  complete: boolean = true;
  naturalWidth: number = 1;
  naturalHeight: number = 1;

  constructor() {
    this.onload && this.onload();
    this.onerror && this.onerror();
  }
}

describe("Avatar", () => {
  it("checks if the image is loaded successfully", async () => {
    // Mock the Image constructor
    jest.spyOn(window, "Image").mockImplementation(() => new ImageMock() as any);

    const imageUrl = "path/to/valid-image.jpg";
    const result = await checkImageOnLoadSuccessful(imageUrl);
    expect(result).toBe(true);

    const {getByAltText} = render(<Avatar alt="John Doe" src={imageUrl} />);
    expect(getByAltText("John Doe")).toBeInTheDocument();

    // Restore the original implementation of the Image constructor
    jest.restoreAllMocks();
  });

  it("should display initials when src is not provided", () => {
    const {getByText} = render(<Avatar alt="John Doe" />);
    expect(getByText("JD")).toBeInTheDocument();
  });

  it("should display a question mark when no alt text is provided", () => {
    const {getByText} = render(<Avatar />);
    expect(getByText("?")).toBeInTheDocument();
  });

  it("should display initials when image has not been loaded properly", () => {
    const {getByText} = render(<Avatar alt="John Doe" src="path/to/invalid.jpg" />);
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
