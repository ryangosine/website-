import React from "react";
import styled from "styled-components";
import SMIconsContainer from "./SMIconsContainer";

const MobileHeader = () => {
  return (
    <HeaderWrapper>
      <SMIconsContainer />
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

export default MobileHeader;
