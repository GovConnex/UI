#!/bin/bash

echo -e "Getting tokens from Figma\n"

token-transformer src/theming/tokens-figma/tokens.json src/theming/tokens-style-dictionary/light.json global,light
token-transformer src/theming/tokens-figma/tokens.json src/theming/tokens-style-dictionary/dark.json global,dark
node tokens-sd-build.js # replaces style-dictionary build