import styled from "styled-components";

const StyledBanner = styled.div<{
  variant: "success" | "warning" | "error" | "info";
}>`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  background-color: ${(props) =>
    props.theme.extended.support[`${props.variant}Light`]};
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  border: 1px solid
    ${(props) => props.theme.extended.support[`${props.variant}Base`]};
`;
const StyledTextWrapper = styled.div`
  margin-top: -2px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export { StyledBanner, StyledTextWrapper };
