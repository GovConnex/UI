import styled from "styled-components";
import {Spacing} from "../../theming/global-theme.interface";

const StyledAdornment = styled.span<{position: string; disabled: Boolean}>(
  ({theme, position, disabled}) => ({
    [position]: theme.spacing.sm,
    position: "absolute",
    pointerEvents: "none",
    opacity: disabled ? 0.3 : 1,
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
  border-color:${error ? theme.secondary.red[500] : theme.primary.neutral[200]};
  border-style:solid;
  border-width:1px;

  font-size:${theme.typography.body.md.fontSize};
  background-color: ${theme.primary.base.white};
  font-weight: inherit;
  color: ${theme.core.content.contentPrimary};
  font-family: inherit;

  min-height: 22px;

  outline: none;

  &:focus {
    border-color:${error ? theme.secondary.red[500] : theme.primary.base.brand};
    border-width:1px;
    padding-top: ${
      overridePadding
        ? theme.spacing[overridePadding]
        : noPadding
        ? "0px"
        : `calc(${theme.spacing.xs} - 1px)`
    };
    padding-bottom: ${
      overridePadding
        ? theme.spacing[overridePadding]
        : noPadding
        ? "0px"
        : `calc(${theme.spacing.xs} - 1px)`
    };
    padding-left: ${
      noPadding
        ? overridePadding
          ? theme.spacing[overridePadding]
          : "0px"
        : `calc((${theme.spacing.sm} + ${
            adornmentPadding === "left" ? "26px" : "0px"
          }) - 1px)`
    };
    padding-right: ${
      noPadding
        ? overridePadding
          ? theme.spacing[overridePadding]
          : "0px"
        : `calc((${theme.spacing.sm} + ${
            adornmentPadding === "right" ? "26px" : "0px"
          }) - 1px)`
    };
  }

  &:hover {
    background-color: ${theme.extended.state.secondaryHover};
  }

  &:disabled{
    background-color:${theme.core.background.bgSecondary};
    color: ${theme.core.content.contentTertiary};
    cursor: no-drop;
    stroke: ${theme.extended.state.disabled};
  }

  &:disabled::placeholder{
    color:${theme.extended.state.disabled};
  }
  `
);

export {StyledInputWrapper, StyledInputContainer, StyledInput, StyledAdornment};
