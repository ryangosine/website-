import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import LinkedInIcon from "./Icons/LinkedInIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import FaceBookIcon from "./Icons/FacebookIcon";
import GmailIcon from "./Icons/GmailIcon";
import XIcon from "./Icons/Xicon";

const SMIconsContainer = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <GlobalWrapper>
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
            href="https://x.com/removedfromgame"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon />
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

        <IconItem>
          <IconLink
            href="mailto:ryanganeshgosine@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GmailIcon />
          </IconLink>
        </IconItem>
      </IconList>
      <TextElement>
        Shoot me an e-mail! I'd{" "}
        <ColoredSpan
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          love
          {isHovering && <Hearts />}
        </ColoredSpan>{" "}
        to collaborate!
      </TextElement>
    </GlobalWrapper>
  );
};

const Hearts = () => {
  const numberOfHearts = 2;
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <Heart
          key={i}
          style={{
            left: `${
              (i / (numberOfHearts - 1)) * 100 + (Math.random() - 0.5) * 10
            }%`,
          }}
        />
      ))}
    </>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const TextElement = styled.div`
  font-family: "Caveat", cursive;
  font-weight: 100;
  position: relative;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px) scale(0.7);
    opacity: 0;
  }
`;

const Heart = styled.div`
  position: absolute;
  font-size: 30px; /* Increased size */
  color: #ff71ce;
  animation: ${floatAnimation} 3s ease-out forwards;
  transform: rotate(45deg); /* Rotate for a 3D effect */
  bottom: 100%;

  &::before {
    content: "❤️"; /* Use a heart emoji for better appearance */
    display: inline-block;
    font-size: inherit; /* Inherit the font size */
    text-shadow: 0 0 5px rgba(255, 105, 180, 0.6),
      0 0 10px rgba(255, 105, 180, 0.5);
  }
`;

const ColoredSpan = styled.span`
  color: #ff71ce;
  position: relative;
  cursor: pointer;
`;

const IconList = styled.ul`
  margin: 10;
  padding: 0;
  display: flex;
  list-style: none;
`;

const IconItem = styled.li`
  margin: 5px;
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
