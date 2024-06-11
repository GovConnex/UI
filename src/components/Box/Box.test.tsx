import React from "react";
import {render} from "../test-utils";

import Box, {separateProps} from "./Box";

describe("Box", () => {
  test("renders the Box component", () => {
    const elementRef = React.createRef<HTMLDivElement>();

    render(<Box ref={elementRef} />);

    const {current: element} = elementRef;
    console.log(element);
    // expect(element).not.to
  });

  // expect(element).not.have.attribute('color');
  // expect(element).not.attri
});

describe("separateProps", () => {
  it("should separate props into filteredProps and styleProps correctly", () => {
    const inputProps: Record<string, unknown> = {
      onClick: () => {},
      "aria-label": "button",
      "data-test-id": "box1",
      role: "button",
      tabIndex: 0,
      as: "button",
      href: "#",
      to: "/home",
      ref: "ref1",
      className: "box-class",
      color: "red",
      margin: 10,
    };

    const {filteredProps, styleProps} = separateProps(inputProps);

    // Check filteredProps
    expect(filteredProps).toEqual({
      onClick: expect.any(Function),
      "aria-label": "button",
      "data-test-id": "box1",
      role: "button",
      tabIndex: 0,
      as: "button",
      href: "#",
      to: "/home",
      ref: "ref1",
      className: "box-class",
    });

    // Check styleProps
    expect(styleProps).toEqual({
      color: "red",
      margin: 10,
    });
  });

  it("should handle empty props", () => {
    const inputProps: Record<string, unknown> = {};

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({});
    expect(styleProps).toEqual({});
  });

  it("unknown props should be considered style props", () => {
    const inputProps: Record<string, unknown> = {
      unknownProp: "unknown",
      onClick: () => {},
    };

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({
      onClick: expect.any(Function),
    });
    expect(styleProps).toEqual({
      unknownProp: "unknown",
    });
    expect(filteredProps.unknownProp).toBeUndefined();
  });

  it("should treat 'flexGrow' and 'zIndex' as style props", () => {
    const inputProps = {
      flexGrow: 1,
      zIndex: 10,
      onClick: () => {},
    } as Record<string, unknown>;

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({
      onClick: expect.any(Function),
    });

    expect(styleProps).toEqual({
      flexGrow: 1,
      zIndex: 10,
    });
  });

  it("should treat 'backgroundColor', 'transition', and 'filter' as style props", () => {
    const inputProps = {
      backgroundColor: "blue",
      transition: "all 0.3s ease",
      filter: "blur(5px)",
      onMouseEnter: () => {},
    } as Record<string, unknown>;

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({
      onMouseEnter: expect.any(Function),
    });

    expect(styleProps).toEqual({
      backgroundColor: "blue",
      transition: "all 0.3s ease",
      filter: "blur(5px)",
    });
  });

  it("should handle props with undefined values correctly", () => {
    const inputProps = {
      undefinedProp: undefined,
      nullProp: null,
      validProp: "value",
    } as Record<string, unknown>;

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({});

    expect(styleProps).toEqual({
      nullProp: null,
      validProp: "value",
    });
  });

  it("should correctly separate padding and margin shorthand properties as style props", () => {
    const inputProps = {
      padding: "20px 10px",
      margin: "5px",
      onClick: () => {},
    } as Record<string, unknown>;

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({
      onClick: expect.any(Function),
    });

    expect(styleProps).toEqual({
      padding: "20px 10px",
      margin: "5px",
    });
  });

  it("should consider custom style props like 'customBorder' as styleProps if not predefined as styleProps", () => {
    const inputProps = {
      customBorder: "1px solid black",
      onClick: () => {},
    } as Record<string, unknown>;

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({
      onClick: expect.any(Function),
    });

    expect(styleProps).toEqual({
      customBorder: "1px solid black",
    });
  });

  it("should separate 'display' and 'position' as style props", () => {
    const inputProps = {
      display: "flex",
      position: "absolute",
      onMouseLeave: () => {},
    } as Record<string, unknown>;

    const {filteredProps, styleProps} = separateProps(inputProps);

    expect(filteredProps).toEqual({
      onMouseLeave: expect.any(Function),
    });

    expect(styleProps).toEqual({
      display: "flex",
      position: "absolute",
    });
  });
});
