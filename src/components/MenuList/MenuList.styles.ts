import styled from "styled-components";
import {addCustomStyles, customStyles} from "../../core/styleFunctions";

export const StyledMenuList = styled.div<{cs?: customStyles}>`
  overflow: auto;
  position: relative;
  padding: ${(props) => props.theme.spacing.xs};

  ${(props) => addCustomStyles(props)};
`;

export const StyledMenuListHeading = styled.div<{
  sticky?: boolean;
  uppercase?: boolean;
}>`
  ${({uppercase}) => uppercase && "text-transform: uppercase;"}

  color: ${(props) => props.theme.core.content.contentSecondary};
  padding: ${(props) => `${props.theme.spacing["2xs"]} ${props.theme.spacing.xs}`};

  ${(props) =>
    props.sticky &&
    `
    top: 0;
    z-index: 1;
    position: sticky;
  `}
`;
