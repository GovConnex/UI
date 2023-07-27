import React from "react";
import globalTokens from "../../../theming/tokens-style-dictionary/global.json";
import lightTokens from "../../../theming/tokens-style-dictionary/light.json";
import darkTokens from "../../../theming/tokens-style-dictionary/dark.json";

import StyledPalette, {
  ColorsTable,
  ColorValue,
  ColorsTableTbody,
  ColorsTableRow,
  ColorValueTd,
  ColorDescriptionTd,
  ColorNameTd,
  SectionHeader,
} from "./Palette.styles";

const ColorsContainer = ({ palette: paletteProps }: any) => {
  const palette = organisePalette(paletteProps);

  return (
    <ColorsTable>
      <ColorsTableTbody>
        {palette.map(({ name, description, value }, index: number) => {
          return (
            <ColorsTableRow key={index}>
              <ColorValueTd>
                <ColorValue value={value} />
              </ColorValueTd>
              <ColorNameTd>{name}</ColorNameTd>
              <ColorDescriptionTd>{description}</ColorDescriptionTd>
            </ColorsTableRow>
          );
        })}
      </ColorsTableTbody>
    </ColorsTable>
  );
};

const organisePalette = (
  palette: any,
  prevKeys: string[] = [],
): Array<{ name: string; value: string; description: string }> => {
  const keys = Object.keys(palette);
  let results: any = [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const { value, description } = palette[key];
    const newKeys = [...prevKeys, key];
    if (value) {
      results = [...results, { name: newKeys.join("."), value, description }];
    } else {
      results = [...results, ...organisePalette(palette[key], newKeys)];
    }
  }
  return results;
};

const Palette = () => {
  const lightThemePalette = lightTokens;
  // const darkThemePalette = darkTokens.palette;
  const globalPalette = {
    primary: globalTokens.primary,
    secondary: globalTokens.secondary,
  };
  return (
    <StyledPalette>
      {/*<iframe*/}
      {/*  height="1500"*/}
      {/*  width="1000"*/}
      {/*  src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/bC4hXdr0nQPjm7xZCCzyDg/?node-id=176%3A9554"*/}
      {/*  allowFullScreen*/}
      {/*/>*/}
      <SectionHeader>{"Common"}</SectionHeader>
      <ColorsContainer palette={globalPalette} />
      <SectionHeader>{"Light theme"}</SectionHeader>
      <ColorsContainer palette={lightThemePalette} />
      {/* <SectionHeader>{"Dark theme"}</SectionHeader> */}
      {/* <ColorsContainer palette={darkThemePalette}/> */}
    </StyledPalette>
  );
};

export default Palette;
