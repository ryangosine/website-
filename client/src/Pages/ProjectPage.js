import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { ReactComponent as BackButton } from "../Assets/back-button-svgrepo-com.svg";
import ProjectTools from "../components/ProjectTools";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page
  };

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <GlobalWrapper>
      <HeaderSection>
        <StyledBackButton onClick={handleBackClick}>
          <BackButton />
        </StyledBackButton>
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

const StyledBackButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(51, 51, 51, 0.2);
  border-radius: 8px;
  color: #666;
  transition: 0.3s;
  overflow: hidden;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 105, 180, 0.3),
      rgba(147, 112, 219, 0.3)
    );
    opacity: 0;
    transition: 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    color: #fff;
    background: rgba(51, 51, 51, 0.4);
    transform: translateY(-2px);
  }

  svg {
    width: 30px;
    height: 30px;
    fill: currentColor;
    transition: 0.3s;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: "Edo SZ", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  letter-spacing: 3px;

  background: linear-gradient(
    45deg,
    #9b59b6,
    #e74c3c
  ); /* Purple to Red gradient */
  -webkit-background-clip: text; /* Clip the background to the text */
  -webkit-text-fill-color: transparent; /* Make the text color transparent */
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
