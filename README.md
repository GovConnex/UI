# GovConnex UI

[![npm](https://img.shields.io/npm/v/@govconnex/ui)](https://www.npmjs.com/package/@govconnex/ui)

React Component Libary

## Usage

### Install

```
yarn add @govconnex/ui styled-components
```

## Development

### Install dependencies

```
# Add fontawesome pro token in npm (does not work in yarn)
npm config set "//npm.fontawesome.com/:_authToken" ${FONT_AWESOME_PACKAGE_TOKEN}

# Install dependencies
yarn
```

### Start Storybook

```
yarn start
```

### Create a new component

```
yarn new ComponentName
```

### Run tests

```
yarn test
```

### Publish to NPM

```
yarn publish
```

### Figma Tokens Plugin

Design tokens are pushed to the repo via the Figma Tokens Plugin to:

```src/theming/tokens-figma/tokens.json```

The Figma tokens are then processed by ```tokens-transform``` and ```style-dictionary``` to produce the final theme JSON, which is consumed by the app.

https://docs.tokens.studio/sync/github

### Design System Changes

When adding, removing, or renaming a design token, update the theme interfaces to reflect your changes.

```src/theming/global-theme.interface.ts``` for **global** theme changes

```src/theming/theme.interface.d.ts``` for **light/dark** theme changes

This provides type safety and helps with code completion.

If the theme interfaces don't match the Figma tokens structure, the CI/CD pipeline will fail,
so make sure you're subscribed to notifications for GitHub Actions.

Design system changes will automatically be added to the Storybook documentation.
