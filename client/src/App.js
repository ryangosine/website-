import React, { useState } from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import MainPage from "./Pages/MainPage";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import MainContent from "./components/MainContent";

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GlobalStyles />
      <Header value={value} handleChange={handleChange} />
      <MainContent value={value} />
      <MainPage>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="aboutme" element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      </MainPage>
    </div>
  );
};

export default App;
