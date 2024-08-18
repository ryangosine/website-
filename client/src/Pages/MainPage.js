//mainpage component

import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import AboutMeSection from "../components/AboutMeSection";
import SMIconsContainer from "../components/SMIconsContainer";
import { motion } from "framer-motion";
import Ryan from "../Assets/Ryan.svg";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = useCallback(() => {
    const container = document.getElementById("side-two-container");
    const sections = container.querySelectorAll("section");
    const scrollPosition = container.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop - 50 &&
        scrollPosition < sectionTop + sectionHeight - 50
      ) {
        setActiveSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById("side-two-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const container = document.getElementById("side-two-container");
    const section = document.getElementById(sectionId);
    if (container && section) {
      container.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <StyledMainPage
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SideOneContainer variants={childVariants}>
        <TextContainer>
          <Title src={Ryan} alt="Ryan" />
          <List>
            <ListItem
              active={activeSection === "work-experience"}
              onClick={() => scrollToSection("work-experience")}
            >
              Work Experience
            </ListItem>
            <ListItem
              active={activeSection === "project-experience"}
              onClick={() => scrollToSection("project-experience")}
            >
              Projects
            </ListItem>
          </List>
        </TextContainer>
        <SMIconsContainer />
      </SideOneContainer>
      <SideTwoContainer id="side-two-container" variants={childVariants}>
        <AboutMeSection />
      </SideTwoContainer>
    </StyledMainPage>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-right: 30px;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s ease;
  color: ${({ active }) =>
    active ? "#4CAF50" : "#F0EAD6"}; // Change colors as needed
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    color: #4caf50;
  }
`;

const StyledMainPage = styled(motion.div)`
  display: flex;
  height: 100vh;
  overflow: hidden;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const SideOneContainer = styled(motion.div)`
  width: 33.33%;
  display: flex;
  padding: 20px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  height: 96vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const SideTwoContainer = styled(motion.div)`
  width: 66.67%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow-y: visible;
  }
`;

const Title = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px; // Add some space between the titles

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;
export default MainPage;
