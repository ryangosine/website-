import React from "react";
import styled from "styled-components";

const IntroSection = () => {
  return (
    <Container>
      <BlurbSection>
        <Blurb>
          Hey! I'm Ryan. I'm a web developer!
          <br />
          <br />
          I graduated from the Concordia University Full-Stack Web Development
          Program that specialized in the key modern fundamentals of designing
          and building websites and applications. My program focused on learning
          both Front-End and Back-End development to ensure a strong foundation
          in programming. I'm very passionate about building web applications
          and eager to learn, work and develop and expand my current skills and
          knowledge. Every day is new experience!
          <br />
          <br />
          Prior to this I worked in schools as a Behaviour Specialist and
          community problem solver. I think that this experience has really
          helped me cultivate my ability to think outside the box, analyze
          complex problems, and deliver effective solutions to meet daily
          challenges. I loved my work, but am looking forward to new experiences
          in my new love of programming!
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
  color: #efebdd;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 100;
`;

export default IntroSection;
