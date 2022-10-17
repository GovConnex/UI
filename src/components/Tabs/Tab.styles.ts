import styled from "styled-components";
import Typography from "../Typography";

const StyledTab = styled.button<{
  selected:boolean
}>`
    padding-left: ${(props) => props.theme.spacing.sm};
    padding-right: ${(props) => props.theme.spacing.sm};
    height: 40px;
    border: 0 solid transparent;
    position: relative;
    display:inline-block;
    color: ${(props) => props.selected ? props.theme.core.content.contentPrimary: props.theme.core.content.contentTertiary};
    background-color:${(props) => props.theme.core.background.bgPrimary};
    &:disabled {
        background-color:${(props) => props.theme.core.background.bgSecondary};
        cursor: not-allowed;
      }
    cursor: pointer;
`;

const StyledTypography = styled(Typography)`
      
`

export {StyledTypography, StyledTab}