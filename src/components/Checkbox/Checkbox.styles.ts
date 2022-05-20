import styled from "styled-components";

export const StyledCheckbox = styled.input`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
`;

export const StyledFakeCheckbox = styled.div<{checked?: boolean}>`
  width: 16px;
  height: 16px;
  border-radius: ${props => props.theme.borderRadius.sm};
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${props => props.theme.palette.background.default};
  border: ${props => props.theme.borderWidth.md} solid transparent;

  ${({checked, theme}) => checked ? `
    background-color: ${theme.palette.primary.main};
  ` : `
    color: ${theme.palette.background.dark};
    background-color: ${theme.palette.background.default};
    border: ${theme.borderWidth.md} solid ${theme.palette.background.dark};
  `}
`;

export const StyledCheckboxLabel = styled.label`
  align-items: center;
  display: flex;
  cursor: pointer;
  gap: ${props => props.theme.spacing.md};
  position: relative;
`;
