import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { addCustomStyles, customStyles } from "../../core/styleFunctions";
import styled, { DefaultTheme } from "styled-components";

const sizeToBorderRadius = (size: SizeProp, theme: DefaultTheme): string =>
  ({
    xs: theme.borderRadius.xs,
    sm: theme.borderRadius.sm,
    "1x": theme.borderRadius.sm,
    lg: theme.borderRadius.sm,
    xl: theme.borderRadius.sm,
    "2xs": theme.borderRadius.md,
    "2xl": theme.borderRadius.md,
    "2x": theme.borderRadius.md,
    "3x": theme.borderRadius.lg,
    "4x": theme.borderRadius.lg,
    "5x": theme.borderRadius.lg,
    "6x": theme.borderRadius.lg,
    "7x": theme.borderRadius.lg,
    "8x": theme.borderRadius.lg,
    "9x": theme.borderRadius.lg,
    "10x": theme.borderRadius.lg,
  }[size]);

const sizeToWidth = (size: SizeProp, theme: DefaultTheme): string => {
  const basePx = 24;
  return (
    {
      xs: basePx * 0.8,
      sm: basePx * 0.9,
      "1x": basePx,
      lg: 32,
      xl: 32,
      "2xs": basePx * 2,
      "2xl": basePx * 2,
      "2x": basePx * 2,
      "3x": basePx * 3,
      "4x": basePx * 4,
      "5x": basePx * 5,
      "6x": basePx * 6,
      "7x": basePx * 7,
      "8x": basePx * 8,
      "9x": basePx * 9,
      "10x": basePx * 10,
    }[size] + "px"
  );
};

const StyledBackgroundIcon = styled.div<{ size?: SizeProp, cs?: customStyles }>`
  align-items: center;
  border-radius: ${(props) =>
    sizeToBorderRadius(props.size || "sm", props.theme)};
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  padding: 0;
  background: ${(props) => props.theme.primary.brand["50"]};
  color: ${(props) => props.theme.primary.brand["600"]};
  width: ${(props) => sizeToWidth(props.size || "sm", props.theme)};
  height: ${(props) => sizeToWidth(props.size || "sm", props.theme)};

  ${(props) => addCustomStyles(props)};
`;

export default StyledBackgroundIcon;
