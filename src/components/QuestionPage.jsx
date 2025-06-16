import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import steps from "../data/questions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const stepIndex = localStorage.getItem("openStepIndex");
  const currentStep = steps[stepIndex];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  if (!currentStep) {
    return <div className="p-4 text-red-500">Step not found!</div>;
  }

  let currentLectureQuestions = [];
  let currentIndex = -1;
  let question = null;

  // 🔍 Loop through each lecture to find the current question and its group
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "60px",
        paddingBottom: "60px",
        minHeight: "100vh",
        background: "#f9f9f9",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px", margin: "0 20px" }}>
        <button
          onClick={() => navigate("/learn")}
          style={{
            marginBottom: "20px",
            marginTop: "20px",
            padding: "10px 16px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ⬅️ Back
        </button>

        <div
          style={{
            background: "#f1f1f1",
            padding: "20px",
            borderRadius: "10px 10px 0 0",
            border: "1px solid #ccc",
            color: "black",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {question.title}
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            {question.content}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "0 0 10px 10px",
            border: "1px solid #ccc",
            borderTop: "none",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Solution
          </h2>
          <SyntaxHighlighter language="python" style={oneDark} showLineNumbers>
            {question.solution}
          </SyntaxHighlighter>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              style={{
                padding: "10px 20px",
                backgroundColor: currentIndex === 0 ? "#ccc" : "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              }}
            >
              ⬅️ Previous
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex === currentLectureQuestions.length - 1}
              style={{
                padding: "10px 20px",
                backgroundColor:
                  currentIndex === currentLectureQuestions.length - 1
                    ? "#ccc"
                    : "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor:
                  currentIndex === currentLectureQuestions.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next ➡️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
