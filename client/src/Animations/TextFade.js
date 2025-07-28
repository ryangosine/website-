import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextFade = ({
  direction = "down",
  children,
  className = "",
  staggerChildren = 0.1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 18 : direction === "down" ? -18 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-block",
              marginRight: "10px",
              whiteSpace: "nowrap",
            }}
          >
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
};

export default TextFade;
