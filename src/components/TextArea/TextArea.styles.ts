import styled from "styled-components";

const StyledAdornment = styled.span<{ position: string; disabled: Boolean }>(
  ({ theme, position, disabled }) => ({
    [position]: theme.spacing.sm,
    paddingTop: theme.spacing.xs,
    position: "absolute",
    pointerEvents: "none",
    opacity: disabled ? 0.3 : 1,
  }),
);

const StyledTextAreaContainer = styled.div<{ fullWidth: boolean }>(
  ({ theme, fullWidth }) =>
    `
  width: ${fullWidth ? "100%" : "fit-content"};
  display: inline-flex;

  position: relative;
  `,
);

const StyledTextArea = styled.textarea<{
  error: boolean;
  fullWidth: boolean;
  adornmentPadding: "left" | "right" | null;
  resize: boolean | undefined;
}>(
  ({ theme, error, fullWidth, adornmentPadding, resize }) =>
    `
  padding-top: ${theme.spacing.xs};
  padding-bottom: ${theme.spacing.xs};
  padding-left: calc(${theme.spacing.sm} + ${
    adornmentPadding === "left" ? "26px" : "0px"
  });
  padding-right: calc(${theme.spacing.sm} + ${
    adornmentPadding === "right" ? "26px" : "0px"
  });

  width: ${fullWidth ? "100%" : "initial"};
  background-color: transparent;

  border-radius: ${theme.borderRadius.xs};
  border-color:${error ? theme.secondary.red[500] : theme.primary.neutral[200]};
  border-style:solid;
  border-width:1px;

  font-size:${theme.typography.body.md.fontSize};
  background-color: ${theme.primary.base.white};

  min-height: 22px;

  ${resize ? "resize: auto;" : "resize:none;"}

  &:focus {
    outline: none;
    border-width: 2px;
    border-color:${error ? theme.secondary.red[500] : theme.primary.base.brand};
  }

  &:disabled{
    background-color:${theme.core.background.bgSecondary};
    cursor: no-drop;
  }

  &:disabled::placeholder{
    color:${theme.extended.state.disabled};
  }

  &:hover {
    background-color: ${theme.extended.state.secondaryHover};
  }
  `,
);

const StyledTextAreaWrapper = styled.div(
  ({ theme }) =>
    `
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  `,
);

export {
  StyledTextArea,
  StyledTextAreaWrapper,
  StyledTextAreaContainer,
  StyledAdornment,
};
