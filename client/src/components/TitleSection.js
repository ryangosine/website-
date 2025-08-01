import { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useInView } from "framer-motion";
import TextFade from "../Animations/TextFade";
import Spacer from "../components/Spacer";

const TitleSection = () => {
  const nameRef = useRef(null);
  const isNameInView = useInView(nameRef, { once: true });
  const [startSubheading, setStartSubheading] = useState(false);
  const [startSecondSubheading, setSecondSubHeading] = useState(false);

  const name = useMemo(() => "Ryan Gosine.".split(""), []);

  useEffect(() => {
    if (isNameInView) {
      const delay = name.length * 100 + 500;
      const timer = setTimeout(() => setStartSubheading(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isNameInView, name.length]);

  useEffect(() => {
    if (startSubheading) {
      const timer = setTimeout(() => setSecondSubHeading(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [startSubheading]);

  return (
    <>
      <SectionWrapper>
        <HiddenH1>Ryan Gosine</HiddenH1>

        <TextContainer aria-hidden="true">
          <AnimatePresence>
            {name.map((char, i) => (
              <AnimatedChar
                ref={i === 0 ? nameRef : null}
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

        <Subheading role="region" aria-live="polite">
          {startSubheading && (
            <TextFade direction="down" staggerChildren={0.1}>
              <Word
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
              >
                Web
              </Word>
              <Word
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6, delay: 1 }}
              >
                Developer
              </Word>
            </TextFade>
          )}

          {startSecondSubheading && (
            <TextFade direction="up" staggerChildren={0.1}>
              <Word
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6, delay: 0.5 }}
              >
                Problem
              </Word>
              <Word
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.6, delay: 1 }}
              >
                Solver
              </Word>
            </TextFade>
          )}
        </Subheading>
      </SectionWrapper>
      <Spacer size="6rem" mobileSize="4rem" />
    </>
  );
};

const SectionWrapper = styled.div`
  margin-top: 8vh;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 4vh;
  }
`;

const HiddenH1 = styled.h1`
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: clamp(2rem, 10vw, 8rem);
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(
    45deg,
    #d8f0fa,
    #c6e6f9,
    #aed1f1,
    #97bdfc,
    #84acf7,
    #719aed
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const AnimatedChar = styled(motion.span)`
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  background: inherit;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheading = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  margin-top: 2rem;
  gap: 1rem;
  padding: 0 1rem;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    text-align: center;
    gap: 10px;
  }
`;

const Word = styled(motion.span)`
  display: inline-block;
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin: 0 5px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 10px 0;
  }
`;

export default TitleSection;
