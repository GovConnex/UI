import styled from "styled-components";

const StyledTabs = styled.div<{isSection?: boolean}>`
  display: flex;
  position: relative;
  overflow: auto;
  width: max-content;
  cursor: pointer;

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
  cursor: pointer;
  filter: ${({
    theme: {
      funcShadow: {buttons},
    },
  }) =>
    `drop-shadow(${buttons["0"].x}px ${buttons["0"].y}px ${buttons["0"].blur}px ${buttons["0"].color}) drop-shadow(${buttons["1"].x}px ${buttons["1"].y}px ${buttons["1"].blur}px ${buttons["1"].color}) drop-shadow(${buttons["2"].x}px ${buttons["2"].y}px ${buttons["2"].blur}px ${buttons["2"].color})`};

  ${({theme, width, offset}) =>
    ` 
    height: calc(100% - 5px);
    width: ${width}px;
    left: ${offset + 8}px;
    background-color: ${theme.extended.state.primaryBase};
    border-radius: 6px;
    position: absolute;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0ms;
    bottom: 2px;
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
