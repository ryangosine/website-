import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const SliderTransition = ({ isAnimating }) => {
  return (
    <AnimatePresence>
      {isAnimating && (
        <Loader
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
};

const Loader = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: #252525;
`;

export default SliderTransition;
