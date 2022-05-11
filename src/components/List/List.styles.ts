import styled from "styled-components";

export const StyledList = styled.div<{ nested?: boolean }>`
  overflow: auto;
  position: relative;

  ${(props) =>
    props.nested &&
    `
    padding-left: ${props.theme.spacing.sm};
  `}
`;

export const StyledListHeading = styled.div<{ sticky?: boolean }>`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.text.secondary};
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  font-size: ${(props) => props.theme.typography.textSm.fontSize};

  ${(props) =>
    props.sticky &&
    `
    top: 0;
    z-index: 1;
    position: sticky;
  `}
`;
