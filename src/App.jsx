import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionPage from "./components/QuestionPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CursorFollower from "./components/CursorFollower"; // 👈 import this

function App() {
  return (
    <Router>
      <CursorFollower /> {/* 👈 Add it just once */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
