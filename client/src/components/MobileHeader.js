import React from "react";
import styled from "styled-components";
import SMIconsContainer from "./SMIconsContainer";

const MobileHeader = () => {
  return (
    <HeaderWrapper>
      <IconRow>
        <SMIconsContainer />
      </IconRow>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    /* background-color: #0b0b2b; */
  }
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default MobileHeader;
