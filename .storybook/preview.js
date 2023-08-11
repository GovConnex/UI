import React from 'react';
import { addDecorator } from "@storybook/react";
import { withThemes } from '@react-theming/storybook-addon';
import { lightTheme, darkTheme } from "../src/theming";
import { themes } from "@storybook/theming";
import { ThemeProvider } from "../src/components";
import CustomPageTemplate from './CustomPageTemplate.mdx';
import { Figma } from "storybook-addon-designs/blocks";

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

const storyDecorator = (Story, context) => {
  const { parameters } = context;
  const containerStyles = {
    marginBottom: '30px',
  };

  if (!parameters.docs.disable) {
    return (
      <ThemeProvider rawTheme={parameters.theme || lightTheme}>
        <div>
          <Story {...context}/>
          <div style={containerStyles}></div>
          {parameters.docs?.figma?.url && (
            <iframe
              title="Figma Design"
              width="800"
              height="600"
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/yJ8kQwyMxuTZudD90MxgOU/%F0%9F%93%90-Components-and-Patterns?type=design&node-id=101-115&mode=design&t=6N7BMl7js5fsUXtU-0"
            ></iframe>
          )}
        </div>
      </ThemeProvider>
    );
  }

  return <Story {...context} />;
};

addDecorator(withThemes(null, [lightTheme, darkTheme], { providerFn }));
addDecorator(storyDecorator);







