import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import BackButtonComponent from "../components/BackButtonComponent";
import ProjectTools from "../components/ProjectTools";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching projects");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <GlobalWrapper>
      <HeaderSection>
        <BackButtonComponent />
        <Title>MY PROJECTS</Title>
      </HeaderSection>
      <Introduction>
        These are some things I've worked on. I'm still learning but trying to
        expand my horizons. Check back for more!
      </Introduction>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectContent>
              <ProjectName>{project.name}</ProjectName>
              <ProjectTools tools={project.tools} />
              <ProjectDescription>{project.Description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
`;

const Title = styled.h1`
  color: #6082b6;
  font-size: 48px;
  margin-left: 20px;
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  // 3D effect
  text-shadow: 0 1px 0 #4a6285, 0 2px 0 #3d5270, 0 3px 0 #30425a,
    0 4px 0 #243245, 0 5px 0 #182230, 0 6px 1px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
    0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px); // Reduced raise effect
    animation: ${shakeAnimation} 0.5s ease;
    text-shadow: 0 1px 0 #4a6285, 0 2px 0 #3d5270, 0 3px 0 #30425a,
      0 4px 0 #243245, 0 5px 0 #182230, 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15),
      0 22px 22px rgba(0, 0, 0, 0.1); // Slightly increased shadow
  }
`;

const Introduction = styled.p`
  display: flex;
  justify-content: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.a`
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: inherit;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid rgba(0, 184, 255, 0.5);
    background-color: rgba(0, 184, 255, 0.1);
    transition: all 0.3s ease;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProjectName = styled.h2`
  color: #f0ead6;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #f0ead6;
  font-size: 14px;
  line-height: 1.5;
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: #ff0000;
  text-align: center;
  margin-top: 20px;
`;

export default ProjectsPage;
