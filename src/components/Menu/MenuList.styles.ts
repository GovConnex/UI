import styled from "styled-components";

export const StyledMenuList = styled.div`
  overflow: auto;
  position: relative;
`;

export const StyledMenuListHeading = styled.div<{ sticky?: boolean; uppercase?: boolean; }>`
  ${({uppercase}) => uppercase && "text-transform: uppercase;"}

  color: ${props => props.theme.palette.text.secondary};
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  font-size: ${props => props.theme.typography.textSm.fontSize};

  ${props => props.sticky && `
    top: 0;
    z-index: 1;
    position: sticky;
  `}
`;
