import 'styled-components';

interface Typography {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: number;
  letterSpacing: string;
  paragraphSpacing: number;
  textDecoration: string;
  textCase: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
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
    },
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    sizing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    typography: {
      h1: Typography;
      h2: Typography;
      h3: Typography;
      h4: Typography;
      h5: Typography;
      h6: Typography;
      subtitle1: Typography;
      subtitle2: Typography;
      body1: Typography;
      body2: Typography;
      button: Typography;
      caption: Typography;
    },
  }
}