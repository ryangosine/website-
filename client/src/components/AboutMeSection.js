import React, { useEffect } from "react";
import styled from "styled-components";
import IconsContainer from "./IconsContainer";
import IntroSection from "./IntroSection";
import WorkExperience from "./WorkExperience";

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <IntroSection />
        <WorkExperience />
        <Resume
          href="https://pdfupload.io/docs/2ac25379"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Resume!
        </Resume>
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

const Title = styled.h1`
  font-family: "Source Code Pro", monospace;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
  margin-bottom: 20px;
`;

const Resume = styled.a`
  color: inherit;
  font-family: "Source Code Pro", monospace;
  position: relative;
  font-weight: 200;
  text-decoration: none;
  font-size: 20px;
  margin: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background: linear-gradient(
      112.7deg,
      rgb(162, 247, 241) 0.3%,
      rgb(199, 146, 255) 88.7%
    );
    bottom: -2px; /* Adjust as needed */
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export default AboutMeSection;
