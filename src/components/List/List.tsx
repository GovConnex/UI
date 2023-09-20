import React from "react";
import {
  StyledList,
  StyledListItem,
  StyledListItemStart,
  StyledAdornment,
} from "./List.styles";
import Typography from "../Typography";
import {VariantsProp} from "../Typography/Typography.types";
import {TypographySize} from "../../theming/global-theme.interface";

export const List = StyledList;

export type ListItemVariant = "item" | "header" | "subheader";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  // checked?: boolean;
  variant?: ListItemVariant;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  size?: TypographySize;
  color?: string;
}

interface TypoVariant {
  item: {
    variant: VariantsProp;
    size: TypographySize;
  };
  header: {
    variant: VariantsProp;
    size: TypographySize;
  };
  subheader: {
    variant: VariantsProp;
    size: TypographySize;
  };
}

const typographyVariant: TypoVariant = {
  item: {variant: "body", size: "md" as any},
  header: {variant: "heading", size: "xs" as any},
  subheader: {variant: "body", size: "sm" as any},
};

export const ListItem = (props: ListItemProps) => {
  const {variant, size} = typographyVariant[props.variant || "item"];

  return (
    <StyledListItem {...props} button={props.button}>
      <StyledListItemStart>
        {props.startAdornment ? (
          <StyledAdornment color={props.color}>{props.startAdornment}</StyledAdornment>
        ) : null}
        <Typography variant={variant} size={size as any} color={props.color} noMargin>
          {props.children}
        </Typography>
      </StyledListItemStart>
      {props.endAdornment ? (
        <StyledAdornment color={props.color}>{props.endAdornment}</StyledAdornment>
      ) : null}
    </StyledListItem>
  );
};
