//mainpage component

import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import AboutMeSection from "../components/AboutMeSection";
import StarField from "../components/Starfield";
import SMIconsContainer from "../components/SMIconsContainer";

const MainPage = () => {
  return (
    <StyledMainPage>
      <StarField starCount={50} />
      <SideOneContainer>
        <Title>.ryanGosine</Title>
        <SMIconsContainer />
      </SideOneContainer>
      <SideTwoContainer>
        <AboutMeSection />
      </SideTwoContainer>
    </StyledMainPage>
  );
};

const StyledMainPage = styled.div`
  display: flex;
  height: 100vh; //full viewport height
  overflow: hidden; // prevent scrolling on main container
`;

const SideOneContainer = styled.div`
  width: 33.33%;
  display: flex;
  padding: 20px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  height: 96vh;
`;

const SideTwoContainer = styled.div`
  width: 66.67%;
  /* border-left: 1px solid green; */
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none; // IE 10+

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, newer versions of Opera
  }
`;

const Title = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  padding: 20px;
  margin-top: 50px;
  margin-left: 10px;
`;

export default MainPage;
