import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkToProjectPage = () => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <StyledLink
      to="/projectPage"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlobalWrapper>
        <Prompt $isHovered={isHovered}> more things i've done</Prompt>
      </GlobalWrapper>
    </StyledLink>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Prompt = styled.span`
  font-family: "Edo SZ", sans-serif;
  position: relative;
  font-size: 1.2rem;
  margin: 10px;
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  color: #f0ead6;

  background: ${({ $isHovered }) =>
    $isHovered ? "linear-gradient(45deg, #d68fd7, #ff6f61)" : "transparent"};

  background-clip: ${({ $isHovered }) => ($isHovered ? "text" : "none")};
  -webkit-background-clip: ${({ $isHovered }) =>
    $isHovered ? "text" : "none"};
  -webkit-text-fill-color: ${({ $isHovered }) =>
    $isHovered ? "transparent" : "inherit"};

  &:hover {
    background: linear-gradient(45deg, #d68fd7, #ff6f61);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default LinkToProjectPage;
