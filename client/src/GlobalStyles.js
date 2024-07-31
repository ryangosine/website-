// GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  color: #e0e1dd;
  background: 
    /* Intense highlight */
    radial-gradient(circle at -12% 48%, 
      rgba(255,255,255,0.8) 0%, 
      rgba(255,255,255,0) 50%
    ),
    /* Subtle highlight edge */
    radial-gradient(circle at -8.9% 51.2%, 
      rgba(255,255,255,0.4) 0%, 
      rgba(255,255,255,0) 16.9%
    ),
    /* Deep shadow */
    radial-gradient(circle at -5% 54%, 
      rgba(0,0,0,0.5) 0%,
      rgba(0,0,0,0) 45%
    ),
    /* Base orange gradient */
    radial-gradient(circle at -8.9% 51.2%, 
      rgb(255, 100, 0) 0%, 
      rgb(255, 124, 0) 15.9%, 
      rgb(255, 163, 77) 15.9%, 
      rgb(255, 163, 77) 24.4%, 
      rgb(19, 30, 37) 24.5%, 
      rgb(19, 30, 37) 66%
    );
  background-color: #0a0b1e;
  position: relative;
}

/* Optional: Add a pseudo-element for an extra glossy effect */
body::after {
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
}




h1 {
  font-size: 3em;
  margin: 0;
  color: #bb86fc;
}

p {
  font-size: 1.2em;
  color: #a1a1aa;
}


`;

export default GlobalStyles;
