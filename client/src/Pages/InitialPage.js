import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import DiamondTransition from "../components/DiamondTransition";

const InitialPage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => navigate("/main"), 1000); // Adjust timing as needed
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <AnimatePresence>
          {!isTransitioning && (
            <StylizedButton
              onClick={handleClick}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Enter
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
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #45a049;
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  }
`;

export default InitialPage;
