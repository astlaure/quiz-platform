import './assets/sass/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)