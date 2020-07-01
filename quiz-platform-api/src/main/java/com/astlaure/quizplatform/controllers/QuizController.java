package com.astlaure.quizplatform.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuiz(@PathVariable("id") Long id) {
        return ResponseEntity.status(200).build();
    }

    @PostMapping
    public ResponseEntity<?> postQuiz() {
        return ResponseEntity.status(201).build();
    }
}
