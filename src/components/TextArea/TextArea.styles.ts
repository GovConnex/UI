import styled from "styled-components";
import {getValueFromPath} from "../../core/styleFunctions";
import {Spacing} from "../../theming/global-theme.interface";

const StyledAdornment = styled.span<{
  position: string;
  disabled: boolean;
  noPadding?: boolean;
  squashHeight?: boolean;
  adornmentColor?: string;
  overridePositionTop?: string;
}>(
  ({
    theme,
    position,
    disabled,
    noPadding,
    squashHeight,
    adornmentColor,
    overridePositionTop,
  }) => ({
    [position]: noPadding ? theme.spacing.xs : theme.spacing.sm,
    paddingTop: overridePositionTop
      ? overridePositionTop
      : noPadding
      ? "0px"
      : theme.spacing.xs,
    position: "absolute",
    pointerEvents: squashHeight ? "auto" : "none",
    opacity: adornmentColor ? 1 : disabled ? 0.3 : 1,
    color: adornmentColor ? getValueFromPath(theme, adornmentColor) : "inherit",
  })
);

const StyledTextAreaContainer = styled.div<{fullWidth: boolean; squashHeight?: boolean}>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({theme, fullWidth, squashHeight}) =>
    `
  width: ${fullWidth ? "100%" : "fit-content"};
  display: ${squashHeight ? "inline-block" : "inline-flex"};

  position: relative;
  `
);

const StyledTextArea = styled.textarea<{
  error: boolean;
  fullWidth: boolean;
  adornmentPadding: "left" | "right" | null;
  resize: boolean | undefined;
  squashHeight?: boolean;
  noPadding?: boolean;
  overridePadding?: keyof Spacing;
}>(
  ({
    theme,
    error,
    fullWidth,
    adornmentPadding,
    resize,
    squashHeight,
    noPadding,
    overridePadding,
  }) =>
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
      ? adornmentPadding === "left"
        ? "26px"
        : overridePadding
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
      ? adornmentPadding === "right"
        ? "26px"
        : overridePadding
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
  font-weight: inherit;
  color: ${theme.core.content.contentPrimary};
  background-color: ${theme.primary.base.white};

  min-height: ${squashHeight ? "0px" : "22px"};

  ${resize ? "resize: auto;" : "resize:none;"}

  &:focus {
    outline: none;
    border-width: 1px;
    border-color:${error ? theme.secondary.red[500] : theme.primary.base.brand};
  }

  &:disabled{
    background-color:${theme.core.background.bgSecondary};
    cursor: no-drop;
    color: ${theme.core.content.contentTertiary};
    stroke: ${theme.extended.state.disabled};
  }

  &:disabled::placeholder{
    color:${theme.extended.state.disabled};
  }

  &:hover {
    background-color: ${theme.extended.state.secondaryHover};
  }
  `
);

const StyledTextAreaWrapper = styled.div<{fullWidth?: boolean}>(
  ({theme, fullWidth}) =>
    `
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  width: ${fullWidth ? "100%" : "auto"}
  `
);

export {StyledTextArea, StyledTextAreaWrapper, StyledTextAreaContainer, StyledAdornment};
