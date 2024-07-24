import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      {/* <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks> */}
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
