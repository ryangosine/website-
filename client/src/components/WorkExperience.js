import React from "react";
import styled from "styled-components";
import workExperienceData from "../workEXP.json"; // Import the JSON file

const WorkExperience = () => {
  return (
    <Container>
      <Title>Current Client(s)</Title>
      {workExperienceData.map((job) => (
        <JobCard
          key={job.id}
          href={job.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Years>{job.years}</Years> */}
          <Details>
            <JobTitle>
              {job.jobTitle} <br /> {job.company}
            </JobTitle>
            <Position>{job.description}</Position>
          </Details>
        </JobCard>
      ))}
    </Container>
  );
};

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  gap: 20px;
  width: 100%;
  /* max-width: 600px; */
`;

const Title = styled.h3`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-family: "Playfair Display", serif;
  font-size: 2em;
  margin: 0;
  --angle: 45deg;
  background: linear-gradient(
    var(--angle),
    #d8f0fa,
    #c6e6f9,
    #aed1f1,
    #97bdfc,
    #84acf7,
    #719aed
  );
  -webkit-background-clip: text; /* Clip the background to the text */
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Make the text color transparent */
`;

const JobCard = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  padding: 60px;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: "Noto Sans", sans-serif;
  width: 50%;

  &:hover {
    border: 1px solid rgba(0, 184, 255, 0.5); /* Faint border with the desired color */
    background-color: rgba(0, 184, 255, 0.1); /* Faded background color */
    transition: all 0.3s ease; /* Smooth transition for the effect */
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    flex-direction: column;
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
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const Position = styled.div`
  line-height: 1.4; // Match line-height with IntroSection
`;

export default WorkExperience;
