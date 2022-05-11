import styled from "styled-components";
import { List } from "../List";

export const StyledAdornment = styled.span<{ position: string }>`
  ${props => `margin-${props.position === "end" ? "left" : "right"}: ${props.theme.spacing.md}`};
`

export const StyledDropdown = styled(List)`
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.palette.gray["0"]};
  border: ${props => `${props.theme.borderWidth.md} solid ${props.theme.palette.background.dark}`};
  filter: ${props => props.theme.shadow.md.map(x => `drop-shadow(${x.x}px ${x.y}px ${x.blur}px ${x.color}) `)};
  font-size: ${props => props.theme.typography.textMd.fontSize};
`;
