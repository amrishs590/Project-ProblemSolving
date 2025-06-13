import React, { useState } from "react";
import QuestionList from "./QuestionList";

const DifficultySection = ({ level, questions }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="difficulty-section">
      <h3 onClick={() => setOpen(!open)}>{level}</h3>
      {open && <QuestionList questions={questions} />}
    </div>
  );
};

export default DifficultySection;
