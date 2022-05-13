import styled from "styled-components";
import Icon from "../Icon";
import Typography from "../Typography";

export const StyledAdornment = styled.div<{ position: string }>`
  ${(props) =>
    `margin-${props.position === "end" ? "left" : "right"}: ${
      props.theme.spacing.xs
    }`};
  vertical-align: middle;
`;

const StyledChip = styled.div`
  background-color: ${({ theme }) => theme.palette.gray[200]};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.palette.text.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const StyledChipIcon = styled(Icon)`
  margin-left: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.palette.gray[500]};
  border-radius: 50%;
  //color: white;
  width: 12px;
  height: 12px;
`;

export const StyledChipLabel = styled(Typography)`
  margin: 0;
`;

export default StyledChip;
