package com.quizportal.controller;

import com.quizportal.data.QuestionStore;
import com.quizportal.model.Question;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for the Quiz API.
 * Exposes endpoints to fetch questions by subject and difficulty.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow React dev server
public class QuizController {

    private final QuestionStore questionStore;

    // Spring injects QuestionStore automatically (dependency injection)
    public QuizController(QuestionStore questionStore) {
        this.questionStore = questionStore;
    }

    /**
     * GET /api/questions?subject=dsa&difficulty=easy
     * Returns a list of questions for the given subject and difficulty.
     */
    @GetMapping("/questions")
    public ResponseEntity<List<Question>> getQuestions(
            @RequestParam String subject,
            @RequestParam String difficulty) {

        List<Question> questions = questionStore.getQuestions(subject, difficulty);

        if (questions.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(questions);
    }

    /**
     * GET /api/subjects
     * Returns the list of available subjects.
     */
    @GetMapping("/subjects")
    public ResponseEntity<List<String>> getSubjects() {
        return ResponseEntity.ok(List.of("dsa", "numerical", "fullstack", "dbms", "cn"));
    }

    /**
     * GET /api/health
     * Simple health check endpoint.
     */
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Quiz Backend is running");
    }
}
