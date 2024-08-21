import React from "react";
import styled from "styled-components";
import projectData from "../projects.json";

const ProjectExperience = () => {
  return (
    <Container>
      <Title>Project Experience</Title>
      {projectData.map((project) => (
        <ExperienceCard
          key={project.id}
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectName>{project.name}</ProjectName>
          <ProjectDescription>
            <SecondTitle>
              <Repo>Click Card For REPO</Repo>
            </SecondTitle>
            {project.bulletPoints.length > 0 ? (
              <BulletList>
                {project.bulletPoints.map((point, index) => (
                  <BulletPoint key={index}>{point}</BulletPoint>
                ))}
              </BulletList>
            ) : (
              <Details>{project.description}</Details>
            )}
          </ProjectDescription>
        </ExperienceCard>
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
  color: #6082b6;
`;

const ExperienceCard = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${(props) =>
    props.$isHovered ? "0 4px 8px rgba(0, 255, 0, 0.5)" : "none"};
  transform: ${(props) => (props.$isHovered ? "translateY(-2px)" : "none")};
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 8px rgba(0, 255, 0, 0.5);
    transform: translateY(-2px);
  }
`;

const SecondTitle = styled.div`
  display: flex;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectName = styled.div`
  min-width: 120px;
  text-align: left;
`;
const Repo = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 0.9em;
  padding-right: 5px;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const Details = styled.div`
  margin: 0;
  padding-left: 20px;
  line-height: 1.4;
`;

const BulletPoint = styled.li`
  line-height: 1.4;
  margin-bottom: 5px;
`;
export default ProjectExperience;
