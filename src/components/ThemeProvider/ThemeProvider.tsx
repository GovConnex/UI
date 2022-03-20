import React from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import {lightTheme} from "./themes/light-theme";
import {darkTheme} from "./themes/dark-theme";

export interface ThemeProviderProps {
  theme: "light" | "dark";
  children: any;
}

const THEMES = {
  light: lightTheme,
  dark: darkTheme
}

const ThemeProvider = ({theme = "light", children}: ThemeProviderProps) => {
  return <StyledThemeProvider theme={THEMES[theme]}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;