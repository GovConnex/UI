import React from "react";
import { render } from "../test-utils";



import Box, { ExtendedBoxProps } from "./Box";

describe("Box", () => {
  
  test("renders the Box component", () => {
    const elementRef = React.createRef<HTMLDivElement>();

    render(<Box  ref={elementRef} />);

    const { current: element } = elementRef;
    console.log(element)
    // expect(element).not.to
  });

  // expect(element).not.have.attribute('color');
  // expect(element).not.attri
});