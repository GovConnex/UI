import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { lightTheme, darkTheme } from "../../theming";
import { Helmet } from "react-helmet";
import FontStyles from "./FontStyles";

export interface ThemeProviderProps {
  theme?: "light" | "dark";
  rawTheme?: DefaultTheme;
  children?: any;
}

export const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeProvider = ({
  theme = "light",
  rawTheme,
  children,
  ...rest
}: ThemeProviderProps) => {
  const themeToUse = rawTheme || THEMES[theme];
  return (
    <StyledThemeProvider theme={themeToUse} {...rest}>
      <FontStyles />
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap`}
        />
      </Helmet>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
