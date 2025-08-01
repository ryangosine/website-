import styled from "styled-components";
import projectData from "../projects.json";
import websiteCardSpace from "../Assets/WebsiteCardSpace.svg";
import shopCard_500x300 from "../Assets/shopCard_500x300.svg";

const ProjectExperience = () => {
  return (
    <Container role="region" aria-labelledby="project-experience-heading">
      <Title id="project-experience-heading">Project Experience</Title>
      <CardRow>
        {projectData.map((project, index) => {
          const color = index === 0 ? "#4A90E2" : "#27AE60";
          const imageSrc = index === 0 ? websiteCardSpace : shopCard_500x300;

          return (
            <Card
              as="a"
              key={project.id}
              href={project.siteUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View project: ${project.name}`}
              $hoverColor={color}
            >
              <Image
                src={imageSrc}
                alt={project.name || "Project preview"}
                loading="lazy"
              />
              <TextOverlay $hoverColor={color}>
                <ProjectName>{project.name}</ProjectName>
                <Details>
                  {project.description.split("\n").map((line, idx) => (
                    <p key={idx}>{line.trim() || "\u00A0"}</p>
                  ))}
                </Details>
                {project.siteUrl && (
                  <ActionButton
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </ActionButton>
                )}
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
  padding: 0 1rem;
`;

const Title = styled.h3`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin: 0;
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

const Card = styled.a`
  font-family: "Inter", sans-serif;
  position: relative;
  width: 400px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  display: block;
  transition: background-color 0.5s ease;
  background-color: black;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }

  &:focus {
    outline: 2px solid ${(props) => props.$hoverColor};
    outline-offset: 4px;
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
