import React from "react";
import {DefaultTheme, ThemeProvider as StyledThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "../../theming";
import FontStyles from "./FontStyles";

export interface ThemeProviderProps {
  theme?: "light" | "dark";
  rawTheme?: DefaultTheme;
  children?: any;
}

export const THEMES = {
  light: lightTheme,
  dark: darkTheme
};

const ThemeProvider = ({theme = "light", rawTheme, children, ...rest}: ThemeProviderProps) => {
  const themeToUse = rawTheme || THEMES[theme];
  return <StyledThemeProvider theme={themeToUse} {...rest}>
    <FontStyles/>
    {children}
  </StyledThemeProvider>;
};

export default ThemeProvider;