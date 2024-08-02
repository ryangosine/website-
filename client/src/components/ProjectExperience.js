import React from "react";
import styled from "styled-components";

const ProjectExperience = () => {
  return (
    <Container>
      <ExperienceCard
        href="https://github.com/ryangosine/shop"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectName>Full-Stack Ecommerce Store</ProjectName>
        <ProjectDescription>
          <Repo>Click Card For REPO</Repo>
          <BulletList>
            <BulletPoint>
              Developed a full stack "CRUD" webstore front utilizing a variety
              of technologies and databases
            </BulletPoint>
            <BulletPoint>
              Customer information was stored using a database developed in
              MongoDB
            </BulletPoint>
            <BulletPoint>Cart is designed in Redux </BulletPoint>
            <BulletPoint>React.js, JS, CSS, HTML, Node.JS, Express</BulletPoint>
          </BulletList>
        </ProjectDescription>
      </ExperienceCard>
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

const ExperienceCard = styled.a`
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
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const BulletPoint = styled.li`
  line-height: 1.4;
  margin-bottom: 5px;
`;
export default ProjectExperience;
