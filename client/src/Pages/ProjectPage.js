import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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
      <Title>My Projects</Title>
      <ProjectList>
        {projects.map((project) => (
          <ProjectItem key={project.id}>
            <ProjectName>{project.name}</ProjectName>
            <ProjectTools>Tools: {project.tools.join(", ")}</ProjectTools>
          </ProjectItem>
        ))}
      </ProjectList>
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
`;

const ProjectName = styled.h2`
  color: #0066cc;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProjectTools = styled.p`
  color: #666;
  font-size: 14px;
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
