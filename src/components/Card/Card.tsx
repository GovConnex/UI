import React from "react";
import StyledCard from "./Card.styles";

export interface CardProps {
  focused?: boolean;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props: CardProps, ref) => {
    return (
      <StyledCard ref={ref} focused={!!props.focused}>
        {props.children}
      </StyledCard>
    );
  }
);

export default Card;
