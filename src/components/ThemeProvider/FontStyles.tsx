import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  body {
    font-family: "Inter", sans-serif;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
`;

export default FontStyles;