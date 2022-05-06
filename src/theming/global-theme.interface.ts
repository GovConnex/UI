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
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  },
  borderRadius: {
    sm: string;
  },
  borderWidth: {
    sm: string;
    md: string;
    lg: string;
  }
}

export default GlobalTheme;
