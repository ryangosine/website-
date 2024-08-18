// GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    color: #F0EAD6;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    /* background-color: #0a0b1e; */
    position: relative;
  }

  /* Optional: Add a pseudo-element for an extra glossy effect */
  /* body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at -8.9% 51.2%, 
        rgba(255,255,255,0.1) 0%, 
        rgba(255,255,255,0) 60%
      );
    pointer-events: none;
  } */

  h1 {
    font-size: 3em;
    margin: 0;
    color: #bb86fc;
  }

  h3 {
    font-size: 2em;
    margin: 0;
    color: #2E8B57;
  }

  p {
    font-size: 1.2em;
    color: #F0EAD6;
  }

`;

export default GlobalStyles;
