import React from 'react';

const QuizCreate = () => {
    return (
        <div className="quiz-create-container">
            <div className="hero" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form action="#">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCreate;