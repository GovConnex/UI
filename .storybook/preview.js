import {addDecorator} from "@storybook/react";
import { withThemes } from '@react-theming/storybook-addon';
import {lightTheme, darkTheme} from "../src/theming";
import {ThemeProvider} from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));
