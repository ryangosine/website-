import React from "react";
import styled from "styled-components";
import projectData from "../projects.json";
import TiltedCard from "../Animations/TiltedCard";
import websiteCard from "../Assets/websiteCard.svg";
import shopCard_500x300 from "../Assets/shopCard_500x300.svg";

const ProjectExperience = () => {
  return (
    <Container>
      <Title>Project Experience</Title>
      <CardContainer>
        {projectData.map((project, index) => (
          <ProjectRow key={project.id}>
            <TiltedCard
              imageSrc={index === 0 ? websiteCard : shopCard_500x300}
              containerHeight="300px"
              containerWidth="500px"
              imageHeight="300px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
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
                    Click Here to visit REPO
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
  margin-bottom: 40px;
  gap: 40px;
`;

const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0ead6;
  max-width: 600px;
`;

const Container = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;

  gap: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: 3rem;
`;

const Title = styled.h3`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-family: "Edo SZ", sans-serif;
  background: linear-gradient(
    45deg,
    #9b59b6,
    #e74c3c
  ); /* Purple to Red gradient */
  -webkit-background-clip: text; /* Clip the background to the text */
  -webkit-text-fill-color: transparent; /* Make the text color transparent */
  font-size: 2em;
  margin: 0;
`;

const CardContainer = styled.div`
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
    color: inherit; /* Inherit text color (no purple visited) */
    text-decoration: none; /* Remove underline */

    &:hover {
      text-decoration: underline; /* Optional: underline on hover */
    }

    &:visited {
      color: inherit; /* Prevent default purple visited color */
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
