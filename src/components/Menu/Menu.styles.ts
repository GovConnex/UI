import styled from "styled-components";
import { MenuList } from "../MenuList";

export const StyledMenu = styled(MenuList)`
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.palette.gray["0"]};
  border: ${props => `${props.theme.borderWidth.md} solid ${props.theme.palette.background.dark}`};
  filter: ${props => props.theme.shadow.md.map(x => `drop-shadow(${x.x}px ${x.y}px ${x.blur}px ${x.color}) `)};
  font-size: ${props => props.theme.typography.textMd.fontSize};
`;
