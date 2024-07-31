import React from "react";
import styled from "styled-components";
import Star from "./Star";

const StarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

const StarField = ({ starCount = 20 }) => {
  return (
    <StarContainer>
      {[...Array(starCount)].map((_, index) => (
        <Star key={index} />
      ))}
    </StarContainer>
  );
};

export default StarField;
