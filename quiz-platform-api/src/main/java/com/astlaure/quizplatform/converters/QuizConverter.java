package com.astlaure.quizplatform.converters;

import com.astlaure.quizplatform.entities.Quiz;
import com.astlaure.quizplatform.models.ChoiceResponse;
import com.astlaure.quizplatform.models.QuestionResponse;
import com.astlaure.quizplatform.models.QuizResponse;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class QuizConverter {

    public QuizResponse convert(Quiz quiz) {
        QuizResponse quizResponse = new QuizResponse();
        quizResponse.setId(quiz.getId());
        quizResponse.setName(quiz.getName());
        quizResponse.setQuestions(quiz.getQuestions().stream()
                .map(question -> {
                    QuestionResponse questionResponse = new QuestionResponse();
                    questionResponse.setId(question.getId());
                    questionResponse.setValue(question.getValue());
                    questionResponse.setChoices(question.getChoices().stream()
                            .map(choice -> {
                                ChoiceResponse choiceResponse = new ChoiceResponse();
                                choiceResponse.setId(choice.getId());
                                choiceResponse.setValue(choice.getValue());
                                return choiceResponse;
                            }).collect(Collectors.toList())
                    );
                    return questionResponse;
                }).collect(Collectors.toList())
        );

        return quizResponse;
    }
}
