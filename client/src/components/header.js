import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const onContactPage = location.pathname === "/contact";

  return (
    <HeaderWrapper onContactPage={onContactPage}>
      <HeaderContent>
        {onContactPage ? (
          <LeftLink to="/">← Back</LeftLink>
        ) : (
          <RightLink to="/contact">Contact</RightLink>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: ${(props) =>
    props.onContactPage ? "flex-start" : "flex-end"};

  width: 100%;
  color: white;

  top: 0;
  z-index: 999;

  @media (max-width: 768px) {
    padding-left: 1rem; /* no sidebar, so reset */
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  padding-left: 6rem; /* space for sidebar */

  @media (max-width: 768px) {
    padding-left: 1rem; /* no sidebar on mobile */
  }
`;

const LeftLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding-left: 1rem;

  &:hover {
    text-decoration: none;
  }
`;

const RightLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding-right: 1rem;

  &:hover {
    text-decoration: none;
  }
`;

export default Header;
