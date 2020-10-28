"use strict";

import React from 'react';
import '../css/Sidebar.css';

/* import from material */
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';

/* import components */
import SidebarOption from "./SidebarOption";

/* import router */
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">

            {/* Navigation Menu */}
            <SidebarOption active Icon={HomeIcon} text='Home'/>
            <Link to="/profile"><SidebarOption Icon={PersonIcon} text='Profile' /></Link>
            <SidebarOption Icon={GroupIcon} text='Following'/>
            <SidebarOption Icon={SearchIcon} text='Search' />

            {/* Button to Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
    );
}

export default Sidebar;
