package com.astlaure.quizplatform.controllers;

import com.astlaure.quizplatform.models.QuizRequest;
import com.astlaure.quizplatform.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public ResponseEntity<?> getAllQuiz() {
        return ResponseEntity.status(200).body(quizService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuiz(@PathVariable("id") Long id) {
        return ResponseEntity.status(200).build();
    }

    @PostMapping
    public ResponseEntity<?> postQuiz(@RequestBody QuizRequest request) {

        return ResponseEntity.status(201).build();
    }
}
