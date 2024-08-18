import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "./Icons/ArrowIcon";

const ResumeLink = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <Container>
      <Resume
        href="https://pdfupload.io/docs/2ac25379"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHoveredLink("resume")}
        onMouseLeave={() => setHoveredLink(null)}
      >
        Check Out My Resume!
      </Resume>
      {/* <ArrowIcon isHovered={hoveredLink === "resume"} /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Resume = styled.a`
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

export default ResumeLink;
