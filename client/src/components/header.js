import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link1>link1 | </Link1>
      <Link2> link2 | </Link2>
      <Link3> link3</Link3>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Link1 = styled.div``;
const Link2 = styled.div``;
const Link3 = styled.div``;

export default Header;
