import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContactMeBox = () => {
  const navigate = useNavigate();

  return (
    <GlobalWrapper>
      <Content>
        <Title>Let's Work Together!</Title>
        <Blurb>
          Have an idea for a project?
          <br />
          <br />
          Send me an e-mail and together we'll make something beautiful!
        </Blurb>
        <ContactMeButton onClick={() => navigate("/contact")}>
          Contact Me
        </ContactMeButton>
      </Content>
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid skyblue;
  padding: 3rem;
  width: 85vw;
  margin: 0 auto 8rem;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(135, 206, 235, 0.3);
  background-color: #0f1115; /* Optional: dark background for white text */
`;

const Content = styled.div`
  display: flex;
  flex-direction: row; /* ✅ Horizontal layout */
  align-items: center;
  gap: 9rem; /* ✅ More spacing between items */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Title = styled.h4`
  font-size: 2rem;
  color: white;
  margin: 0;
  font-family: "Montserrat", sans-serif;
`;

const Blurb = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: white;
  max-width: 300px;
  margin: 0;
  font-family: "Inter", sans-serif;
`;

const ContactMeButton = styled.button`
  padding: 0.6rem 1.4rem;
  border: 2px solid white;
  background-color: transparent;
  color: white; /* ✅ White text by default */
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 999px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export default ContactMeBox;
