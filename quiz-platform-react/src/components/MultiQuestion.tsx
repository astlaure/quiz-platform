import React from 'react';

const SingleQuestion = () => {
    return (
        <div className="quiz-page-question">
            <h3 className="text-white mb-3">Couleur du cheval blanc de Napoleon?</h3>
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
        </div>
    )
}

export default SingleQuestion;