import React from "react";
import styled from "styled-components";

const IntroSection = () => {
  return (
    <Container>
      <BlurbSection>
        <Blurb>
          Graduate from the Concordia University Full-Stack Web Development
          Program that specialized in the key modern fundamentals of designing
          and building websites and applications. Focused on learning both
          Front-End and Back-End development to ensure a strong foundation in
          programming. Passionate about building web applications and eager to
          learn, work and develop and expand current skills and knowledge.
          <br />
          <br />
          Working in school environments has cultivated my capacity to think
          outside the box, analyze complex problems, and deliver effective
          solutions to meet daily challenges. I am ready to embark on a new
          professional chapter, bringing not only technical proficiency but also
          a creative mindset, problem-solving abilities, and a strong work
          ethic.
          <br />
        </Blurb>
      </BlurbSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const BlurbSection = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Blurb = styled.p`
  text-align: left;
  line-height: 1.4;
  color: inherit;
`;

export default IntroSection;
