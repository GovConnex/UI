import styled from "styled-components";
import Icon from "../Icon";

const StyledChip = styled.div`
  background-color: ${({ theme }) => theme.palette.gray[200]};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.palette.text.primary};
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

export default StyledChip;