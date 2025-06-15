import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="Holder">
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
              A curated journey to mastering Data Structures and Algorithms.
              <br />
              <br />
              Embark on a thoughtfully structured path where each step brings
              clarity and confidence. DSA Pathway offers a refined learning
              experience through categorized problems, intuitive visual steps,
              and clean, well-crafted solutions.
              <br />
              <br />
              Whether you're laying the foundation or advancing your expertise,
              our platform transforms problem-solving into a focused and
              rewarding pursuit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

