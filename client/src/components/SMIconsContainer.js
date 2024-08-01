import React from "react";
import styled from "styled-components";
import LinkedInIcon from "./Icons/LinkedInIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import FaceBookIcon from "./Icons/FacebookIcon";

const SMIconsContainer = () => {
  return (
    <Container>
      <a
        href="https://www.linkedin.com/in/ryangosine/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>

      <a
        href="https://github.com/ryangosine"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.facebook.com/removedfromgame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaceBookIcon />
      </a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px; // Adds space between icons
`;

export default SMIconsContainer;
