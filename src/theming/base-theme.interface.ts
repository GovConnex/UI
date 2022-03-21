export interface BaseThemeInterface {
  breakpoints: {
    keys: Array<string>,
    values: {
      xs: number,
      sm: number,
      md: number,
      lg: number,
      xl: number
    }
  },
  shadows: Array<string>,
  typography: {
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    display4: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      letterSpacing: string;
      lineHeight: string;
      marginLeft: string;
      color: string;
    },
    display3: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      letterSpacing: string;
      lineHeight: string;
      marginLeft: string;
      color: string;
    },
    display2: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      marginLeft: string;
      color: string;
    },
    display1: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    },
    headline: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    },
    title: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    },
    subheading: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    },
    body2: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    },
    body1: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    },
    caption: {
      fontSize: string;
      fontWeight: number;
      fontFamily: string;
      lineHeight: string;
      color: string;
    },
    button: {
      fontSize: string;
      textTransform: string;
      fontWeight: number;
      fontFamily: string;
      color: string;
    }
  },
  transitions: {
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    },
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    }
  },
  spacing: {
    unit: number;
  },
  zIndex: {
    mobileStepper: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  }
}
