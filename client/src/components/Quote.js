import React from "react";
import styled from "styled-components";

const Quote = () => {
  return (
    <QuoteWrapper>
      <QuoteText>
        I AM GOING TO HAVE SOME KIND OF QUOTE THAT I LIKE HERE.
      </QuoteText>
    </QuoteWrapper>
  );
};

const QuoteWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 70px;
`;
const QuoteText = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-size: 5.5rem;
  margin-top: 50px;
`;

export default Quote;
