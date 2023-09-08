import React from "react";
import {Spacing} from "../../theming/global-theme.interface";
import StyledCard from "./Card.styles";

export interface CardProps {
  focused?: boolean;
  padding?: keyof Spacing;
  children?: React.ReactNode;
  selected?: boolean;
  hoverStyle?: "none" | "shadow" | "regress";
  noPadding?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({focused, hoverStyle = "shadow", selected, children, padding, noPadding, ...rest}, ref) => {
    return (
      <StyledCard
        ref={ref}
        hoverStyle={hoverStyle}
        selected={selected}
        focused={!!focused}
        padding={padding}
        noPadding={noPadding}
        {...rest}
      >
        {children}
      </StyledCard>
    );
  }
);

export default Card;
