import React from "react";
import styled from "styled-components";

const toolColors = {
  JavaScript: "#f0db4f",
  React: "#61dafb",
  Node: "#68a063",
  Express: "#259dff",
  PostgreSQL: "#336791",
  HTML: "#e34c26",
  CSS: "#264de4",
  MongoDB: "#589636",
  Redux: "#764abc",
  // Add more technologies and their corresponding colors as needed
};

const ToolButton = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin: 0 5px 5px 0;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  background-color: ${(props) => toolColors[props.tool] || "#ddd"};
`;

const ProjectTools = ({ tools }) => {
  console.log("Tools", tools);
  return (
    <ToolsContainer>
      {tools.map((tool, index) => (
        <ToolButton key={index} tool={tool}>
          {tool}
        </ToolButton>
      ))}
    </ToolsContainer>
  );
};

const ToolsContainer = styled.div`
  margin-top: 10px;
`;

export default ProjectTools;
