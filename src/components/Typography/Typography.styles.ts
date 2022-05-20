import styled from "styled-components";
import { Variants } from "./Typography.types";

export const FONT_WEIGHTS = {
  Regular: 400,
  Medium: 500,
  "Semi Bold": 600,
  Bold: 700,
};

export const variantComponents = Object.keys(Variants).reduce((acc, key) => {
  // @ts-ignore
  acc[key] = styled(Variants[key])`
    font-family: ${({ theme }) => theme.typography[key].fontFamily};
    font-weight: ${({ theme }) =>
      FONT_WEIGHTS[
        theme.typography[key].fontWeight as keyof typeof FONT_WEIGHTS
      ]};
    line-height: ${({ theme }) => theme.typography[key].lineHeight};
    font-size: ${({ theme }) => theme.typography[key].fontSize};
    letter-spacing: ${({ theme }) => theme.typography[key].letterSpacing};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.typography[key].paragraphSpacing};
    text-decoration: ${({ theme }) => theme.typography[key].textDecoration};
    color: ${({ theme }) => theme.typography[key].color};
    ${({ noMargin }) => noMargin && "margin: 0;"};
  `;
  return acc;
}, {} as any);
