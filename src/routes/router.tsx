import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import { Router, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
        </Router>
    );
};

export default AppRouter;
