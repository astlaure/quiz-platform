import React, { useState } from 'react';

const ChoiceForm = () => {
    const [state, setState] = useState({
        name: '',
        type: 'SINGLE'
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <div className="choice-form">
            <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                    />
                </div>
            </form>
        </div>
    )
}

export default ChoiceForm;