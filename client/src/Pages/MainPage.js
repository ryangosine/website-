//mainpage component

import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import AboutMeSection from "../components/AboutMeSection";
import SMIconsContainer from "../components/SMIconsContainer";
import { motion } from "framer-motion";
import Ryan from "../Assets/Ryan.svg";
import MySVG from "../Assets/testDesign.svg";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = useCallback(() => {
    const container = document.getElementById("side-two-container");
    const sections = container.querySelectorAll("section");
    const scrollPosition = container.scrollTop;

    if (scrollPosition < 50) {
      setActiveSection(null);
      return;
    }

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
        <ContentWrapper>
          <TextContainer>
            <Title src={Ryan} alt="Ryan" />
            <List>
              <ListItem
                $active={activeSection === "work-experience"}
                onClick={() => scrollToSection("work-experience")}
              >
                Work Experience
              </ListItem>
              <ListItem
                $active={activeSection === "project-experience"}
                onClick={() => scrollToSection("project-experience")}
              >
                Projects
              </ListItem>
            </List>
          </TextContainer>
        </ContentWrapper>
        <SMIconsWrapper>
          <SMIconsContainer />
        </SMIconsWrapper>
      </SideOneContainer>

      <SideTwoContainer id="side-two-container" variants={childVariants}>
        <SideTwoContent>
          <Image src={MySVG} alt="testImage" />
          <AboutMeSection />
        </SideTwoContent>
      </SideTwoContainer>
    </StyledMainPage>
  );
};

const SideTwoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px; // Adjust this value as needed
  margin: 0 auto;
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-right: 30px;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s ease;
  color: ${({ $active }) => ($active ? "#6082B6" : "#F0EAD6")};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  font-family: "Lato", sans-serif;
  &:hover {
    color: #6082b6;
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
  position: relative;
  height: 100vh;
  width: 33.33%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  height: 96vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const ContentWrapper = styled.div`
  // Wrap your main content (excluding social media buttons) in this
  padding: 20px;
  flex-grow: 1; // Allow this to grow and push buttons to bottom
  overflow-y: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const SMIconsWrapper = styled.div`
  position: sticky; // Make this stick to the bottom
  bottom: 0;
  background-color: inherit; // Match the container background
  padding: 10px 0;
  width: 100%;
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

const Image = styled.img`
  display: flex;
  margin-top: 50px;
`;
export default MainPage;
