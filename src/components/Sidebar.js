import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';

import '../css/Sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Sidebar() {
    return (
        <div>
            <ul class="navSidebar">
                <li class="mainNav"><HomeIcon class="mainIcon" style={{ fill: "white" }}/><Link to='/' class='main-nav'>Home</Link></li>
                <li><AccountCircleIcon class="mainIcon" style={{ fill: "white" }} /><Link to='/profile' class='main-nav'>Profile</Link></li>
                <li><SupervisorAccountIcon class="mainIcon" style={{ fill: "white" }} /><Link to='/following' class='main-nav'>Following</Link></li>
                <li><MoreHorizIcon class="mainIcon" style={{ fill: "white" }} /><Link to='/more' class="main-nav">More</Link></li>
            </ul>
        </div>
    );
}
