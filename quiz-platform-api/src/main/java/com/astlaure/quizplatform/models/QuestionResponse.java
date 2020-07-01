package com.astlaure.quizplatform.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionResponse {
    private Long id;
    private String value;
    private List<ChoiceResponse> choices;
}
