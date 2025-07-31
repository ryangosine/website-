import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/header";

const ContactPage = () => {
  return (
    <GlobalWrapper>
      <Header />
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div``;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  padding: 8px 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  padding: 2rem;
`;

export default ContactPage;
