import React from 'react';

const Result = () => {
    return (
        <div className="result-component">
            <div className="container">
                <h1 className="text-center">Result</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <p className="score-text">Your score is: 69%</p>
                                <a href="#" className="btn btn-primary btn-lg w-50 mt-4">Play again</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;