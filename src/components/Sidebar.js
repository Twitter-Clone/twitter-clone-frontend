import React from 'react';
import {Link} from 'react-router-dom';

import '../css/Sidebar.css';

export default function Sidebar() {
    return (
        <nav>
            <ul>
                <li><Link to='/' class='main-nav'>Home</Link></li>
                <li><Link to='/profile' class='main-nav'>Profile</Link></li>
                <li><Link to='/following' class='main-nav'>Following</Link></li>
                <li><Link to='/search' class='main-nav'>Search</Link></li>
            </ul>
        </nav>
    );
}