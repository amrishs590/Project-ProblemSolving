import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step from "./components/Step";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Step />} />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
