import React, { Component } from 'react';

import Home from './components/Home';
import Profile from './components/Profile';
import Following from './components/Following';
import Search from './components/Search';

import Login from './components/Login';

import './css/main.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    return (
        <div>
            <main>
                <Switch>
                    <Route path='/' component={Login} exact />
                    <Route path='/home' component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/following' component={Following} />
                    <Route path='/search' component={Search} />
                </Switch>
            </main>  
        </div>
    )
}