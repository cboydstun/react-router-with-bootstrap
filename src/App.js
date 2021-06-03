import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Register from './components/Register'

import './style.scss'

export default function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/register" component={Register}></Route>
            </Router>
        </div>
    );
}
