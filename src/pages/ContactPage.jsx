import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import emailjs from "emailjs-com";
import contactAnimation from "../assets/contact.json";
import "./Contact.css";
import "./HomePage.css";

const ContactPage = () => {
  useEffect(() => {
    localStorage.removeItem("openStepIndex");
  }, []);
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6j66ioo", // ✅ Your actual Service ID
        "template_ygghbwh", // 🔁 Replace this with your real Template ID from EmailJS
        form.current,
        "L9rTFCNKE3G3ZFbZX" // 🔁 Replace with your Public Key (EmailJS → Account → API Keys)
      )
      .then(
        (result) => {
          setSubmitted(true);
          e.target.reset();
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="Holder">
      <section id="contact" className="section contact-wrapper">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We're here to help! Reach out to us with any questions or concerns.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-box animation-box">
            <Lottie
              animationData={contactAnimation}
              loop
              className="contact-animation"
            />
          </div>

          <div className="contact-box">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent.
              </div>
            )}
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
