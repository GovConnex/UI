import styled from "styled-components";
import { SizeProp, RotateProp } from "@fortawesome/fontawesome-svg-core";

const sizeMap = {
  xs: "vertical-align: 0em; font-size: 0.75em; line-height: 0.0833333337em;",
  lg: "vertical-align: -0.2em; font-size: 1.25em; line-height: 0.05em;",
  xl: "vertical-align: -0.2em; font-size: 1.25em; line-height: 0.05em;",
  sm: "vertical-align: -0.0714285705em; font-size: 0.875em; line-height: 0.0714285718em;",
  "2xs": "vertical-align: -0.12em; font-size: 2em;",
  "2xl": "vertical-align: -0.12em; font-size: 2em;",
  "1x": "vertical-align: -0.12em; font-size: 1em;",
  "2x": "vertical-align: -0.12em; font-size: 2em;",
  "3x": "vertical-align: -0.12em; font-size: 3em;",
  "4x": "vertical-align: -0.12em; font-size: 4em;",
  "5x": "vertical-align: -0.12em; font-size: 5em;",
  "6x": "vertical-align: -0.12em; font-size: 6em;",
  "7x": "vertical-align: -0.12em; font-size: 7em;",
  "8x": "vertical-align: -0.12em; font-size: 8em;",
  "9x": "vertical-align: -0.12em; font-size: 9em;",
  "10x": "vertical-align: -0.12em; font-size: 10em;",
};

const StyledIcon = styled.span<{ rotate?: RotateProp; size?: SizeProp }>`
  display: inline-block;
  text-align: center;
  text-transform: none;
  text-rendering: optimizelegibility;
  box-sizing: content-box;
  overflow: visible;

  & > svg {
    vertical-align: -0.125em;
    height: 1em;

    ${({ size }) => size && sizeMap[size]}
    ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
  }
`;

export default StyledIcon;
