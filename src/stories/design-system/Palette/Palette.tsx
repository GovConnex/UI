import React from "react";
import figmaTokens from "../../../theming/tokens-figma/tokens.json";
import StyledPalette, { ColorsContainerRoot, Color, ColorName, ColorDescription, ColorValue } from "./Palette.styles";

const ColorsContainer = ({palette: paletteProp}: any) => {
  const palette = organisePalette(paletteProp);
  return (
    <ColorsContainerRoot>
      {palette.map(({name, description, value}, index: number) => {
        return (
          <Color key={index}>
            <ColorName>{name}</ColorName>
            <ColorDescription>{description}</ColorDescription>
            <ColorValue value={value}/>
          </Color>
        );
      })}
    </ColorsContainerRoot>
  );
}

const organisePalette = (palette: any, prevKeys: string[] = []): Array<{name: string; value: string; description: string}> => {
  const keys = Object.keys(palette);
  let results: any = [];
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const {value, description} = palette[key];
    const newKeys = [...prevKeys, key];
    if(value) {
      results = [...results, {name: newKeys.join("."), value, description}];
    } else {
      results = [...results, ...organisePalette(palette[key], newKeys)];
    }
  }
  return results;
}

const Palette = () => {
  const lightThemePalette = figmaTokens.light.palette;
  const darkThemePalette = figmaTokens.dark.palette;
  const globalPalette = figmaTokens.global.palette;
  return <StyledPalette>
    <h1>{"Global"}</h1>
    <ColorsContainer palette={globalPalette}/>
    <h1>{"Light theme"}</h1>
    <ColorsContainer palette={lightThemePalette}/>
    <h1>{"Dark theme"}</h1>
    <ColorsContainer palette={darkThemePalette}/>
  </StyledPalette>;
};

export default Palette;