import React from "react";
import styled from "styled-components";
import projectData from "../projects.json";
import TiltedCard from "../Animations/TiltedCard";
import websiteCardSpace from "../Assets/WebsiteCardSpace.svg";
import shopCard_500x300 from "../Assets/shopCard_500x300.svg";
import { motion } from "framer-motion";

const ProjectExperience = () => {
  return (
    <Container>
      <Title>Project Experience</Title>
      <CardRow>
        {projectData.map((project, index) => {
          const color = index === 0 ? "#4A90E2" : "#27AE60";
          return (
            <Card
              key={project.id}
              $hoverColor={color}
              href={project.siteUrl || "#"}
            >
              <Image
                src={index === 0 ? websiteCardSpace : shopCard_500x300}
                alt={project.name}
              />
              <TextOverlay $hoverColor={color}>
                <ProjectName>{project.name}</ProjectName>
                <Details>
                  {project.description.split("\n").map((line, idx) => (
                    <p key={idx}>{line.trim() || "\u00A0"}</p>
                  ))}
                </Details>
                {project.siteUrl && <ActionButton>Visit Site</ActionButton>}
              </TextOverlay>
            </Card>
          );
        })}
      </CardRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 10rem auto;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 2em;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(45deg, #d8f0fa, #84acf7, #719aed);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardRow = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.a`
  position: relative;
  width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  background-color: black;
  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
  z-index: 1;

  ${Card}:hover & {
    opacity: 0;
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
  background-color: ${(props) => props.$hoverColor};
  z-index: 2;

  ${Card}:hover & {
    opacity: 1;
  }

  * {
    color: ${(props) => "#fff"};
  }
`;

const ProjectName = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 1.4em;
`;

const Details = styled.div`
  color: #f0ead6;
  margin-top: 0.5rem;
  line-height: 1.4;
  flex: 1;
  overflow-y: auto;
`;

const ActionButton = styled.div`
  padding: 0.6rem 1.4rem;
  border: 2px solid black;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 999px;
  align-self: flex-start;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default ProjectExperience;
