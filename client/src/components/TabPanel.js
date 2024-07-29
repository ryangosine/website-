import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TabPanel = ({ children, value, index }) => {
  return (
    <PanelContainer role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </PanelContainer>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const PanelContainer = styled.div`
  padding: 20px;
`;

export default TabPanel;
