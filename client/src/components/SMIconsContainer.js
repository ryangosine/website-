import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import LinkedInIcon from "./Icons/LinkedInIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import FaceBookIcon from "./Icons/FacebookIcon";
import GmailIcon from "./Icons/GmailIcon";
import XIcon from "./Icons/Xicon";

const SMIconsContainer = ({ direction = "column" }) => {
  // const [isHovering, setIsHovering] = useState(false);

  return (
    <GlobalWrapper>
      <IconList direction={direction}>
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
      {/* <TextElement>
        Shoot me an e-mail! I'd{" "}
        <ColoredSpan
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          $isHovering={isHovering}
        >
          love
        </ColoredSpan>{" "}
        to collaborate!
      </TextElement> */}
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// const TextElement = styled.div`
//   font-family: "Caveat", cursive;
//   font-weight: 100;
//   position: relative;
// `;

const ColoredSpan = styled.span`
  color: #ff71ce;
  position: relative;
  cursor: pointer;
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isHovering ? "scale(8.2)" : "scale(1)")};
`;

const IconList = styled.ul`
  margin: 10;
  padding: 0;
  display: flex;
  flex-direction: ${(props) => props.direction};
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
