import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "./Icons/ArrowIcon";

const ProjectExperience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <Container>
      <Title>Project Experience</Title>
      <ExperienceCard
        href="https://github.com/ryangosine/website-"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHoveredCard("website")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <ProjectName>This Website!</ProjectName>
        <ProjectDescription>
          <SecondTitle>
            <Repo>Click Card For REPO</Repo>
            <ArrowIcon isHovered={hoveredCard === "website"} />
          </SecondTitle>

          <Details>
            Built this interactive website from the ground up to highlight my
            skills and qualifications. Built without the use of starters or
            templates.
          </Details>
        </ProjectDescription>
      </ExperienceCard>

      <ExperienceCard
        href="https://github.com/ryangosine/shop"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHoveredCard("shop")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <ProjectName>Full-Stack Ecommerce Store</ProjectName>
        <ProjectDescription>
          <SecondTitle>
            <Repo>Click Card For REPO</Repo>
            <ArrowIcon isHovered={hoveredCard === "shop"} />
          </SecondTitle>
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

const Title = styled.h3`
  margin-top: 50px;
  display: flex;
  justify-content: center;
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
    box-shadow: 0 4px 8px rgba(0, 255, 0, 0.5); /* Green glow shadow */
    transform: translateY(-2px); /* Slightly raised */
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
