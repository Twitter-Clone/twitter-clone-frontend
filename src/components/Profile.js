import React from 'react';

import Sidebar from '../components/Sidebar';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:''
        }
    }
    
    get_username() {
        
    }
    
    render() {
        return (
            <>
                <Sidebar />
                <h1>Profile</h1>
            </>
        )
    }
}