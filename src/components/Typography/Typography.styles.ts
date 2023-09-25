import styled from "styled-components";
import {getValueFromPath} from "../../core/styleFunctions";
import {Variants} from "./Typography.types";
import {addCustomStyles, customStyles} from "../../core/styleFunctions";

export const FONT_WEIGHTS = {
  Regular: 400,
  Medium: 500,
  "Semi Bold": 600,
  Bold: 700,
};

export const variantComponents = Object.keys(Variants).reduce((acc, key) => {
  // @ts-ignore ignore
  acc[key] = styled(Variants[key])<{size: string; cs?: customStyles}>`
    font-family: ${({theme, size}) => theme.typography[key][size]?.fontFamily};
    font-weight: ${({theme, size}) =>
      FONT_WEIGHTS[theme.typography[key][size]?.fontWeight as keyof typeof FONT_WEIGHTS]};
    line-height: ${({theme, size}) => theme.typography[key][size]?.lineHeight};
    font-size: ${({theme, size}) => theme.typography[key][size]?.fontSize};
    letter-spacing: ${({theme, size}) => theme.typography[key][size]?.letterSpacing};
    margin-top: 0;
    margin-bottom: ${({theme, size}) => theme.typography[key][size]?.paragraphSpacing};
    text-decoration: ${({theme, size}) => theme.typography[key][size]?.textDecoration};
    color: ${({theme, color}) => (color ? getValueFromPath(theme, color) : "inherit")};
    ${({noMargin}) => noMargin && "margin: 0;"};

    ${(props) => addCustomStyles(props)};

    & p {
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
      font-size: inherit;
      letter-spacing: inherit;
      margin-top: inherit;
      margin-bottom: inherit;
      text-decoration: inherit;
      color: inherit;
    }

    > * {
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
      font-size: inherit;
      letter-spacing: inherit;
      margin-top: inherit;
      margin-bottom: inherit;
      color: inherit;
    }
  `;
  return acc;
}, {} as any);
