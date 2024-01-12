import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Starfield from "react-starfield";
import MainPage from "./components/MainPage";
const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <MainPage />
    </div>
  );
};

export default App;
