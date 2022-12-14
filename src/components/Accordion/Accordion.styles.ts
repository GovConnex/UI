import styled from "styled-components";

const StyledAccordion = styled.div`
    ${({ theme }) => `
    border: 1px solid ${theme.core.border.borderLight};
    border-radius: ${theme.borderRadius.xs};
    overflow: hidden;
    margin: ${theme.spacing.sm} 0;
    `};
    `;
const Root = styled.div`
    ${({ theme }) => `
    padding: ${theme.spacing.xs};
    `};
    `;
    const Collapse = styled.div<{ height: string }>`
    ${({ theme, height }) => `
    box-shadow: 0 5px 0 #ffbf0e;
    // outline-top: ${height != "0px" ? `1px solid ${theme.core.border.borderLight}` : `0px solid ${theme.core.border.borderLight}` };
    min-height: 0px;
        height: ${height};
        min-height: 0px;
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition-duration: 237ms;
    `
    };
`;

export { StyledAccordion, Root, Collapse };