import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Step.css";
import steps from "../data/questions";
import { supabase } from "../supabaseClient";

const Steps = () => {
  const [openStepIndex, setOpenStepIndex] = useState(null);
  const [progress, setProgress] = useState([]);
  const [restoreScroll, setRestoreScroll] = useState(false);
  const location = useLocation();

  // Load openStepIndex from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("openStepIndex");
    if (saved !== null && saved !== "") {
      const parsed = Number(saved);
      if (!isNaN(parsed)) {
        setOpenStepIndex(parsed);
      }
    }
  }, []);

  // Detect where user came from
  useEffect(() => {
    const from = location.state?.from;
    const scrollPos = localStorage.getItem("learnScrollPos");

    if (from === "question" && scrollPos) {
      setRestoreScroll(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // Restore scroll position after coming back from Question page
  useEffect(() => {
    if (!restoreScroll) return;

    const scrollY = parseInt(localStorage.getItem("learnScrollPos")) || 0;

    const interval = setInterval(() => {
      const body = document.querySelector(".step-body");
      if (body) {
        window.scrollTo({ top: scrollY, behavior: "smooth" });
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [restoreScroll]);

  // Scroll to step title when a new step is opened
  useEffect(() => {
    if (openStepIndex === null) return;

    const stepEl = document.getElementById(`step-${openStepIndex}`);
    if (stepEl) {
      stepEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [openStepIndex]);

  // Fetch progress from Supabase
  useEffect(() => {
    const fetchProgress = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("progress")
        .select("question_id")
        .eq("user_id", user.id);

      if (error) {
        console.error("Failed to fetch progress:", error.message);
      } else {
        setProgress(data.map((item) => item.question_id));
      }
    };

    fetchProgress();
  }, []);

  const toggleStep = (index) => {
    const newIndex = openStepIndex === index ? null : index;
    setOpenStepIndex(newIndex);
    localStorage.setItem("openStepIndex", newIndex !== null ? newIndex : "");
  };

  const getStepProgress = (step) => {
    let total = 0;
    let done = 0;

    for (let section of Object.values(step.sections)) {
      total += section.length;
      done += section.filter((q) => progress.includes(q.id)).length;
    }

    return { total, done };
  };

  const getGlobalProgress = () => {
    let total = 0;
    let done = 0;

    for (let step of steps) {
      for (let section of Object.values(step.sections)) {
        total += section.length;
        done += section.filter((q) => progress.includes(q.id)).length;
      }
    }

    return { total, done };
  };

  const getLectureProgress = (questions) => {
    const total = questions.length;
    const done = questions.filter((q) => progress.includes(q.id)).length;
    return { total, done };
  };

  return (
    <div className="step-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "50px" }}>
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
          {getGlobalProgress().done}/{getGlobalProgress().total} completed overall
        </span>
      </div>

      <div className="step-grid">
        {steps.map((step, index) => (
          <div
            key={index}
            id={`step-${index}`} // ✅ For scrolling to title
            className={`step ${openStepIndex === index ? "open" : ""}`}
          >
            <div className="step-header" onClick={() => toggleStep(index)}>
              <h2>{step.stepTitle}</h2>
              <span className="step-count">
                {getStepProgress(step).done}/{getStepProgress(step).total} completed
              </span>
            </div>

            <div className="step-progress-bar">
              <div
                className="step-progress-fill"
                style={{
                  width: `${Math.round(
                    (getStepProgress(step).done / getStepProgress(step).total) * 100
                  )}%`,
                }}
              ></div>
              <span className="step-progress-label">
                {getStepProgress(step).done}/{getStepProgress(step).total} completed
              </span>
            </div>

            <div className={`step-content ${openStepIndex === index ? "open" : ""}`}>
              {openStepIndex === index && (
                <div className="step-body">
                  {Object.entries(step.sections).map(
                    ([sectionTitle, questions], sectionIndex) => {
                      const { total, done } = getLectureProgress(questions);

                      return (
                        <div key={sectionIndex} className="lecture-section">
                          <div className="lecture-header">
                            <h4>{sectionTitle}</h4>
                            <span className="lecture-count">
                              {done}/{total} completed
                            </span>
                          </div>

                          <div className="lecture-progress-bar">
                            <div
                              className="lecture-progress-fill"
                              style={{
                                width: `${Math.round((done / total) * 100)}%`,
                              }}
                            ></div>
                          </div>

                          <ul>
                            {questions.map((q) => {
                              const isCompleted = progress.includes(q.id);

                              return (
                                <li
                                  key={q.id}
                                  className={isCompleted ? "completed-question" : ""}
                                >
                                  <Link
                                    to={`/question/${q.id}`}
                                    onClick={() => {
                                      localStorage.setItem("selectedQuestionId", q.id);
                                      localStorage.setItem(
                                        "learnScrollPos",
                                        window.scrollY
                                      );
                                    }}
                                  >
                                    {q.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    }
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
