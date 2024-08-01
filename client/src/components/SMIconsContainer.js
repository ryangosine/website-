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
  margin: 0 5px;
`;

const IconLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: #333;
  border-radius: 50%;
  color: #666;
  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(238, 238, 255, 0.5);
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(238, 238, 255, 0.7),
      0 0 30px rgba(238, 238, 255, 0.5);
  }

  &:hover {
    color: rgba(238, 238, 255, 0.9); /* Light purple color on hover */
    box-shadow: 0 0 10px rgba(238, 238, 255, 0.7),
      0 0 20px rgba(238, 238, 255, 0.5); /* Nebula shadow */
    text-shadow: 0 0 10px rgba(238, 238, 255, 0.7); /* Light purple text shadow */
  }

  svg {
    width: 30px;
    height: 30px;
    fill: currentColor;
  }
`;

export default SMIconsContainer;
