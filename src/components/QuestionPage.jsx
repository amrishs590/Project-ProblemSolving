import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import steps from "../data/questions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { supabase } from "../supabaseClient";
import CodeEditor from "./CodeEditor";
import "./QuestionPage.css";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const stepIndex = localStorage.getItem("openStepIndex");
  const currentStep = steps[stepIndex];

  const [isCompleted, setIsCompleted] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const checkProgress = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      setUserId(user.id);

      const { data, error } = await supabase
        .from("progress")
        .select("question_id")
        .eq("user_id", user.id)
        .eq("question_id", id);

      setIsCompleted(data.length > 0);
    };

    checkProgress();
  }, [id]);

  const handleCheckboxChange = async () => {
  if (!userId) return;

  if (isCompleted) {
    console.log("Trying to delete row with:", {
  user_id: userId,
  question_id: id,
});

    const { error } = await supabase
      .from("progress")
      .delete()
      .eq("user_id", userId)
      .eq("question_id", id);

    if (error) {
      console.error("Delete failed:", error);
    } else {
      console.log("Delete successful");
      setIsCompleted(false);
    }
  } else {
    const { error } = await supabase.from("progress").insert([
      {
        user_id: userId,
        question_id: id,
      },
    ]);

    if (error) {
      console.error("Insert failed:", error);
    } else {
      console.log("Insert successful");
      setIsCompleted(true);
    }
  }
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
        <button
          className="back-button"
          onClick={() => navigate("/learn", { state: { from: "question" } })}
        >
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
          {/* <CodeEditor /> */}
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
