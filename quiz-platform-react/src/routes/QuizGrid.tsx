import React, { useEffect, useState } from 'react';
import useHttpClient from '../hooks/useHttpClient';
import QuizGridItem from '../components/QuizGridItem';

const QuizGrid = () => {
    const httpClient = useHttpClient();
    const [state, setState] = useState([]);

    useEffect(() => {
        httpClient.get('/api/quiz')
            .then((response) => setState(response))
            .catch(() => {});
    }, [])

    return (
        <div className="quiz-grid-component">
            <div className="container">
                <h1 className="text-center">Quiz</h1>
                <div className="row">
                    {
                        state.map((quiz, index) => {
                            return <QuizGridItem key={index} quiz={quiz} />
                        })
                    }
                    <div className="col-md-4 col-lg-3 mb-5">
                        <div className="card">
                            <a href="#">
                                <div className="card-body">
                                    <h3 className="mb-4">Geek Level</h3>
                                    <p className="mb-3">9 questions</p>
                                    <p className="mb-3">10 minutes</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-5">
                        <div className="card">
                            <a href="#">
                                <div className="card-body">
                                    <h3 className="mb-4">Geek Level</h3>
                                    <p className="mb-3">9 questions</p>
                                    <p className="mb-3">10 minutes</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-5">
                        <div className="card">
                            <a href="#">
                                <div className="card-body">
                                    <h3 className="mb-4">Geek Level</h3>
                                    <p className="mb-3">9 questions</p>
                                    <p className="mb-3">10 minutes</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-5">
                        <div className="card">
                            <a href="#">
                                <div className="card-body">
                                    <h3 className="mb-4">Geek Level</h3>
                                    <p className="mb-3">9 questions</p>
                                    <p className="mb-3">10 minutes</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-5">
                        <div className="card">
                            <a href="#">
                                <div className="card-body">
                                    <h3 className="mb-4">Geek Level</h3>
                                    <p className="mb-3">9 questions</p>
                                    <p className="mb-3">10 minutes</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizGrid;