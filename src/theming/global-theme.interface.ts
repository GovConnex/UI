interface Typography {
  fontFamily: string;
  fontWeight: string;
  lineHeight: number;
  fontSize: string;
  letterSpacing: string;
  paragraphSpacing: string;
  textDecoration: string;
  textCase: string;
}

interface TypographySize {
  lg: Typography;
  md: Typography;
  sm: Typography;
  xs: Typography;
}

interface BoxShadow {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string
  type: string;
}

export interface GlobalTheme {
  name: string;
  typography: {
    display: TypographySize;
    body: TypographySize;
    heading: TypographySize;
    label: TypographySize;
  },
  spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  },
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  },
  borderWidth: {
    sm: string;
    md: string;
    lg: string;
  },
  shadow: {
    xs: BoxShadow;
    sm: BoxShadow[];
    md: BoxShadow;
    lg: BoxShadow;
    xl: BoxShadow;
  }
}

export interface CommonGradient {
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
}

export default GlobalTheme;
