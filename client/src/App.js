import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import MainPage from "./Pages/MainPage";
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
