import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step from "./components/Step";
import QuestionPage from "./components/QuestionPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Step from "./components/Step";
// import QuestionPage from "./components/QuestionPage";
// import Header from "./components/Header";
// import HomePage from "./pages/HomePage";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/question/:id" element={<QuestionPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

