import styled from "styled-components";

export const StyledStackedList = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden;
`;

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.core.background.bgPrimary};
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const StyledHeaderStart = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: center;
  vertical-align: middle;
`;

export const StyledHeaderEnd = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const StyledFooterButton = styled.div`
  text-decoration: underline;
  color: ${(props) => props.theme.core.content.contentPrimary};
  padding: ${(props) =>
    `${props.theme.spacing.xs} ${props.theme.spacing.sm} ${props.theme.spacing.sm} 0px`};
`;
