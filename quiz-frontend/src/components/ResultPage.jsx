function ResultPage({ answers, questions, subject, difficulty, onRetry, onHome }) {
  const total = answers.length;
  const correct = answers.filter((a) => a.correct).length;
  const wrong = answers.filter((a) => !a.correct && a.selected !== null).length;
  const skipped = answers.filter((a) => a.selected === null).length;
  const percentage = Math.round((correct / total) * 100);

  const getScoreClass = () => {
    if (percentage >= 80) return "high";
    if (percentage >= 50) return "mid";
    return "low";
  };

  const getMessage = () => {
    if (percentage >= 80) return "Well done! Strong performance.";
    if (percentage >= 60) return "Good effort. A bit more practice will help.";
    if (percentage >= 40) return "Keep going. Review the topics and try again.";
    return "Needs improvement. Go through the material carefully.";
  };

  return (
    <div className="result-page">
      <div className="result-card">
        <div className={`result-score-circle ${getScoreClass()}`}>
          <span className="score-number">{percentage}%</span>
          <span className="score-label">Score</span>
        </div>

        <h2>{getMessage()}</h2>
        <p className="result-subtitle">
          {subject.name} &mdash; <span style={{ textTransform: "capitalize" }}>{difficulty}</span> level
        </p>

        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-value correct-color">{correct}</span>
            <span className="stat-label">Correct</span>
          </div>
          <div className="stat-item">
            <span className="stat-value wrong-color">{wrong}</span>
            <span className="stat-label">Wrong</span>
          </div>
          <div className="stat-item">
            <span className="stat-value skip-color">{skipped}</span>
            <span className="stat-label">Skipped</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{total}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>
      </div>

      <div className="result-actions">
        <button className="btn btn-outline" onClick={onHome}>
          Home
        </button>
        <button className="btn btn-primary" onClick={onRetry}>
          Try Again
        </button>
      </div>

      {/* Answer Review */}
      <div className="review-section">
        <h3>Answer Review</h3>
        {answers.map((ans, idx) => {
          const q = questions[ans.questionIndex];
          const status = ans.selected === null ? "skipped" : ans.correct ? "correct" : "wrong";
          return (
            <div key={idx} className="review-item">
              <div className="review-item-header">
                <div className={`review-status-dot ${status}`} />
                <div className="review-question-text">{q.question}</div>
              </div>
              <div className="review-answers">
                {ans.selected !== null && (
                  <div className={`review-your-answer ${ans.correct ? "correct-answer" : ""}`}>
                    Your answer: {ans.selected}
                  </div>
                )}
                {!ans.correct && (
                  <div className="review-correct-answer">
                    Correct answer: {q.correctAnswer}
                  </div>
                )}
                {ans.selected === null && (
                  <div style={{ color: "var(--text-muted)" }}>Skipped (time ran out)</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResultPage;
