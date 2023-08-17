const { merge } = require('webpack-merge');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  features: {
    buildStoriesJson: true
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@react-theming/storybook-addon",
    "storybook-addon-designs",
    "@storybook/addon-storyshots",
    "@storybook/addon-storyshots-puppeteer"
  ],
  storyshots: {
    framework: 'storybook-puppeteer',
  },
  framework: "@storybook/react",
  staticDirs: ["../static"],
  typescript: {
    "check": true,
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    return merge(config, {
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30 * 1024,
          maxSize: 1024 * 1024,
        }
      },
      performance: {
        maxEntrypointSize: 20000000,
        maxAssetSize: 20000000,
      }
    });
  },
}
