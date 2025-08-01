import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";

const ContactMeBox = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section aria-labelledby="contact-title">
      <BoxWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={!shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Title id="contact-title">Let’s work together</Title>
        <Text>
          I’m currently open to new opportunities and collaborations.
          <br /> Feel free to reach out and let’s build something great.
        </Text>
      </BoxWrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BoxWrapper = styled(motion.div)`
  background-color: #111;
  border: 2px solid #333;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 6rem auto;
  max-width: 800px;
  text-align: center;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 4rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.8rem, 6vw, 2.5rem);
  font-family: "Montserrat", sans-serif;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #d8f0fa, #84acf7, #719aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const Text = styled.p`
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-family: "Inter", sans-serif;
  line-height: 1.6;
  color: #eee;
`;

export default ContactMeBox;
