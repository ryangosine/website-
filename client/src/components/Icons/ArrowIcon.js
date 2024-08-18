// ArrowIcon.js
import React from "react";
import styled from "styled-components";

const ArrowIcon = ({ className, isHovered }) => (
  <StyledArrowIcon
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="#C0C0C0"
    viewBox="0 0 24 24"
    isHovered={isHovered}
  >
    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
  </StyledArrowIcon>
);

const StyledArrowIcon = styled.svg`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isHovered ? "translate(5px, -5px)" : "none")};
  display: inline-block;
  vertical-align: middle;
`;

export default ArrowIcon;
