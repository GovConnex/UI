import styled from "styled-components";

const StyledAccordion = styled.div`
    ${({ theme }) => `
    background-color: ${theme.core.background.bgPrimary};
    border: 1px solid ${theme.core.border.borderLight};
    border-radius: ${theme.borderRadius.sm};
    overflow: hidden;
    margin-bottom: ${theme.spacing.xs};
    `};
    `;

const Chevron = styled.div<{ open: boolean }>`
    ${({ theme, open }) => `
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.primary.neutral[400]};

    transform: ${open ? "rotate(0deg)" : "rotate(180deg)"}; 
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `};
    `;

const Root = styled.div`
    ${({ theme }) => `
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative; 
    `};
    `;

const Collapse = styled.div<{ height: string }>`
    ${({ theme, height }) => `
    box-shadow: 0 -1px 0 ${theme.core.border.borderLight};
    min-height: 0px;
        height: ${height};
        min-height: 0px;
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition-duration: 237ms;
    `
    };
`;

const InnerContent = styled.div`
    ${({ theme }) => `
    padding: ${theme.spacing.sm} ${theme.spacing.sm};
    `}
`;

export { StyledAccordion, Root, Collapse, Chevron, InnerContent };