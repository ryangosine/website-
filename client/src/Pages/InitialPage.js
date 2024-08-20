import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import DiamondTransition from "../components/DiamondTransition";

const InitialPage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => navigate("/main"), 1000); // Adjust timing as needed
    }, 200); // Total duration of button animation
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow:
        "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 0 #3d8b41, 0 10px 0 #357a38",
      y: 0,
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 15px 25px rgba(0, 0, 0, 0.3), 0 6px 0 #3d8b41, 0 10px 0 #357a38",
      y: -5,
    },
    click: {
      scale: 0.95,
      boxShadow:
        "0 5px 10px rgba(0, 0, 0, 0.2), 0 3px 0 #3d8b41, 0 5px 0 #357a38",
      y: 5,
      transition: {
        duration: 0.1,
      },
    },
    release: {
      scale: 1,
      boxShadow:
        "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 0 #3d8b41, 0 10px 0 #357a38",
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <AnimatePresence>
          {!isTransitioning && (
            <StylizedButton
              onClick={handleClick}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="click"
              animate="release"
              exit={{ opacity: 0 }}
            >
              <ButtonText>Enter</ButtonText>
            </StylizedButton>
          )}
        </AnimatePresence>
      </ContentWrapper>
      <DiamondTransition isActive={isTransitioning} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to right, #434343 0%, black 100%);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const StylizedButton = styled(motion.button)`
  padding: 20px 40px;
  font-size: 24px;
  background: linear-gradient(145deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  outline: none;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: all 0.5s;
  }

  &:hover:before {
    left: 100%;
  }
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
`;

export default InitialPage;
