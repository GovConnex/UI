import styled from "styled-components";

const StyledTabs = styled.div<{isSection?: boolean}>`
  display: flex;
  position: relative;
  overflow: scroll;
  width: max-content;

  ${({theme, isSection}) => `
    ${
      isSection &&
      `
      padding: ${theme.spacing.xs};
      border-radius: ${theme.borderRadius.base};
      background-color: ${theme.core.background.bgTertiary};
      border: 1px solid ${theme.core.border.borderLight};
    `
    }
  `}
`;

const SectionHighlight = styled.span<{
  width: number;
  offset: number;
}>`
  ${({theme, width, offset}) =>
    ` 
    height: calc(100% - 8px);
    width: ${width}px;
    left: ${offset + 8}px;
    background-color: ${theme.extended.state.primaryBase};
    border-radius: ${theme.borderRadius.base};
    position: absolute;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0ms;
    bottom: 4px;
`}
`;

const BottomHighlight = styled.span<{
  width: number;
  offset: number;
}>`
  ${({theme, width, offset}) =>
    ` 
    width: 100%;
    width: ${width}px;
    left: ${offset || 0}px;
    background-color: ${theme.core.border.borderBrand};
    position: absolute;
    height: 2px;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0ms;
    bottom:0;
    z-index: 2;
`}
`;

export {StyledTabs, BottomHighlight, SectionHighlight};
