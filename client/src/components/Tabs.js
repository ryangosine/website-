import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tabs = ({ value, handleChange }) => {
  return (
    <TabsContainer>
      <TabButton isActive={value === 0} onClick={() => handleChange(0)}>
        About Me
      </TabButton>
      <TabButton isActive={value === 1} onClick={() => handleChange(1)}>
        Resume
      </TabButton>
      <TabButton isActive={value === 2} onClick={() => handleChange(2)}>
        Credentials
      </TabButton>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#260042" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#260042")};
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid #260042" : "2px solid transparent"};
  transition: all 0.3s ease;

  &:hover {
    background-color: #260042;
    color: #fff;
  }
`;

export default Tabs;
