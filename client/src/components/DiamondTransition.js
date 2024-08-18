import React from "react";
import styled, { keyframes } from "styled-components";

const DiamondTransition = ({ isActive }) => {
  return (
    <DiamondWrapper isActive={isActive}>
      <Diamond isActive={isActive} />
    </DiamondWrapper>
  );
};

const shrink = keyframes`
  0% { transform: rotate(45deg) scale(20); }
  100% { transform: rotate(45deg) scale(0); }
`;

const DiamondWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: ${(props) => (props.isActive ? 1000 : -1)};
  background-color: ${(props) => (props.isActive ? "transparent" : "#F0EAD6")};
  transition: background-color 0.5s ease-in-out;
`;

const Diamond = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => (props.isActive ? "#F0EAD6" : "transparent")};
  transform: rotate(45deg) scale(20);
  animation: ${shrink} 1s ease-in-out forwards;
  animation-play-state: ${(props) => (props.isActive ? "running" : "paused")};
`;

export default DiamondTransition;
