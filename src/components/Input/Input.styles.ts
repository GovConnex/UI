import styled from "styled-components";
import {Spacing} from "../../theming/global-theme.interface";

const StyledAdornment = styled.span<{position: string; disabled: Boolean}>(
  ({theme, position}) => ({
    [position]: theme.spacing.sm,
    position: "absolute",
    pointerEvents: "none",
    color: theme.core.content.contentTertiary,
  })
);

const StyledInputContainer = styled.div<{fullWidth: boolean}>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({theme, fullWidth}) =>
    `
  width: ${fullWidth ? "100%" : "fit-content"};
  display: inline-flex;

  position: relative;
  align-items:center;
  `
);
const StyledInputWrapper = styled.div<{fullWidth: boolean}>(
  ({theme, fullWidth}) =>
    `
  width: ${fullWidth ? "100%" : "fit-content"};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  `
);

const StyledInput = styled.input<{
  error: boolean;
  noPadding?: boolean;
  fullWidth: boolean;
  overridePadding?: keyof Spacing;
  adornmentPadding: "left" | "right" | null;
}>(
  ({theme, error, fullWidth, adornmentPadding, noPadding, overridePadding}) =>
    `
  padding-top: ${
    overridePadding
      ? theme.spacing[overridePadding]
      : noPadding
      ? "0px"
      : theme.spacing.xs
  };
  padding-bottom: ${
    overridePadding
      ? theme.spacing[overridePadding]
      : noPadding
      ? "0px"
      : theme.spacing.xs
  };
  padding-left: ${
    noPadding
      ? overridePadding
        ? theme.spacing[overridePadding]
        : "0px"
      : `calc(${theme.spacing.sm} + ${
          adornmentPadding === "left"
            ? "26px"
            : overridePadding
            ? theme.spacing[overridePadding]
            : "0px"
        })`
  };
  padding-right: ${
    noPadding
      ? overridePadding
        ? theme.spacing[overridePadding]
        : "0px"
      : `calc(${theme.spacing.sm} + ${
          adornmentPadding === "right"
            ? "26px"
            : overridePadding
            ? theme.spacing[overridePadding]
            : "0px"
        })`
  };

  width: ${fullWidth ? "100%" : "initial"};
  background-color: transparent;

  border-radius: ${noPadding ? theme.borderRadius.minimal : theme.borderRadius.xs};
  border-color: ${error ? theme.extended.support.errorBase : theme.primary.neutral[200]};
  border-style: solid;
  border-width: 1px;

  font-size:${theme.typography.body.md.fontSize};
  background-color: ${theme.primary.base.white};
  font-weight: inherit;
  color: ${theme.core.content.contentPrimary};
  font-family: inherit;

  min-height: 22px;

  outline: none;

  &:focus {
    border-color: ${error ? theme.extended.support.errorBase : theme.primary.base.brand};
  }

  &:disabled {
    background-color: ${theme.extended.state.disabled};
    color: ${theme.core.content.contentTertiary};
    cursor: no-drop;
    stroke: ${theme.extended.state.disabled};
  }

  &::placeholder {
    color: ${theme.core.content.contentTertiary};
  }

  &:active::placeholder {
    color: ${theme.core.content.contentPrimary};
  }
  `
);

export {StyledInputWrapper, StyledInputContainer, StyledInput, StyledAdornment};
