import React from "react";
import { StyledList, StyledListItem, StyledListItemStart } from "./List.styles";
import Typography from "../Typography";
import { VariantsProp } from "../Typography/Typography.types";

export const List = StyledList;

export type ListItemVariant = "item" | "header" | "subheader";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  // checked?: boolean;
  variant?: ListItemVariant;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  size?: string;
};

interface TypoVariant {
  item: {
    variant: VariantsProp;
    size: string;
  }
  header: {
    variant: VariantsProp;
    size: string;
  }
  subheader: {
    variant: VariantsProp;
    size: string;
  }
}

const typographyVariant: TypoVariant = {
  item: { variant: "body", size: "md" },
  header: { variant: "heading", size: "xs" },
  subheader: { variant: "body", size: "sm" },
};

export const ListItem = (props: ListItemProps) => {
  const { variant, size } = typographyVariant[props.variant || "item"];

  return (
    <StyledListItem {...props} button={props.button}>
      <StyledListItemStart>
        {props.startAdornment ? <span>{props.startAdornment}</span> : null}
        <Typography variant={variant} size={size} noMargin>{props.children}</Typography>
      </StyledListItemStart>
      {props.endAdornment ? <span>{props.endAdornment}</span> : null}
    </StyledListItem>
  );
};
