import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProjectsPage from "./Pages/ProjectPage";
// import ErrorBoundary from "./components/ErrorBoundry";
import AnimatedCursor from "react-animated-cursor";
import ContactPage from "./Pages/ContactPage";

import styled from "styled-components";

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   background: white;
//   color: white;
//   position: relative;
//   z-index: 0;
// `;

const App = () => {
  return (
    <div>
      {/* <ErrorBoundary> */}
      <GlobalStyles />
      {/* <PageWrapper> */}
      <AnimatedCursor />
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projectPage" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
      {/* </PageWrapper> */}

      {/* </ErrorBoundary> */}
    </div>
  );
};

export default App;
