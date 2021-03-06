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
  x: number;
  y: number;
  blur: number;
  spread: number;
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
    displaySm: Typography;
    displayMd: Typography;
    displayLg: Typography;
    textSm: Typography;
    textMd: Typography;
    captionSm: Typography;
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
  },
  shadow: {
    sm: BoxShadow;
    md: BoxShadow[];
  }
}

export default GlobalTheme;
