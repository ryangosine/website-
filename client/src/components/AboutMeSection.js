import React from "react";
import styled from "styled-components";

const AboutMeSection = () => {
  return (
    <SectionContainer>
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
        </Blurb>
      </BlurbSection>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`;
const BlurbSection = styled.div`
  max-width: 600px;
`;

const Blurb = styled.p`
  text-align: justify;
  line-height: 1.4;
`;

export default AboutMeSection;
