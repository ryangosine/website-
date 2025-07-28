// GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* For Chrome/Edge/Safari */
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

  /* For Firefox */
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) #191919;
  }

  /* (Optional) General global body/box-sizing reset, etc. */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-smooth: antialiased;
    overflow-x: hidden;
    overflow-y: auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    width: 100%;
    /* background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f); */
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.4; }
  }

  @keyframes shoot {
    0% {
      transform: translateX(0) translateY(0) rotate(25deg);
      opacity: 1;
    }
    100% {
      transform: translateX(120vw) translateY(50vh) rotate(25deg);
      opacity: 0;
    }
  }
  `;

export default GlobalStyles;
/* body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    font-family: 'Space Grotesk', sans-serif;
    color: #F0EAD6;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    background-color: #0a0b1e;
    position: relative;
  } */

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

/* h3 {
    font-size: 2em;
    margin: 0;
    color: #2E8B57;
  } */

// p {
//   font-size: 1.2em;
//   color: #F0EAD6;
// }

// `;
