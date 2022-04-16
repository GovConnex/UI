import {DefaultTheme} from 'styled-components';
import darkTokens from "./tokens-output/dark.json";
import globalTokens from "./tokens-output/global.json";

export const darkTheme: DefaultTheme = {
  "name": "Dark theme",
  ...darkTokens,
  ...globalTokens
};

export default darkTheme;