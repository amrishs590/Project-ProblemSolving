import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Step.css";
import steps from "../data/questions";

const Steps = () => {
  const [openStepIndex, setOpenStepIndex] = useState(null);

  const toggleStep = (index) => {
    setOpenStepIndex(openStepIndex === index ? null : index);
  };

  return (
    <div className="step-container">
      <h1
        style={{ textAlign: "center", marginBottom: "20px", marginTop: "30px" }}
      >
        Problem Solving Steps
      </h1>

      <div className="step-grid">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${openStepIndex === index ? "open" : ""}`}
          >
            <div className="step-header" onClick={() => toggleStep(index)}>
              <h2>{step.stepTitle}</h2>
            </div>

            <div
              className={`step-content ${
                openStepIndex === index ? "open" : ""
              }`}
            >
              {openStepIndex === index && (
                <div className="step-body">
                  {Object.entries(step.sections).map(
                    ([sectionTitle, questions], sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4>{sectionTitle}</h4>
                        <ul>
                          {questions.map((q) => (
                            <li key={q.id}>
                              <Link to={`/question/${q.id}`}>{q.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
