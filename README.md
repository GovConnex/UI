# GovConnex UI

[![npm](https://img.shields.io/npm/v/@govconnex/ui)](https://www.npmjs.com/package/@govconnex/ui)

React Component Libary

## Usage

### Install

```
yarn add @govconnex/ui
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


### Linking for fast iteration

We need to link this package plus the peer dependencies to avoid the "duplicate react" issue:

```sh
yarn link:all
```

Then on the consumer side:

```sh
yarn link @govconnex/ui --legacy-peer-deps
yarn link react --legacy-peer-deps
yarn link react-dom --legacy-peer-deps
yarn link styled-components --legacy-peer-deps
```

Then you might want to start a `watch` job to auto re-build as you edit components:

```sh
yarn watch
```

TROUBLESHOOTING — If you have issues getting it to work (like `useContext` errors or other weird React internals), try removing `node_modules` and `yarn install --frozen-lockfile` on both sides before re-building, re-linking, and re-starting the app.

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
