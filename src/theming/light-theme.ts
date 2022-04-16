import {DefaultTheme} from 'styled-components';
import lightTokens from "./tokens-output/light.json";
import globalTokens from "./tokens-output/global.json";


export const lightTheme: DefaultTheme = {
  "name": "Light theme",
  ...lightTokens,
  ...globalTokens
};

export default lightTheme;