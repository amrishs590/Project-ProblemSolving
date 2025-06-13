import React from "react";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
  const { questionTitle } = useParams();
  const decodedTitle = decodeURIComponent(questionTitle);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{decodedTitle}</h2>
      <p>This is where the full question and solution will be shown.</p>
    </div>
  );
};

export default QuestionPage;
