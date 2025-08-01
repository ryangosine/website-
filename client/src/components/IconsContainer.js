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

const IconsContainer = () => {
  return (
    <Wrapper>
      <Title1>Technologies I Enjoy Using</Title1>
      <Columns>
        <Column>
          <ColumnTitle>Front End</ColumnTitle>
          <Item>
            <SmallIcon>
              <HTMLIcon width="30" height="30" />
            </SmallIcon>
            HTML
          </Item>
          <Item>
            <SmallIcon>
              <JSIcon width="30" height="30" />
            </SmallIcon>
            JavaScript
          </Item>
          <Item>
            <SmallIcon>
              <ReactIcon width="30" height="30" />
            </SmallIcon>
            React
          </Item>
          <Item>
            <SmallIcon>
              <CSSIcon width="30" height="30" />
            </SmallIcon>
            CSS
          </Item>
          <Item>
            <SmallIcon>
              <StyledComponentsLogo width="30" height="30" />
            </SmallIcon>
            Styled Components
          </Item>
          <Item>
            <SmallIcon>
              <AngularIcon width="30" height="30" />
            </SmallIcon>
            Angular
          </Item>
          <Item>
            <SmallIcon>
              <TSLogo width="30" height="30" />
            </SmallIcon>
            TypeScript
          </Item>
          <Item>
            <SmallIcon>
              <YarnIcon width="30" height="30" />
            </SmallIcon>
            Yarn
          </Item>
          <Item>
            <SmallIcon>
              <NPMIcon width="30" height="30" />
            </SmallIcon>
            NPM
          </Item>
          <Item>
            <SmallIcon>
              <BootStrapLogo width="30" height="30" />
            </SmallIcon>
            Bootstrap
          </Item>
        </Column>

        <Divider />

        <Column>
          <ColumnTitle>Back End</ColumnTitle>
          <Item>
            <SmallIcon>
              <NodeIcon width="30" height="30" />
            </SmallIcon>
            Node.js
          </Item>
          <Item>
            <SmallIcon>
              <ExpressIcon width="30" height="30" />
            </SmallIcon>
            Express
          </Item>
          <Item>
            <SmallIcon>
              <PythonIcon width="30" height="30" />
            </SmallIcon>
            Python
          </Item>
          <Item>
            <SmallIcon>
              <MongoDBIcon width="30" height="30" />
            </SmallIcon>
            MongoDB
          </Item>
          <Item>
            <SmallIcon>
              <JavaIcon width="30" height="30" />
            </SmallIcon>
            Java
          </Item>
          <Item>
            <SmallIcon>
              <BashIcon width="30" height="30" />
            </SmallIcon>
            Bash
          </Item>
        </Column>

        <Divider />

        <Column>
          <ColumnTitle>Other</ColumnTitle>
          <Item>
            <SmallIcon>
              <GitIcon width="30" height="30" />
            </SmallIcon>
            Git
          </Item>
          <Item>
            <SmallIcon>
              <VSCIcon width="30" height="30" />
            </SmallIcon>
            VS Code
          </Item>
          <Item>
            <SmallIcon>
              <InsomniaIcon width="30" height="30" />
            </SmallIcon>
            Insomnia
          </Item>
          <Item>
            <SmallIcon>
              <PostManIcon width="30" height="30" />
            </SmallIcon>
            Postman
          </Item>
        </Column>
      </Columns>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  width: 90%;
  max-width: 1200px;
  margin: 15rem auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
`;

const Title1 = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 2.5rem;
  background: linear-gradient(45deg, #d8f0fa, #719aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 20px;
  font-family: "Inter", sans-serif;
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
`;

const SmallIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Divider = styled.div`
  width: 1px;
  background-color: #ccc;
  margin: 1rem 0;
  align-self: stretch;
  opacity: 0.4;

  @media (max-width: 768px) {
    display: none;
  }
`;
export default IconsContainer;
