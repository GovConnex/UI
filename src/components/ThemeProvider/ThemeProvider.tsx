import React from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "../../theming";

export interface ThemeProviderProps {
  theme: "light" | "dark";
  children?: any;
}

export const THEMES = {
  light: lightTheme,
  dark: darkTheme
}

const ThemeProvider = ({theme = "light", ...rest}: ThemeProviderProps) => {
  return <StyledThemeProvider theme={THEMES[theme]} {...rest} />;
};

export default ThemeProvider;