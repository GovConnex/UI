import styled from "styled-components";

const StyledTabs = styled.div`
    display:flex;
    position: relative;
`;

const BottomHighlight = styled.span<{
    width: number,
    offset: number,
}>`
${({ theme, width, offset }) =>
        ` 
    width: 100%;
    width: ${width}px;
    left: ${offset || 0}px;
    background-color: ${theme.core.border.borderFocus};
    position: absolute;
    height: 2px;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0ms;
    bottom:0;
`}`;

export { StyledTabs, BottomHighlight };
