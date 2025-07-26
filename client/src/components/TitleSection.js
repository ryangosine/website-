import React from "react";
import styled from "styled-components";

const TitleSection = () => {
  return (
    <SectionWrapper>
      <TextContainer>Ryan Gosine</TextContainer>
      <Subheading>
        <Subheading1>Web Developer</Subheading1>
        <Divider>|</Divider>
        <Subheading2>Problem Solver</Subheading2>
      </Subheading>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  /* border: 3px solid red; */
  margin-top: 13vh;
`;

const TextContainer = styled.div`
  /* border: 2px solid white; */
  display: flex;
  justify-content: center;
  font-size: 13rem;
  font-family: "Edo SZ", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  letter-spacing: 3px;

  background: linear-gradient(
    45deg,
    #9b59b6,
    #e74c3c
  ); /* Purple to Red gradient */
  -webkit-background-clip: text; /* Clip the background to the text */
  -webkit-text-fill-color: transparent; /* Make the text color transparent */
`;

const Subheading = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
`;
const Subheading1 = styled.h2`
  padding: 10px;
`;

const Divider = styled.h2`
  padding: 10px;
`;
const Subheading2 = styled.h2`
  padding: 10px;
`;

export default TitleSection;
