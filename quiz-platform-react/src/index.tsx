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
import AuthContextProvider from './components/AuthContextProvider';
import QuizContextProvider from './components/QuizContextProvider';

ReactDOM.render(
    <AuthContextProvider>
        <QuizContextProvider>
            <BrowserRouter>
                <Navbar/>
                <div className="hero" />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/create" component={QuizCreate} />
                    <Route path="/quiz/list" component={QuizList} />

                    <Route path="/quiz/:id/result" component={Result} />
                    <Route path="/quiz/:id" component={QuizPage} />
                    <Route path="/quiz" component={QuizGrid} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </QuizContextProvider>
    </AuthContextProvider>,
    document.getElementById('root')
)