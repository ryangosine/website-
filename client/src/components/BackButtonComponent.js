import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import BackButtonSVG from "../Assets/backButton.svg"; // Adjust the path as needed

const BackButtonComponent = ({ to = "/main", ariaLabel = "Go back" }) => {
  const navigate = useNavigate();
  const [shouldBounce, setShouldBounce] = useState(false);

  const handleMouseEnter = () => {
    setShouldBounce(true);
  };

  const handleAnimationEnd = () => {
    setShouldBounce(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // We'll use a timeout to allow the animation to complete before navigating
    setTimeout(() => {
      navigate(to);
    }, 100); // Matches the animation duration
  };

  return (
    <BackButtonContainer
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
      aria-label={ariaLabel}
      $shouldBounce={shouldBounce}
    >
      <BackButtonImage src={BackButtonSVG} alt="Back" />
    </BackButtonContainer>
  );
};

const pressIn = keyframes`
  0% { 
    transform: translateY(0); 
    box-shadow: 0 8px 0 rgba(76, 175, 80, 0.5), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  100% { 
    transform: translateY(8px); 
    box-shadow: 0 0 0 rgba(76, 175, 80, 0.5), 0 2px 4px rgba(76, 175, 80, 0.5);
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const BackButtonContainer = styled.button`
  width: 75px;
  height: 75px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: none;
  border-radius: 1px;
  box-shadow: 0 8px 0 rgba(76, 175, 80, 0.5), 0 10px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  top: 0;

  &:hover {
    animation: ${(props) => (props.$shouldBounce ? bounce : "none")} 0.5s ease
      infinite; // Use $shouldBounce here
    background-color: #e8e8e8;
  }

  &:active {
    animation: ${pressIn} 0.5s ease;
  }
`;

const BackButtonImage = styled.img`
  width: 75px;
  height: 75px;
`;

// export default BackButtonComponent;
