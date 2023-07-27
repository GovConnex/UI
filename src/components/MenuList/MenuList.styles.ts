import styled from "styled-components";

export const StyledMenuList = styled.div`
  overflow: auto;
  position: relative;
`;

export const StyledMenuListHeading = styled.div<{
  sticky?: boolean;
  uppercase?: boolean;
}>`
  ${({ uppercase }) => uppercase && "text-transform: uppercase;"}

  color: ${(props) => props.theme.primary.base.black};
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  font-size: ${(props) => props.theme.typography.body.sm.fontSize};

  ${(props) =>
    props.sticky &&
    `
    top: 0;
    z-index: 1;
    position: sticky;
  `}
`;
