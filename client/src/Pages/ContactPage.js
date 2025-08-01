import { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newErrors.email = "Invalid email format.";
      }
    }
    if (!message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      formRef.current.reset();
      setErrors({});

      setTimeout(() => setSubmitted(false), 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrors({ general: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Header />
      <Main role="main">
        <Container aria-labelledby="contact-heading">
          <HeaderText id="contact-heading">Contact Me</HeaderText>
          <Subtext>Have a question or project in mind? Let’s chat!</Subtext>
          <StyledForm ref={formRef} onSubmit={sendEmail} noValidate>
            <FormField>
              <label htmlFor="name">Name</label>
              <StyledInput id="name" name="name" aria-required="true" />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </FormField>

            <FormField>
              <label htmlFor="email">Email</label>
              <StyledInput
                id="email"
                name="email"
                type="email"
                aria-required="true"
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormField>

            <FormField>
              <label htmlFor="message">Message</label>
              <StyledTextArea
                id="message"
                name="message"
                rows="5"
                aria-required="true"
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </FormField>

            {errors.general && <ErrorText>{errors.general}</ErrorText>}

            <StyledButton
              type="submit"
              disabled={loading || submitted}
              $submitted={submitted}
            >
              {loading ? (
                "Sending..."
              ) : submitted ? (
                <>
                  <Checkmark>✔</Checkmark> Sent!
                </>
              ) : (
                "Send Message"
              )}
            </StyledButton>
          </StyledForm>
        </Container>
      </Main>
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: #0f1115;
  min-height: 100vh;
  color: white;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  max-width: 600px;
  margin: 6rem auto;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const HeaderText = styled.h2`
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 1rem;
`;

const Subtext = styled.p`
  font-family: "Inter", sans-serif;
  color: #ccc;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    font-family: "Inter", sans-serif;
    color: #ddd;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #444;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: white;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #0cdcf7;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #444;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: white;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #0cdcf7;
  }
`;

const StyledButton = styled.button`
  padding: 0.85rem 1.5rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ $submitted }) =>
    $submitted &&
    `
    border-color: #00e676;
    color: #00e676;
    background-color: rgba(0, 230, 118, 0.1);
  `}

  &:hover:not(:disabled):not(:focus):not(:active) {
    background-color: white;
    color: black;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Checkmark = styled.span`
  font-size: 1.2rem;
  animation: pop 0.3s ease-in-out;

  @keyframes pop {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ErrorText = styled.p`
  color: #ff4f4f;
  font-size: 0.85rem;
  margin-top: 4px;
`;

export default ContactPage;
