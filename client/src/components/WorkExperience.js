import React from "react";
import styled from "styled-components";
import workExperienceData from "../workEXP.json"; // Import the JSON file

const WorkExperience = () => {
  return (
    <Container>
      <Title>Work Experience</Title>
      {workExperienceData.map((job) => (
        <JobCard
          key={job.id}
          href={job.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Years>{job.years}</Years>
          <Details>
            <JobTitle>
              {job.jobTitle} - {job.company}
            </JobTitle>
            <Position>{job.description}</Position>
          </Details>
        </JobCard>
      ))}
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

const Title = styled.h3`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #b967ff;
`;

const JobCard = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid rgba(0, 184, 255, 0.5); /* Faint border with the desired color */
    background-color: rgba(0, 184, 255, 0.1); /* Faded background color */
    transition: all 0.3s ease; /* Smooth transition for the effect */
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
  color: #efebdd;
`;

const JobTitle = styled.div`
  font-style: italic;
  font-size: 0.9em;
`;

const Position = styled.div`
  line-height: 1.4; // Match line-height with IntroSection
`;

export default WorkExperience;
