import React, { useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";
import "./Contact.css";
import "./HomePage.css";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 3000);
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
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>
              <div>
                <label>Message</label>
                <textarea
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
