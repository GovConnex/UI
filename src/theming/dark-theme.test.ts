import { darkTheme } from "./dark-theme";

describe("darkTheme", () => {
  it('should contain "name" property', () => {
    expect(darkTheme).toHaveProperty("name");
    expect(darkTheme.name).toEqual("Dark theme");
  });

  it("should contain properties from globalTokens", () => {
    expect(darkTheme).toHaveProperty("typography.display.lg.fontFamily");
    expect(darkTheme.typography.display.lg.fontFamily).toEqual("Inter");
  });

  it("should contain properties from lightTokens", () => {
    expect(darkTheme).toHaveProperty("core.background.bgPrimary");
    expect(darkTheme.core.background.bgPrimary).toEqual("#ffffff");
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
