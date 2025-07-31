import styled from "styled-components";

const GradientSection = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 4rem 1rem;
  background: linear-gradient(to bottom, #0b0b2b 0%, #1b2735 60%, #121212 100%);
  color: white;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100px;
    left: 0;
    width: 100%;
    background: linear-gradient(to bottom, transparent, #121212);
    pointer-events: none;
  }
`;

export default GradientSection;
