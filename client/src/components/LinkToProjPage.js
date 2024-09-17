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
  color: ${({ $isHovered }) => ($isHovered ? "#b967ff" : "#F0EAD6")};
  font-family: "Edo SZ", sans-serif;
  position: relative;
  font-size: 20px;
  margin: 10px;
  transition: color 0.3s ease, font-weight 0.3s ease;
  letter-spacing: 1.5px;
`;

export default LinkToProjectPage;
