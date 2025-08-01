import styled from "styled-components";
import Selfie from "../Assets/website_photo_self.svg";
import Spacer from "../components/Spacer";

const IntroSection = () => {
  return (
    <>
      <Section id="intro-section" aria-labelledby="intro-heading">
        <ProfileWrap>
          <ProfileImage
            src={Selfie}
            alt="Portrait of Ryan, the web developer"
            loading="lazy"
          />
        </ProfileWrap>

        <BlurbContainer>
          <Heading id="intro-heading">Meet Ryan</Heading>
          <Blurb as="article">
            <p>Hey everyone!</p>

            <p>
              I’m a full-stack web developer trained at Concordia University’s
              Web Development Program. I build clean, functional websites and
              applications with a focus on design, readability, and
              accessibility. I’m eager to keep learning and grow with every
              project!
            </p>

            <p>
              My background as a Behaviour Specialist with the English Montreal
              School Board taught me to solve problems creatively and think
              outside the box. I now apply those skills to delivering smart,
              effective digital solutions.
            </p>
          </Blurb>
        </BlurbContainer>
      </Section>
      <Spacer size="6rem" mobileSize="4rem" />
    </>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);

  padding: clamp(2rem, 6vw, 4rem) 0;
  margin: 0 auto;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: clamp(1.5rem, 6vw, 3rem) 1rem;
  }
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: clamp(220px, 32vw, 360px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);

  /* Optional subtle ring on hover for desktops */
  @media (hover: hover) {
    &:hover {
      outline: 2px solid rgba(255, 255, 255, 0.2);
      outline-offset: 4px;
    }
  }
`;

const BlurbContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-family: "Montserrat", sans-serif;
  color: white;
  margin: 0 0 0.75rem 0;
`;

const Blurb = styled.div`
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 300;
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  line-height: 1.7;
  text-align: left;

  p {
    margin: 0 0 1rem 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export default IntroSection;
