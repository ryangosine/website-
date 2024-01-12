// GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden; /* Prevent scrolling */
    /* background: linear-gradient(
      135deg,
      rgba(30, 38, 66, 1) 0%,
      rgba(44, 56, 94, 1) 100%
    ); */
  }
`;

export default GlobalStyles;
