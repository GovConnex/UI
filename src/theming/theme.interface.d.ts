import 'styled-components';
import GlobalTheme, {CommonPalette} from "./global-theme.interface";


declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
      },
      secondary: {
        main: string;
        light: string;
        dark: string;
      },
      error: {
        main: string;
        light: string;
        dark: string;
      }
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
      },
      background: {
        default: string;
        paper: string;
      },
      divider: string;
      common: CommonPalette; // inherited from global theme
    }
  }
}