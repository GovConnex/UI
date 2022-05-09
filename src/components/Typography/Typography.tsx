import React from "react";
import { VariantsProp } from "./Typography.types";
import { variantComponents } from "./Typography.styles";

export interface TypographyProps {
  children?: React.ReactNode;
  variant?: VariantsProp;
}

const Typography = ({ children, variant = "textMd" }: TypographyProps) => {
  const VariantComponent = variantComponents[variant];
  return <VariantComponent>{children}</VariantComponent>;
};

export default Typography;
