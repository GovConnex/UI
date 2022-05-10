import styled from "styled-components";

const StyledPagination = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

export default StyledPagination;
