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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    window.location.reload();
  };

  const pageContent = (
    <>
      <TitleSection />
      <IntroSection />
      <WorkExperience />
      <Quote />
      <ProjectExperience />
      <IconsContainer />
    </>
  );

  return (
    <MainWrapper>
      {loading ? (
        <FullPageLoader />
      ) : (
        <ContentWrapper>
          <Header />
          {isMobile ? (
            <PullToRefresh
              onRefresh={handleRefresh}
              pullingContent={<span>Pull to refresh...</span>}
              refreshingContent={<Loader />}
            >
              {pageContent}
            </PullToRefresh>
          ) : (
            <>
              {pageContent}
              <ManualRefreshButton onClick={handleRefresh}>
                Refresh
              </ManualRefreshButton>
            </>
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

const ManualRefreshButton = styled.button`
  margin: 2rem auto;
  padding: 0.6rem 1.2rem;
  background-color: transparent;
  border: 2px solid #00b8ff;
  color: #00b8ff;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00b8ff;
    color: black;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
export default MainPage;
