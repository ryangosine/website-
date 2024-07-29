import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const Header = ({ value, handleChange }) => {
  return (
    <HeaderWrapper>
      <Tabs value={value} handleChange={handleChange} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  /* border: 1px solid red; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export default Header;
