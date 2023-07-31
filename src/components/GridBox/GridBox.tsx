import React from "react";
import Box, {ExtendedBoxProps} from "../Box/Box";

export interface GridBoxProps extends ExtendedBoxProps {
  /**
   * If enabled (default), will use the appropriate breakpoint styles from the theme.
   */
  showColumnGap?: boolean;
  /**
   * If enabled (NOT default), will use the appropriate breakpoint styles from the theme.
   */
  showRowGap?: boolean;
}

/**
 * `GridBox` is a higher-order component that extends the functionality of the `Box` component.
 * It provides a responsive grid layout with configurable column counts and gaps for each breakpoint.
 *
 * By default, the grid will have 4 columns for the "sm" breakpoint, 8 columns for the "md" breakpoint, and 12 columns for the "lg" breakpoint.
 * There will be column gaps of 8px for the "sm" breakpoint, 16px for the "md" breakpoint, and 24px for the "lg" breakpoint.
 * There will be no row gaps.
 *
 * @component
 * @example
 * <GridBox mt="spacing.md">
 *   // Child components go here
 * </GridBox>
 *
 * @param {object} props - The properties that define the GridBox component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the GridBox.
 * @param {object} [props.sm] - The styles to apply for the "sm" breakpoint.
 * @param {object} [props.md] - The styles to apply for the "md" breakpoint.
 * @param {object} [props.lg] - The styles to apply for the "lg" breakpoint.
 * @returns {React.ReactElement} The rendered GridBox component.
 */
const GridBox: React.FC<GridBoxProps> = ({
  children,
  showColumnGap = true,
  showRowGap = false,
  sm,
  md,
  lg,
  ...rest
}) => {
  const smStyles = {
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: showColumnGap ? "spacing.sm" : undefined,
    rowGap: showRowGap ? "spacing.sm" : undefined,
    ...sm,
  };
  const mdStyles = {
    gridTemplateColumns: "repeat(8, 1fr)",
    columnGap: showColumnGap ? "spacing.md" : undefined,
    rowGap: showRowGap ? "spacing.md" : undefined,
    ...md,
  };
  const lgStyles = {
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: showColumnGap ? "spacing.lg" : undefined,
    rowGap: showRowGap ? "spacing.lg" : undefined,
    ...lg,
  };

  return (
    <Box
      cs={
        {
          display: "grid",
          sm: smStyles,
          md: mdStyles,
          lg: lgStyles,
          ...rest,
        } as any
      }
    >
      {children}
    </Box>
  );
};

export default GridBox;
