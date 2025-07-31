import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/header";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

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

    // Basic validation
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
        "your_service_id", // Replace with your actual service ID
        "your_template_id", // Replace with your actual template ID
        form.current,
        "your_public_key" // Replace with your actual public key
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
    <GlobalWrapper>
      <Header />
      <Content>
        <h2>Shoot me an email!</h2>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Your Name" />
          <Input type="email" name="email" placeholder="Your Email" />
          <TextArea name="message" placeholder="Your Message" rows="5" />
          {formError && <ErrorText>{formError}</ErrorText>}
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Form>
        <StyledNavLink to="/">← Back to Home</StyledNavLink>
      </Content>
      <Footer />
    </GlobalWrapper>
  );
};

// Styled components
const GlobalWrapper = styled.div``;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  padding: 8px 16px;
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.95rem;
  margin: -0.5rem 0 0;
`;

export default ContactPage;
