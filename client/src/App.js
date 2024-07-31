import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <div>
      <GlobalStyles />

      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
