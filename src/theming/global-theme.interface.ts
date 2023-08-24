export interface Typography {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: string;
}

export interface TypographySize {
  lg: Typography;
  md: Typography;
  sm: Typography;
  xs?: Typography;
}

export interface BoxShadow {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  type: string;
}

export interface Spacing {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface GlobalTheme {
  name: string;
  typography: {
    display: TypographySize;
    body: TypographySize;
    heading: TypographySize;
    label: TypographySize;
  };
  spacing: Spacing;
  borderRadius: {
    minimal: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderWidth: {
    sm: string;
    md: string;
    lg: string;
  };
  boxShadow: {
    xs: BoxShadow;
    sm: BoxShadow;
    md: BoxShadow;
    lg: BoxShadow;
    xl: BoxShadow;
  };
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
