import {DefaultTheme} from 'styled-components';
import lightTokens from "./tokens-output/light.json";
import globalTokens from "./tokens-output/global.json";
import _ from "lodash";


export const lightTheme: DefaultTheme = {
  "name": "Light theme",
  ..._.merge(globalTokens, lightTokens)
};

export default lightTheme;