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
      <ProjectList>
        {projects.map((project) => (
          <ProjectItem key={project.id}>
            <NameButtonContainer>
              <ProjectName>{project.name}</ProjectName>
              <ProjectTools tools={project.tools} />
            </NameButtonContainer>
            <ProjectDescription>{project.Description}</ProjectDescription>
          </ProjectItem>
        ))}
      </ProjectList>
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

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;

  &:hover {
    border: 1px solid rgba(0, 184, 255, 0.5); /* Faint border with the desired color */
    background-color: rgba(0, 184, 255, 0.1); /* Faded background color */
    transition: all 0.3s ease; /* Smooth transition for the effect */
  }
`;

const NameButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid white;
`;

const ProjectName = styled.h2`
  color: #0066cc;
  font-size: 18px;
  margin-bottom: 10px;
`;

// const ProjectTools = styled.p`
//   color: #666;
//   font-size: 14px;
// `;

const ProjectDescription = styled.div``;

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
