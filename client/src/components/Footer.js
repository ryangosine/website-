import React from "react";
import styled from "styled-components";
import SMIconsContainer from "./SMIconsContainer";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <SMIconsContainer />
        <InfoText>
          Forged With Equal Parts <Red>Love</Red> & <Orange>Frustration</Orange>
        </InfoText>
      </ContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  /* border: 1px solid red; */
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.p`
  margin: 15px;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
`;
const Red = styled.span`
  color: red;
  font-weight: 600;
`;

const Orange = styled.span`
  color: orange;
  font-weight: 600;
`;

export default Footer;
