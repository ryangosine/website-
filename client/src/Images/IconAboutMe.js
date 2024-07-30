import React from "react";
import styled from "styled-components";

const StyledIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 250px; /* Adjust size as needed */
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";

  /* Apply font variation settings */
  font-variation-settings: "FILL" ${(props) => props.fill || 0},
    "wght" ${(props) => props.weight || 400},
    "GRAD" ${(props) => props.grade || 0},
    "opsz" ${(props) => props.opticalSize || 48};
`;

const IconAboutMe = ({ name, ...props }) => {
  return <StyledIcon {...props}>{name}</StyledIcon>;
};

export default IconAboutMe;
