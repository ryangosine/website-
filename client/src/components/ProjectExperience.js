import React, { useState, useEffect } from "react";
import styled from "styled-components";
import projectData from "../projects.json";
import websiteCardSpace from "../Assets/WebsiteCardSpace.svg";
import shopCard_500x300 from "../Assets/shopCard_500x300.svg";
import Spacer from "./Spacer";

const ProjectExperience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (id) => {
    if (!isMobile) return;
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Container role="region" aria-labelledby="project-experience-heading">
        <Title id="project-experience-heading">Project Experience</Title>
        <MobileHint>try clicking the card</MobileHint>
        <CardRow>
          {projectData.map((project, index) => {
            const color = index === 0 ? "#4A90E2" : "#27AE60";
            const imageSrc = index === 0 ? websiteCardSpace : shopCard_500x300;
            const isExpanded = expandedId === project.id;

            return (
              <CardContainer
                key={project.id}
                onClick={() => handleToggle(project.id)}
                $hoverColor={color}
                $isExpanded={isExpanded}
              >
                <Image
                  src={imageSrc}
                  alt={project.name}
                  loading="lazy"
                  $isExpanded={isExpanded}
                />
                <TextOverlay $hoverColor={color} $isExpanded={isExpanded}>
                  <ProjectName>{project.name}</ProjectName>
                  <Details>
                    {project.description.split("\n").map((line, idx) => (
                      <p key={idx}>{line.trim() || "\u00A0"}</p>
                    ))}
                  </Details>
                  {project.siteUrl && (isExpanded || !isMobile) && (
                    <ActionButton
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Site
                    </ActionButton>
                  )}
                </TextOverlay>
              </CardContainer>
            );
          })}
        </CardRow>
      </Container>
      <Spacer size="10rem" mobileSize="6rem" />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h3`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(45deg, #d8f0fa, #84acf7, #719aed);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const CardRow = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const MobileHint = styled.p`
  font-size: 0.85rem;
  color: #cfcfcf;
  text-align: center;
  margin: -0.5rem 0 0;
  font-family: "Inter", sans-serif;
  @media (min-width: 769px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: clamp(280px, 90vw, 500px);
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: black;
  transition: background-color 0.5s ease;
  font-family: "Inter", sans-serif;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.$hoverColor};
    }
  }

  @media (max-width: 768px) {
    width: clamp(280px, 90vw, 500px);
    height: 300px;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
  z-index: 1;

  @media (hover: hover) {
    ${CardContainer}:hover & {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    opacity: ${(props) => (props.$isExpanded ? 0 : 1)};
    pointer-events: ${(props) => (props.$isExpanded ? "none" : "auto")};
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
  pointer-events: none;

  @media (hover: hover) {
    ${CardContainer}:hover & {
      opacity: 1;
      pointer-events: auto;
    }
  }

  @media (max-width: 768px) {
    opacity: ${(props) => (props.$isExpanded ? 1 : 0)};
    pointer-events: ${(props) => (props.$isExpanded ? "auto" : "none")};
    width: 100%;
    height: 100%;
  }

  * {
    color: #fff;
  }
`;

const ProjectName = styled.h4`
  margin: 0;
  font-size: 1.4em;
`;

const Details = styled.div`
  margin-top: 0.5rem;
  line-height: 1.4;
  flex: 1;
  overflow-y: auto;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    /* leave room for padding + title; tweak as needed */
    max-height: calc(300px - 1.5rem - 1.5rem - 28px);
  }
`;

const ActionButton = styled.a`
  padding: 0.6rem 1.4rem;
  border: 2px solid black;
  background-color: transparent;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  border-radius: 999px;
  align-self: flex-start;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 3px;
  }
`;

export default ProjectExperience;
