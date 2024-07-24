import React from "react";
import styled from "styled-components";
import LinkBoxContainer from "../components/LinkBoxes";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <LinkBoxContainer />
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
