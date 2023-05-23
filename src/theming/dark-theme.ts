import {DefaultTheme} from 'styled-components';
import darkTokens from "./tokens-output/dark.json";
import globalTokens from "./tokens-output/global.json";
import {deepMerge} from "../core/utils";

export const darkTheme: DefaultTheme = {
  ...deepMerge({}, globalTokens, darkTokens) as DefaultTheme,
  "name": "Dark theme",
};

export default darkTheme;