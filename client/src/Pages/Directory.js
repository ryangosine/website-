import React from "react";
import styled from "styled-components";
import IconAboutMe from "../Images/IconAboutMe";

const Directory = () => {
  return (
    <DirectoryContainer>
      <IconAboutMe name="info" fill={0} weight={100} />
    </DirectoryContainer>
  );
};

const DirectoryContainer = styled.div``;

export default Directory;
