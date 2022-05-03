interface Typography {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: string;
  textDecoration: string;
  textCase: string;
}

interface BoxShadow {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string
  type: string;
}

export interface CommonPalette {

}

export interface GlobalTheme {
  name: string;
  // breakpoints: {
  //   xs: string;
  //   sm: string;
  //   md: string;
  //   lg: string;
  //   xl: string;
  // },
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  },
  // sizing: {
  //   xs: string;
  //   sm: string;
  //   md: string;
  //   lg: string;
  //   xl: string;
  // },
  typography: {
    display: {
      lg: Typography;
      md: Typography;
      sm: Typography;
    },
    text: {
      md: Typography;
      sm: Typography;
    },
    caption: {
      sm: Typography;
    },
  },
  // opacity: {
  //   high: string;
  //   medium: string;
  //   low: string;
  // },
  borderRadius: {
    sm: string;
    // md: string;
    // lg: string;
    // round: string;
  },
  // zIndex: {
  //   navBar: number;
  //   drawer: number;
  //   modal: number;
  //   snackbar: number;
  //   tooltip: number;
  // },
  // boxShadow: {
  //   xs: BoxShadow;
  //   sm: BoxShadow;
  //   md: BoxShadow;
  //   lg: BoxShadow;
  //   xl: BoxShadow;
  // },
}

export default GlobalTheme;