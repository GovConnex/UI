import styled from "styled-components";
import Icon from "../Icon";

export const StyledAdornment = styled.div<{ position: string }>`
  ${(props) =>
    `margin-${props.position === "end" ? "left" : "right"}: ${
      props.theme.spacing.xs
    }`};
  vertical-align: middle;
`;

const StyledChip = styled.div`
  background-color: ${({ theme }) => theme.primary.neutral["100"]};
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.primary.base.black};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const StyledChipIcon = styled(Icon)`
  margin-left: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.primary.neutral[500]};
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;

export default StyledChip;
