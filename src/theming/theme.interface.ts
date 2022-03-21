import {BaseThemeInterface} from "./base-theme.interface";

declare module "styled-components" {
  export interface DefaultTheme extends BaseThemeInterface {
    name: string;
    palette: {
      common: {
        black: string;
        white: string
      },
      type: string;
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string
      },
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string
      },
      error: {
        light: string;
        main: string;
        dark: string;
        contrastText: string
      },
      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        A100: string;
        A200: string;
        A400: string;
        A700: string
      },
      contrastThreshold: number,
      tonalOffset: number,
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string
      },
      divider: string;
      background: {
        paper: string;
        default: string
      },
      action: {
        active: string;
        hover: string;
        hoverOpacity: number,
        selected: string;
        disabled: string;
        disabledBackground: string
      }
    },
  }
}