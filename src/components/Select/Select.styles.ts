import styled from "styled-components";
import {shadowFromProp} from "../style-utils";

const StyledSelect = styled.button<{
  error: boolean;
  fullWidth: boolean;
  visible: boolean;
}>(
  ({theme, error, visible, fullWidth}) =>
    `
padding:0 ${theme.spacing.sm};
display:flex;
align-items:center;
justify-content:space-between;
background-color: transparent;
cursor: pointer;
border-radius: ${theme.borderRadius.xs};
border-color:${error ? theme.secondary.red[500] : theme.primary.neutral[200]};
border-style:solid;
border-width:1px;
font-size:${theme.typography.body.md.fontSize};
background-color: ${theme.primary.base.white};
height: 40px;

&:focus {
outline-color:${error ? theme.secondary.red[500] : theme.primary.base.brand};
}

&:hover {
    background-color: ${theme.extended.state.secondaryHover};
  }

${fullWidth ? `width: 100%;` : ""}
${
  visible
    ? `outline: ${
        error ? theme.secondary.red[500] : theme.primary.base.brand
      } auto 1px !important;`
    : ""
}
gap: ${theme.spacing.sm};

`
);

const MenuWrapepr = styled.div<{maxHeight: string | null}>(
  ({theme, maxHeight}) =>
    `
        background-color: ${theme.primary.base.white};
        min-width: 100%;
        inline-size: fit-content;
        box-shadow:${shadowFromProp(theme.boxShadow.sm)};
        border: ${theme.borderWidth.sm} solid ${theme.core.border.borderLight};
        border-radius: ${theme.borderRadius.xs};
        overflow: hidden;

        gap: ${theme.spacing.xs};
        padding: ${theme.spacing.xs} ${theme.spacing.xs};
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

       ${maxHeight ? `max-height: ${maxHeight};` : ""}
        overflow-y: auto;

        `
);

const SelectWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.xs};
  flex-direction: column;
`;

const StyledChipWrapper = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.xs};
  align-items: center;
`;

export {SelectWrapper, StyledChipWrapper, StyledSelect, MenuWrapepr};
