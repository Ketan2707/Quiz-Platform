# Quiz Portal — Full Stack Quiz Platform

A full-stack quiz platform built with **React (Vite)** on the frontend and **Spring Boot** on the backend.

## Project Structure

```
/
├── quiz-frontend/     ← React + Vite (UI)
└── quiz-backend/      ← Spring Boot (REST API)
```

---

## Subjects Covered

| Subject | ID |
|---|---|
| Data Structures & Algorithms | `dsa` |
| Numerical Methods | `numerical` |
| Full Stack Development | `fullstack` |
| Database Management Systems | `dbms` |
| Computer Networks | `cn` |

Each subject has **15 questions** — 5 Easy, 5 Medium, 5 Hard.

---

## How to Run

### 1. Start the Backend (Spring Boot)

Requirements: Java 17+, Maven

```bash
cd quiz-backend
mvn spring-boot:run
```

The backend runs on **http://localhost:8080**

### 2. Start the Frontend (React + Vite)

Requirements: Node.js 18+

```bash
cd quiz-frontend
npm install
npm run dev
```

The frontend runs on **http://localhost:5173**

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/questions?subject=dsa&difficulty=easy` | Get questions |
| GET | `/api/subjects` | List all subjects |
| GET | `/api/health` | Health check |

---

## Architecture (Simple Explanation for Teacher)

```
Browser (React)
     |
     | HTTP GET /api/questions?subject=dsa&difficulty=easy
     |
Spring Boot Controller (QuizController.java)
     |
     | calls
     |
QuestionStore.java  ← All questions stored in memory (no database)
     |
     | returns List<Question>
     |
JSON Response → React renders the quiz
```

**No database is used.** All questions are stored in `QuestionStore.java` as Java objects.

---

## Key Files

### Frontend
- `src/App.jsx` — Main app, manages page navigation and API calls
- `src/components/HomePage.jsx` — Subject selection grid
- `src/components/DifficultyPage.jsx` — Easy/Medium/Hard selection
- `src/components/QuizPage.jsx` — Quiz with timer and answer feedback
- `src/components/ResultPage.jsx` — Score, stats, and answer review
- `src/App.css` — All styles

### Backend
- `QuizBackendApplication.java` — Spring Boot entry point
- `model/Question.java` — Question data model
- `data/QuestionStore.java` — All 75 questions stored in memory
- `controller/QuizController.java` — REST API endpoints
