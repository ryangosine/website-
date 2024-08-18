import React, { useState } from "react";
import styled from "styled-components";
import ArrowRightIcon from "./Icons/ArrowRightIcon";

const LinkToProjectPage = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <GlobalWrapper
      onMouseEnter={() => setHoveredLink("projectPage")}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <Prompt>Projects I've Worked On!</Prompt>
      {/* <ArrowRightIcon isHovered={hoveredLink === "projectPage"} /> */}
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Prompt = styled.a`
  color: inherit;
  font-family: "Source Code Pro", monospace;
  position: relative;
  font-weight: 200;
  text-decoration: none;
  font-size: 20px;
  margin: 10px;

  transition: color 0.3s ease;
  color: ${({ active }) =>
    active ? "#4CAF50" : "#F0EAD6"}; // Change colors as needed
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    color: #4caf50;
  }
`;

export default LinkToProjectPage;
