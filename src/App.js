"use strict";

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Homepage from './components/Homepage';

function App() {
    return (
        <Switch>
            <div className="app">
                <Route path="/" component={ Homepage } />
                <Route path="/profile"  component={ Profile } />
            </div>
        </Switch>
    );
}

export default App;



