import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setFeedbackMsg("");

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      setFeedbackMsg("❌ Name is required.");
      return;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setFeedbackMsg("❌ Please enter a valid email address.");
      return;
    }

    if (!message) {
      setFeedbackMsg("❌ Message is required.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFeedbackMsg("✅ Message sent successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        setFeedbackMsg("❌ Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      })
      .finally(() => setIsSending(false));
  };

  useEffect(() => {
    if (feedbackMsg) {
      const timeout = setTimeout(() => setFeedbackMsg(""), 4000);
      return () => clearTimeout(timeout);
    }
  }, [feedbackMsg]);

  return (
    <Container>
      <Header>Contact Me</Header>
      <Subtext>
        Have a question or project in mind? Send a message below.
      </Subtext>
      <Form ref={form} onSubmit={sendEmail} noValidate>
        <fieldset disabled={isSending} style={{ border: "none", padding: 0 }}>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            aria-required="true"
          />

          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-required="true"
          />

          <Label htmlFor="message">Your Message</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Let's talk about it..."
            rows="5"
            aria-required="true"
          />

          <Button type="submit">
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </fieldset>

        {feedbackMsg && <Feedback role="status">{feedbackMsg}</Feedback>}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1080px;
  width: 100%;

  margin: 6rem auto;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 4rem 1rem;
  }
`;

const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const Subtext = styled.p`
  color: #ccc;
  font-size: 1rem;
  margin-bottom: 2rem;
  font-family: "Inter", sans-serif;
`;

const Label = styled.label`
  text-align: left;
  font-size: 0.9rem;
  color: #ddd;
  font-family: "Inter", sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const Button = styled.button`
  padding: 0.85rem 1.5rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;

  &:hover {
    background-color: white;
    color: black;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Feedback = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  font-family: "Inter", sans-serif;
  color: #0cdcf7;
`;

export default ContactForm;
