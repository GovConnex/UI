import React from "react";
import { VariantsProp } from "./Typography.types";
import { variantComponents } from "./Typography.styles";

export interface TypographyProps extends Omit<React.HTMLProps<HTMLElement>, "size"> {
  children?: React.ReactNode;
  variant?: VariantsProp;
  noMargin?: boolean;
  size?: string;
}

const Typography = ({
  children,
  variant = "body",
  size = "md",
  ...props
}: TypographyProps) => {
  const VariantComponent = variantComponents[variant];
  return <VariantComponent size={size} {...props}>{children}</VariantComponent>;
};

export default Typography;
