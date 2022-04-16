import {DefaultTheme} from 'styled-components';
import darkTokens from "./tokens-output/dark.json";

export const lightTheme: DefaultTheme = {
  "name": "Dark theme",
  ...darkTokens
};

export default lightTheme;