import 'styled-components';
import GlobalTheme, {CommonGradient} from "./global-theme.interface";

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {
    primary: {
      brand: CommonGradient;
      neutral: CommonGradient;
      base: {
        brand: string;
        white: string;
        black: string;
      }
    }
    secondary: {
      red: CommonGradient;
      yellow: CommonGradient;
      green: CommonGradient;
      blue: CommonGradient;
    },
    foundation: {
      primary: string;
      black: string;
      white: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    },
    core: {
      background: {
        bgPrimary: string;
        bgSecondary: string;
        bgTertiary: string;
        bgInversePrimary: string;
        bgInverseSecondary: string;
      },
      content: {
        contentPrimary: string;
        contentSecondary: string;
        contentTertiary: string;
        contentInversePrimary: string;
        contentInverseSecondary: string;
        contentInverseTertiary: string;
      },
      border: {
        borderLight: string;
        borderDark: string;
        borderFocus: string;
        borderInverseLight: string;
        borderInverseDark: string;
      }
    },
    extended: {
      state: {
        primaryBase: string,
        primaryHover: string,
        secondaryBase: string,
        secondaryHover: string,
        tertiaryBase: string,
        tertiaryHover: string,
        disabled: string,
      },
      support: {
        infoBase: string,
        infoDark: string,
        successBase: string,
        successDark: string,
        warningBase: string,
        warningDark: string,
        errorBase: string,
        errorDark: string,
        infoLight: string,
        successLight: string,
        warningLight: string
        errorLight: string
      }
    }
  }
}
