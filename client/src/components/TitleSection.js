import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useInView } from "framer-motion";
import TextFade from "../Animations/TextFade";

const TitleSection = () => {
  const nameRef = useRef(null);
  const isNameInView = useInView(nameRef, { once: true });
  const [startSubheading, setStartSubheading] = useState(false);
  const [startSecondSubheading, setSecondSubHeading] = useState(false);

  useEffect(() => {
    if (isNameInView) {
      const delay = "Ryan Gosine.".length * 100 + 500;
      const timer = setTimeout(() => setStartSubheading(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isNameInView]);

  useEffect(() => {
    if (startSubheading) {
      const timer = setTimeout(() => setSecondSubHeading(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [startSubheading]);

  return (
    <SectionWrapper>
      <TextContainer>
        <AnimatePresence>
          {"Ryan Gosine.".split("").map((char, i) => (
            <AnimatedChar
              ref={nameRef}
              key={i}
              initial={{ opacity: 0, x: -18 }}
              animate={isNameInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {char === " " ? "\u00A0" : char}
            </AnimatedChar>
          ))}
        </AnimatePresence>
      </TextContainer>

      <Subheading>
        {startSubheading && (
          <TextFade direction="down" staggerChildren={0.1}>
            <Word1
              initial={{ opacity: 0, y: -100 }} // Start from left
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
            >
              Web
            </Word1>
            <Word2
              initial={{ opacity: 0, y: -100 }} // Start from left
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ type: "spring", duration: 0.6, delay: 1 }}
            >
              Developer
            </Word2>
          </TextFade>
        )}

        {startSecondSubheading && (
          <TextFade direction="up" staggerChildren={0.1}>
            <Word3
              initial={{ opacity: 0, y: 100 }} // Start from right
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
            >
              Problem
            </Word3>
            <Word4
              initial={{ opacity: 0, y: 100 }} // Start from right
              animate={{ opacity: 1, y: 0 }} // Move to the center
              transition={{ type: "spring", duration: 0.6, delay: 1 }}
            >
              Solver
            </Word4>
          </TextFade>
        )}
      </Subheading>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  /* border: 3px solid red; */
  margin-top: 13vh;
`;

const TextContainer = styled.div`
  /* border: 2px solid white; */
  display: flex;
  justify-content: center;
  font-size: 12rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  letter-spacing: 2;
  --angle: 45deg;
  background: linear-gradient(
    var(--angle),
    #293352,
    #5d5d6f,
    #a27b89,
    #d3a286,
    #f0d8c3
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AnimatedChar = styled(motion.span)`
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  background: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* White glow/shadow around letters */
  /* text-shadow: 0px 3px 8px rgba(255, 255, 255, 0.4); */
`;

const Subheading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 60px;
  margin-top: 40px;
`;

const Word1 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;
`;
const Word2 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;
`;
const Word3 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;
`;
const Word4 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;
`;

export default TitleSection;

const Brackets = styled.div`
  /* border: 1px solid white; */
  display: flex;
  align-items: flex-end;
  font-size: 2rem;
  /* padding: 10px; */
  /* margin-right: 5px; */
`;
const Period = styled.div`
  font-size: 5rem; // Similar to the curly braces, but slightly smaller
  border: 1px solid skyblue;
  display: inline-block;
  align-self: flex-end;
  padding-top: 10px;

  /* padding: 0 10px; */
`;

const Subheading1 = styled.h2`
  /* border: 1px solid green; */
  padding: 10px;
  display: flex;

  gap: 10px;
`;
const Divider = styled.h1`
  padding: 10px;
`;
const Subheading2 = styled.h2`
  padding: 10px;
`;
