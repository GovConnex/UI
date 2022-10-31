import type * as CSS from 'csstype';

type breakpoints = {
  sm?: CSS.Properties;
  md?: CSS.Properties;
  lg?: CSS.Properties;
};

export type cs = CSS.Properties | breakpoints;


export const values: any = {
  sm: 0, // tablet
  md: 600, // small laptop
  lg: 1360, // desktop 1360
};

const defaultBreakpoints = {
  keys: ["sm", "md", "lg",],
  up: (key: any) => `@media (min-width:${values[key]}px)`,
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
const passCustomStyles = (props: any) => {
  const { props:cs, theme = {} } = props || {};

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
            const bp = defaultBreakpoints.up(t);
            css = { ...css, [bp]: passCustomStyles({ props: v, theme }) };
          } else {
            css = { ...css, ...passCustomStyles({ props: v, theme }) };
          }
        }
        // add the values to newStyle
        if (typeof v === "string") {
          // asume its a css style
          css = { ...css, [t]: getValueFromPath(theme, v) };
        }
      }
     return 
    });
    return css;
  }
  return traverse(cs);
};

// Pass the theme for styled-components
export function addCustomStyles(props: any) {
  // @ts-ignore
  return ({ theme }) => passCustomStyles({ props, theme });
}


