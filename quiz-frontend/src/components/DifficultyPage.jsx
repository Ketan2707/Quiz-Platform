const DIFFICULTIES = [
  {
    id: "easy",
    label: "Easy",
    description: "Fundamental concepts and basic definitions",
    className: "easy",
    questions: 5,
  },
  {
    id: "medium",
    label: "Medium",
    description: "Applied knowledge and moderate problem solving",
    className: "medium",
    questions: 5,
  },
  {
    id: "hard",
    label: "Hard",
    description: "Advanced topics and complex scenarios",
    className: "hard",
    questions: 5,
  },
];

function DifficultyPage({ subject, onSelectDifficulty, onBack }) {
  return (
    <div className="difficulty-page">
      <button className="page-back" onClick={onBack}>
        &larr; Back to Subjects
      </button>

      <div className="difficulty-header">
        <h2>{subject.name}</h2>
        <p>Choose a difficulty level to start the quiz</p>
      </div>

      <div className="difficulty-cards">
        {DIFFICULTIES.map((diff) => (
          <div
            key={diff.id}
            className={`difficulty-card ${diff.className}`}
            onClick={() => onSelectDifficulty(diff.id)}
          >
            <div className="difficulty-card-left">
              <h3>
                <span className={`badge badge-${diff.id}`}>{diff.label}</span>
              </h3>
              <p style={{ marginTop: "0.4rem" }}>{diff.description}</p>
            </div>
            <div className="difficulty-card-right">{diff.questions} questions</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DifficultyPage;
