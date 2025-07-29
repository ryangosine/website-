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
  width: 6rem; /* Sidebar width */
  height: 100vh; /* Full viewport height */
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem 0;
  /* background-color: #111;  */
  color: white;

  /* Optional: Adjust for small screens */
  @media (max-width: 768px) {
    width: 4rem;
  }
`;

export default SideBar;

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
