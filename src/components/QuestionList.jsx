import React from "react";
import { Link } from "react-router-dom";

const QuestionList = ({ questions }) => {
  return (
    <ul>
      {questions.map((q) => (
        <li key={q.id}>
          <Link to={`/question/${q.id}`}>{q.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
