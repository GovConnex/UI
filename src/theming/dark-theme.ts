import {DefaultTheme} from 'styled-components';
import darkTokens from "./tokens-output/dark.json";

export const darkTheme: DefaultTheme = {
  "name": "Dark theme",
  ...darkTokens
};

export default darkTheme;