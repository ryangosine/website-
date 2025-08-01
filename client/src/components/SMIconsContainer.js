import styled from "styled-components";
import LinkedInIcon from "./Icons/LinkedInIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import FaceBookIcon from "./Icons/FacebookIcon";
import GmailIcon from "./Icons/GmailIcon";
import XIcon from "./Icons/Xicon";

const SMIconsContainer = () => {
  return (
    <GlobalWrapper>
      <nav aria-label="Social media links">
        <IconList>
          <IconItem>
            <IconLink
              href="https://www.linkedin.com/in/ryangosine/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </IconLink>
          </IconItem>

          <IconItem>
            <IconLink
              href="https://github.com/ryangosine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GitHubIcon />
            </IconLink>
          </IconItem>

          <IconItem>
            <IconLink
              href="https://x.com/removedfromgame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              title="Twitter"
            >
              <XIcon />
            </IconLink>
          </IconItem>

          <IconItem>
            <IconLink
              href="https://www.facebook.com/removedfromgame"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              title="Facebook"
            >
              <FaceBookIcon />
            </IconLink>
          </IconItem>

          <IconItem>
            <IconLink
              href="mailto:ryanganeshgosine@gmail.com"
              rel="noopener noreferrer"
              aria-label="Send email to Ryan"
              title="Email"
            >
              <GmailIcon />
            </IconLink>
          </IconItem>
        </IconList>
      </nav>
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 10px;

  @media (max-width: 500px) {
    gap: 6px;
  }
`;

const IconItem = styled.li`
  display: flex;
`;

const IconLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(51, 51, 51, 0.2);
  border-radius: 8px;
  color: #666;
  transition: 0.3s;
  overflow: hidden;
  z-index: 1;

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
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    color: #fff;
    background: rgba(51, 51, 51, 0.4);
    transform: translateY(-2px);
  }

  svg {
    width: 30px;
    height: 30px;
    fill: currentColor;
    transition: 0.3s;
    z-index: 1;
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default SMIconsContainer;
