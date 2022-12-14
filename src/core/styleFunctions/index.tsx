import * as CSS from "csstype";
import { DefaultTheme } from "styled-components";

type breakpoints = {
  sm?: CSS.Properties;
  md?: CSS.Properties;
  lg?: CSS.Properties;
};

type keysTypes = "sm" | "md" | "lg"; 

export type customStyles = CSS.Properties | breakpoints;

const values: { sm: number; md: number; lg: number } = {
  sm: 0, // tablet
  md: 600, // small laptop
  lg: 1360, // desktop 1360
};

/**
 * Supported unique css values
 */
const cssValueMap = {

  // padding
  p:"padding",
  pt:"paddingTop",
  pb:"paddingBottom",
  pl:"paddingLeft",
  pr:"paddingRight",
  px:"paddingLeft&paddingRight", 
  py:"paddingTop&paddingBottom",
  
  paddingX:"paddingLeft&paddingRight", 
  paddingY:"paddingTop&paddingBottom",
  
  // margin
  m:"margin",
  mt:"marginTop",
  mb:"marginBottom",
  ml:"marginLeft",
  mr:"marginRight",
  mx:"marginLeft&marginRight",
  my:"marginTop&marginBottom", 
  marginX:"marginLeft&marginRight", 
  marginY:"marginTop&marginBottom", 
  
  // width
  w:"width",
  
  // height
  h:"height",
  
  // background
  bg:"background",

  direction:"flexDirection", 
}

/**
 * Spacing map
 */
const numberToSpacingMap = {
  1:"spacing.xxs",
  2:"spacing.xs",
  3:"spacing.sm",
  4:"spacing.md",
  5:"spacing.lg",
  6:"spacing.xl",
  7:"spacing.xxl",
}


const defaultBreakpoints = {
  keys: ["sm", "md", "lg"],
  up: (key: keysTypes) => `@media (min-width:${values[key]}px)`,
};

// returns true theme path
export function getValueFromPath(theme: any, path: string) {
  // check if value has a path
  if (path.split(".").length <= 1) { return path }
  // get path to theme
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, theme);
}

/**
 * takes in props and returns styles to be injected into styled-components
 */
const experimental_passCustomStyles = (args: any) => {
  const { cs, theme = {} as DefaultTheme } = args || {};

  // traverse through cs object and return styles
  function traverse(styles: any) {
    let css = {};

    // check all props for custom styles
    Object.keys(styles).forEach((k) => {
      // remove any funciton values
      if(typeof styles[k] === "function") return;
      
      // 1) check if prop is a custom style object
      if (k === "cs" && typeof styles[k] === "object") {
        css = { ...css, ...traverse(styles[k]) };
      }
      
      // 2) check if prop is a breakpoint
      if (defaultBreakpoints.keys.includes(k)) {
        const bp = defaultBreakpoints.up(k as keysTypes);
        css = { ...css, [bp]: traverse(styles[k]) };
      }
      
      // 3) check if prop is a special case
      let cssProp = k;
      if (cssValueMap[k as keyof typeof cssValueMap]){
        cssProp = cssValueMap[k as keyof typeof cssValueMap];
      };

      // 3) normalise chained keys
      if (cssProp.includes("&")) {

        // split by &
        let t = cssProp.split("&");

        // 3.1) Loop through chained keys and add to css
        t.forEach((v) => {
          css = { ...css, ...traverse({ [v]: styles[k] }) };
        });

      } else {

        // 4) check if prop is a string - if so, treat as a theme path
        if (typeof styles[k] === "string") {
          css = { ...css, [cssProp]: getValueFromPath(theme, styles[k]) };
        }

        // 5) check if prop is a number - if so, treat as a spacing value
        if (typeof styles[k] === "number") {
          const n =
            numberToSpacingMap[styles[k] as keyof typeof numberToSpacingMap] || "0px";
          css = { ...css, [cssProp]: getValueFromPath(theme, n) };
        }

        return;
      }

    });

    return css;
  }

  return traverse(cs);
};;

// Pass the theme for styled-components
export function addCustomStyles(props: {cs?:customStyles, theme:DefaultTheme} | CSS.Properties) {
  // @ts-ignore
  return experimental_passCustomStyles(props);
}