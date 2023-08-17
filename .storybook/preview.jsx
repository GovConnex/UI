import React from 'react';
import { addDecorator } from "@storybook/react";
import { withThemes } from '@react-theming/storybook-addon';
import { lightTheme, darkTheme } from "../src/theming";
import { themes } from "@storybook/theming";
import { ThemeProvider } from "../src/components";
import CustomPage from './CustomPageTemplate';

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
    page: CustomPage,
  },
}

const providerFn = ({ theme, children }) => {
  return <ThemeProvider rawTheme={theme}>{children}</ThemeProvider>;
};

const storyDecorator = (Story, context) => {
  const { parameters } = context;

  const figmaUrl = parameters.docs?.figma?.url ? 
    `https://www.figma.com/embed?embed_host=share&url=${parameters.docs?.figma?.url }` : '';

  if (!parameters.docs.disable) {
    return (
      <div>
        {parameters.docs?.figma?.url && context.viewMode === 'docs' && (
        <iframe
          title="Figma Design"
          width="800"
          height="600"
          src={figmaUrl}
        ></iframe>
      )}
      <ThemeProvider rawTheme={parameters.theme || lightTheme}>
        <div>
          <Story {...context}/>
        </div>
      </ThemeProvider>
      </div>
    );
  }

  return <Story {...context} />;
};

addDecorator(withThemes(null, [lightTheme, darkTheme], { providerFn }));
addDecorator(storyDecorator);







