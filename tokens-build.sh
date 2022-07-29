#!/bin/bash

echo -e "Getting tokens from Figma\n"

token-transformer src/theming/tokens-figma/tokens.json src/theming/tokens-style-dictionary/global.json global
token-transformer src/theming/tokens-figma/tokens.json src/theming/tokens-style-dictionary/light.json global,light global
token-transformer src/theming/tokens-figma/tokens.json src/theming/tokens-style-dictionary/dark.json global,dark global
node tokens-sd-build.cjs # replaces style-dictionary build
