import { useState, useEffect, useCallback } from "react";

const OPTION_LABELS = ["A", "B", "C", "D"];
const TIME_PER_QUESTION = 30; // seconds

function QuizPage({ questions, subject, difficulty, onFinish, onBack }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState([]); // { questionIndex, selected, correct }
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);

  const question = questions[current];
  const totalQuestions = questions.length;

  const handleNext = useCallback(() => {
    const record = {
      questionIndex: current,
      selected: selected,
      correct: selected === question.correctAnswer,
    };

    const newAnswers = [...answers, record];

    if (current + 1 < totalQuestions) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
      setAnswered(false);
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      onFinish(newAnswers, questions);
    }
  }, [current, selected, question, answers, totalQuestions, onFinish, questions]);

  // Timer
  useEffect(() => {
    if (answered) return;
    if (timeLeft <= 0) {
      // Auto-skip
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, answered, handleNext]);

  const handleSelect = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
  };

  const getOptionClass = (option) => {
    if (!answered) {
      return selected === option ? "option-btn selected" : "option-btn";
    }
    if (option === question.correctAnswer) return "option-btn correct";
    if (option === selected && option !== question.correctAnswer) return "option-btn wrong";
    return "option-btn";
  };

  const progress = ((current) / totalQuestions) * 100;

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div className="quiz-meta">
          <div className="quiz-meta-left">
            <span className="quiz-subject-label">{subject.name}</span>
            <span className={`badge badge-${difficulty}`} style={{ textTransform: "capitalize" }}>
              {difficulty}
            </span>
          </div>
          <div className={`quiz-timer ${timeLeft <= 10 ? "warning" : ""}`}>
            {timeLeft}s
          </div>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-progress-text" style={{ marginTop: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          Question {current + 1} of {totalQuestions}
        </div>
      </div>

      <div className="question-card">
        <div className="question-number">Question {current + 1}</div>
        <div className="question-text">{question.question}</div>

        <div className="options-list">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className={getOptionClass(option)}
              onClick={() => handleSelect(option)}
              disabled={answered}
            >
              <span className="option-label">{OPTION_LABELS[idx]}</span>
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-actions">
        <button className="btn btn-outline" onClick={onBack}>
          Quit
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!answered && timeLeft > 0}
        >
          {current + 1 === totalQuestions ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
