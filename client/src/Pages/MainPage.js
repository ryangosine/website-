import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AboutMeSection from "../components/AboutMeSection";

const MainPage = () => {
  return (
    <StyledMainPage>
      <SideOneContainer>
        <StyledLink to="/directory">Ryan Gosine.</StyledLink>
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
  /* border-right: 1px solid red; */
  display: flex;
  align-items: center;
  padding: 20px;
`;

const SideTwoContainer = styled.div`
  width: 66.67%;
  /* border-left: 1px solid green; */
  overflow-y: auto;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
`;

export default MainPage;
