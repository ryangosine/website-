import React from "react";
import styled from "styled-components";
import TextType from "../Animations/TextType";

const Quote = () => {
  return (
    <QuoteWrapper>
      <TextType
        text={["MODERN PROBLEMS REQUIRE MODERN SOLUTIONS."]}
        typingSpeed={110}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        startOnVisible={true}
      />
    </QuoteWrapper>
  );
};

const QuoteWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  padding: 70px;
  font-size: 5rem;
  font-family: "Courier Prime", monospace;
  font-weight: 400;
  color: #f0ead6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 20px;
  }
`;
const QuoteText = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 5.5rem;
  margin-top: 50px;
`;

export default Quote;
