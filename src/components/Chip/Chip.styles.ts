import styled from "styled-components";
import Icon from "../Icon";

export const StyledAdornment = styled.span<{ position: string }>`
  ${(props) =>
    `margin-${props.position === "end" ? "left" : "right"}: ${
      props.theme.spacing.xs
    }`};
`;

const StyledChip = styled.div`
  background-color: ${({ theme }) => theme.palette.gray[200]};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.palette.text.primary};
  display: inline-block;
  cursor: default;
`;

export default StyledChip;
