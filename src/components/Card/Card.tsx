import React from "react";
import StyledCard from "./Card.styles";

export interface CardProps {
  focused?: boolean;
  children?: React.ReactNode;
};

const Card = (props: CardProps) => {
  return <StyledCard focused={!!props.focused}>{props.children}</StyledCard>;
};

export default Card;
