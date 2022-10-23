import styled from "styled-components";
import Typography from "../Typography";

const StyledTab = styled.button<{
  selected: boolean
}>`
${({ theme, selected }) =>
    ` 
    padding-left: ${theme.spacing.sm};
    padding-right: ${theme.spacing.sm};
    height: 40px;
    border: 0 solid transparent;
    position: relative;
    white-space: nowrap;
    color: ${selected ? theme.core.content.contentPrimary : theme.core.content.contentTertiary};
    background-color:${theme.core.background.bgPrimary};
    &:disabled {
        background-color:${theme.core.background.bgSecondary};
        cursor: not-allowed;
        color: ${theme.extended.state.disabled};
      }

       cursor: pointer;
    gap:${theme.spacing.xs};
    display:flex;
    align-items:center;
    justify-conent:center;`

  }
`;

const StyledTypography = styled(Typography)`
      margin-bottom:0;
`

export {StyledTypography, StyledTab}