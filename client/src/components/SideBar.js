import React from "react";
import styled from "styled-components";
import SMIconsContainer from "./SMIconsContainer";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SMIconsContainer />
    </SideBarWrapper>
  );
};

const SideBarWrapper = styled.aside`
  width: 6rem;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10; /* ensure it's visible above sections if needed */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem 0;
  background-color: transparent;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SideBar;
