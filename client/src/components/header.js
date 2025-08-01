import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const onContactPage = location.pathname === "/contact";

  return (
    <HeaderWrapper $onContactPage={onContactPage}>
      {onContactPage ? (
        <ButtonLink to="/">← Back</ButtonLink>
      ) : (
        <ButtonLink to="/contact">Contact</ButtonLink>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ $onContactPage }) =>
    $onContactPage ? "flex-start" : "flex-end"};
  padding: 1rem 2rem;
  width: 100%;
  background: transparent;
  color: white;
  z-index: 999;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ButtonLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center; /* Horizontal centering of text */
  align-items: center; /* Vertical centering of text */
  width: 100px;
  height: 60px;
  background: rgba(51, 51, 51, 0.2);
  border-radius: 8px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-decoration: none;
  transition: 0.3s;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 105, 180, 0.3),
      rgba(147, 112, 219, 0.3)
    );
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    color: #fff;
    background: rgba(51, 51, 51, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
`;

export default Header;
