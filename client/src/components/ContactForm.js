import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1p6rm9p", // Replace with your actual EmailJS service ID
        "template_lymxoua", // Replace with your actual EmailJS template ID
        form.current,
        "jIB_akGKjqDkK0fOE" // Replace with your EmailJS public key
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
    <Form ref={form} onSubmit={sendEmail}>
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <TextArea name="message" placeholder="Your Message" rows="5" required />
      <Button type="submit">Send Message</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #0077ff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005edb;
  }
`;

export default ContactForm;
