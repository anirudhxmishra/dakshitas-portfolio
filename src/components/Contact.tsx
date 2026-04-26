"use client";

import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from "@emailjs/browser";

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === '';
    const isEmailEmpty = email.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    if (isNameEmpty || isEmailEmpty || isMessageEmpty) return;
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_0iajfnf",     // ✅ your service ID
        "template_6pzp7at",    // ✅ your template ID
        form.current,
        "jvXSa5p64tRmk9rAX"    // ✅ your public key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");

          // Reset form
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send ❌");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Looking for a therapist, researcher, or program designer to collaborate with? Let's connect!
          </p>

          <Box
            ref={form}
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className='contact-form'
          >

            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                name="name"   // ⚠️ must match template
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
              />

              <TextField
                required
                label="Email / Phone"
                name="email"  // ⚠️ must match template
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone" : ""}
                fullWidth
              />
            </div>

            <TextField
              required
              label="Message"
              name="message"   // ⚠️ must match template
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </Button>

          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;