import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import steps from "../data/questions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./QuestionPage.css";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const stepIndex = localStorage.getItem("openStepIndex");
  const currentStep = steps[stepIndex];

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const saved = JSON.parse(
      localStorage.getItem("completedQuestions") || "[]"
    );
    setIsCompleted(saved.includes(id));
  }, [id]);

  const handleCheckboxChange = () => {
    let saved = JSON.parse(localStorage.getItem("completedQuestions") || "[]");

    if (isCompleted) {
      saved = saved.filter((qid) => qid !== id);
    } else {
      saved.push(id);
    }

    localStorage.setItem("completedQuestions", JSON.stringify(saved));
    setIsCompleted(!isCompleted);
  };

  if (!currentStep) {
    return <div className="p-4 text-red-500">Step not found!</div>;
  }

  let currentLectureQuestions = [];
  let currentIndex = -1;
  let question = null;

  for (let [lectureTitle, questions] of Object.entries(currentStep.sections)) {
    const index = questions.findIndex((q) => q.id === id);
    if (index !== -1) {
      currentLectureQuestions = questions;
      currentIndex = index;
      question = questions[index];
      break;
    }
  }

  if (!question) {
    return <div className="p-4 text-red-500">Question not found!</div>;
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      navigate(`/question/${currentLectureQuestions[currentIndex - 1].id}`);
    }
  };

  const goToNext = () => {
    if (currentIndex < currentLectureQuestions.length - 1) {
      navigate(`/question/${currentLectureQuestions[currentIndex + 1].id}`);
    }
  };

  return (
    <div className="question-wrapper">
      <div className="question-container">
        <button className="back-button" onClick={() => navigate("/learn")}>
          Back
        </button>

        <div className="question-header">
          <h1>{question.title}</h1>
          <p>{question.content}</p>
        </div>

        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
          />
          <span className="checkmark"></span>
          Mark as Completed
        </label>

        <div className="question-solution">
          <h2>Solution</h2>
          <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
            {question.solution}
          </SyntaxHighlighter>

          <div className="nav-buttons">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className={`nav-btn ${currentIndex === 0 ? "disabled" : ""}`}
            >
              Previous
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex === currentLectureQuestions.length - 1}
              className={`nav-btn ${
                currentIndex === currentLectureQuestions.length - 1
                  ? "disabled"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
