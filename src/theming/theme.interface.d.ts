import 'styled-components';
import GlobalTheme, {CommonPalette} from "./global-theme.interface";


declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
        extraLight: string;
      },
      // secondary: {
      //   main: string;
      //   light: string;
      //   dark: string;
      // },
      // error: {
      //   main: string;
      //   light: string;
      //   dark: string;
      // },
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
      },

      background: {
        default: string;
        paper: string;
        dark: string;
      },

  gray: {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    700: string;
    900: string;
  },
        brand: {
    100: string;
    400: string;
    500: string;
    800: string;
  }
    }
  }
}