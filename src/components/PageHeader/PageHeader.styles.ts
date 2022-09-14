import styled from "styled-components";
import Typography from "../Typography";

export const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  background: ${(props) => props.theme.core.background.bgPrimary};
  border-bottom: ${(props) => props.theme.borderWidth.md} solid
    ${(props) => props.theme.core.border.borderLight};

  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.sm};

  @media (min-width: 600px) {
    padding: ${(props) => props.theme.spacing.md}
      ${(props) => props.theme.spacing.lg};
  }

  @media (min-width: 1360px) {
    padding: ${(props) => props.theme.spacing.md}
      ${(props) => props.theme.spacing.xxl};
  }
`;

export const StyledPageTitle = styled(Typography)`
  color: ${(props) => props.theme.core.content.contentPrimary};
`;

export default StyledPageHeader;
