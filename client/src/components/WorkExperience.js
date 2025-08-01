import React, { useState, useEffect } from "react";
import styled from "styled-components";
import workExperienceData from "../workEXP.json";
import Spacer from "./Spacer";

const darkMauve = "#874C62";

const WorkExperience = () => {
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
      <Section role="region" aria-labelledby="work-experience-heading">
        <Title id="work-experience-heading">Current Client(s)</Title>
        <MobileHint>try clicking the card</MobileHint>
        <CardRow>
          {workExperienceData.map((job) => {
            const isExpanded = expandedId === job.id;

            const onKeyDown = (e) => {
              if (!isMobile) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggle(job.id);
              }
            };

            return (
              <CardContainer
                key={job.id}
                onClick={() => handleToggle(job.id)}
                onKeyDown={onKeyDown}
                $isExpanded={isExpanded}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={`${job.company} details`}
              >
                {/* Mobile: visible by default; fades out when expanded */}
                <Placeholder $isExpanded={isExpanded}>
                  {job.company}
                </Placeholder>

                {/* Mobile: hidden by default; fades in when expanded */}
                <TextOverlay $isExpanded={isExpanded}>
                  <JobTitle>{job.jobTitle}</JobTitle>

                  <Details>
                    {job.description.split("\n").map((line, idx) => (
                      <p key={idx}>{line.trim() || "\u00A0"}</p>
                    ))}
                  </Details>

                  {job.companyUrl && isExpanded && (
                    <ActionButton
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // keep taps from closing the card
                    >
                      Visit Site
                    </ActionButton>
                  )}
                </TextOverlay>
              </CardContainer>
            );
          })}
        </CardRow>
      </Section>
      <Spacer size="6rem" mobileSize="4rem" />
    </>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(45deg, #d8f0fa, #84acf7, #719aed);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
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
  background-color: black;
  border: 4px solid ${darkMauve};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${darkMauve};
    }
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity 0.5s ease;
  z-index: 1;
  font-family: "Montserrat", sans-serif;

  /* ${CardContainer}:hover & {
    opacity: 0;
  } */

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
  color: white;
  z-index: 2;
  pointer-events: none;

  @media (hover: hover) {
    ${CardContainer}:hover & {
      opacity: 1;
      pointer-events: auto;
    }
  }

  @media (max-width: 768px) {
    background-color: ${darkMauve};
    opacity: ${(props) => (props.$isExpanded ? 1 : 0)};
    pointer-events: ${(props) => (props.$isExpanded ? "auto" : "none")};

    width: 100%;
    height: 100%;
  }
`;

const JobTitle = styled.h4`
  margin: 0;
  font-size: 1.4em;
  font-family: "Inter", sans-serif;
`;

const Details = styled.div`
  margin-top: 0.5rem;
  line-height: 1.5;
  overflow-y: auto;
  max-height: 120px;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    max-height: calc(300px - 1.5rem - 1.5rem - 28px);
  }
`;

const ActionButton = styled.a`
  padding: 0.6rem 1.4rem;
  margin-top: auto;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  border-radius: 999px;
  align-self: flex-start;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 3px;
  }
`;

export default WorkExperience;
