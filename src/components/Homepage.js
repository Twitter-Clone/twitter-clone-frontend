import React from 'react'

import '../App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function Homepage() {
    return (
        <div className="app">
                <Sidebar />
                <Feed />
        </div>
    );
}

export default Homepage;