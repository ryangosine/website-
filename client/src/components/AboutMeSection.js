import React, { useEffect } from "react";
import styled from "styled-components";
import IconsContainer from "./IconsContainer";

const AboutMeSection = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glowingCursor = document.querySelector("a:hover::after");
      if (glowingCursor) {
        glowingCursor.style.left = `${e.clientX}px`;
        glowingCursor.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <Resume
          href="https://pdfupload.io/docs/2ac25379"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Resume!
        </Resume>
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
  text-align: left;
  line-height: 1.4;
  color: inherit;
`;
const Resume = styled.a`
  color: inherit;
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 2px rgba(128, 128, 128, 0.7);
  position: relative;
  font-size: 20px;

  &:hover {
    text-decoration: none;
  }
  &:hover::after {
    content: "";
    position: absolute;
    width: 40px; /* Adjust size as needed */
    height: 40px; /* Adjust size as needed */
    background: rgba(255, 255, 0, 0.5); /* Yellow glow */
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 10px 5px rgba(255, 255, 0, 0.5); /* Glow effect */
    transform: translate(-50%, -50%);
    margin-left: 30px;
  }
`;
const Qualifications = styled.p``;

export default AboutMeSection;
