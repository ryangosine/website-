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
      <Title1 as="h2" id="technologies-title">
        Technologies I Enjoy Using
      </Title1>
      <Columns role="region" aria-labelledby="technologies-title">
        <Column as="section" aria-labelledby="front-end-heading">
          <ColumnTitle id="front-end-heading">Front End</ColumnTitle>
          <Item tabIndex="0" aria-label="HTML">
            <SmallIcon>
              <HTMLIcon />
            </SmallIcon>
            HTML
          </Item>
          <Item tabIndex="0" aria-label="JavaScript">
            <SmallIcon>
              <JSIcon />
            </SmallIcon>
            JavaScript
          </Item>
          <Item tabIndex="0" aria-label="React">
            <SmallIcon>
              <ReactIcon />
            </SmallIcon>
            React
          </Item>
          <Item tabIndex="0" aria-label="CSS">
            <SmallIcon>
              <CSSIcon />
            </SmallIcon>
            CSS
          </Item>
          <Item tabIndex="0" aria-label="Styled Components">
            <SmallIcon>
              <StyledComponentsLogo />
            </SmallIcon>
            Styled Components
          </Item>
          <Item tabIndex="0" aria-label="Angular">
            <SmallIcon>
              <AngularIcon />
            </SmallIcon>
            Angular
          </Item>
          <Item tabIndex="0" aria-label="TypeScript">
            <SmallIcon>
              <TSLogo />
            </SmallIcon>
            TypeScript
          </Item>
          <Item tabIndex="0" aria-label="Yarn">
            <SmallIcon>
              <YarnIcon />
            </SmallIcon>
            Yarn
          </Item>
          <Item tabIndex="0" aria-label="NPM">
            <SmallIcon>
              <NPMIcon />
            </SmallIcon>
            NPM
          </Item>
          <Item tabIndex="0" aria-label="Bootstrap">
            <SmallIcon>
              <BootStrapLogo />
            </SmallIcon>
            Bootstrap
          </Item>
        </Column>

        <Divider />

        <Column as="section" aria-labelledby="back-end-heading">
          <ColumnTitle id="back-end-heading">Back End</ColumnTitle>
          <Item tabIndex="0" aria-label="Node.js">
            <SmallIcon>
              <NodeIcon />
            </SmallIcon>
            Node.js
          </Item>
          <Item tabIndex="0" aria-label="Express">
            <SmallIcon>
              <ExpressIcon />
            </SmallIcon>
            Express
          </Item>
          <Item tabIndex="0" aria-label="Python">
            <SmallIcon>
              <PythonIcon />
            </SmallIcon>
            Python
          </Item>
          <Item tabIndex="0" aria-label="MongoDB">
            <SmallIcon>
              <MongoDBIcon />
            </SmallIcon>
            MongoDB
          </Item>
          <Item tabIndex="0" aria-label="Java">
            <SmallIcon>
              <JavaIcon />
            </SmallIcon>
            Java
          </Item>
          <Item tabIndex="0" aria-label="Bash">
            <SmallIcon>
              <BashIcon />
            </SmallIcon>
            Bash
          </Item>
        </Column>

        <Divider />

        <Column as="section" aria-labelledby="other-tools-heading">
          <ColumnTitle id="other-tools-heading">Other</ColumnTitle>
          <Item tabIndex="0" aria-label="Git">
            <SmallIcon>
              <GitIcon />
            </SmallIcon>
            Git
          </Item>
          <Item tabIndex="0" aria-label="VS Code">
            <SmallIcon>
              <VSCIcon />
            </SmallIcon>
            VS Code
          </Item>
          <Item tabIndex="0" aria-label="Insomnia">
            <SmallIcon>
              <InsomniaIcon />
            </SmallIcon>
            Insomnia
          </Item>
          <Item tabIndex="0" aria-label="Postman">
            <SmallIcon>
              <PostManIcon />
            </SmallIcon>
            Postman
          </Item>
        </Column>
      </Columns>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 4px solid white;
  border-radius: 15px;
  width: 90%;
  max-width: 1200px;
  margin: 10rem auto;
  padding: 2rem 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 6rem auto;
    padding: 1.5rem 1rem;
  }
`;

const Title1 = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(2rem, 5vw, 2.5rem);
  background: linear-gradient(45deg, #d8f0fa, #719aed);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 2rem;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 20px;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
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
