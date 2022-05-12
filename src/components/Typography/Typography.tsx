import React from "react";
import { VariantsProp } from "./Typography.types";
import { variantComponents } from "./Typography.styles";

export interface TypographyProps extends React.HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  variant?: VariantsProp;
  noMargin?: boolean;
}

const Typography = ({
  children,
  variant = "textMd",
  ...props
}: TypographyProps) => {
  const VariantComponent = variantComponents[variant];
  return <VariantComponent {...props}>{children}</VariantComponent>;
};

export default Typography;
