import React from "react";
import {VariantsProp} from "./Typography.types";
import {variantComponents} from "./Typography.styles";


export interface TypographyProps {
  children?: React.ReactNode;
  variant?: VariantsProp;
}

const Typography = (props: TypographyProps) => {
  const VariantComponent = variantComponents[props.variant || "display"];
  return <VariantComponent>{props.children}</VariantComponent>;
};

export default Typography;
