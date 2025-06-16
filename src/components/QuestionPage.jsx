import { useParams, useNavigate } from "react-router-dom";
import steps from "../data/questions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // 👈 Add this

  let question = null;

  for (let step of steps) {
    for (let section in step.sections) {
      for (let q of step.sections[section]) {
        if (q.id === id) {
          question = q;
          break;
        }
      }
      if (question) break;
    }
    if (question) break;
  }

  if (!question) {
    return <div className="p-4 text-red-500">Question not found!</div>;
  }

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
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 20px",
        }}
      >
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)} // 👈 Goes back to previous page
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
          Back
        </button>

        {/* Top Layer - Question */}
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

        {/* Bottom Layer - Solution */}
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
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
