import styled from "styled-components";
import Typography from "../Typography";

const StyledTab = styled.button<{
  selected: boolean;
  isSection?: boolean;
}>`
  ${({theme, selected, isSection}) =>
    ` 
    padding-left: ${theme.spacing.sm};
    padding-right: ${theme.spacing.sm};
    height: ${isSection ? "14px" : "40px"};
    border: 0 solid transparent;
    position: relative;
    white-space: nowrap;
    color: ${
      selected ? theme.core.content.contentPrimary : theme.core.content.contentSecondary
    };
    z-index: ${selected ? "1" : "0"};
    background-color: ${isSection ? "transparent" : theme.core.background.bgPrimary};
    &:disabled {
      cursor: not-allowed;
      color: ${theme.core.content.contentTertiary};
    }

    &:hover {
      text-decoration: none;
    }

    cursor: pointer;
    gap:${theme.spacing.xs};
    display:flex;
    align-items:center;
    justify-conent:center;
    `}
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 0;

  > * {
    cursor: pointer;
  }
`;

export {StyledTypography, StyledTab};
