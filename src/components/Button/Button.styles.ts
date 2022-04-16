import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.palette.text.primary};
  border: 2px solid ${props => props.theme.palette.primary.main};
`;

export default StyledButton;