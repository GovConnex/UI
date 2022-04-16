import {DefaultTheme} from 'styled-components';
import darkTokens from "./tokens-output/dark.json";
import globalTokens from "./tokens-output/global.json";
import _ from "lodash";

export const darkTheme: DefaultTheme = {
  "name": "Dark theme",
  ..._.merge(globalTokens, darkTokens),
};

export default darkTheme;