import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import ContactPage from "./pages/ContactPage";
import QuestionPage from "./components/QuestionPage";
import Header from "./components/Header";
import CursorFollower from "./components/CursorFollower"; 
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <CursorFollower /> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/question/:id" element={<QuestionPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

