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
  color: #f0ead6;
  font-family: "Source Code Pro", monospace;
  position: relative;
  font-weight: normal;
  font-size: 20px;
  margin: 10px;
  text-decoration: none;
  transition: color 0.3s ease, font-weight 0.3s ease;

  &:hover {
    color: #4caf50;
    font-weight: bold;
  }
`;

export default ResumeLink;
