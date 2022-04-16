import {addDecorator} from "@storybook/react";
import { withThemes } from '@react-theming/storybook-addon';
import {lightTheme, darkTheme} from "../src/theming";
import {ThemeProvider} from "styled-components";
import {themes} from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}

addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));
