import styled from "styled-components";
import workExperienceData from "../workEXP.json";

const WorkExperience = () => {
  return (
    <Section role="region" aria-labelledby="work-experience-heading">
      <Title id="work-experience-heading">Current Client(s)</Title>
      <CardRow>
        {workExperienceData.map((job) => (
          <CardLink
            key={job.id}
            href={job.companyUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Learn more about ${job.company}`}
          >
            <Placeholder>{job.company}</Placeholder>
            <TextOverlay>
              <JobTitle>{job.jobTitle}</JobTitle>
              <Details>
                {job.description.split("\n").map((line, idx) => (
                  <p key={idx}>{line.trim() || "\u00A0"}</p>
                ))}
              </Details>
              {job.companyUrl && (
                <ActionButton
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </ActionButton>
              )}
            </TextOverlay>
          </CardLink>
        ))}
      </CardRow>
    </Section>
  );
};

const darkMauve = "#874C62";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

const Title = styled.h3`
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(45deg, #d8f0fa, #84acf7, #719aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const CardLink = styled.div`
  position: relative;
  width: clamp(280px, 90vw, 500px);
  height: 300px;
  background-color: black;
  border: 4px solid ${darkMauve};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  display: block;
  transition: background-color 0.5s ease, border-color 0.5s ease;

  &:hover {
    background-color: ${darkMauve};
    border-color: ${darkMauve};
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity 0.5s ease;
  z-index: 1;
  font-family: "Montserrat", sans-serif;

  ${CardLink}:hover & {
    opacity: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.5s ease;
  color: white;
  z-index: 2;

  ${CardLink}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    position: relative;
    opacity: 1;
    background-color: ${darkMauve};
  }
`;

const JobTitle = styled.h4`
  margin: 0;
  font-size: 1.4em;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Details = styled.div`
  margin-top: 0.5rem;
  line-height: 1.5;
  overflow-y: auto;
  max-height: 120px;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    max-height: none;
  }
`;

const ActionButton = styled.a`
  padding: 0.6rem 1.4rem;
  margin-top: auto;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  border-radius: 999px;
  align-self: flex-start;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 3px;
  }
`;

export default WorkExperience;
