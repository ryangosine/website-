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
  margin: 10rem auto;
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

export default Quote;
