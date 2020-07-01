package com.astlaure.quizplatform.services;

import com.astlaure.quizplatform.converters.QuizConverter;
import com.astlaure.quizplatform.entities.Quiz;
import com.astlaure.quizplatform.models.QuizResponse;
import com.astlaure.quizplatform.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuizService {

    private final QuizRepository quizRepository;
    private final QuizConverter quizConverter;

    @Autowired
    public QuizService(QuizRepository quizRepository, QuizConverter quizConverter) {
        this.quizRepository = quizRepository;
        this.quizConverter = quizConverter;
    }

    public QuizResponse findOne(Long id) {
        Optional<Quiz> quiz = quizRepository.findById(id);

        if (quiz.isEmpty()) {
            return null;
        }

        return quizConverter.convert(quiz.get());
    }
}
