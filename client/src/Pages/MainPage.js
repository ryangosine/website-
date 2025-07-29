//mainpage component

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import IntroSection from "../components/IntroSection";
import SideBar from "../components/SideBar";
import TitleSection from "../components/TitleSection";
import Quote from "../components/Quote";
import IconsContainer from "../components/IconsContainer";
import ProjectExperience from "../components/ProjectExperience";
import WorkExperience from "../components/WorkExperience";
import MobileHeader from "../components/MobileHeader";

const MainPage = () => {
  return (
    <MainWrapper>
      <SideBar />
      <ContentWrapper>
        <MobileHeader />
        <TitleSection />
        <IntroSection />
        <WorkExperience />
        <Quote />
        <ProjectExperience />
        <IconsContainer />
        {/* <div style={{ height: "1200px", marginTop: "2rem" }}>
          Simulate lots of scrolling content!
        </div> */}
      </ContentWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-left: 1rem;
  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
export default MainPage;

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
// import AboutMeSection from "../components/AboutMeSection";
// import SMIconsContainer from "../components/SMIconsContainer";
// import { motion } from "framer-motion";
// // import Ryan from "../Assets/Ryan.svg";
// import MySVG from "../Assets/testDesign.svg";
// import CustomScrollbar from "../components/CustomScrollBar";
// import ResumeLink from "../components/ResumeLink";
// import LinkToProjectPage from "../components/LinkToProjPage";

// const MainPage = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   const [pullDistance, setPullDistance] = useState(null);
//   const sideTwoContainerRef = useRef(null);
//   const isMobile = window.innerWidth <= 768;

//   const handleScroll = useCallback(() => {
//     const container = isMobile ? window : sideTwoContainerRef.current;
//     const scrollPosition = isMobile ? window.scrollY : container.scrollTop;
//     const sections = document.querySelectorAll("section, #intro-section");

//     if (scrollPosition < 50) {
//       setActiveSection(null);
//       return;
//     }

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop - 100;
//       const sectionBottom = sectionTop + section.offsetHeight;

//       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//         setActiveSection(section.id);
//       }
//     });
//   }, [isMobile]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const yOffset = -60;
//       if (isMobile) {
//         const y =
//           section.getBoundingClientRect().top + window.scrollY + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       } else {
//         sideTwoContainerRef.current.scrollTo({
//           top: section.offsetTop + yOffset,
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   const handleTouchStart = (e) => {
//     if (isMobile && window.scrollY === 0) {
//       setPullDistance(0);
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (isMobile && window.scrollY === 0) {
//       const touch = e.touches[0];
//       const pullDistance = touch.pageY - e.target.getBoundingClientRect().top;
//       if (pullDistance > 0 && pullDistance <= 100) {
//         setPullDistance(pullDistance);
//       }
//     }
//   };

//   const handleTouchEnd = () => {
//     if (pullDistance > 70) {
//       // Perform refresh action here
//       console.log("Refreshing Data...");
//     }
//     setPullDistance(0);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

// <MobileContainer
//   onTouchStart={isMobile ? handleTouchStart : undefined}
//   onTouchMove={isMobile ? handleTouchMove : undefined}
//   onTouchEnd={isMobile ? handleTouchEnd : undefined}
// >
//   <StyledMainPage
//     variants={containerVariants}
//     initial="hidden"
//     animate="visible"
//   >
//     <SideOneContainer variants={childVariants}>
//       <ContentWrapper>
//         <TextContainer>
//           <Title>Ryan Gosine</Title>
//           <List>
//             <ListItem
//               $active={activeSection === "intro-section"}
//               onClick={() => scrollToSection("intro-section")}
//             >
//               About Me
//             </ListItem>
//             <ListItem
//               $active={activeSection === "work-experience"}
//               onClick={() => scrollToSection("work-experience")}
//             >
//               Work Experience
//             </ListItem>
//             <ListItem
//               $active={activeSection === "project-experience"}
//               onClick={() => scrollToSection("project-experience")}
//             >
//               Projects
//             </ListItem>
//           </List>
//         </TextContainer>
//       </ContentWrapper>
//       <ResumeLink />
//       <LinkToProjectPage />
//       <SMIconsWrapper>
//         <SMIconsContainer />
//       </SMIconsWrapper>
//     </SideOneContainer>

//     <SideTwoContainer
//       id="side-two-container"
//       variants={childVariants}
//       ref={sideTwoContainerRef}
//       onTouchStart={isMobile ? handleTouchStart : undefined}
//       onTouchMove={isMobile ? handleTouchMove : undefined}
//       onTouchEnd={isMobile ? handleTouchEnd : undefined}
//     >
//       <PullToRefreshIndicator pullDistance={pullDistance}>
//         {pullDistance > 70 ? "Release to refresh" : "Pull to refresh"}
//       </PullToRefreshIndicator>
//       <SideTwoContent>
//         <Image src={MySVG} alt="testImage" />
//         <AboutMeSection />
//       </SideTwoContent>
//       <CustomScrollbar containerRef={sideTwoContainerRef} />
//     </SideTwoContainer>
//   </StyledMainPage>
// </MobileContainer>

// const PullToRefreshIndicator = styled.div`
//   position: absolute;
//   top: ${(props) => -50 + props.pullDistance}px;
//   left: 0;
//   width: 100%;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0.1);
//   transition: top 0.3s;

//   @media (max-width: 768px) {
//     position: fixed;
//     z-index: 1001; // Ensure it's above SideOneContainer
//   }
// `;

// const MobileContainer = styled.div`
//   @media (max-width: 768px) {
//     height: 100%;
//     min-height: 100vh;
//     overflow-y: auto;
//     -webkit-overflow-scrolling: touch;
//     position: relative;
//   }
// `;
// const SideTwoContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;

//   @media (max-width: 768px) {
//     min-height: calc(100vh - 60px); // Adjust based on SideOneContainer height
//   }
// `;

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin-right: 30px;

//   @media (max-width: 768px) {
//     display: flex;
//     justify-content: space-around;
//     margin-right: 0;
//     width: 100%;
//   }
// `;

// const ListItem = styled.li`
//   cursor: pointer;
//   padding: 10px;
//   transition: color 0.3s ease;
//   color: ${({ $active }) => ($active ? "transparent" : "#F0EAD6")};
//   background: ${({ $active }) =>
//     $active ? "linear-gradient(45deg, #d68fd7, #ff6f61)" : "transparent"};

//   background-clip: ${({ $active }) => ($active ? "text" : "none")};
//   -webkit-background-clip: ${({ $active }) => ($active ? "text" : "none")};
//   -webkit-text-fill-color: ${({ $active }) =>
//     $active ? "transparent" : "inherit"};

//   &:hover {
//     color: transparent;
//     background: linear-gradient(45deg, #d68fd7, #ff6f61);
//     background-clip: text;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 5px;
//   }
// `;

// const StyledMainPage = styled(motion.div)`
//   display: flex;
//   height: 100vh;
//   overflow: hidden;
//   padding: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     height: auto;
//     min-height: 100vh;
//     overflow-y: auto; // Change to auto instead of visible
//     padding: 10px;
//   }
// `;

// const SideOneContainer = styled(motion.div)`
//   position: relative;
//   width: 20.33%;
//   display: flex;
//   padding: 20px;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 96vh;

//   @media (max-width: 768px) {
//     position: sticky; // Changed from fixed to sticky
//     top: 0;
//     width: 100%;
//     height: auto;
//     padding: 10px;
//     background-color: rgba(0, 0, 0, 0.8);
//     z-index: 1000;
//   }
// `;

// const ContentWrapper = styled.div`
//   // Wrap your main content (excluding social media buttons) in this
//   padding: 20px;
//   flex-grow: 1; // Allow this to grow and push buttons to bottom
//   overflow-y: auto;
//   /* Hide scrollbar for Chrome, Safari and Opera */
//   /* Optional: Style the scrollbar for WebKit browsers (Chrome, Safari, etc.) */
// `;

// const SMIconsWrapper = styled.div`
//   position: sticky; // Make this stick to the bottom
//   bottom: 0;
//   background-color: inherit; // Match the container background
//   padding: 10px 0;
//   width: 100%;
// `;

// const SideTwoContainer = styled(motion.div)`
//   width: 79.67%;
//   height: 100vh;
//   position: relative;
//   overflow-y: scroll;
//   scrollbar-width: none;
//   -ms-overflow-style: none;

//   &::-webkit-scrollbar {
//     display: none;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     height: auto;
//     min-height: calc(100vh - 60px);
//     overflow-y: visible;
//     position: relative; // Change to relative instead of static
//   }
// `;

// const Title = styled.h1`
//   font-size: 3.5rem;
//   font-family: "Edo SZ", sans-serif;
//   font-optical-sizing: auto;
//   font-style: normal;
//   letter-spacing: 3px;

//   background: linear-gradient(
//     45deg,
//     #9b59b6,
//     #e74c3c
//   ); /* Purple to Red gradient */
//   -webkit-background-clip: text; /* Clip the background to the text */
//   -webkit-text-fill-color: transparent; /* Make the text color transparent */
// `;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   padding: 20px;
//   margin-left: 10px;

//   @media (max-width: 768px) {
//     margin-left: 0;
//     padding: 10px;
//   }
// `;

// const Image = styled.img`
//   display: flex;
//   margin-top: 50px;
// `;
