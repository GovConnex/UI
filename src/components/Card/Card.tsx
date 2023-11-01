import React from "react";
import {Spacing} from "../../theming/global-theme.interface";
import StyledCard from "./Card.styles";
import {customStyles} from "../../core/styleFunctions";

export interface CardProps {
  focused?: boolean;
  padding?: keyof Spacing;
  children?: React.ReactNode;
  selected?: boolean;
  hoverStyle?: "none" | "shadow" | "regress";
  noPadding?: boolean;
  cs?: customStyles;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {focused, hoverStyle = "shadow", selected, children, padding, noPadding, cs, ...rest},
    ref
  ) => {
    return (
      <StyledCard
        ref={ref}
        hoverStyle={hoverStyle}
        selected={selected}
        focused={!!focused}
        padding={padding}
        noPadding={noPadding}
        cs={cs}
        {...rest}
      >
        {children}
      </StyledCard>
    );
  }
);

export default Card;
