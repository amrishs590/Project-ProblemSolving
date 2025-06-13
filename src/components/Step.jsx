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
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Problem Solving Steps
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "20px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => toggleStep(index)}
          >
            <h2>{step.stepTitle}</h2>

            {openStepIndex === index && (
              <div style={{ marginTop: "15px" }}>
                {Object.entries(step.sections).map(
                  ([sectionTitle, questions], sectionIndex) => (
                    <div key={sectionIndex} style={{ marginBottom: "10px" }}>
                      <h4>{sectionTitle}</h4>
                      <ul style={{ paddingLeft: "20px" }}>
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
        ))}
      </div>
    </div>
  );
};

export default Steps;
