import styled from "styled-components";
import StyledDoc from "../../common/styles";

export const SizingRoot = styled(StyledDoc)``;

export const SizingTable = styled.table`
  width: 100%;
  //display: flex;
  //flex-direction: column;
`;

export const SizingTableTbody = styled.tbody`
  //display: flex;
  //flex-direction: row;
`;

export const SizingTableTr = styled.tr`
  //display: flex;
  //flex-direction: row;
  //padding: 1rem 0;
`;

export const SizingTableTd = styled.td`
  //display: flex;
  //flex-direction: row;
  padding: 0.5rem 0;
`;

export const SizingNameTd = styled(SizingTableTd)`
  //padding: 2rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  width: 15rem;
`;

export const SizingValueTd = styled(SizingTableTd)`
  //flex-grow: 1;

  line-height: 1.5;

  opacity: 0.9;
  //min-width: 0rem
`;

export const SizingDescriptionTd = styled(SizingTableTd)`
  //flex-grow: 1;

  line-height: 1.5;

  opacity: 0.9;
  //min-width: 0rem
`;
