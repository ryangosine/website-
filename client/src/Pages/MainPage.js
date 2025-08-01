import { useEffect, useState } from "react";
import styled from "styled-components";
import IntroSection from "../components/IntroSection";
import TitleSection from "../components/TitleSection";
import Quote from "../components/Quote";
import IconsContainer from "../components/IconsContainer";
import ProjectExperience from "../components/ProjectExperience";
import WorkExperience from "../components/WorkExperience";
import PullToRefresh from "react-simple-pull-to-refresh";
import Header from "../components/header";
import Footer from "../components/Footer";
import ContactMeBox from "../components/contactMeBox";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(false);
  };

  const pageContent = (
    <MainContent role="main" aria-label="Main content">
      <TitleSection />
      <IntroSection />
      <WorkExperience />
      <Quote />
      <ProjectExperience />
      <IconsContainer />
    </MainContent>
  );

  return (
    <MainWrapper>
      {loading ? (
        <FullPageLoader role="status" aria-busy="true" />
      ) : (
        <ContentWrapper>
          <Header />
          {isMobile ? (
            <PullToRefresh
              onRefresh={handleRefresh}
              pullingContent={<span>Pull to refresh...</span>}
              refreshingContent={<Loader aria-hidden="true" />}
            >
              {pageContent}
            </PullToRefresh>
          ) : (
            pageContent
          )}
          <ContactMeBox />
          <Footer />
        </ContentWrapper>
      )}
    </MainWrapper>
  );
};

const Loader = styled.div`
  margin: 2rem auto;
  width: 36px;
  height: 36px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid #00b8ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const FullPageLoader = styled(Loader)`
  margin: 10rem auto;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`;

export default MainPage;
