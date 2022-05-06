import styled from "styled-components";

const StyledIcon = styled.span<{rotate?: number; spin?: number}>`
  display: inline-block;
  text-align: center;
  text-transform: none;
  text-rendering: optimizelegibility;
  height: 1em;

  & > svg {
    vertical-align: -.12em

    ${props => props.rotate && `transform: rotate(${props.rotate}deg)`};

    ${props => props.spin && `
      animation: spin ${props.spin}s linear infinite;
    `}
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
  }

`;

export default StyledIcon;
