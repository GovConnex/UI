import styled from "styled-components";

export const StyledList = styled.div<{ nested?: boolean }>`
  overflow: auto;
  position: relative;

  ${props => props.nested && `
    padding-left: ${props.theme.spacing.sm};
  `}
`;

export const StyledListItem = styled.div<{ button?: boolean; selected?: boolean }>`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.borderRadius.sm};
  display: flex;
  align-items: center;

  ${props => props.button && `
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: ${props.theme.palette.secondary.extraLight};
    }

    &:active {
      background-color: ${props.theme.palette.background.dark}
    }
  `}

  ${props => props.selected && `
    background-color: ${props.theme.palette.secondary.extraLight};
  `}
`;

export const StyledListHeading = styled.div<{ sticky?: boolean; uppercase?: boolean; }>`
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
