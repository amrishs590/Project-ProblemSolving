import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Step.css"
import steps from "../data/questions"; // Adjust the path if needed

const Steps = () => {
  const [openStepIndex, setOpenStepIndex] = useState(null);

  const toggleStep = (index) => {
    setOpenStepIndex(openStepIndex === index ? null : index);
  };

  return (
    <div className="step-container" style={{ padding: "20px" }}>
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div
            className="step-header"
            onClick={() => toggleStep(index)}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "10px",
              cursor: "pointer",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            <h2>{step.stepTitle}</h2>
          </div>

          {openStepIndex === index && (
            <div className="step-body" style={{ paddingLeft: "20px" }}>
              {Object.entries(step.sections).map(
                ([sectionTitle, questions], sectionIndex) => (
                  <div key={sectionIndex} style={{ marginTop: "10px" }}>
                    <h4>{sectionTitle}</h4>
                    <ul style={{ paddingLeft: "20px" }}>
                      {questions.map((q, qIndex) => (
                        <li key={qIndex} style={{ marginBottom: "5px" }}>
                          <Link to={`/question/${encodeURIComponent(q)}`}>
                            {q}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;
