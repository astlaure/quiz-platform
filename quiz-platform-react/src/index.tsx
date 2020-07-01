import './assets/sass/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QuizList from "./routes/QuizList";
import QuizGrid from "./routes/QuizGrid";
import QuizCreate from './routes/QuizCreate';
import QuizPage from './routes/QuizPage';
import About from './routes/About';
import Result from './routes/Result';

ReactDOM.render(
    <BrowserRouter>
        <Navbar/>
        <div className="hero" />
        <Switch>
            <Route path="/result" component={Result} />
            <Route path="/about" component={About} />
            <Route path="/page" component={QuizPage} />
            <Route path="/create" component={QuizCreate} />
            <Route path="/quiz/grid" component={QuizGrid} />
            <Route path="/quiz" component={QuizList} />
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)