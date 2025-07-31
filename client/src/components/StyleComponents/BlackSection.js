import styled from "styled-components";

const BlackSection = styled.section`
  position: relative;
  width: 100%;
  padding: 4rem 1rem;
  background: linear-gradient(to bottom, #121212 0%, black 100%);
  color: white;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100px;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, transparent, #121212);
    pointer-events: none;
  }
`;

export default BlackSection;
