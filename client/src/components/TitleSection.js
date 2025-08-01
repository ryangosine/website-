import { useEffect, useRef, useState } from "react";
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
  margin-top: 13vh;

  @media (max-width: 768px) {
    margin-top: 8vh;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 2;
  --angle: 45deg;
  background: linear-gradient(
    var(--angle),
    #d8f0fa,
    #c6e6f9,
    #aed1f1,
    #97bdfc,
    #84acf7,
    #719aed
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 4rem;
    padding: 0 10px;
  }
`;

const AnimatedChar = styled(motion.span)`
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  background: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheading = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  padding: 0 60px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    text-align: center;
    gap: 10px;
  }
`;

const Word1 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 10px 0;
  }
`;
const Word2 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 10px 0;
  }
`;
const Word3 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 10px 0;
  }
`;
const Word4 = styled(motion.span)`
  display: inline-block;
  font-size: 3.5rem;
  margin: 0 5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 10px 0;
  }
`;

export default TitleSection;
