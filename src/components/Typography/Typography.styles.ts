import styled from "styled-components";
import {Variants} from "./Typography.types";

export const variantComponents = Object.keys(Variants).reduce((acc, key) => {
  // @ts-ignore
  acc[key] = styled(Variants[key])`
    font-family: ${({theme}) => theme.typography.display.sm.fontFamily};
    font-size: ${({theme}) => theme.typography.display.sm.fontSize};
    font-weight: ${({theme}) => theme.typography.display.sm.fontWeight};
    line-height: ${({theme}) => theme.typography.display.sm.lineHeight};
    color: ${({theme}) => theme.typography.display.sm.color};
  `;
  return acc;
}, {} as any);