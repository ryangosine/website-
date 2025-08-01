import styled from "styled-components";
import Selfie from "../Assets/website_photo_self.svg";

const IntroSection = () => {
  return (
    <Section id="intro-section" aria-labelledby="intro-heading">
      <ProfileImage
        src={Selfie}
        alt="Portrait of Ryan, the web developer"
        loading="lazy"
      />
      <BlurbContainer>
        <Heading id="intro-heading">Meet Ryan</Heading>
        <Blurb as="article">
          <p>Hey! I'm Ryan. I'm a web developer!</p>

          <p>
            I graduated from the Concordia University Full-Stack Web Development
            Program that specialized in the key modern fundamentals of designing
            and building websites and applications. My program focused on
            learning both Front-End and Back-End development to ensure a strong
            foundation in programming. I'm very passionate about building web
            applications and eager to learn, work and develop and expand my
            current skills and knowledge. Every day is a new experience!
          </p>

          <p>
            Prior to this I worked in schools as a Behaviour Specialist and
            community problem solver. I think that this experience has really
            helped me cultivate my ability to think outside the box, analyze
            complex problems, and deliver effective solutions to meet daily
            challenges. I loved my work, but am looking forward to new
            experiences in my new love of programming!
          </p>
        </Blurb>
      </BlurbContainer>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40vh;
  margin-bottom: 2.5rem;
  padding: 4rem 0 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;
    margin-bottom: 1.25rem;
    padding: 2rem 0 1rem;
  }
`;

const ProfileImage = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 0 0 2rem 0;
  }
`;

const BlurbContainer = styled.div`
  max-width: 600px;
  padding-top: 2.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 1.5rem;
  }
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-family: "Montserrat", sans-serif;
  color: white;
  margin-bottom: 1.5rem;
`;

const Blurb = styled.div`
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 300;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  line-height: 1.6;
  text-align: left;

  p {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 768px) {
    line-height: 1.5;
  }
`;

export default IntroSection;
