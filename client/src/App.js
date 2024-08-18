import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./Pages/InitialPage";
import MainPage from "./Pages/MainPage";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {/* <Header /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
};

export default App;
