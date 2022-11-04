import type * as CSS from "csstype";
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

const defaultBreakpoints = {
  keys: ["sm", "md", "lg"],
  up: (key: keysTypes) => `@media (min-width:${values[key]}px)`,
};

// takes in theme and a possible path and returns a true theme path or the original path value
function getValueFromPath(theme: any, path: string) {
  // check if value has a path
  if (path.split(".").length <= 1) {
    return path;
  }

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
const experimental_passCustomStyles = (args: {cs?:customStyles, theme:DefaultTheme}) => {
  const {cs, theme = {} as DefaultTheme } = args || {};


  if (!cs) {
    return null;
  }

  function traverse(styles: any) {
    let css = {}; // final styles goes here

    Object.keys(styles).forEach((t) => {
      const v = styles[t]; // value of each style

      // remove theme and children
      if (t != "theme" && t != "children") {
        if (typeof v === "object") {
          // if a key is a breakpoint then add the bp to css
          if (defaultBreakpoints.keys.includes(t)) {
            const bp = defaultBreakpoints.up(t as keysTypes); //[TODO] order can differ and cause problems
            css = {
              ...css,
              [bp]: experimental_passCustomStyles({ cs: v, theme }),
            };
          } else {
            css = {
              ...css,
              ...experimental_passCustomStyles({ cs: v, theme }),
            };
          }
        }
        // add the values to new css
        if (typeof v === "string") {
          // asume its a css style
          css = { ...css, [t]: getValueFromPath(theme, v) };
        }
      }
      return;
    });
    return css;
  }
  return traverse(cs);
};

// Pass the theme for styled-components
export function addCustomStyles(props: {cs?:customStyles, theme:DefaultTheme}) {
  // @ts-ignore
  return experimental_passCustomStyles(props);
}
