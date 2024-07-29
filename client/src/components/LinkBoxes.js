import React from "react";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1000px;
  text-align: center;
  margin-top: 50px;
  border: 1px solid red;
`;

export const LinkBox = styled.a`
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "150px"};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s, transform 0.3s;
  color: #bb86fc;
  text-decoration: none;
  font-size: 1.2em;
  margin: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const AccentLine = styled.div`
  width: 60%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(187, 134, 252, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 20px auto;
`;

export const BackgroundAccent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 11, 30, 0) 0%,
    rgba(10, 11, 30, 0.8) 50%,
    rgba(10, 11, 30, 0) 100%
  );
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const Title = styled.h1`
  font-size: 3em;
  margin: 0;
  color: #bb86fc;
`;

export const Subtitle = styled.p`
  font-size: 1.2em;
  color: #a1a1aa;
`;

const LinkBoxContainer = () => {
  return (
    <Container>
      <Title>Welcome to My Website</Title>
      <AccentLine />
      <Subtitle>Minimalist and Futuristic Design</Subtitle>
      <LinksContainer>
        <LinkBox href="/page1" width="300px" height="200px">
          About me
        </LinkBox>
        <LinkBox href="/page2" width="200px" height="300px">
          My Resume
        </LinkBox>
        <LinkBox href="/page3" width="400px" height="150px">
          Page 3
        </LinkBox>
      </LinksContainer>
      <BackgroundAccent />
    </Container>
  );
};

export default LinkBoxContainer;
