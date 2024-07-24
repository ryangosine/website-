// GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background: #0a0b1e;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  color: #e0e1dd;
}

.container {
  position: relative;
  width: 80%;
  max-width: 1000px;
  text-align: center;
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

.accent-line {
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(187, 134, 252, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
  margin: 20px auto;
}

.background-accent {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10, 11, 30, 0) 0%, rgba(10, 11, 30, 0.8) 50%, rgba(10, 11, 30, 0) 100%);
  transform: translate(-50%, -50%);
  z-index: -1;
}
`;

export default GlobalStyles;
