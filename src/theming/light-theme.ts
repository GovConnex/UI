import {DefaultTheme} from 'styled-components';
import lightTokens from "./tokens-output/light.json";

export const lightTheme: DefaultTheme = {
  "name": "Light theme",
  ...lightTokens
};

export default lightTheme;