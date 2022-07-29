import styled from "styled-components";
import { Variants } from "./Typography.types";

export const FONT_WEIGHTS = {
  Regular: 500,
  "Semi Bold": 600,
  Bold: 700,
};

export const variantComponents = Object.keys(Variants).reduce((acc, key) => {
  // @ts-ignore ignore
  acc[key] = styled(Variants[key])<{size: string}>`
    font-family: ${({ theme, size }) => theme.typography[key][size].fontFamily};
    font-weight: ${({ theme, size }) =>
      FONT_WEIGHTS[
        theme.typography[key][size].fontWeight as keyof typeof FONT_WEIGHTS
      ]};
    line-height: ${({ theme, size }) => theme.typography[key][size].lineHeight};
    font-size: ${({ theme, size }) => theme.typography[key][size].fontSize};
    letter-spacing: ${({ theme, size }) => theme.typography[key][size].letterSpacing};
    margin-top: 0;
    margin-bottom: ${({ theme, size }) => theme.typography[key][size].paragraphSpacing};
    text-decoration: ${({ theme, size }) => theme.typography[key][size].textDecoration};
    color: ${({ theme, size }) => theme.typography[key][size].color};
    ${({ noMargin }) => noMargin && "margin: 0;"};
  `;
  return acc;
}, {} as any);
