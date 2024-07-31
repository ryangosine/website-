import React from "react";
import styled from "styled-components";
import IconsContainer from "./IconsContainer";

const AboutMeSection = () => {
  return (
    <SectionContainer>
      <Title>About Me</Title>
      <BlurbSection>
        <Blurb>
          Graduate from the Concordia University Full-Stack Web Development
          Program that specialized in the key modern fundamentals of designing
          and building websites and applications. Focused on learning both
          Front-End and Back-End development to ensure a strong foundation in
          programming. Passionate about building web applications and eager to
          learn, work and develop and expand current skills and knowledge.
          Working in school environments has cultivated my capacity to think
          outside the box, analyze complex problems, and deliver effective
          solutions to meet daily challenges. I am ready to embark on a new
          professional chapter, bringing not only technical proficiency but also
          a creative mindset, problem-solving abilities, and a strong work
          ethic.
          <br />
        </Blurb>
        <IconsContainer />
      </BlurbSection>
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

const Title = styled.h1`
  font-family: "Source Code Pro", monospace;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
  margin-bottom: 20px;
`;
const BlurbSection = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Blurb = styled.p`
  text-align: justify;
  line-height: 1.4;
`;

const Qualifications = styled.p``;

export default AboutMeSection;
