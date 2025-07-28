import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProjectsPage from "./Pages/ProjectPage";
// import ErrorBoundary from "./components/ErrorBoundry";

import styled from "styled-components";
import SplashCursor from "./Animations/SplashCursor";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f);
  color: white;
  position: relative;
  z-index: 0;
`;

const App = () => {
  return (
    <div>
      {/* <ErrorBoundary> */}
      <GlobalStyles />

      <PageWrapper>
        {/* <SplashCursor /> */}
        {/* <Header /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/projectPage" element={<ProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </PageWrapper>

      {/* </ErrorBoundary> */}
    </div>
  );
};

export default App;
