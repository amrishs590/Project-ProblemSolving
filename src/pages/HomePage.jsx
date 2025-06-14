import React, { useState } from "react";
import Step from "../components/Step";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";
import "./HomePage.css"; // Make sure to create this CSS file

const HomePage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="Holder">
      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="hero-content">
          <div className="hero-left">
            <Lottie
              animationData={codingAnimation}
              loop
              className="hero-animation"
            />
          </div>

          <div className="hero-right">
            <h2>Welcome to DSA Pathway</h2>
            <p>
              A curated journey to mastering Data Structures and Algorithms. <br /> <br />
              Embark on a thoughtfully structured path where each step brings
              clarity and confidence. DSA Pathway offers a refined learning
              experience through categorized problems, intuitive visual steps,
              and clean, well-crafted solutions.<br /> <br /> Whether you're laying the
              foundation or advancing your expertise, our platform transforms
              problem-solving into a focused and rewarding pursuit. Navigate
              complexity with simplicity — one concept, one challenge, one
              success at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="section learn">
        <Step />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="contact-heading">Contact Us</h2>

        {submitted && (
          <div className="success-message">
            ✅ Thank you! Your message has been sent.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
