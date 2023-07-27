import React from "react";
import {
  SizingRoot,
  SizingTable,
  SizingTableTbody,
  SizingValueTd,
  SizingTableTr,
  SizingNameTd,
  SizingDescriptionTd,
} from "./Sizing.styles";
import figmaTokens from "../../../theming/tokens-figma/tokens.json";

const Sizing = () => {
  return null;
  // const { sizing }: {sizing: any} = figmaTokens.global;
  // return <SizingRoot>
  //   <SizingTable>
  //     <SizingTableTbody>
  //       {Object.keys(sizing).map((key: string, index) => {
  //         return <SizingTableTr>
  //           <SizingNameTd>{key}</SizingNameTd>
  //           <SizingValueTd>
  //             {sizing[key].value}
  //           </SizingValueTd>
  //           <SizingDescriptionTd>
  //             {sizing[key].description}
  //           </SizingDescriptionTd>
  //         </SizingTableTr>
  //       })}
  //     </SizingTableTbody>
  //   </SizingTable></SizingRoot>;
};

export default Sizing;
