import React from "react";
import StyledCard from "./Card.styles";

export interface CardProps {
  focused?: boolean;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ focused, children, ...rest}, ref) => {
    return (
      <StyledCard ref={ref} focused={!!focused} {...rest}>
        {children}
      </StyledCard>
    );
  }
);

export default Card;
