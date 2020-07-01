import React from 'react';
import { Question } from '../models/app.models';

interface SingleQuestionProps {
    question: Question;
}

const SingleQuestion: React.FC<SingleQuestionProps> = (props) => {
    const { question } = props;

    return (
        <div className="single-question">
            <h3 className="text-white mb-3">{question.value}</h3>
            {
                question.choices.map((choice, index) => {
                    const name = Math.random().toString(36).substring(7);
                    return (
                        <div className="custom-control custom-radio mb-2" onClick={event => setState('1')}>
                            <input
                                className="custom-control-input"
                                type="radio"
                                name={name}
                                value="1"
                                checked={state === "1"}
                            />
                            <label htmlFor="name" className="custom-control-label">Name</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingleQuestion;