import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #101010;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) #191919;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background: black;
    color: white;
  }
`;

export default GlobalStyles;
