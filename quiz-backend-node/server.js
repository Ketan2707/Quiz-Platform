const express = require("express");
const cors = require("cors");
const questions = require("./data/questions");

const app = express();
const PORT = 8080;

// Allow requests from any origin (local dev + any deployed frontend)
app.use(cors());
app.use(express.json());

/**
 * GET /api/health
 * Simple health check
 */
app.get("/api/health", (req, res) => {
  res.json({ status: "Quiz Backend (Node.js) is running" });
});

/**
 * GET /api/subjects
 * Returns list of available subjects
 */
app.get("/api/subjects", (req, res) => {
  res.json(["dsa", "numerical", "fullstack", "dbms", "cn"]);
});

/**
 * GET /api/questions?subject=dsa&difficulty=easy
 * Returns filtered questions
 */
app.get("/api/questions", (req, res) => {
  const { subject, difficulty } = req.query;

  if (!subject || !difficulty) {
    return res.status(400).json({ error: "subject and difficulty query params are required" });
  }

  const filtered = questions.filter(
    (q) =>
      q.subject.toLowerCase() === subject.toLowerCase() &&
      q.difficulty.toLowerCase() === difficulty.toLowerCase()
  );

  if (filtered.length === 0) {
    return res.status(404).json({ error: "No questions found for given subject and difficulty" });
  }

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`\n  Quiz Backend running at http://localhost:${PORT}`);
  console.log(`  Health check : http://localhost:${PORT}/api/health`);
  console.log(`  Questions    : http://localhost:${PORT}/api/questions?subject=dsa&difficulty=easy\n`);
});
