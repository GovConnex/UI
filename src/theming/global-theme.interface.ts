interface Typography {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: number;
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
  black: string;
  white: string;
  gray: {
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    900: string;
  }
}

export interface GlobalTheme {
  name: string;
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
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
  opacity: {
    high: string;
    medium: string;
    low: string;
  },
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    round: string;
  },
  zIndex: {
    navBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  },
  boxShadow: {
    xs: BoxShadow;
    sm: BoxShadow;
    md: BoxShadow;
    lg: BoxShadow;
    xl: BoxShadow;
  },
  palette: {
    common: CommonPalette
  }
}

export default GlobalTheme;