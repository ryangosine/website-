import React from "react";
import styled from "styled-components";

const ArrowRightIcon = ({ className, isHovered }) => (
  <Wrapper isHovered={isHovered}>
    <StyledArrowIcon
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      width="20"
      height="20"
      fill="#C0C0C0"
      isHovered={isHovered}
    >
      <path
        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
        data-name="Right"
        fill="#c0c0c0"
        stroke="#c0c0c0"
        strokeWidth="0.5"
      />
    </StyledArrowIcon>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isHovered ? "translate(5px)" : "none")};
`;

const StyledArrowIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
  color: #c0c0c0;
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;
export default ArrowRightIcon;
