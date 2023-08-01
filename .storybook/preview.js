import React from 'react';
import { addDecorator } from "@storybook/react";
import { withThemes } from '@react-theming/storybook-addon';
import { lightTheme, darkTheme } from "../src/theming";
import { themes } from "@storybook/theming";
import { ThemeProvider } from "../src/components";
import CustomPageTemplate from './CustomPageTemplate.mdx';

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
    page: CustomPageTemplate,
  },
}

const providerFn = ({ theme, children }) => {
  return <ThemeProvider rawTheme={theme}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [lightTheme, darkTheme], { providerFn }));
