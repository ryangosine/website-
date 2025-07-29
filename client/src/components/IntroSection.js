import React from "react";
import styled from "styled-components";

const IntroSection = () => {
  return (
    <Container id="intro-section">
      <Picture></Picture>
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
  border: 2px solid green;
  display: flex;
  justify-content: space-between;
  margin-top: 40vh;
  margin-bottom: 40px;
  padding: 60px 0 20px 0;

  @media (max-width: 768px) {
    margin-top: 4vh;
    margin-bottom: 20px;
    padding: 30px 0 10px 0;
  }
`;

const Picture = styled.div`
  border: 1px solid white;
  border-radius: 10%;
  width: 400px;
  height: 400px;
  margin: 30px;
`;
const BlurbSection = styled.div`
  max-width: 600px;
  padding-top: 50px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Blurb = styled.p`
  text-align: left;
  line-height: 1.6;
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-weight: 300;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default IntroSection;
