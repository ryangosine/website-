import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import PageTransition from "./PageTransition";

// Slide-in/out from right
const variants = {
  initial: { x: "100%", opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: "100%", opacity: 0 },
};

const transitionConfig = { type: "tween", duration: 1.4, ease: "easeInOut" };

export default function LayoutWithAnimations() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Outlet />
    </PageTransition>
  );
}

const NebulaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/nebula wallpaper.jpg") center / cover no-repeat;
  z-index: 1;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;
