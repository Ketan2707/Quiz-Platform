# Quiz Portal — Full Stack Quiz Platform

A full-stack quiz platform built with **React (Vite)** on the frontend and **Node.js + Express** on the backend.

## Tech Stack

| Layer     | Technology          |
|-----------|---------------------|
| Frontend  | React + Vite        |
| Backend   | Node.js + Express   |
| Database  | None (in-memory)    |

---

## Project Structure

```
/
├── quiz-frontend/        ← React + Vite (UI)
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       └── components/
│           ├── Navbar.jsx
│           ├── HomePage.jsx
│           ├── DifficultyPage.jsx
│           ├── QuizPage.jsx
│           └── ResultPage.jsx
│
├── quiz-backend-node/    ← Node.js + Express (API)
│   ├── server.js         ← Express server + API routes
│   ├── data/
│   │   └── questions.js  ← All 75 questions in memory
│   └── package.json
│
├── start-backend.bat     ← Double-click to start backend
└── start-frontend.bat    ← Double-click to start frontend
```

---

## Subjects

| Subject                        | ID          | Questions |
|-------------------------------|-------------|-----------|
| Data Structures & Algorithms  | `dsa`       | 15        |
| Numerical Methods             | `numerical` | 15        |
| Full Stack Development        | `fullstack` | 15        |
| Database Management Systems   | `dbms`      | 15        |
| Computer Networks             | `cn`        | 15        |

Each subject has 5 Easy + 5 Medium + 5 Hard questions.

---

## How to Run

### Step 1 — Start Backend
Double-click **`start-backend.bat`**
OR open a terminal in `quiz-backend-node` and run:
```
node server.js
```
You should see:
```
Quiz Backend running at http://localhost:8080
```

### Step 2 — Start Frontend
Double-click **`start-frontend.bat`**
OR open a terminal in `quiz-frontend` and run:
```
npm run dev
```
Then open **http://localhost:5173** in your browser.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/subjects` | List all subjects |
| GET | `/api/questions?subject=dsa&difficulty=easy` | Get questions |

---

## Architecture (for teacher explanation)

```
Browser (React + Vite)
        |
        |  HTTP GET /api/questions?subject=dsa&difficulty=easy
        |
Node.js + Express  (server.js)
        |
        |  filters the array
        |
questions.js  ← 75 questions stored as a JS array (no database)
        |
        |  returns JSON
        |
React renders the quiz, tracks answers, shows result
```

No database, no Java, no Maven. Just JavaScript end to end.
