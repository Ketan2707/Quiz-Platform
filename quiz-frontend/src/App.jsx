import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DifficultyPage from "./components/DifficultyPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

// Pages
const PAGE = {
  HOME: "home",
  DIFFICULTY: "difficulty",
  QUIZ: "quiz",
  RESULT: "result",
};

// Backend base URL — deployed on Render
const API_BASE = "https://quiz-platform-mpuo.onrender.com/api";

function App() {
  const [page, setPage] = useState(PAGE.HOME);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setPage(PAGE.DIFFICULTY);
  };

  const handleSelectDifficulty = async (difficulty) => {
    setSelectedDifficulty(difficulty);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${API_BASE}/questions?subject=${selectedSubject.id}&difficulty=${difficulty}`
      );
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setQuestions(data);
      setPage(PAGE.QUIZ);
    } catch (err) {
      setError(err.message || "Failed to load questions. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleFinish = (finalAnswers, finalQuestions) => {
    setAnswers(finalAnswers);
    setQuestions(finalQuestions);
    setPage(PAGE.RESULT);
  };

  const handleRetry = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${API_BASE}/questions?subject=${selectedSubject.id}&difficulty=${selectedDifficulty}`
      );
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setQuestions(data);
      setPage(PAGE.QUIZ);
    } catch (err) {
      setError(err.message);
      setPage(PAGE.DIFFICULTY);
    } finally {
      setLoading(false);
    }
  };

  const handleHome = () => {
    setPage(PAGE.HOME);
    setSelectedSubject(null);
    setSelectedDifficulty(null);
    setQuestions([]);
    setAnswers([]);
    setError(null);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="loading-wrap">
          <div className="spinner" />
          <p>Loading questions...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="error-wrap">
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={() => setError(null)}>
            Go Back
          </button>
        </div>
      );
    }

    switch (page) {
      case PAGE.HOME:
        return <HomePage onSelectSubject={handleSelectSubject} />;

      case PAGE.DIFFICULTY:
        return (
          <DifficultyPage
            subject={selectedSubject}
            onSelectDifficulty={handleSelectDifficulty}
            onBack={handleHome}
          />
        );

      case PAGE.QUIZ:
        return (
          <QuizPage
            questions={questions}
            subject={selectedSubject}
            difficulty={selectedDifficulty}
            onFinish={handleFinish}
            onBack={handleHome}
          />
        );

      case PAGE.RESULT:
        return (
          <ResultPage
            answers={answers}
            questions={questions}
            subject={selectedSubject}
            difficulty={selectedDifficulty}
            onRetry={handleRetry}
            onHome={handleHome}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">{renderContent()}</main>
      <footer className="footer">
        QuizPortal &mdash; Computer Science Quiz Platform
      </footer>
    </div>
  );
}

export default App;
