import React from "react";
import { StyledList, StyledListItem, StyledListItemStart } from "./List.styles";
import Typography from "../Typography";
import { VariantsProp } from "../Typography/Typography.types";
import {
  Typography as tp,
  TypographySize,
} from "../../theming/global-theme.interface";

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
  item: { variant: "body", size: "md" as any },
  header: { variant: "heading", size: "xs" as any },
  subheader: { variant: "body", size: "sm" as any },
};

export const ListItem = (props: ListItemProps) => {
  const { variant, size } = typographyVariant[props.variant || "item"];

  return (
    <StyledListItem {...props} button={props.button}>
      <StyledListItemStart>
        {props.startAdornment ? <span>{props.startAdornment}</span> : null}
        <Typography variant={variant} size={size as any} noMargin>
          {props.children}
        </Typography>
      </StyledListItemStart>
      {props.endAdornment ? <span>{props.endAdornment}</span> : null}
    </StyledListItem>
  );
};
