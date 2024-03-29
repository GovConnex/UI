import styled from "styled-components";

export const StyledStackedList = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.base};
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.core.border.borderLight};
`;

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.core.background.bgPrimary};
  padding: ${(props) => `0px ${props.theme.spacing.sm}`};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.core.content.contentPrimary};
  height: 50px;
`;

export const StyledHeaderStart = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: center;
  vertical-align: middle;
`;

export const StyledHeaderStartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  vertical-align: middle;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const StyledHeaderEnd = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const StyledFooterButton = styled.div`
  width: 100%;
  text-decoration: underline;
  color: ${(props) => props.theme.core.content.contentPrimary};

  > * {
    cursor: pointer;
  }
`;

export const StyledEmptyList = styled.div`
  background-color: ${(props) => props.theme.core.background.bgPrimary};
  padding: ${(props) =>
    `${props.theme.spacing.xs} ${props.theme.spacing.md} ${props.theme.spacing.md} ${props.theme.spacing.md}`};
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.core.content.contentTertiary};
  gap: ${(props) => props.theme.spacing.sm};
  justify-content: center;
  text-align: center;
`;

export const StyledScrollableWrapper = styled.div`
  max-height: 350px;
  overflow: auto;
  background-color: ${(props) => props.theme.core.background.bgPrimary};
`;

export const Root = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const Collapse = styled.div<{height: string}>`
  ${({height}) => `
    min-height: 0px;
        height: ${height};
        min-height: 0px;
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition-duration: 237ms;
    `};
`;

export const Chevron = styled.div<{open: boolean}>`
  ${({open}) => `
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: ${open ? "rotate(90deg)" : "rotate(0deg)"}; 
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    `};
`;
