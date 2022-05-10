import styled from "styled-components";

export const StyledAdornment = styled.span<{ position: string }>`
  ${props => `margin-${props.position === "end" ? "left" : "right"}: ${props.theme.spacing.md}`};
`

export const StyledDropdown = styled.div`
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.palette.gray["0"]};
  border: ${props => `${props.theme.borderWidth.md} solid ${props.theme.palette.background.dark}`};
  filter: ${props => props.theme.shadow.md.map(x => `drop-shadow(${x.x}px ${x.y}px ${x.blur}px ${x.color}) `)};
  font-size: ${props => props.theme.typography.textMd.fontSize};
`;

export const StyledDropdownOption = styled.div`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.palette.secondary.extraLight};
  }
`;

export const StyledDropdownHeading = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.palette.text.secondary};
  padding: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.typography.textSm.fontSize};
`;
