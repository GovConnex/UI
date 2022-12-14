import React from "react";
import { VariantsProp } from "./Typography.types";
import { variantComponents } from "./Typography.styles";
import { TypographySize } from "../../theming/global-theme.interface";


//[TODO]: ( ) add noWrap
//        ( ) add align options

export interface TypographyProps
  extends Omit<React.HTMLProps<HTMLElement>, "size"> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The content of the component.
   */
  variant?: VariantsProp;

  /**
   * The text color
   */
  color?: string;

  /**
   * If `true`, all margin is set to 0 
   */
  noMargin?: boolean;
  /**
   * Typography font size 
   *  @default md
   */
  size?: keyof TypographySize;
}


/**
 *
 * `Typography`
 *
 * Demo: 
 * 
 *  - [Typography](https://ui.govconnex.com/?path=/story/components-typography--example)
 * 
 * Docs: 
 * 
 *  - [Typography Docs](https://ui.govconnex.com/?path=/docs/components-typography--example/)
 *
 */
const Typography = ({
  children,
  variant = "body",
  size = "md",
  color, 
  ...props
}: TypographyProps) => {
  const VariantComponent = variantComponents[variant];
  return <VariantComponent color={color} size={size} {...props}>{children}</VariantComponent>;
};

export default Typography;

