import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Step.css";
import steps from "../data/questions";

const Steps = () => {
  const [openStepIndex, setOpenStepIndex] = useState(null);
  const location = useLocation();

  // ⬇️ Load openStepIndex from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("openStepIndex");
    if (saved !== null && saved !== "") {
      const parsed = Number(saved);
      if (!isNaN(parsed)) {
        setOpenStepIndex(parsed);
      }
    }
  }, []);

  useEffect(() => {
    const scrollPos = localStorage.getItem("learnScrollPos");
    if (scrollPos) {
      window.scrollTo({ Top: 0, behavior: "smooth" });
    }
  }, []);

  const toggleStep = (index) => {
    const newIndex = openStepIndex === index ? null : index;
    setOpenStepIndex(newIndex);
    localStorage.setItem("openStepIndex", newIndex !== null ? newIndex : "");
  };

  const getStepProgress = (step) => {
    const completed = JSON.parse(
      localStorage.getItem("completedQuestions") || "[]"
    );
    let total = 0;
    let done = 0;

    for (let section of Object.values(step.sections)) {
      total += section.length;
      done += section.filter((q) => completed.includes(q.id)).length;
    }

    return { total, done };
  };

  const getGlobalProgress = () => {
    const completed = JSON.parse(
      localStorage.getItem("completedQuestions") || "[]"
    );
    let total = 0;
    let done = 0;

    for (let step of steps) {
      for (let section of Object.values(step.sections)) {
        total += section.length;
        done += section.filter((q) => completed.includes(q.id)).length;
      }
    }

    return { total, done };
  };

  const getLectureProgress = (questions) => {
  const completed = JSON.parse(localStorage.getItem("completedQuestions") || "[]");
  const total = questions.length;
  const done = questions.filter((q) => completed.includes(q.id)).length;
  return { total, done };
};

  return (
    <div className="step-container">
      <h1
        style={{ textAlign: "center", marginBottom: "20px", marginTop: "50px" }}
      >
        Problem Solving Steps
      </h1>
      <div className="global-progress-wrapper">
        <div className="global-progress-bar">
          <div
            className="global-progress-fill"
            style={{
              width: `${Math.round(
                (getGlobalProgress().done / getGlobalProgress().total) * 100
              )}%`,
            }}
          ></div>
        </div>
        <span className="global-progress-label">
          {getGlobalProgress().done}/{getGlobalProgress().total} completed
          overall
        </span>
      </div>

      <div className="step-grid">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${openStepIndex === index ? "open" : ""}`}
          >
            <div className="step-header" onClick={() => toggleStep(index)}>
              <h2>{step.stepTitle}</h2>
            </div>
            <div className="step-progress-bar">
              <div
                className="step-progress-fill"
                style={{
                  width: `${Math.round(
                    (getStepProgress(step).done / getStepProgress(step).total) *
                      100
                  )}%`,
                }}
              ></div>
              <span className="step-progress-label">
                {getStepProgress(step).done}/{getStepProgress(step).total}{" "}
                completed
              </span>
            </div>

            <div
              className={`step-content ${
                openStepIndex === index ? "open" : ""
              }`}
            >
              {openStepIndex === index && (
                <div className="step-body">
                  {Object.entries(step.sections).map(([sectionTitle, questions], sectionIndex) => {
  const { total, done } = getLectureProgress(questions);

  return (
    <div key={sectionIndex} className="lecture-section">
      <div className="lecture-header">
        <h4>{sectionTitle}</h4>
        <span className="lecture-count">{done}/{total} completed</span>
      </div>

      <div className="lecture-progress-bar">
        <div
          className="lecture-progress-fill"
          style={{ width: `${Math.round((done / total) * 100)}%` }}
        ></div>
      </div>

      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <Link
              to={`/question/${q.id}`}
              onClick={() => {
                localStorage.setItem("selectedQuestionId", q.id);
                localStorage.setItem("learnScrollPos", window.scrollY);
              }}
            >
              {q.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
})}

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
