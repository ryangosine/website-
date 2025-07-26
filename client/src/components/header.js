import React from "react";
import styled from "styled-components";
import SMIconsContainer from "./SMIconsContainer";

const Header = () => {
  return (
    <HeaderWrapper>
      <SMIconsContainer />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 6rem;
  /* border-bottom: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  width: auto;
  position: sticky;
  top: 0;
  /* border-bottom: 2px solid white; */

  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Header;

// const Header = styled.div`
//   height: 6rem;
//   border-bottom: 1px solid black;
//   display: flex;
//   align-items: center;
//   padding: 0 1rem;
//   width: auto;
//   position: sticky;
//   border-bottom: 2px solid white;
// `;
