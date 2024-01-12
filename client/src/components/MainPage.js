import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <TitleWrapper>
        <Title1>Ryan Gosine,</Title1>
        <Title2>Web Developer</Title2>
      </TitleWrapper>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div``;

const TitleWrapper = styled.div`
  margin: 20px;
`;
const Title1 = styled.h1`
  color: white;
`;
const Title2 = styled.h1`
  color: white;
`;

export default MainPage;
