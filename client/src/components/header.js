import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const onContactPage = location.pathname === "/contact";

  return (
    <HeaderWrapper $onContactPage={onContactPage}>
      {onContactPage ? (
        <ButtonLink to="/" aria-label="Go back to homepage">
          ← Back
        </ButtonLink>
      ) : (
        <ButtonLink to="/contact" aria-label="Go to contact page">
          Contact
        </ButtonLink>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ $onContactPage }) =>
    $onContactPage ? "flex-start" : "flex-end"};
  padding: 1rem 2rem;
  width: 100%;
  background: transparent;
  color: white;
  z-index: 999;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ButtonLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.4rem;
  background-color: transparent;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: clamp(0.9rem, 3.5vw, 1rem);
  border: 2px solid white;
  border-radius: 999px;
  text-decoration: none;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 105, 180, 0.3),
      rgba(147, 112, 219, 0.3)
    );
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 0;
    border-radius: 999px;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    color: black;
    background-color: white;
    transform: translateY(-2px);
  }

  span {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export default Header;
