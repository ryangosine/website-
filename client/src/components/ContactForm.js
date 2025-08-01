import { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1p6rm9p",
        "template_lymxoua",
        form.current,
        "jIB_akGKjqDkK0fOE"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.error("EmailJS error:", error);
      });

    e.target.reset();
  };

  return (
    <Container>
      <Header>Contact Me</Header>
      <Subtext>
        Have a question or project in mind? Send a message below.
      </Subtext>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" rows="5" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Input = styled.input`
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
`;

export default ContactForm;
