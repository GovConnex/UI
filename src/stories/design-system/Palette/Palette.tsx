import React, {useState} from "react";
import figmaTokens from "../../../theming/tokens-figma/tokens.json";
import StyledPalette, { ThemeWrapper } from "./Palette.styles";

const Palette = () => {
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");
  const themePalette = figmaTokens[selectedTheme].palette;
  const globalPalette = figmaTokens.global.palette;
  return <StyledPalette>
    <p>{"global: " + JSON.stringify(globalPalette) + "\n"}</p>
    <ThemeWrapper>{selectedTheme + " theme: " + JSON.stringify(themePalette) + "\n"}</ThemeWrapper>
  </StyledPalette>;
};

export default Palette;