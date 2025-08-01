import styled from "styled-components";
import TextType from "../Animations/TextType";

const Quote = () => {
  return (
    <QuoteWrapper role="region" aria-label="Inspirational quote section">
      <QuoteBlock aria-live="polite">
        <TextType
          text={["Modern problems require modern solutions."]}
          typingSpeed={110}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          startOnVisible={true}
        />
      </QuoteBlock>
    </QuoteWrapper>
  );
};

const QuoteWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem auto;
  padding: 70px;
  font-size: 5rem;
  font-family: "Courier Prime", Courier, monospace;
  font-weight: 400;
  color: #f0ead6;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 20px;
    margin: 5rem auto;
  }
`;

const QuoteBlock = styled.blockquote`
  margin: 0;
  padding: 0;
`;

export default Quote;
