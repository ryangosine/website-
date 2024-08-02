import React from "react";
import styled from "styled-components";

const WorkExperience = () => {
  return (
    <Container>
      <JobCard
        href="https://www.segalcentre.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Years>2023 - Present</Years>
        <Details>
          <JobTitle>
            Full-Stack Web Developer - Segal Centre for the Performing Arts
          </JobTitle>
          <Position>
            Responsible for maintaining and optimizing the Segal Centre Website.
            Working with JavaScript, HTML5 and CSS to create a seamless and
            exceptional experience for the customer base.
          </Position>
        </Details>
      </JobCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;
const JobCard = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border */
    box-shadow: 0 8px 16px rgba(192, 148, 255, 0.5); /* Increased shadow for more depth /* Shadow effect */
    transform: translateY(-4px); /* Slightly raised */
  }
`;

const Years = styled.div`
  min-width: 120px;
  text-align: left;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const JobTitle = styled.div`
  font-style: italic;
  font-size: 0.9em;
`;
const Position = styled.div`
  line-height: 1.4; // Match line-height with IntroSection
`;

export default WorkExperience;
