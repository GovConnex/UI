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
    gap:${({theme}) => theme.spacing.xs};
    display:flex;
    align-items:center;
    justify-conent:center;
`;

const StyledTypography = styled(Typography)`
      margin-bottom:0;
`

export {StyledTypography, StyledTab}