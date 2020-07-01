import './assets/sass/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QuizList from "./routes/QuizList";
import QuizGrid from "./routes/QuizGrid";

ReactDOM.render(
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/quiz/grid" component={QuizGrid} />
            <Route path="/quiz" component={QuizList} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)