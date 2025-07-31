import React from "react";
import styled from "styled-components";
import workExperienceData from "../workEXP.json";

const WorkExperience = () => {
  return (
    <Container>
      <Title>Current Client(s)</Title>
      <CardRow>
        {workExperienceData.map((job) => (
          <Card
            key={job.id}
            href={job.companyUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Placeholder>{job.company}</Placeholder>
            <TextOverlay>
              <JobTitle>{job.jobTitle}</JobTitle>
              <Company>{job.company}</Company>
              <Details>
                {job.description.split("\n").map((line, idx) => (
                  <p key={idx}>{line.trim() || "\u00A0"}</p>
                ))}
              </Details>
            </TextOverlay>
          </Card>
        ))}
      </CardRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2em;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(45deg, #d8f0fa, #84acf7, #719aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardRow = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const darkMauve = "#874C62"; // Rich, deeper mauve shade :contentReference[oaicite:6]{index=6}

const Card = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  background-color: black;
  border: 1px solid ${darkMauve}; /* Mauve frame visible initially */
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s ease, border-color 0.5s ease;

  &:hover {
    background-color: ${darkMauve}; /* Fill with mauve on hover */
    border-color: ${darkMauve};
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
  z-index: 1;

  ${Card}:hover & {
    opacity: 0; /* Fade out placeholder on hover */
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.5s ease;
  color: white; /* Keep overlay text white against mauve background */
  z-index: 2;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const JobTitle = styled.h4`
  margin: 0;
  font-size: 1.4em;
`;

const Company = styled.div`
  margin: 5px 0;
  font-size: 1.1em;
`;

const Details = styled.div`
  margin-top: 0.5rem;
  line-height: 1.5;
`;
export default WorkExperience;
