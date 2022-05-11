import React from "react";
import { VariantsProp } from "./Typography.types";
import { variantComponents } from "./Typography.styles";

export interface TypographyProps {
  children?: React.ReactNode;
  variant?: VariantsProp;
  className?: string;
}

const Typography = ({
  children,
  variant = "textMd",
  className,
}: TypographyProps) => {
  const VariantComponent = variantComponents[variant];
  return <VariantComponent className={className}>{children}</VariantComponent>;
};

export default Typography;
