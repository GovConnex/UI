import styled from "styled-components";

const StyledBanner = styled.div<{
  variant: "success" | "warning" | "error" | "info";
}>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.base};
  border: 1px solid ${(props) => props.theme.extended.support[`${props.variant}Base`]};
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2px;
  gap: ${(props) => props.theme.spacing.sm};
`;

const StyledTextWrapper = styled.div<{variant: "success" | "warning" | "error" | "info"}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["2xs"]};
  color: ${(props) => props.theme.extended.support[`${props.variant}Dark`]};
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing["2xs"]};
`;

export {StyledBanner, StyledTextWrapper, ButtonWrapper, MainContentContainer};
