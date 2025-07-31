import React from "react";
import styled from "styled-components";
import workExperienceData from "../workEXP.json";

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
          <JobInfo>
            <JobTitle>{job.jobTitle}</JobTitle>
            <Company>{job.company}</Company>
          </JobInfo>
          <Position>{job.description}</Position>
        </JobCard>
      ))}
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
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  margin: 0;
  background: linear-gradient(45deg, #d8f0fa, #84acf7, #719aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const JobCard = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  padding: 60px 40px;
  text-decoration: none;
  color: inherit;
  font-family: "Inter", sans-serif;
  transition: background 0.3s, border 0.3s;

  &:hover {
    background-color: rgba(0, 184, 255, 0.1);
    border: 1px solid rgba(0, 184, 255, 0.5);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    transform: none;
    padding: 20px;
  }
`;

const JobInfo = styled.div`
  flex: 0 0 35%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const JobTitle = styled.div`
  font-size: 1.2em;
`;

const Company = styled.div`
  font-size: 1.1em;
`;

const Position = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  padding-left: 20px;
  line-height: 1.6;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 1rem;
    padding-left: 0;
  }
`;
export default WorkExperience;
