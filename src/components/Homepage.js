import React from 'react'

import '../App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Header from './Header';

function Homepage() {
    return (
        <div className="app">
            <Sidebar />
            <Header />    
            <Feed />
        </div>
    );
}

export default Homepage;