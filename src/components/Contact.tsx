import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "../assets/styles/Contact.scss";

const EMAILJS_SERVICE_ID  = "service_0iajfnf";
const EMAILJS_TEMPLATE_ID = "template_6pzp7at";
const EMAILJS_PUBLIC_KEY  = "jvXSa5p64tRmk9rAX";

// Initialise once so the public key is always registered
emailjs.init(EMAILJS_PUBLIC_KEY);

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName]       = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const [errDetail, setErrDetail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;
    if (!formRef.current) return;

    setStatus("sending");
    setErrDetail("");
    try {
      // sendForm reads input name="" attributes — matches template vars directly
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      console.log("EmailJS success:", result.text);
      setStatus("success");
      setName(""); setContact(""); setMessage("");
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setErrDetail(err?.text || err?.message || "Unknown error");
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="contact-inner">

        {/* Left panel */}
        <div className="contact-left">
          <span className="contact-eyebrow">Get in touch</span>
          <h2 className="contact-heading">Let&apos;s work<br />together</h2>
          <p className="contact-sub">
            Looking for a therapist, researcher, or program designer to collaborate with? I&apos;d love to hear from you.
          </p>

          <div className="contact-details">
            <a href="mailto:dakshitayadav66@gmail.com" className="detail-row">
              <span className="detail-icon"><EmailIcon fontSize="small" /></span>
              <span>dakshitayadav66@gmail.com</span>
            </a>
            <a href="tel:+919259837238" className="detail-row">
              <span className="detail-icon"><PhoneIcon fontSize="small" /></span>
              <span>+91 92598 37238</span>
            </a>
            <div className="detail-row no-link">
              <span className="detail-icon"><LocationOnIcon fontSize="small" /></span>
              <span>Delhi, India</span>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/dakshita-yadav-7281251b8/"
              target="_blank" rel="noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:dakshitayadav66@gmail.com"
              className="social-btn"
              aria-label="Email"
            >
              <EmailIcon fontSize="small" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right panel / form */}
        <div className="contact-right">
          <div className="form-card">
            {status === "success" ? (
              <div className="form-feedback success">
                <CheckCircleOutlineIcon sx={{ fontSize: "2.8rem" }} />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button className="btn-reset" onClick={() => setStatus("idle")}>
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Send a message</h3>

                <div className="field-row">
                  <div className="field-group">
                    <label htmlFor="cf-name">Your Name <span className="req">*</span></label>
                    <input
                      id="cf-name"
                      name="from_name"
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="cf-contact">Email / Phone <span className="req">*</span></label>
                    <input
                      id="cf-contact"
                      name="reply_to"
                      type="text"
                      placeholder="email or phone number"
                      value={contact}
                      onChange={e => setContact(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="cf-message">Message <span className="req">*</span></label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={6}
                    placeholder="Tell me how I can help you…"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>

                {status === "error" && (
                  <div className="form-feedback error inline">
                    <ErrorOutlineIcon fontSize="small" />
                    <span>
                      {errDetail
                        ? `Error: ${errDetail}. Please try again or email directly.`
                        : "Something went wrong. Please try again or email directly."}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <span className="spinner" />
                  ) : (
                    <>Send message <SendIcon fontSize="small" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;