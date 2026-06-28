package com.quizportal.model;

import java.util.List;

/**
 * Represents a single quiz question.
 * No database needed — questions are stored in memory.
 */
public class Question {

    private Long id;
    private String subject;       // dsa, numerical, fullstack, dbms, cn
    private String difficulty;    // easy, medium, hard
    private String question;
    private List<String> options; // 4 options
    private String correctAnswer; // must match one of the options exactly

    public Question() {}

    public Question(Long id, String subject, String difficulty,
                    String question, List<String> options, String correctAnswer) {
        this.id = id;
        this.subject = subject;
        this.difficulty = difficulty;
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

    public List<String> getOptions() { return options; }
    public void setOptions(List<String> options) { this.options = options; }

    public String getCorrectAnswer() { return correctAnswer; }
    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }
}
