// src/components/IconsContainer.js
import React from "react";
import styled from "styled-components";
import HTMLIcon from "./Icons/HTMLIcon";
import JSIcon from "./Icons/JSIcon";
import ReactIcon from "./Icons/ReactIcon";
import AngularIcon from "./Icons/AngularIcon";
import TSLogo from "./Icons/TypeScript";
import NPMIcon from "./Icons/NPMIcon";
import BootStrapLogo from "./Icons/BootStrapLogo";
import NodeIcon from "./Icons/NodeIcon";
import PythonIcon from "./Icons/PythonIcon";
import MongoDBIcon from "./Icons/MongoDbIcon";
import JavaIcon from "./Icons/JavaIcon";
import CSSIcon from "./Icons/CssIcon";
import BashIcon from "./Icons/BashIcon";
import StyledComponentsLogo from "./Icons/StyledComponentsIcon";
import ExpressIcon from "./Icons/ExpressIcon";
import YarnIcon from "./Icons/YarnIcon";
import GitIcon from "./Icons/GitIcon";
import VSCIcon from "./Icons/VSCIcon";
import InsomniaIcon from "./Icons/InsomniaIcon";
import PostManIcon from "./Icons/PostManIcon";
// Import other icons similarly

const IconsContainer = () => {
  return (
    <Container>
      <Title1>Technologies I Enjoy Using</Title1>

      <Head1>Front End</Head1>
      <ItemsContFrEnd>
        <HTMLIcon />
        <JSIcon />
        <ReactIcon />
        <CSSIcon />
        <StyledComponentsLogo width="80" height="80" />
        <AngularIcon />
        <TSLogo />
        <YarnIcon width="80" height="80" />
        <NPMIcon />
        <BootStrapLogo />
      </ItemsContFrEnd>

      <Head2>Back End</Head2>
      <ItemsContBkEnd>
        <NodeIcon />
        <PythonIcon />
        <BashIcon />
        <MongoDBIcon />
        <JavaIcon />
        <ExpressIcon />
      </ItemsContBkEnd>

      <Head3>Other </Head3>
      <OtherTech>
        <GitIcon />
        <VSCIcon />
        <InsomniaIcon width="80" height="80" />
        <PostManIcon />
      </OtherTech>
      {/* Render other icons similarly */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  margin-left: 80px;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust as needed
  flex-direction: column;
  min-height: 100vh;
  width: 80%;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const Title1 = styled.h1`
  font-optical-sizing: auto;
  font-style: normal;
  /* letter-spacing: 3px; */

  font-family: "Playfair Display", serif;
  --angle: 45deg;
  background: linear-gradient(
    var(--angle),
    #d8f0fa,
    #c6e6f9,
    #aed1f1,
    #97bdfc,
    #84acf7,
    #719aed
  );
  -webkit-background-clip: text; /* Clip the background to the text */
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Make the text color transparent */
  font-size: 2em;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const Head1 = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
`;
const Head2 = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
`;

const Head3 = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
`;

const ItemsContFrEnd = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust as needed
`;

const ItemsContBkEnd = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust as needed
`;

const OtherTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust as needed
`;
export default IconsContainer;
