import React from "react";
import Box from "../Box";
import styled, {keyframes} from "styled-components";
import {customStyles} from "../../core/styleFunctions";

const spinner = keyframes`
  to {transform: rotate(360deg);}
`;

const StyledSpinner = styled.div<{
  variant: SpinnerVariant;
  subtype: SpinnerSubtype;
  isAbsolute: boolean;
  isOffset: boolean;
}>`
  box-sizing: border-box;
  ${({isAbsolute}) =>
    isAbsolute &&
    `
  position: absolute;
  top: 50%;
  left: 50%;`}
  width: 16px;
  height: 16px;
  ${({isOffset}) =>
    isOffset &&
    `
  margin-top: -8px;
  margin-left: -8px;
  `}
  border-radius: 50%;
  border: 2px solid transparent;
  animation: ${spinner} 0.6s linear infinite;

  ${({theme, variant}) =>
    variant === "primary" &&
    `
      border-top-color: ${theme.core.content.contentInversePrimary};
    `}

  ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "default" &&
    `
      border-top-color: ${theme.core.content.contentPrimary}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "success" &&
    `
      border-top-color: ${theme.extended.support.successDark}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "error" &&
    `
      border-top-color: ${theme.extended.support.errorDark}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "warning" &&
    `
      border-top-color: ${theme.extended.support.warningDark}
    `}

    ${({theme, subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "info" &&
    `
      border-top-color: ${theme.extended.support.infoDark}
    `}

    ${({theme, subtype, variant}) =>
    variant === "primary" &&
    subtype === "inverse" &&
    `
      border-top-color: ${theme.core.content.contentPrimary};
    `}

    ${({subtype, variant}) =>
    (variant === "secondary" || variant === "tertiary") &&
    subtype === "inverse" &&
    `
      border-top-color: white;
    `}

    ${({theme, variant}) =>
    variant === "danger" &&
    `
      border-top-color: ${theme.extended.state.secondaryBase}
    `}
`;

export type SpinnerVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "danger"
  | "secondaryDanger";
export type SpinnerSubtype =
  | "default"
  | "info"
  | "success"
  | "error"
  | "warning"
  | "inverse";

export function Spinner({
  variant = "primary",
  subtype = "inverse",
  isAbsolute = false,
  isOffset = false,
  cs,
  children,
}: {
  variant?: SpinnerVariant;
  subtype?: SpinnerSubtype;
  isAbsolute?: boolean;
  isOffset?: boolean;
  cs?: customStyles;
  children?: React.ReactNode;
}) {
  return (
    <Box
      cs={
        {
          display: "flex",
          flexDirection: "row",
          gap: "spacing.xs",
          alignItems: "center",
          ...cs,
        } as customStyles
      }
    >
      <Box>
        <StyledSpinner
          variant={variant}
          subtype={subtype}
          isAbsolute={isAbsolute}
          isOffset={isOffset}
        />
      </Box>
      {children}
    </Box>
  );
}
