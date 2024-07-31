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
        <StyledComponentsLogo width="100" height="100" />
        <AngularIcon />
        <TSLogo />
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
      </ItemsContBkEnd>
      {/* Render other icons similarly */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; // Adjust as needed
  flex-direction: column;
`;

const Title1 = styled.h1`
  font-family: "Source Code Pro", monospace;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
  text-align: center;
`;

const Head1 = styled.div`
  font-family: "Source Code Pro", monospace;
  font-weight: 400; // Adjust weight as needed
  font-style: normal; // or italic
`;
const Head2 = styled.div`
  font-family: "Source Code Pro", monospace;
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
export default IconsContainer;
