import React from "react";
import styled from "styled-components";
import IconsContainer from "./IconsContainer";
import IntroSection from "./IntroSection";
import WorkExperience from "./WorkExperience";
import ProjectExperience from "./ProjectExperience";
import ResumeLink from "./ResumeLink";
import LinkToProjectPage from "./LinkToProjPage";

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <IntroSection />
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="project-experience">
          <ProjectExperience />
        </section>
        <ResumeLink />
        <LinkToProjectPage />
        <IconsContainer />
      </ContentWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: 20px;
  margin-top: 50px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  gap: 40px; // This creates space between all direct children
`;

export default AboutMeSection;
