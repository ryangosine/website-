import React from "react";
import styled from "styled-components";
import SMIconsContainer from "./SMIconsContainer";

const Footer = () => {
  return (
    <FooterWrapper>
      <SMIconsContainer />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  border: 1px solid red;
  width: 100%;
  background-color: #000; /* ✨ solid black box */
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.6);
  margin-top: auto;

  @media (max-width: 500px) {
    padding: 1.5rem 0;
  }
`;

export default Footer;
