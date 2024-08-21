import React from "react";
import styled from "styled-components";
import LinkedInIcon from "./Icons/LinkedInIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import FaceBookIcon from "./Icons/FacebookIcon";

const SMIconsContainer = () => {
  return (
    <IconList>
      <IconItem>
        <IconLink
          href="https://www.linkedin.com/in/ryangosine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconLink>
      </IconItem>
      <IconItem>
        <IconLink
          href="https://github.com/ryangosine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconLink>
      </IconItem>
      <IconItem>
        <IconLink
          href="https://www.facebook.com/removedfromgame"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaceBookIcon />
        </IconLink>
      </IconItem>
    </IconList>
  );
};

const IconList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

const IconItem = styled.li`
  margin: 0 10px;
`;

const IconLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(51, 51, 51, 0.2);
  border-radius: 8px; // Changed from 50% to 8px for a box shape
  color: #666;
  transition: 0.3s;
  overflow: hidden;

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

export default SMIconsContainer;
