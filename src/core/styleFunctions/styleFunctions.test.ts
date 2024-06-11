import {addCustomStyles} from "./index";
import {lightTheme} from "../../theming";

describe("addCustomStyles", () => {
  test("should return an empty object if no custom styles are provided", () => {
    const result = addCustomStyles({theme: lightTheme});
    expect(result).toEqual({});
  });

  test("should handle basic CSS properties", () => {
    const result = addCustomStyles({cs: {color: "red"}, theme: lightTheme});
    expect(result).toEqual({color: "red"});
  });

  test("should handle custom style properties", () => {
    const result = addCustomStyles({cs: {p: 2}, theme: lightTheme});
    expect(result).toEqual({padding: lightTheme.spacing.xs});
  });

  test("should handle breakpoints", () => {
    const result = addCustomStyles({cs: {md: {p: 3}}, theme: lightTheme});
    expect(result).toEqual({
      "@media (min-width:600px)": {padding: lightTheme.spacing.sm},
    });
  });

  test("should handle chained keys", () => {
    const result = addCustomStyles({cs: {px: 4}, theme: lightTheme});
    expect(result).toEqual({
      paddingLeft: lightTheme.spacing.md,
      paddingRight: lightTheme.spacing.md,
    });
  });

  test("should handle theme path", () => {
    const result = addCustomStyles({
      cs: {p: "spacing.md"},
      theme: lightTheme,
    });
    expect(result).toEqual({padding: lightTheme.spacing.md});
  });

  test("should handle box shadow theme prop", () => {
    const result = addCustomStyles({
      cs: {boxShadow: "boxShadow.sm"},
      theme: lightTheme,
    });

    const expectedShadow = lightTheme.boxShadow.sm;

    expect(result).toEqual({
      boxShadow: `${expectedShadow.x}px ${expectedShadow.y}px ${expectedShadow.blur}px ${expectedShadow.color}`,
    });
  });

  test("should handle invalid box shadow theme prop", () => {
    const result = addCustomStyles({
      cs: {boxShadow: "shadow.sm"},
      theme: lightTheme,
    });

    expect(result).toEqual({
      boxShadow: null,
    });
  });

  test("should handle box shadow theme prop with string value", () => {
    const result = addCustomStyles({
      cs: {boxShadow: "0 0 0 2px #000"},
      theme: lightTheme,
    });

    expect(result).toEqual({
      boxShadow: "0 0 0 2px #000",
    });
  });

  test("should handle flex glow with number value", () => {
    const result = addCustomStyles({
      cs: {flexGrow: 1},
      theme: lightTheme,
    });

    expect(result).toEqual({
      flexGrow: 1,
    });
  });

  test("should handle background image with URL", () => {
    const result = addCustomStyles({
      cs: {backgroundImage: "url('https://example.com/bg.jpg')"},
      theme: lightTheme,
    });

    expect(result).toEqual({
      backgroundImage: "url('https://example.com/bg.jpg')",
    });
  });

  test("should handle multiple background images", () => {
    const result = addCustomStyles({
      cs: {
        backgroundImage:
          "url('https://example.com/bg.jpg'), url('https://example.com/bg2.jpg')",
      },
      theme: lightTheme,
    });

    expect(result).toEqual({
      backgroundImage:
        "url('https://example.com/bg.jpg'), url('https://example.com/bg2.jpg')",
    });
  });

  test("should return random background image value", () => {
    const result = addCustomStyles({
      cs: {backgroundImage: "#000"},
      theme: lightTheme,
    });

    expect(result).toEqual({
      backgroundImage: "#000",
    });
  });

  test("should handle hover state for a single property", () => {
    const result = addCustomStyles({
      cs: {hover: {color: "blue"}},
      theme: lightTheme,
    });
    expect(result).toEqual({
      ":hover": {color: "blue"},
    });
  });

  test("should handle hover state with multiple properties", () => {
    const result = addCustomStyles({
      cs: {hover: {color: "green", backgroundColor: "lightgrey"}},
      theme: lightTheme,
    });
    expect(result).toEqual({
      ":hover": {color: "green", backgroundColor: "lightgrey"},
    });
  });

  test("should not interfere with other pseudo-classes", () => {
    const result = addCustomStyles({
      cs: {active: {color: "red"}},
      theme: lightTheme,
    });
    expect(result).toEqual({
      ":active": {color: "red"},
    });
  });

  test("should handle nested hover within breakpoints", () => {
    const result = addCustomStyles({
      cs: {md: {hover: {color: "purple"}}},
      theme: lightTheme,
    });
    expect(result).toEqual({
      "@media (min-width:600px)": {":hover": {color: "purple"}},
    });
  });

  test("should ignore hover if not an object", () => {
    const result = addCustomStyles({
      cs: {hover: "color:blue;" as any},
      theme: lightTheme,
    });
    expect(result).toEqual({});
  });

  test("should handle hover with theme path", () => {
    const result = addCustomStyles({
      cs: {hover: {padding: "spacing.sm"}},
      theme: lightTheme,
    });
    expect(result).toEqual({
      ":hover": {padding: lightTheme.spacing.sm},
    });
  });

  test("should ignore onClick prop and not apply it to styles", () => {
    const result = addCustomStyles({
      cs: {onClick: () => console.log("Clicked")} as any,
      theme: lightTheme,
    });
    expect(result).not.toHaveProperty("onClick");
  });
});
