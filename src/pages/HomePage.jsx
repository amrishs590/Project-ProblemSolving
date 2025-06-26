import React, { useEffect } from "react";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";
import "./HomePage.css";

const HomePage = () => {
  useEffect(() => {
    localStorage.removeItem("openStepIndex");
  }, []);
  
  return (
    <>
      <div className="homepage-entire-section">
        <section className="homepage-section">
          <div className="homepage-container">
            <div className="homepage-left">
              <h1>Master DSA with Clarity</h1>
              <p>
                Welcome to <strong>DSA Pathway</strong> — a thoughtfully
                structured platform for learning Data Structures and Algorithms.
              </p>

              <p>
                Whether you're a beginner or preparing for interviews, explore
                categorized problems, intuitive learning paths, and clean
                solutions.
              </p>

              <p>
                Strengthen your concepts step-by-step, from Arrays to Graphs,
                with real coding challenges.
              </p>

              <p>
                Start your journey today and become confident in
                problem-solving!
              </p>

              <div className="homepage-buttons">
                <button
                  className="btn-primary"
                  onClick={() => (window.location.href = "/learn")}
                >
                  Start Learning
                </button>
                <button
                  className="btn-outline"
                  onClick={() => {
                    const roadmap = document.getElementById("roadmap-section");
                    if (roadmap) {
                      roadmap.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Roadmap
                </button>
              </div>
            </div>
            <div className="homepage-right">
              <Lottie
                animationData={codingAnimation}
                loop
                className="homepage-animation"
              />
            </div>
          </div>
        </section>
        <section id="roadmap-section" className="name-cards">
          <div>
            Array
            <ul>
              <li>Lec 1 : Easy Probelms</li>
              <li>Lec 2 : Medium Problems </li>
              <li>Lec 3 : Hard Problems</li>
            </ul>
          </div>
          <div>
            Binary Search
            <ul>
              <li>Lec 1 : BS on 1D Array </li>
              <li>Lec 2 : BS on Answers </li>
              <li>Lec 3 : BS on 2D Array</li>
            </ul>
          </div>
          <div>
            Linked List
            <ul>
              <li>Lec 1 : Singly Linked List </li>
              <li>Lec 2 : Doubly Linked List </li>
              <li>Lec 3 : Problems in Linked List</li>
            </ul>
          </div>
          <div>
            Sliding Window
            <ul>
              <li>Lec 1 : Medium Problems </li>
              <li>Lec 2 : Hard Problems </li>
            </ul>
          </div>
        </section>
        <div className="view-more-container">
          <button
            className="btn-primary"
            onClick={() => (window.location.href = "/learn")}
          >
            View More Topics
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
