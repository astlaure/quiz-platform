import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttpClient from '../hooks/useHttpClient';

const QuizPage = () => {
    const params = useParams<{ id: string }>();
    const httpClient = useHttpClient();
    const [state, setState] = useState('');

    useEffect(() => {
        httpClient.get(`/api/quiz/${params.id}`)
            .then((response) => setState(response))
            .catch(() => {});
    }, [])

    return (
        <div className="quiz-page-component">
            <div className="container mb-5">
                <h1 className="text-center">Quiz</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <form action="#">

                                </form>
                                <h3 className="text-white mb-3">Couleur du cheval blanc de Napoleon?</h3>
                                <form action="#">
                                    <div className="custom-control custom-radio mb-2" onClick={event => setState('1')}>
                                        <input
                                            className="custom-control-input"
                                            type="radio"
                                            name="hello"
                                            value="1"
                                            checked={state === "1"}
                                        />
                                        <label htmlFor="name" className="custom-control-label">Name</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-2" onClick={event => setState('2')}>
                                        <input
                                            className="custom-control-input"
                                            type="radio"
                                            name="hello"
                                            value="2"
                                            checked={state === "2"}
                                        />
                                        <label htmlFor="name" className="custom-control-label">Name</label>
                                    </div>
                                    <div className="custom-control custom-radio mb-2" onClick={event => setState('3')}>
                                        <input
                                            className="custom-control-input"
                                            type="radio"
                                            name="hello"
                                            value="3"
                                            checked={state === "3"}
                                        />
                                        <label htmlFor="name" className="custom-control-label">Name</label>
                                    </div>
                                </form>
                                <h3 className="text-white mb-3 mt-5">Couleur du cheval blanc de Napoleon?</h3>
                                <form action="#">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" name="hello"/>
                                        <label htmlFor="name" className="form-check-label">Name</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" name="hello"/>
                                        <label htmlFor="name" className="form-check-label">Name</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" name="hello"/>
                                        <label htmlFor="name" className="form-check-label">Name</label>
                                    </div>
                                </form>
                                <h3 className="text-white mb-3 mt-5">Couleur du cheval blanc de Napoleon?</h3>
                                <form action="#">
                                    <div className="form-group mb-2">
                                        <label htmlFor="name">Answer</label>
                                        <textarea rows={3} className="form-control" />
                                    </div>
                                </form>
                                <input type="submit" className="btn btn-primary w-100" value="SUBMIT"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage;