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

      <Head3>Other Technologies</Head3>
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
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust as needed
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Title1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
  text-align: center;
  font-size: 35px;
`;

const Head1 = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
`;
const Head2 = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
`;

const Head3 = styled.div`
  font-family: "Space Grotesk", sans-serif;
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
