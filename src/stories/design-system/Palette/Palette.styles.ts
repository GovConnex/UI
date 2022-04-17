import styled from "styled-components";
import StyledDoc from "../../common/styles";

const StyledPalette = styled(StyledDoc)`
  
`;

export const SectionHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ColorsTable = styled.table`
  width: 100%;
  //display: flex;
  //flex-direction: column;
`;

export const ColorsTableTbody = styled.tbody`
  //display: flex;
  //flex-direction: row;
`;

export const ColorsTableRow = styled.tr`
  //display: flex;
  //flex-direction: row;
  //padding: 1rem 0;
`;



export const ColorsTableTd = styled.td`
  //display: flex;
  //flex-direction: row;
   padding: .5rem 0;
`;

export const ColorValueTd = styled(ColorsTableTd)`
  
  //display: flex;
  //flex-direction: row;
  width: 2rem;
  //padding: 0;/
  padding-right: .5rem;
`;


export const ColorNameTd = styled(ColorsTableTd)`
  //padding: 2rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  width: 15rem;
`;

export const ColorDescriptionTd = styled(ColorsTableTd)`
  //flex-grow: 1;
  
  line-height: 1.5;
 
  opacity: 0.9;
  //min-width: 0rem
`;


export const ColorValue = styled.div<{value: string}>`
  background-color: ${props => props.value};
  height: 2rem;
  border-radius: 50%;
  width: 2rem;
  min-width: 2rem;
  font-size: 12px;
  //margin-top: 5px;
`;

export default StyledPalette;