import styled from "styled-components";
import {addCustomStyles, customStyles} from "../../core/styleFunctions";

const StyledPopover = styled.div<{cs?: customStyles; isBlock?: boolean}>`
  ${(props) =>
    props.isBlock &&
    `
        border-radius: ${props.theme.borderRadius.base};
        border: 1px solid ${props.theme.core.border.borderLight};
        background-color: ${props.theme.core.background.bgPrimary};
        padding: ${props.theme.spacing.sm};
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        max-width: 300px;
    `}

  filter: ${({
    theme: {
      boxShadow: {sm},
    },
  }) => `drop-shadow(${sm.x}px ${sm.y}px ${sm.blur}px ${sm.color})`};
  ${(props) => addCustomStyles(props)};
`;

export default StyledPopover;
