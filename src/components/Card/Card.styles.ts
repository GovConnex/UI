import styled from "styled-components";

const StyledCard = styled.div<{
  focused: boolean;
}>`
  background: ${(props) => props.theme.core?.background?.bgPrimary};
  padding: ${(props) =>
    `calc(${props.theme.spacing.sm}${
      props.focused ? ` - ${props.theme.borderWidth.md}` : ""
    })`};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  transition: border 300ms ease-in-out;
  border: ${(props) =>
    props.focused ? props.theme.borderWidth.lg : props.theme.borderWidth.md}
    solid
    ${(props) =>
      props.focused
        ? props.theme.core?.border?.borderFocus
        : props.theme.core?.border?.borderLight};
  border-radius: ${(props) => props.theme.borderRadius.sm};

  &:hover {
    box-shadow: ${(props) =>
      `${props.theme.boxShadow.xs.x}px ${props.theme.boxShadow.xs.y}px ${props.theme.boxShadow.xs.blur}px ${props.theme.boxShadow.xs.spread}px ${props.theme.boxShadow.xs.color};`}
`;

export default StyledCard;
