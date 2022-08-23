import styled from "styled-components";
import { shadowFromProp } from "../style-utils";

const StyledCard = styled.div<{
  focused: boolean;
}>`
  background: ${(props) => props.theme.core?.background?.bgPrimary};
  padding: ${(props) =>
    `calc(${props.theme.spacing.sm}${
      props.focused ? ` - ${props.theme.borderWidth.md}` : ""
    })`};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  transition: border-color 300ms ease-out;
  border-width: ${(props) =>
    props.focused ? props.theme.borderWidth.lg : props.theme.borderWidth.md};
  border-style: solid;
  border-color: ${(props) =>
    props.focused
      ? props.theme.core?.border?.borderFocus
      : props.theme.core?.border?.borderLight};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  box-shadow: ${(props) =>
    props.focused ? shadowFromProp(props.theme.boxShadow.sm) : "none"};

  &:hover {
    box-shadow: ${(props) => shadowFromProp(props.theme.boxShadow.xs)};
  }
`;

export default StyledCard;
