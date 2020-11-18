import React, {Component} from 'react';

import Sidebar from '../components/Sidebar';
import Feed from '../components/middleware/Feed';


// export default function Home(){
//     return (
//         <>
//             <Sidebar />
//         </>
//     )
// }

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            users: []
        }
    }

    componentDidMount() {
        this.TweetList();
        this.UserList();
    }

    TweetList() {
        fetch('http://157.245.160.185:8000/tcapi/api/posts/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ tweets: data })
            console.log(data);
        })
        .catch(console.log);
    }

    UserList() {
        fetch('http://157.245.160.185:8000/tcapi/current_user/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: data })
        })
        .catch(console.log);
    }

    getUserById = (id) => this.state.users.find(({ userid }) => userid === id);

    render(){
        return (
            <>
            </>
        )
    }

}