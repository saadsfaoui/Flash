import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import LandingPage from "./LandingPage/LandingPage";
import Home from "./Home/Home";
import LoginPage from "./Login/LoginPage";
import QuizPage from "./Quizz/QuizPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
