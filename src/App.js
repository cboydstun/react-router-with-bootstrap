import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register'

import './style.scss'

export default function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <div className="container">
                    <Route exact path="/" component={Home}></Route>
                    <Redirect from="/home" to="/" />
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/register" component={Register}></Route>
                </div>
            </Router>
        </div>
    );
}
