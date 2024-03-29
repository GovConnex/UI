import styled from "styled-components";

export const ToggleWrapper = styled.div<{variant: string}>(
  ({theme, variant}) => `
${
  variant === "card"
    ? `
border-radius: ${theme.borderRadius.sm};
border-color: ${theme.primary.neutral[200]};
border-style: solid;
border-width: 1px;
background-color: ${theme.core.background.bgPrimary};

:hover {
  background-color: ${theme.extended.state.secondaryHover};
  border-color:${theme.primary.brand[300]};
}
`
    : ""
}

cursor: pointer;
padding: ${variant === "single" ? 0 : theme.spacing.sm};

display: flex;
align-items: center;
gap: ${theme.spacing.xs};
flex-direction: ${variant === "default" ? "row-reverse" : "row"}};
justify-content: ${variant === "default" ? "start" : "space-between"}};
`
);

export const ToggleIconWrapper = styled.span<{variant: string}>(
  ({theme, variant}) => `
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  ${variant === "single" ? "display: none;" : ""}
`
);

export const ToggleView = styled.div`
  top: 0;
  left: 0;
  min-width: 36px;
  border-radius: 12px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 3px;
    background: #ffffff;
    transition: 0.2s;
  }
`;

export const StyledToggle = styled.input(
  ({theme}) => `
  display: none;
  opacity: 0;
  z-index: 1;
  border-radius: 12px;
  width: 36px;
  &:checked + ${ToggleView} {
    background: ${theme.primary.brand[500]};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 17px;
      transition: 0.2s;
    }
  }
`
);

export const ToggleLabel = styled.label``;

export const ToggleTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;
