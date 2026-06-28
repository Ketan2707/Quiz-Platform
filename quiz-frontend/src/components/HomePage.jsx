// Subject configuration — colors and short labels
const SUBJECTS = [
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    shortName: "DSA",
    description: "Arrays, linked lists, trees, graphs, sorting, searching, and algorithm complexity.",
    color: "#2563eb",
    bg: "#dbeafe",
    totalQuestions: 15,
  },
  {
    id: "numerical",
    name: "Numerical Methods",
    shortName: "NM",
    description: "Root finding, interpolation, numerical integration, and solving linear systems.",
    color: "#7c3aed",
    bg: "#ede9fe",
    totalQuestions: 15,
  },
  {
    id: "fullstack",
    name: "Full Stack Development",
    shortName: "FS",
    description: "HTML, CSS, JavaScript, React, Node.js, REST APIs, and web architecture.",
    color: "#0891b2",
    bg: "#cffafe",
    totalQuestions: 15,
  },
  {
    id: "dbms",
    name: "Database Management Systems",
    shortName: "DB",
    description: "SQL, normalization, transactions, indexing, ER diagrams, and query optimization.",
    color: "#059669",
    bg: "#d1fae5",
    totalQuestions: 15,
  },
  {
    id: "cn",
    name: "Computer Networks",
    shortName: "CN",
    description: "OSI model, TCP/IP, routing, DNS, HTTP, subnetting, and network security.",
    color: "#d97706",
    bg: "#fef3c7",
    totalQuestions: 15,
  },
];

function HomePage({ onSelectSubject }) {
  return (
    <div>
      <div className="home-header">
        <h1>Computer Science Quiz Platform</h1>
        <p>Select a subject to begin. Each quiz has 5 questions per difficulty level.</p>
      </div>

      <div className="subjects-grid">
        {SUBJECTS.map((subject) => (
          <div
            key={subject.id}
            className="subject-card"
            onClick={() => onSelectSubject(subject)}
          >
            <div className="subject-card-header">
              <div
                className="subject-icon"
                style={{ background: subject.bg, color: subject.color }}
              >
                {subject.shortName}
              </div>
              <h3>{subject.name}</h3>
            </div>
            <p>{subject.description}</p>
            <div className="subject-meta">
              <span className="badge badge-easy">Easy</span>
              <span className="badge badge-medium">Medium</span>
              <span className="badge badge-hard">Hard</span>
              <span className="badge badge-total">{subject.totalQuestions} Questions</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
