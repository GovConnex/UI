import { lightTheme } from "./light-theme";

describe("lightTheme", () => {
  it('should contain "name" property', () => {
    expect(lightTheme).toHaveProperty("name");
    expect(lightTheme.name).toEqual("Light theme");
  });

  it("should contain properties from globalTokens", () => {
    expect(lightTheme).toHaveProperty("typography.display.lg.fontFamily");
    expect(lightTheme.typography.display.lg.fontFamily).toEqual("Inter");
  });

  it("should contain properties from lightTokens", () => {
    expect(lightTheme).toHaveProperty("core.background.bgPrimary");
    expect(lightTheme.core.background.bgPrimary).toEqual("#ffffff");
  });

  it("should give precedence to lightTokens when properties conflict", () => {
    const globalTokens = { conflictProp: "globalValue" };
    const lightTokens = { conflictProp: "lightValue" };

    const theme = {
      name: "Light theme",
      ...Object.assign({}, globalTokens, lightTokens),
    };
    expect(theme.conflictProp).toEqual("lightValue");
  });
});
