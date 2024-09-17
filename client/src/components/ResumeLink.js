import React from "react";
import styled from "styled-components";

const ResumeLink = () => {
  return (
    <Container>
      <StyledLink
        href="https://pdfupload.io/docs/2ac25379"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Out My Resume!
      </StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  font-family: "Edo SZ", sans-serif;
  position: relative;
  font-size: 1.2rem;
  margin: 10px;
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  color: #f0ead6;
  text-decoration: none;

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

export default ResumeLink;
