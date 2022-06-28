import React from "react";
import DataTableDataCell from "./DataTableDataCell";
import Avatar from "../Avatar";
import Typography from "../Typography";
import styled from "styled-components";
import Chip from "../Chip";

export const NameCell = () => {
  return (
    <DataTableDataCell>
      <Avatar
        alt={"Cooper Darling-Blair"}
        src={
          "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5bbde01153dc9c5087edf407/ba6faad0-1d60-48c9-9bf4-b5be4fddfcaa/128"
        }
        variant={"square"}
        size={"lg"}
      />
      <Typography variant={"textMd"}>Cooper Darling-Blair</Typography>
    </DataTableDataCell>
  );
};

const Dot = styled.div<{ color?: string }>`
  background-color: ${(props) => props.color || "green"};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const SupportCell = () => {
  return (
    <DataTableDataCell>
      <Dot />
      <Typography variant={"textMd"}>Very High</Typography>
    </DataTableDataCell>
  );
};

export const TagCell = () => {
  return (
    <DataTableDataCell>
      <Chip
        label={"Tammy Ester"}
        startAdornment={
          <Avatar
            alt={"Cooper Darling-Blair"}
            src={
              "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5bbde01153dc9c5087edf407/ba6faad0-1d60-48c9-9bf4-b5be4fddfcaa/128"
            }
            variant={"circle"}
            size={"sm"}
          />
        }
      />
    </DataTableDataCell>
  );
};
