import 'styled-components';
import GlobalTheme, {CommonGradient} from "./global-theme.interface";


declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {
    primary: {
      brand: CommonGradient;
      neutral: CommonGradient;
      base: {
        primary: string;
        white: string;
        black: string;
      }
    }
    secondary: {
      green: CommonGradient;
      blue: CommonGradient;
    }
  }
}
