// MainContent.js
import React from "react";
import styled from "styled-components";
import TabPanel from "./TabPanel";

const MainContent = ({ value }) => {
  return (
    <ContentContainer>
      <TabPanel value={value} index={0}>
        <h2>About Me</h2>
        <p>This is the About Me section.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Resume</h2>
        <p>This is the Resume section.</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Credentials</h2>
        <p>This is the Credentials section.</p>
      </TabPanel>
    </ContentContainer>
  );
};

const ContentContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
`;

export default MainContent;
