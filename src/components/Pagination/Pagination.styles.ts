import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};

  > div {
    margin-bottom: ${(props) => props.theme.spacing.sm};
    align-items: center;
    display: flex;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export default StyledPagination;
