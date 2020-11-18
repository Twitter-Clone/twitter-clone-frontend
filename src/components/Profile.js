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
    
    // componentWillMount() {

    // }

    // componentDidMount() {
    //     this.get_username();
    // }

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