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
      <CardContainer>
        {projectData.map((project, index) => (
          <ProjectRow key={project.id}>
            <TiltedCard
              imageSrc={index === 0 ? websiteCardSpace : shopCard_500x300}
              containerHeight="300px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            />
            <ProjectText>
              <ProjectName>{project.name}</ProjectName>
              <SecondTitle>
                <Repo>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CLICK HERE TO VISIT REPO
                  </a>
                </Repo>
              </SecondTitle>

              <Details>{project.description}</Details>
            </ProjectText>
          </ProjectRow>
        ))}
      </CardContainer>
    </Container>
  );
};

const ProjectRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 5em;
  gap: 40px;
`;

const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0ead6;
  max-width: 600px;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: "Noto Sans", sans-serif;
  &:hover {
    border: 1px solid rgba(0, 184, 255, 0.5); /* Faint border with the desired color */
    background-color: rgba(0, 184, 255, 0.1); /* Faded background color */
    transition: all 0.3s ease; /* Smooth transition for the effect */
  }
`;

const Container = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;

  gap: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: 3rem;
  margin-top: 20vh;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  font-family: "Playfair Display", serif;
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
  font-size: 2em;
`;

const CardContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
`;

const ProjectOneContainer = styled.div`
  border: 1px solid green;
  display: flex;
`;

const ExperienceCard = styled.a`
  border: 1px solid green;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-decoration: none;
  padding: 40px;
  border-radius: 5px;
  width: 90%;
  margin: 50px;

  /* border: 1px solid rgba(0, 0, 0, 0.1); */

  &:hover {
    border: 1px solid rgba(0, 184, 255, 0.5);
    background-color: rgba(0, 184, 255, 0.1); /* Faded background color */
    transition: all 0.3s ease; /* Smooth transition for the effect */
  }
`;

const SecondTitle = styled.div`
  display: flex;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #f0ead6;
`;

const ProjectName = styled.div`
  /* min-width: 120px;
  text-align: left; */
  color: #f0ead6;
  padding: 10px;
`;

const Repo = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 0.9em;
  padding: 10px;

  a {
    color: inherit;
    text-decoration: none;
    font-family: "Noto Sans", sans-serif;
    font-size: 1.2rem;
    position: relative;
    display: inline-block;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #ff0000, #00ffff);
      transform: scaleX(0);
      transition: transform 0.4s ease-out;
    }

    &::after {
      bottom: -5px;
      left: 0;
      transform-origin: right;
    }

    &::before {
      top: -5px;
      left: 0;
      transform-origin: left;
    }

    &:hover::after,
    &:hover::before {
      transform: scaleX(1);
    }

    &:visited {
      color: inherit;
    }
  }
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const Details = styled.div`
  margin: 0;
  padding: 10px;
  line-height: 1.4;
`;

const BulletPoint = styled.li`
  line-height: 1.4;
  margin-bottom: 5px;
`;
export default ProjectExperience;

// {project.bulletPoints.length > 0 ? (
//   <BulletList>
//     {project.bulletPoints.map((point, index) => (
//       <BulletPoint key={index}>{point}</BulletPoint>
//     ))}
//   </BulletList>
// ) : }
