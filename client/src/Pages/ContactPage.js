import { useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setFormError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_1p6rm9p", // ✅ your actual service ID
        "template_lymxoua", // ✅ your actual template ID
        form.current,
        "jIB_akGKjqDkK0fOE" // ✅ your actual public key
      );
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Header />
      <Container>
        <HeaderText>Contact Me</HeaderText>
        <Subtext>Have a question or project in mind? Let’s chat!</Subtext>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <StyledInput type="text" name="name" placeholder="Your Name" />
          <StyledInput type="email" name="email" placeholder="Your E-mail" />
          <StyledTextArea name="message" placeholder="Your Message" rows="5" />
          {formError && <ErrorText>{formError}</ErrorText>}
          <StyledButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </StyledButton>
        </StyledForm>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: #0f1115;
  min-height: 100vh;
  color: white;
`;

const Container = styled.div`
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

const StyledInput = styled.input`
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

  &:hover:not(:disabled) {
    background-color: white;
    color: black;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #ff4f4f;
  font-size: 0.95rem;
  margin: -0.5rem 0 0;
`;

export default ContactPage;
