import React from "react";
import { StyledList, StyledListItem, StyledListItemStart } from "./List.styles";
import Typography from "../Typography";

export const List = StyledList;

export type ListItemVariant = "item" | "header" | "subheader";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  // checked?: boolean;
  variant?: ListItemVariant;
  button?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

const typographyVariant: {
  item: "textMd";
  header: "displayMd";
  subheader: "captionSm";
} = {
  item: "textMd",
  header: "displayMd",
  subheader: "captionSm",
};

export const ListItem = (props: ListItemProps) => {
  const variant = typographyVariant[props.variant || "item"];

  return (
    <StyledListItem {...props} button={props.button}>
      <StyledListItemStart>
        {props.startAdornment}
        <Typography variant={variant} noMargin>{props.children}</Typography>
      </StyledListItemStart>
      <span>{props.endAdornment}</span>
    </StyledListItem>
  );
};
