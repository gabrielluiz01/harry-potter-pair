import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body{
    background-color: #212121;
  }
`;

export default GlobalStyle;
