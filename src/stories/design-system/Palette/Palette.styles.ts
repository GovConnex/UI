import styled from "styled-components";

const StyledPalette = styled.div`
  color: white;
  white-space: normal;
  font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif
`;

export const ColorsContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

export const ColorName = styled.h3`
  font-weight: bold;
  margin-top: 10px;
`;

export const ColorValue = styled.div<{value: string}>`
  background-color: ${props => props.value};
  height: 2rem;
  border-radius: 50%;
  width: 2rem;
  font-size: 12px;
  margin-top: 5px;
`;

export const ColorDescription = styled.div`
  flex-grow: 1;
`;

export default StyledPalette;