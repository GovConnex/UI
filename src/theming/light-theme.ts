import {DefaultTheme} from 'styled-components';
import lightTokens from "./tokens-output/light.json";
import globalTokens from "./tokens-output/global.json";
import {deepMerge} from "../core/utils";

export const lightTheme: DefaultTheme = {
  ...deepMerge({}, globalTokens, lightTokens) as DefaultTheme,
  "name": "Light theme",
};

export default lightTheme;