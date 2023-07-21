import { addCustomStyles } from "./index";
import { DefaultTheme } from "styled-components";
import { lightTheme } from "../../theming";

describe("addCustomStyles", () => {
  test("should return an empty object if no custom styles are provided", () => {
    const result = addCustomStyles({ theme: lightTheme });
    expect(result).toEqual({});
  });

  test("should handle basic CSS properties", () => {
    const result = addCustomStyles({ cs: { color: "red" }, theme: lightTheme });
    expect(result).toEqual({ color: "red" });
  });

  test("should handle custom style properties", () => {
    const result = addCustomStyles({ cs: { p: 2 }, theme: lightTheme });
    expect(result).toEqual({ padding: lightTheme.spacing.xs });
  });

  test("should handle breakpoints", () => {
    const result = addCustomStyles({ cs: { md: { p: 3 } }, theme: lightTheme });
    expect(result).toEqual({
      "@media (min-width:600px)": { padding: lightTheme.spacing.sm },
    });
  });

  test("should handle chained keys", () => {
    const result = addCustomStyles({ cs: { px: 4 }, theme: lightTheme });
    expect(result).toEqual({
      paddingLeft: lightTheme.spacing.md,
      paddingRight: lightTheme.spacing.md,
    });
  });

  test("should handle theme path", () => {
    const result = addCustomStyles({
      cs: { p: "spacing.md" },
      theme: lightTheme,
    });
    expect(result).toEqual({ padding: lightTheme.spacing.md });
  });

  test("should handle box shadow theme prop", () => {
    const result = addCustomStyles({
      cs: { boxShadow: "boxShadow.sm" },
      theme: lightTheme,
    });

    const expectedShadow = lightTheme.boxShadow.sm;

    expect(result).toEqual({
      boxShadow: `${expectedShadow.x}px ${expectedShadow.y}px ${expectedShadow.blur}px ${expectedShadow.color}`,
    });
  });

  test("should handle invalid box shadow theme prop", () => {
    const result = addCustomStyles({
      cs: { boxShadow: "shadow.sm" },
      theme: lightTheme,
    });

    const expectedShadow = lightTheme.boxShadow.sm;

    expect(result).toEqual({
      boxShadow: null,
    });
  });

  test("should handle box shadow theme prop with string value", () => {
    const result = addCustomStyles({
      cs: { boxShadow: "0 0 0 2px #000" },
      theme: lightTheme,
    });

    expect(result).toEqual({
      boxShadow: "0 0 0 2px #000",
    });
  });

  test("should handle flex glow with number value", () => {
    const result = addCustomStyles({
      cs: { flexGrow: 1 },
      theme: lightTheme,
    });

    expect(result).toEqual({
      flexGrow: 1,
    });
  });
});
