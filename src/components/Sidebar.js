import React from 'react';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';

import '../css/Sidebar.css';

import Home from './Home';
import Profile from './Profile';
import Following from './Following';
import Search from './Search';

export default function Sidebar() {
    return (
        <Router>
            <div>
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/home' class='main-nav'>Home</Link></li>
                            <li><Link to='/profile' class='main-nav'>Profile</Link></li>
                            <li><Link to='/following' class='main-nav'>Following</Link></li>
                            <li><Link to='/search' class='main-nav'>Search</Link></li>
                        </ul>
                    </nav>
                </div> 
            </div>
        </Router>
    );
}

/* ignore */