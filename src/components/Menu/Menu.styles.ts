import styled from "styled-components";
import {MenuList} from "../MenuList";

export const StyledMenuList = styled(MenuList)`
  padding: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  background-color: ${(props) => props.theme.core.background.bgPrimary};
  border: ${(props) =>
    `${props.theme.borderWidth.sm} solid ${props.theme.core.border.borderLight}`};
  filter: ${({
    theme: {
      boxShadow: {md},
    },
  }) => `drop-shadow(${md.x}px ${md.y}px ${md.blur}px ${md.color})`};
  font-size: ${(props) => props.theme.typography.body.sm.fontSize};
`;
